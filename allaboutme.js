// // alert("Hello! Welcome to a website all about me, Dhriti Goomer! Press Ok to continue!");
// <button onclick="setTimeout(myFunction, 3000)"></button>
//
// function myFunction() {
//   alert('Hello');
// }
// alert("welcome to my website")


function coolMeter() {
  alert("You're cool too!");
}

function startingColor() {
  document.body.style.backgroundColor = "lavender";

}
function backgroundChange() {
  var background = ["LIGHTPINK","LIGHTGREEN","LAVENDER","LIGHTBLUE","lightcoral", "tomato","gold","moccasin","darkkhaki"];
  var rand = background[Math.floor(Math.random() * background.length)];
  document.body.style.backgroundColor = rand

  // document.body.style.backgroundColor = "LAVENDER";
}
