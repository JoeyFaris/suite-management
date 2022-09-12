import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MyLease() {
    const  [lease, setLease] = useState([])

    useEffect(() => {
        fetch(`/leases/${lease.id}`)
        .then((res) => res.json())
        .then((data) => setLease(data))
    }, [])

console.log(lease)


const [imageUrl, setImageUrl] = useState();
const [file, setFile] = useState();

function handleImageChange(e) {
  setFile(e.target.files[0])
  console.log(e.target.files[0])
}

function uploadAddendum(e) {
  e.preventDefault();
  const formData = new FormData();
  formData.append('image', file);

  fetch('/upload', {
    method: 'POST',
    body:formData,
  })
    .then((res) => res.json())
    .then(json => setImageUrl(`/${json.url}`));
}

    return (
        <div class="absolute align-start ml-72 pl-20 py-20 w-10/12 pr-20 h-full bg-gray-200">
        <div class="mb-10 text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Your Lease and Addendums</div>
        <div class="text-2xl mb-6">Upload your lease or addendum:</div>
        <form class="mt-4"onSubmit={uploadAddendum}>
        <label htmlFor="file">File: {''}</label>
        <input type="file" name="PDF" onChange={handleImageChange}></input>
        <button class="flex mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">Upload</button>
        </form>
        <span class="w-full p-0.5 bg-purple-600 lg:w-full"></span>
        <div class="realtive grid grid-cols-3 gap-4">
        <div class="mt-10">{lease ? <><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNvcknbJ9tvblntXnB51-4l7byqplzXibTA&usqp=CAU" alt="Lease"/>  <a href={lease.pdf}  class="mt-4 inline-flex mr-20 items-center py-3 px-5 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700" download>Click to download</a></> : ' '}</div>
        <div> { imageUrl ? <><img class="mt-10"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNvcknbJ9tvblntXnB51-4l7byqplzXibTA&usqp=CAU" alt={imageUrl}/><a href={lease}  class="mt-4 inline-flex mr-20 items-center py-3 px-5 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700" download>Click to download</a></>  : '' }</div>

        </div>
</div>
    )
}