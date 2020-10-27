 const fadeoutEffect = () => {
 
    let fadeOut = document.querySelector('.input-form')


   let fadeEffect = setInterval(function () {
         if (!fadeOut.style.display) {
            fadeOut.style.display = 'none'
            document.querySelector('.la-timer').style.display = 'block'
       }   
         if (fadeOut.style.display) {
            fadeOut.style.display = 'none'
             
        }  else {
            clearInterval(fadeEffect)
             
       }
        

   }, 200) 

 }


//LOCAL STORAGE

 function setCuisine() {
        localStorage.setItem('cuisine',JSON.stringify(document.querySelector('#cuisine').value))
 
}


 export {fadeoutEffect , setCuisine}