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
  .then(data => setReq(data))
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
        handleDelete={handleDelete}
        key={request.id}
        category={request.category}
        request={request}

       
        />
        )

      })

  return (
    <div class="absolute align-start ml-72 pl-10 py-10 w-10/12 pr-20">  
    
    <div className="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 mb-4">
      <div class="max-w-md w-full bg-gray-300 p-8 text-center tracking-tight font-bold text-gray-900 space-y-8 mr-40">
    <div class="max-w-md w-full bg-gray-300 p-8 text-center text-5xl tracking-tight font-bold text-gray-900 space-y-8 mr-40">Maintenance Inquiries</div>
    <div src="https://png.clipart.me/istock/previews/5017/50178358-work-symbol-hand-wrench-drawing.jpg" alt="wrench"></div>
    <div class="font-semibold">Chances are, at some point during your lease term, you’ll need to submit a maintenance request. We've created this page in order to submit requests for our maintenance team and other tenants in the building to review. If an issue has been resolved, please click "Mark as Completed" to remove from the board.</div>
    </div>
    
      <div className="max-w-md w-full bg-gray-300 p-8 space-y-8">
        <div>
        <h2 className="text-center text-5xl tracking-tight font-bold text-gray-900">
            Maintenance Postings
          </h2>
          <h2 className="mt-6 text-center text-xl tracking-tight font-bold text-gray-900">
            Post your maintenance requests here
          </h2>
         
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
          <div class="inline-block relative w-64">
          <label
        for="comment"
        class="text-sm font-medium mt-4 text-gray-900 light:text-gray-100"

      >Location:</label>
  <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
   value={category}
   onChange={(e) => setCategory(e.target.value)}>
    <option>Electrical and Lighting</option>
    <option>Parking</option>
    <option>Doors and Locks</option>
    <option>Elevator</option>
    <option>Common Areas</option>
    <option>Windows</option>
    <option>Patio and Outdoors</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
            <div>
            <label
        for="comment"
        class="text-sm font-medium mt-4 text-gray-900 light:text-gray-100"

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
    <div class="bg-gray-300 p-8">
    <h2 className="mt-6 text-center text-5xl tracking-tight font-bold text-gray-900">
            Maintenance Board
          </h2>
    <div class="grid grid-cols-3 gap-5 py-10 items-start">{renderReq}</div>
    </div>
    </div>

    
  );
}

export default Maintenance;


