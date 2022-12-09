const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const submitBtn = document.querySelector('#submit')
const panel = document.querySelector('#panel')
let selectedRating = '5'

// Find out which rating was selected
ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    } else if(
        e.target.parentNode.classList.contains('rating')
    ) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.innerHTML
    }
})

// Once 'Submit' button is pressed, show the 'Thank you' panel
submitBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <img src="./images/illustration-thank-you.svg">
        <p id="thank-you">You selected ${selectedRating} out of 5</p>
        <h1>Thank You!</h1>
        <br>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>
    `
})

// Utility function to remove the 'active' class from ratings
function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}