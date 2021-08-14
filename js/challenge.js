

// variables
let counter = 0
const pauseBtn = document.querySelector('#pause')
const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')
const likeBtn = document.querySelector('#heart')
let counterH1 = document.querySelector('#counter')
const ul = document.querySelector('.likes')
let submitForm = document.querySelector('#comment-form')
let li
let clickCount = 0
let timeInterval


// main loop
document.addEventListener('DOMContentLoaded', e => {
    pauseBtn.addEventListener('click', e => disabledBtns())
    plusBtn.addEventListener('click', e => increaseTime())
    minusBtn.addEventListener('click', e => decreaseTime())

    submitForm.addEventListener('submit', e => addComment(e))

    likeBtn.addEventListener('click', e => {
       
        li.textContent = `${counter} has been like ${++clickCount} time`

        ul.appendChild(li)
    })
    
    timeInterval = setInterval(timerStart, 1000)
})

function increaseTime() {
    counterH1.textContent = `${++counter}`
}

function decreaseTime() {
    counterH1.textContent = `${--counter}`
}

function disabledBtns() {
    if (likeBtn.disabled === true) {
        likeBtn.disabled = false
        plusBtn.disabled = false
        minusBtn.disabled = false
        pauseBtn.textContent = 'pause'
        timeInterval = setInterval(timerStart, 1000)
    } else {
        likeBtn.disabled = true
        plusBtn.disabled = true
        minusBtn.disabled = true
        pauseBtn.textContent = 'play'
        clearInterval(timeInterval)
    }
}

function timerStart() {
    li = document.createElement('li')
    counterH1.textContent = `${++counter}`
    clickCount = 0
}


function addComment(e) {
    e.preventDefault()

    const command = document.getElementById('comment-input').value
    if (command !== '') {
            const p = document.createElement('p')
            p.textContent = command

            document.querySelector('.comments').appendChild(p)
        }
    submitForm.reset()
}