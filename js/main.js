const p  = document.querySelector("#p");
const porfolInfo = document.getElementsByClassName("portfolio-info");
console.log(porfolInfo);

p.addEventListener("mouseover",function(e){
  const target = (e.target.childNodes)[1];
  target.classList.add('aaa');
});