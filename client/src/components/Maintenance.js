
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router";
import MaintenanceCard from "./MaintenanceCard";

function Maintenance({currentUser}) {
const [category, setCategory] = useState("")
const [comment, setComment] = useState("")
const [req, setReq] = useState([])

 // Fetching initial backend data
 
useEffect(() => {
  fetch("/requests")
  .then((r) => r.json())
  .then((data) => setReq(data))
      }, [])

    
  // Handle form submission

function handleSubmit(e) {
  e.preventDefault()
  const form = {
    category,
    comment,
    user_id: currentUser.id
  }

  const configurationObject = fetch('/requests', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
  fetch('/requests', configurationObject)
  .then((res) => res.json())
  .then(data => {
    console.log(data)
    setReq(data)
  })
}

// Handle delete

function handleDelete(cardId) {
  fetch(`/requests/${cardId}`, {
      method: 'DELETE'
  })
  fetch('/requests')
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    setTimeout(() => {
      setReq(data)
    }, '2000')
  })
 
}


      const renderReq = req.map((request) => {
        return (
        <MaintenanceCard
        currentUser={currentUser}
        handleDelete={handleDelete}
        key={request.id}
        category={request.category}
        request={request}

       
        />
        )

      })


    
  return (
    <div class="absolute align-start ml-72 pl-10 py-20 w-10/12 pr-20 bg-gray-200">  <>
    <div className="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 mb-4">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
            Post your maintenance requests
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <a href="/" className="font-medium text-blue-600 hover:text-blue-500">
              go back to the home page
            </a>
          </p>

        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
          <div class="inline-block relative w-64">
          <label
        for="comment"
        class="text-sm font-medium mt-4 text-gray-900 light:text-gray-100 ml-1"

      >Location:</label>
  <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
   value={category}
   onChange={(e) => setCategory(e.target.value)}>
     <option>Choose option</option>
    <option>Electrical and Lighting</option>
    <option>Parking</option>
    <option>Doors and Locks</option>
    <option>Elevator</option>
    <option>Common Areas</option>
    <option>Windows</option>
    <option>Patio and Outdoors</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 mt-6 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
            <div>
            <label
        for="comment"
        class="text-sm font-medium mt-4 text-gray-900 light:text-gray-100 ml-1"

      >Comment:</label>
              <input
                id="comment"
                name="comment"
                type="comment"
                className="appearance-none rounded-none h-20 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Please provide more detail..."
                value={comment}
onChange={(e) => setComment(e.target.value)}
               
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              </span>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="relative flex mt-4 items-center"> 
    <div class="flex-grow border-t border-gray-900 "></div>
</div>
    <div class="p-8">
    <h2 className=" text-center py-4 text-5xl tracking-tight font-bold bg-white text-gray-900">
            Maintenance Board
          </h2>
    <div class="grid grid-cols-3 gap-5 py-10 items-start bg-white">{renderReq}</div>
    </div>
    </div>

   
            <div>
              <label htmlFor="email-address" className="sr-only">
                Title
              </label>
              <input
                id="Location"
                name="Location"
                type="Location"
                autoComplete="Location"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Location on premises?"
                value={category}
      onChange={(e) => setCategory(e.target.value)}
        
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Author
              </label>
              <input
                id="comment"
                name="comment"
                type="Amazon Link"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none h-20 mt-4 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Please provide more detail..."
                value={comment}
onChange={(e) => setComment(e.target.value)}
               
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              </span>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
        {/* <div class="mb-10 text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Maintenance Request Form</div>
  <form onSubmit={handleSubmit}>
      <label
        for="countries"
        class="text-sm py-20 font-medium text-gray-900 light:text-gray-100"
        onSubmit={handleSubmit}
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
   
<label for="message" class="text-sm py-20 font-medium text-gray-900 light:text-gray-100">Details</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-white-100 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 " placeholder="Leave a comment..."
value={comment}
onChange={(e) => setComment(e.target.value)}
></textarea>
</form>
<button onSubmit={handleSubmit} type="button" class="text-white justify-center align-items mt-3 bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-1/5 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Post To Maintenance Board</button>
<p className="mt-10 text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Maintenance Board</p> */}
<div class="grid grid-cols-3 gap-5 py-10 items-start">{renderRequests}</div>
</div>
  

  );
}

export default Maintenance;


