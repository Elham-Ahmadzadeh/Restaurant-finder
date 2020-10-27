

  
let latitude  = document.getElementById('cityLat').value
let longitude = document.getElementById('cityLng').value

const googleMap = () => {
    
    let searchCity = document.getElementById('search-term')
    
    let autocomplete = new google.maps.places.Autocomplete((searchCity), {
        types: ['geocode']
     
    })
 
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            let near_place = autocomplete.getPlace()
            
            latitude  = near_place.geometry.location.lat()
            
            longitude = near_place.geometry.location.lng()        
         
        })
    
   
    
} 


  
/* IF WE FACE CORS PROBLEM WE CAN PUT THIS URL IN THE BASEURL https://cors-anywhere.herokuapp.com/  */
    const baseUrl = 'https://developers.zomato.com/api/v2.1/search'
    const options = {
        headers: new Headers({
            'user-key': 'a573f79888c882ab54b3f22d1b68c8cd',
              'Accept': 'application/json' 
        })
    }

    //SEARCH API
async function searchApi(city, cuisine) {
    const urlParams = {
            q: city,
            lat: latitude,
            lon: longitude,
            cuisines: cuisine
        }
  
//console.log(urlParams)
/* https://attacomsian.com/blog/javascript-convert-object-to-query-string-parameters */
   

    
    function formatingUrlParams(urlParams) {
        let stringObj = Object.keys(urlParams).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(urlParams[key])}`).join('&')
        return stringObj
    }

    let stringUrl = formatingUrlParams(urlParams)
       
    const newUrl = `${baseUrl}?${stringUrl}`

    let resp = await fetch(newUrl, options)
      
    let result = await resp.json()
  
        return result.restaurants  
 
}
   

 export {searchApi, googleMap} 