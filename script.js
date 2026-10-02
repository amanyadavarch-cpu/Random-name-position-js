let btn = document.querySelector("button");
let main = document.querySelector("main");


let arr = ["Aman", "Kunal", "prakhar", "Nyn", "Anurag"];

function rgb(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    return `rgb(${r},${g},${b})`;
}

function randomPositon(element){
    let maxX = main.clientWidth - element.offsetWidth;
    let maxY = main.clientHeight - element.offsetHeight;

    let x = Math.floor(Math.random()*maxX);
    let y = Math.floor(Math.random()*maxY);

    element.style.left = x + "px";
    element.style.top = y + "px";
}


btn.addEventListener('click', ()=>{
    let h1 = document.createElement('h1');
    h1.textContent = arr[Math.floor(Math.random()*arr.length)];
    h1.style.color = rgb();


    
    main.append(h1);

    randomPositon(h1);

})