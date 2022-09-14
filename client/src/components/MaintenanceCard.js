import React, {useState} from "react"


function MaintenanceCard({request, handleDelete, currentUser}) {
    const [complete, setCompleted] = useState(false)


    function reallyDelete() {
        setCompleted(!complete)
        handleDelete(request.id)
      }
console.log(currentUser)
console.log(request.user.username)


    return (
        
        <div class="grid justify-center">
        <div class="block rounded-lg shadow-xl hover:shadow-2xl bg-white max-w-sm text-center">
          <div class="p-6">
            <h5 class="text-gray-900 text-2xl font-medium mb-2">
                {request.category}</h5>
            <p class="text-gray-900 text-base mb-4">
              Comment: {request.comment}
            </p>
            {currentUser.username === request.user.username ?
           !complete ? 
              <button href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-blue-300 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-800 dark:text-white dark:border-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:focus:ring-blue-700" onClick={reallyDelete} >Mark as Completed</button> 
              :
              <button href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-blue-300 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-800 dark:text-white dark:border-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:focus:ring-blue-700" onClick={handleDelete} >Completed!</button> 
              
              :
              <button href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 "  >Can't complete others posts</button> 
              }
             </div>
          <div class="py-3 px-6 border-t border-gray-900 text-gray-600">
              {request.user.username ? `Posted by: ${request.user.username}` : false }
            
          </div>
        </div>
      </div>
    
    )
}

export default MaintenanceCard