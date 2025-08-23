const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
let count = document.querySelector('.count')
let input = document.querySelector('.myinput')
const reset = document.querySelector('.reset')




reset.addEventListener('click',()=>{
    count.innerText = 0
})    

plus.addEventListener('click', ()=>{
    let a = parseInt(count.innerText)
    let b = +input.value
    count.innerText=a + b
})
minus.addEventListener('click', ()=>{
      let a = parseInt(count.innerText)
    let b = +input.value
    count.innerText=a - b
})