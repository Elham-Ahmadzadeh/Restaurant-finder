

export const displayRestaurants = (dataJson) => {

    let resultItems = document.querySelector('#result-items')
    resultItems.innerHTML = ''


    document.querySelector('.la-timer').style.display = 'none' 
  
   // console.log(dataJson[0].restaurant )

    for (let i = 0; i < dataJson.length; i++) {
        
        let liEl = document.createElement('li')
        liEl.classList.add('searchContainer')
       
        resultItems.appendChild(liEl)
        liEl.innerHTML = `  <li class="fields">
                        <img class="itemPhoto" src="${dataJson[i].restaurant.featured_image}" alt="">
                        <h2 class="name">${dataJson[i].restaurant.name}</h2>
                        <h3 class = "rating">${dataJson[i].restaurant.user_rating.aggregate_rating} / 5 Stars</h2>
                       
                        <h3 class = "rating">${dataJson[i].restaurant.user_rating.rating_text}</h2>
                        <h3 class = "input results"> 
                        Average cost for two: 
                        ${dataJson[i].restaurant.average_cost_for_two}
                        ${dataJson[i].restaurant.currency}
                        </h3>
                        <h3 class = "input results">${dataJson[i].restaurant.location.address}</h3>
                         <a class="restaurantWeb" href="${dataJson[i].restaurant.url}">Website
                       </a>
                    </li>`
    }


}







   



