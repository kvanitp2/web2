const containers = document.querySelectorAll('.container')
const btn = document.querySelector('.box-btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    containers[0].classList.remove('active')
    containers[1].classList.add('active')
    start()
})

function start() {
    let amount = document.querySelector('.box-input').value
    if (!amount || !parseInt(amount)) {
        amount = 400
    } else if (amount < 200) {
        amount = 400
    } else if (amount > 800) {
        amount = 800
    }
    amount = parseInt(amount)
    const board = document.querySelector('.board')
    const colors = ['blue', 'red', 'green', 'violet', '#494930', '#948204', '#d9f922', '#f9a3a3']
    for (let i = 0; i < amount; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        square.addEventListener('mouseover', () => {
            setColor(square)
        })
        square.addEventListener('mouseleave', () => {
            removeColor(square)
        })
        board.append(square)
    }
    function randomColor() {
        const index = Math.floor(Math.random() * colors.length)
        return colors[index]
    }

    function setColor(el) {

    }
    function removeColor(el) {

    }
}

