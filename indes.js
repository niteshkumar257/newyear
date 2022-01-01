const heading=document.querySelector(".heading")

const refresh=document.querySelector(".refresh")
const btn=document.querySelector(".btn");
const nav_toggle=document.querySelector(".fa-bars");
const body=document.body
var nam=prompt("Enter your name");
var namUpper=nam.toUpperCase(nam);
const p=document.querySelector(".head");

// refresh.addEventListener("click",function()
// {
//     window.location.reload();
// })

btn.addEventListener('click',function()
{
   
   
    heading.innerHTML="HAPPY NEW YEAR \n";
    p.classList.add("style");
   p.innerHTML=namUpper;
  p.classList.add("style");
      body.classList.add("image");
   
})

