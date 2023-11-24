const conversion = document.querySelector('[data-submit]')
const results = document.querySelector('#output') 

function value (){
    let minutes = document.getElementById('minutes').value
    let seconds = minutes * 60
    results.textContent = seconds.toFixed(2)
}

conversion.addEventListener('click',value)