import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Maintenance() {
    const [requests, setRequests] = useState([])
    const [category, setCategory] = useState("")
    const [comment, setComment] = useState("")
    const {id} = requests
    let navigate = useNavigate()

//GRABBING REQUESTS DATA FROM BACKEND
    useEffect(() => {
fetch("/requests")
.then((r) => r.json())
.then((data) => setRequests(data))
    })
// DELETE BUTTON
    function handleDelete() {
        fetch(`/requests/${id}`, { method: 'DELETE' })
        .then(() => console.log('Delete Successful'));
    }

// HANDLE POST METHOD FOR FORM

function handleSubmit(e) {
    e.preventDefault();
    fetch("/requests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: category,
          comment: comment,          
        }),
      })
      .then((res) => console.log(res)).then(navigate('/'))

console.log('hello')
};


    const renderRequests = requests.map((request) => {
        return (
            <div class="flex justify-center">
  <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">
          Category: {request.category}</h5>
      <p class="text-gray-700 text-base mb-4">
        Comment: {request.comment}
      </p>
      <button href="#" class="inline-flex mr-10 items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Like Request</button>
        <button href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700" onClick={handleDelete} >Mark as Completed</button>
       </div>
    <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
      Posted by: {request.user_id.username}
    </div>
  </div>
</div>
        )
    })



    
  return (
    <div class="absolute align-start ml-72 pl-20 py-20 w-10/12 pr-20 bg-gray-200">
        <div class="mb-10 text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Maintenance Request Form</div>
        <form value={comment}
      onChange={(e) => setComment(e.target.value)}>
      <label
        for="countries"
        class="text-sm py-20 font-medium text-gray-900 light:text-gray-100"
      >Catagory</label>
        <select
          id="categories"
          class="bg-gray-50 border border-gray-900 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Select a category"
          value={category}
      onChange={(e) => setCategory(e.target.value)}
          >
        <option>Select a category</option>
          <option>Elevators</option>
          <option>Lobby</option>
          <option>Doors and Locks</option>
          <option>Electrical and Lighting</option>
          <option>Parking</option>
          <option>Patio/Outdoors</option>
        </select>
        <div class=''>
<label for="message" class="text-sm py-20 font-medium text-gray-900 light:text-gray-100">Details</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-white-100 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 " placeholder="Leave a comment..."
value={comment}
onChange={(e) => setComment(e.target.value)}
></textarea>
</div>
<button type="button" class="text-white justify-center align-items mt-3 bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-1/5 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Post To Maintenance Board</button>
</form>
<p className="mt-10 text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Maintenance Board</p>
<div class="grid grid-cols-3 gap-5 py-10 items-start">{renderRequests}</div>
</div>
  
  );
}

export default Maintenance;
