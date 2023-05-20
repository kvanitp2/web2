const containers = document.querySelectorAll('.container')
const btn = document.querySelector('.box-btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    containers[0].classList.remove('active')
    containers[1].classList.add('active')
})