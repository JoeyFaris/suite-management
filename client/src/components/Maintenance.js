import React from "react";

function Maintenance() {
  return (
    <div class="absolute ml-80 pl-20 py-20 bg-gray-100">
        <div class="text-3xl pb-3">Maintenance Request Form</div>
      <label
        for="countries"
        class="text-sm py-20 font-medium text-gray-900 light:text-gray-100"
      >Select a catagory</label>
        <select
          id="countries"
          class="bg-gray-50 border border-gray-100 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Select a category"
          >
        <option>Select a category</option>
          <option>Elevators</option>
          <option>Lobby</option>
          <option>Doors and Locks</option>
          <option>Electrical and Lighting</option>
          <option>Parking</option>
          <option>Patio/Outdoors</option>
        </select>
        <div class='relative'>
<label for="message" class="block mb-2 mt-3 text-sm font-medium text-gray-900 dark:text-gray-400">Details</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
</div>
<button type="button" class="text-white justify-center align-items mt-3 bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Default</button>
    </div>
    
  );
}

export default Maintenance;
