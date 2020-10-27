'use strict'

  import {
    searchApi,
    googleMap
  
} from './module/result.js'  


import {
    fadeoutEffect,
    setCuisine
  
} from './module/fadeout.js'


import {
    displayRestaurants
 
   
} from './module/display.js'



googleMap()

//GLOBAL CONSTANTS

const prevBtn = document.querySelector('.prev'),

    city = document.querySelector('#search-term').value = '',

    currentCuisine = JSON.parse( localStorage.getItem('cuisine')), // LOCAL STORAGE

    cuisine = document.querySelector('#cuisine').value




// SUBMIT BUTTON

     document.querySelector('form').addEventListener('submit', async event => {

        event.preventDefault()
     
        fadeoutEffect()
  
        let dataJson = await searchApi(city, cuisine) 
      
        displayRestaurants(dataJson)

        errorMessage(dataJson)
       
        prevBtn.style.visibility = 'visible'

        chartRestaurant()

         setCuisine()
               
      
    })




function errorMessage(dataJson) {

    let modal = document.querySelector('.modal')
 
    if (dataJson < 1) {  
    modal.classList.toggle('show-modal')
    } 
    
    document.querySelector('.close-button').addEventListener('click', e => {
       
  
        modal.classList.remove('show-modal')
    } )
}


// TO RELOAD THE PAGE

prevBtn.addEventListener('click', () => {
    document.querySelector('#search-term').value = ''
    document.querySelector('#cuisine').value = currentCuisine
    window.location.reload()
        
}) 


//CHART
 async function chartRestaurant() {
  
   
    const ctx = document.getElementById('barChart');
    let resultJson = await searchApi(city)
    let itemName = []
    let itemRate = []
    for (let i = 0; i < resultJson.length; i++) {
        let restaurantName = resultJson[i].restaurant.name
        let restaurantRating = resultJson[i].restaurant.user_rating.aggregate_rating

        itemName.push(restaurantName)
        itemRate.push(restaurantRating)

    }
        const myChart = new Chart(ctx, {
             
            type: 'bar',
            data: {
            
                labels: itemName,
                datasets: [{
                    label: 'rate Restaurants',
                    data: itemRate,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgb(255, 99, 132)',
                        'rgba(255, 99, 132, 0.23)',
                        'rgba(54, 162, 235, 0.21)',
                        'rgba(255, 206, 85, 0.2)',
                        'rgba(75, 192, 192, 0.23)',
                        'rgba(153, 102, 254, 0.2)',
                        'rgba(255, 159, 63, 0.2)',
                        'rgb(252, 97, 132)',
                        'rgba(255, 99, 133, 0.2)',
                        'rgba(54, 162, 234, 0.2)',
                        'rgba(255, 206, 87, 0.2)',
                        'rgba(75, 192, 190, 0.2)',
                        'rgba(153, 102, 252, 0.2)',
                        'rgba(255, 159, 65, 0.2)',
                        'rgb(255, 95, 132)'
                         
                    ],
                  
                    borderWidth: 1
                }]
            }
          
        })
   
}



