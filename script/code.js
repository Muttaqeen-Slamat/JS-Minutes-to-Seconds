
//creating const variables for output and button
const conversion = document.querySelector('[data-submit]')
const results = document.querySelector('#output') 

//function
function value (){
    let minutes = document.getElementById('minutes').value
    let seconds = minutes * 60
    //toFixed is so there is 2 decimal places if needed 
    results.textContent = seconds.toFixed(2)
}
//button to do conversion and apply function
conversion.addEventListener('click',value)