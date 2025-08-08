const container = document.querySelector(".container")

const grid=(numberOfGrids)=>{
    container.innerHTML=""
    const sizeGrid = 512
    for (let index = 0; index < numberOfGrids*numberOfGrids; index++) {
    const square = document.createElement("div")
    square.classList.add("square")
    const height = sizeGrid / numberOfGrids
    const width = sizeGrid / numberOfGrids
    square.style.height=`${height}px`
    square.style.width=`${width}px`
    container.appendChild(square)    
    square.hoverCount = 0
    //Basic 
    // square.addEventListener("mouseover", () => {
    //         square.style.backgroundColor = "#2d3436";
    //     })

    // rainbowcolor
    // square.addEventListener("mouseover", () => {
    //         const randomColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    //         square.style.backgroundColor = randomColor;
    //     })
    
    //opacity
    square.addEventListener("mouseover", () => {
            if(square.hoverCount < 10) square.hoverCount +=1
            let opacity = square.hoverCount/10
            square.style.backgroundColor = `rgba(45,52,54 , ${opacity})`;
        })
}}
grid(16)



const resetButton = document.querySelector(".reset")
resetButton.addEventListener("click",()=>{
    const squares = document.querySelectorAll(".square")
    squares.forEach((square)=>{
        square.style.backgroundColor=""
    })
})

const changeGrid = document.querySelector(".change-grid")
changeGrid.addEventListener("click",()=>{
    const sizeGrid = parseInt(prompt("Enter the number of grid sided like (16,17,18,....,100)",16))
    if(isNaN(sizeGrid) ||sizeGrid<4 || sizeGrid>100)
    {
        alert("please enter a valid number between 4 and 100")
    }
    grid(sizeGrid)
})