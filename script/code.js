const conversion = document.querySelector('[data-submit]')
const results = document.querySelector('#output') 

function value (){
    let miniutes = document.getElementById('minutes').value
    let seconds = miniutes * 60
    results.textContent = seconds.toFixed(2)
}

conversion.addEventListener('click',value)