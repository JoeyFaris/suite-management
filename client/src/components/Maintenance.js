import React, {useState, useEffect} from "react";
import MaintenanceCard from "./MaintenanceCard";

function Maintenance() {
const [category, setCategory] = useState("")
const [comment, setComment] = useState("")
const [req, setReq] = useState([])

function handleSubmit(e) {
  e.preventDefault()
  console.log("Hello")
  const form = {
    category,
    comment
  }

  fetch('/requests', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
}

useEffect(() => {
  fetch("/requests")
  .then((r) => r.json())
  .then((data) => setReq(data))
      }, [])

      const renderReq = req.map((request) => {
        return (
        <MaintenanceCard
        key={request.id}
        category={request.category}
        request={request}
        />
        )

      })



  return (
    <div class="absolute align-start ml-72 pl-10 py-10 w-10/12 pr-20">  
    <div className="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 mb-4">
      <div className="max-w-md w-full bg-gray-300 p-8 space-y-8">
        <div>
        <h2 className=" text-center text-5xl tracking-tight font-bold text-gray-900">
            Maintenance Board
          </h2>
          <h2 className="mt-6 text-center text-2xl tracking-tight font-bold text-gray-900">
            Post your maintenance requests
          </h2>
         
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
            <label
        for="countries"
        class="text-sm py-20 mb-4 font-medium text-gray-900 light:text-gray-100"
    
      >Location:</label>
              <input
                id="Location"
                name="Location"
                type="Location"
                autoComplete="Location"
                required
                className="mb-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Please describe the location..."
                value={category}
      onChange={(e) => setCategory(e.target.value)}
        
              />
            </div>
            <div>
            <label
        for="comment"
        class="text-sm font-medium mt-4 text-gray-900 light:text-gray-100"

      >Comment:</label>
              <input
                id="comment"
                name="comment"
                type="Amazon Link"
                autoComplete="current-password"
                required
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
            Maintenance Postings
          </h2>
    <div class="grid grid-cols-3 gap-5 py-10 items-start">{renderReq}</div>
    </div>
    </div>

    
  );
}

export default Maintenance;


