const button = document.querySelector('button');
const bck = document.querySelector('section');
const corNa = document.querySelector('h2');

button.addEventListener('click',()=>{
  let random = Math.random(0,16).toString(16);
  let color1 = "#"+ random.substring(3,9);
  let color2 = "#"+random.substring(2,8);
  console.log(color1);
  bck.style.background =color1;
  button.style.background = color2;
  corNa.innerText = color1;
});
