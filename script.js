const container = document.querySelector(".container")

const grid=(numberOfGrids)=>{
    container.innerHTML=""
    const size = 512
    for (let index = 0; index < numberOfGrids*numberOfGrids; index++) {
    const square = document.createElement("div")
    square.classList.add("square")
    const height = size / numberOfGrids
    const width = size / numberOfGrids
    square.style.height=`${height}px`
    square.style.width=`${width}px`
    container.appendChild(square)    
    const squares = document.querySelectorAll(".square")
    squares.forEach((square)=>{
        square.addEventListener("mouseenter" ,()=>{
            square.style.backgroundColor="darkblue"
        })
    })
}}

grid(16)



const resetButton = document.querySelector(".reset")
resetButton.addEventListener("click",()=>{
    const squares = document.querySelectorAll(".square")
    squares.forEach((square)=>{
        square.style.backgroundColor="blue"
    })
})