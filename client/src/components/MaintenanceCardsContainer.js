import React, {useState} from "react";
import MaintenanceCard from "./Maintenance";

function MaintenanceCardsContainer() {
  const [cards, setCards] = useState([])

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '1a3ef7e2a6msh37681d59318872ep145809jsn7ce65add9101',
  //     'X-RapidAPI-Host': 'reuters-business-and-financial-news.p.rapidapi.com'
  //   }
  // };
  
  // fetch('https://reuters-business-and-financial-news.p.rapidapi.com/article-date/01-04-2021', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));


//   const renderCards = cards.map((card) => {
// return (
//   <MaintenanceCard 
//   key={card.id}
//   card={card}
//   />
// )
//   })


  return (
    <div class="py-6 bg-green-500 bg-auto">
    
        
       {/* {renderCards} */}
       
      
       </div>
  );
}

export default MaintenanceCardsContainer;
