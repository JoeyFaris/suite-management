import React from "react";


function HomePage() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1a3ef7e2a6msh37681d59318872ep145809jsn7ce65add9101',
            'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
        }
    };
    
    fetch('https://us-real-estate.p.rapidapi.com/v2/property-detail?property_id=3199790641', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

 
  return (
    <div class="flex ml-40 justify-center items-center py-20">
      <div className="flex justify-center">Hello</div>
      <div className="flex justify-center">Hello</div>
      <div className="flex justify-center">Hello</div>
      <div className="flex justify-center">Hello</div>
    </div>
  );
}

export default HomePage;
