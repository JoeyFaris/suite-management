import React, {useState} from "react"
import {FcLike, FcLikePlaceholder} from 'react-icons/fc'

function MaintenanceCard({request, handleDelete}) {
    const [like, setLike] = useState(false)
    const [complete, setCompleted] = useState(false)
 
   


    function handleDelete() {
        setCompleted(!complete)
        console.log(request.id)
        fetch(`/requests/${request.id}`, {
            method: 'DELETE'
        })
        .then((r) => r.json())
  
  
        .then(res => {
            if(res.ok){
                console.log(res)
            } else {
                res.json().then(console.log)
            }
        })
    }

    function handleLike(e) {
        e.stopPropagation()
        setLike(!like)
    }

    return (
        <div >
        <div class="flex justify-center">
        <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
          <div class="p-6">
            <h5 class="text-gray-900 text-2xl font-medium mb-2">
                {request.category}</h5>
            <p class="text-gray-900 text-base mb-4">
              Comment: {request.comment}
            </p>
            {like ? <FcLike class="inline-flex items-center mr-20" onClick={handleLike}></FcLike> : <FcLikePlaceholder class="inline-flex items-center mr-20" onClick={handleLike}>Like?</FcLikePlaceholder>}
              {!complete ? 
              <button href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700" onClick={handleDelete} >Mark as Completed</button> 
              :
              <button href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700" onClick={handleDelete} >Completed!</button> 
             
              }
             </div>
          <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
              {request.user.username ? `Posted by: ${request.user.username}` : 'Hello'}
            
          </div>
        </div>
      </div>
      </div>
    )
}

export default MaintenanceCard