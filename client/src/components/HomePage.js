import React, { useEffect, useState } from "react";
import {BsCreditCard, BsHeadset} from 'react-icons/bs'
import { BiWrench } from 'react-icons/bi'
import { AiOutlineFile} from 'react-icons/ai'

function HomePage({currentUser}) {
  const [data, setData] = useState([])

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const d = new Date();
let date =  monthNames[d.getMonth()] + ' ' + d.getDate() + 'th, ' + d.getFullYear()

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1a3ef7e2a6msh37681d59318872ep145809jsn7ce65add9101',
		'X-RapidAPI-Host': 'current-news.p.rapidapi.com'
	}
};
useEffect(() => {
fetch('https://current-news.p.rapidapi.com/news/technology', options)
	.then(response => response.json())
	.then(response => setData(response.news))
	.catch(err => console.error(err));
}, [])



    const renderBusinessData = data.map((news) => {
     if (news.urlToImage !== null) {
    return (
       <div class="p-6">  
    <div class="max-w-sm rounded overflow-hidden shadow-2xl shadow-black">
      <img class="w-full" src={news.urlToImage} alt="Mountain"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{news.title}</div>
        <p class="text-gray-700 text-base">
          {news.description}
        </p>
        <div class='pt-4 text-lg font-bold'>Author: {news.author ? news.author : "No author available"}</div>
      </div>
      <div class="px-6 pb-2">
        <a href={news.url} class="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Go to source →</a>
      </div>
    </div>
  </div> 
    )
    
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1a3ef7e2a6msh37681d59318872ep145809jsn7ce65add9101',
      'X-RapidAPI-Host': 'reuters-business-and-financial-news.p.rapidapi.com'
    }
  };
  
//  useEffect(() => {
//   fetch('https://reuters-business-and-financial-news.p.rapidapi.com/article-date/01-04-2021', options)
//     .then(response => response.json())
//     .then(response => setData(response))
//     .catch(err => console.error(err));
//  }, [])


    }
    else {
      return false
    }

//     const newsArticles = data.splice(0,11)
//    console.log(newsArticles)

//   const renderBusinessData = newsArticles.map((news) => {
//     return (
//       <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
//   <a href="#">
//       <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{news.articlesName}</h5>
//   </a>
//   <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{news.articlesShortDescription}
// </p>
//   <a href={news.urlSupplier} class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//       Go to source
//       <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//   </a>
// </div>
//   )
//   })

  
  
  })
 
  return (

    <div class="absolute ml-72 pl-40 py-20 h-full w-full">
    <div class='italic hover:not-italic p-1'>{date}</div>
    <h3 class="relative justify-center italic hover:not-italic text-2xl p-1">Welcome back, {currentUser.username}!</h3>
    <div class="text-4xl text:bold relative justify-center py-10">Quick Links</div>
      <div>
       <a href="/paymentsandbalances" class="inline-flex mr-20 items-center py-3 px-5 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"><BsCreditCard size={26} className="curpr-pointer mr-3"/>Payments and Balances</a>
       <a href="/mylease" class="inline-flex mr-20 items-center py-3 px-5 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"><AiOutlineFile size={26} className="curpr-pointer mr-3"/>My Lease</a>
       <a href="/maintenance" class="inline-flex mr-20 items-center py-3 px-5 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"><BiWrench size={26} className="curpr-pointer mr-3"/>Maintenance Board</a>
       <a href="/contactpage" class="inline-flex mr-20 items-center py-3 px-5 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"><BsHeadset size={26} className="curpr-pointer mr-3"/>Contact Us</a>
      
      </div>
      <p class="text-5xl mt-16 lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Recent Business News</p>
      <div class="relative flex py-5 mt-4 items-center"> 
    <div class="flex-grow border-t border-gray-400 mr-96"></div>
</div>
      <div class="grid grid-cols-3 gap-8 mr-96">{renderBusinessData}</div>

    <div class="absolute ml-72 pl-40 py-20 h-full w-full bg-gray-200">
      <div class='italic hover:not-italic p-1'>{date}</div>
      <h3 className="relative justify-center italic hover:not-italic text-3xl p-1">Welcome, {currentUser.username}!</h3>
      <div className="relative justify-center py-10">Quick Links</div>
      <div>
       <a href="/paymentsandbalances" class="inline-flex mr-20 items-center py-3 px-5 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"><BsCreditCard size={26} className="curpr-pointer mr-3"/>Payments and Balances</a>
       <a href="#" class="inline-flex mr-20 items-center py-3 px-5 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"><AiOutlineFile size={26} className="curpr-pointer mr-3"/>My Lease</a>
       <a href="/maintenance" class="inline-flex mr-20 items-center py-3 px-5 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"><BiWrench size={26} className="curpr-pointer mr-3"/>Maintenance Board</a>
       <a href="/contactus" class="inline-flex mr-20 items-center py-3 px-5 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"><BsHeadset size={26} className="curpr-pointer mr-3"/>Contact Us</a>
      
      </div>
      <p className="text-5xl mt-16 lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Recent News</p>
      {/* <div className="grid grid-cols-3 gap-20 mt-10 mr-96  ">{renderBusinessData}</div> */}

    </div>
  );
}

export default HomePage;

