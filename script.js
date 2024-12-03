// function colorBlack(){
// document.body.style.background = "black";
// document.querySelectorAll('h1')[0].style.color = "white"
// document.querySelectorAll('h3').forEach(a=>a.style.color = "white");
// }
/* <button onclick="colorBlack()">Black</button> using in html file*/ 
document.body.style.backgroundColor = "#000000";

const button = document.querySelector('button');
const bg_col = document.querySelector('body');

button.addEventListener('click', () => {
  let color = Math.random() < 0.5 ? "#FFFFFF" : "#000000";
  bg_col.style.backgroundColor = color;

  toggleColors();
});

function toggleColors() {
  const body = document.body;
  const currentBackground = window.getComputedStyle(body).backgroundColor;

  const blackBackground = "rgb(0, 0, 0)";
  const whiteBackground = "rgb(255, 255, 255)";

  const allNewsElements = document.querySelectorAll(".a");

  if (currentBackground === whiteBackground) {
    allNewsElements.forEach(element => element.style.color = "black");
  } 
  else {
    allNewsElements.forEach(element => element.style.color = "white");
  }
}
toggleColors();

const nam = document.getElementById('name');
const phone_number = document.getElementById('phone-number');
const dob = document.getElementById('DOB');
const btn = document.getElementById('btn');

btn.addEventListener('click', function(e) {
  e.preventDefault();
  if(nam.value === "" || /\d/.test(nam.value)){
    alert("Please enter a valid name");
  }
  else if(phone_number.val==="" || isNaN(phone_number.value)){
    alert('Please enter a valid number')
  }
  else{
    setTimeout(function(e){
    alert("Successfully Done !!!");
    },1000)
  }
  return;
});

// const email = document.getElementById('email');
// const subject = document.getElementById('subject');
// const message = document.getElementById('message');
// const submit_btn = document.querySelector('.submit-btn');

// submit_btn.addEventListener('click', function(e){
// e.preventDefault();
// if(email.value==="" || email.value.includes('@')){
//   alert("Please enter a valid email")
// }
// else if(subject.value==="" || /\d/.test(subject.value)){
//     alert("Please enter a valid subject ");
// }
// else{
//   setTimeout(function(){
//     alert("Submitted Successfully !")
//   },1000)
//  return ;
// }
// });

document.addEventListener('DOMContentLoaded', function() {
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const form = document.querySelector('.signin');

form.addEventListener('submit', function(e) {
  e.preventDefault(); 

  if (email.value === "" || !email.value.includes('@') || !email.value.includes('.')) {
    alert("Please enter a valid email");
    return; 
  }

  else if (subject.value === "" || /\d/.test(subject.value)) {
    alert("Please enter a valid subject");
    return; 
  }

  else if (message.value === "") {
    alert("Please enter your message");
    return; 
  }
  else {
    setTimeout(function() {
      alert("Submitted Successfully!"); 
    }, 1000); 
  }
});
});
