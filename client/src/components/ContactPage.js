import React from "react";
import { BsBuilding } from "react-icons/bs";

function ContactPage() {
  return (
    <section class="ml-40 pl-20 h-full gradient-form bg-gray-200 md:h-screen">
  <div class="container py-12 px-6 h-full">
    <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div class="xl:w-10/12">
        <div class="block bg-white shadow-lg rounded-lg">
          <div class="lg:flex lg:flex-wrap g-0">
            <div class="lg:w-6/12 px-4 md:px-0">
              <div class="md:p-12 md:mx-6">
                <div class="text-center">
                <BsBuilding 
                    size={70} 
                    className="mx-auto w-48" 
                    />
                  
                  <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">We are Suite Management</h4>
                </div>
                <form>
                  <p class="mb-4">Need to get in contact?</p>
                  <div class="mb-4">
                    <input
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Full Name"
                    />
                  </div>
                  <div class="mb-4">
                    <textarea
                      type="text"
                      class="form-control block h-40 w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Message"
                    />
                  </div>
                  <div class="text-center pt-1 mb-12 pb-1">
                    <button
                      class="bg-gray-900 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                      type="button"
                      
                    >
                      Submit inquiry
                    </button>
                    <a class="text-gray-500" href="#!">We are here to help!</a>
                  </div>
                  <div class="flex items-center justify-between pb-6">
                   
                  </div>
                </form>
              </div>
            </div>
            <div
              class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
              
            >
              <div class="text-black px-4 py-6 md:p-12 md:mx-6 h-full w-full ">
                <h4 class="text-xl font-semibold mb-6">New York City Office</h4>
                <p class="text-sm mb-20">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
                <h4 class="text-xl font-semibold mb-6 mt-20">Los Angeles Office</h4>
                <p class="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default ContactPage;

