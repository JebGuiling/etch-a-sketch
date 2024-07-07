main(16);

function main(size){
    const container = document.querySelector("#container");


    for (let i = 0; i < size; i++ ){
        const column = document.createElement("div");
        column.classList.add("column");
        for(let j = 0; j < size; j++){
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


}

const btn = document.querySelector("button");


btn.addEventListener("click", ()=>{
    const container = document.querySelector("#container");
    const column = document.querySelectorAll(".column");
        
    column.forEach((column)=>{
        container.removeChild(column);

    })
    let size = parseInt(prompt());
    main(size);
})






