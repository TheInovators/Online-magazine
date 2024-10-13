// function colorBlack(){
// document.body.style.background = "black";
// document.querySelectorAll('h1')[0].style.color = "white"
// document.querySelectorAll('h3').forEach(a=>a.style.color = "white");
// }
/* <button onclick="colorBlack()">Black</button> using in html file*/ 

const button = document.querySelector('button');
const bg_col =  document.querySelector('body');

button.addEventListener('click',() =>{
  let color = '#';
  color += Math.random().toString(16).slice(2,8);
  bg_col.style.backgroundColor = color ;
})
