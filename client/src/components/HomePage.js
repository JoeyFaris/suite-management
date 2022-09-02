import React from "react";


function HomePage() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1a3ef7e2a6msh37681d59318872ep145809jsn7ce65add9101',
      'X-RapidAPI-Host': 'reuters-business-and-financial-news.p.rapidapi.com'
    }
  };
  
  fetch('https://reuters-business-and-financial-news.p.rapidapi.com/article-date/01-04-2021', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    let today = new Date();
    let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();
  
 
  return (
    <div class="absolute ml-80 pl-20 py-20">
      <div class='italic hover:not-italic p-1'>{date}</div>
      <h3 className="relative justify-center italic hover:not-italic text-3xl p-1">Welcome, Joey Faris!</h3>
      <div className="relative justify-center py-10">Quick Links</div>
      <div className="relative justify-center">Hello</div>
      <div className="relative justify-center">Hello</div>
    </div>
  );
}

export default HomePage;
