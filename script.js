
const container = document.querySelector("#container");
for (let i = 0; i < 16; i++ ){
    const column = document.createElement("div");
    column.classList.add("column");
    for(let j = 0; j < 16; j++){
        const square = document.createElement("div");
        square.classList.add("square");

        column.appendChild(square);

    }

    container.appendChild(column);
}
const squares = document.querySelectorAll(".square");

squares.forEach((square)=>{
    square.addEventListener("mouseover", () =>{
        square.style.backgroundColor = "black";
    })

})
