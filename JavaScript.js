const container = document.querySelector(".container");
console.log(container);
window.onmousemove = e=>{
let x = e.clientX/30;
let y = e.clientY/30;
container.style.backgroundPositionX = x + "px";
container.style.backgroundPositionY = y + "px";
}
