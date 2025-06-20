console.log("Hello world")

const RandomNumberEl = document.querySelector("#random-number")
const resultat =  document.querySelector("#result")
const min = document.querySelector("#min")
const max =document.querySelector("#max")
RandomNumberEl.addEventListener('click',()=>{
   resultat.style.backgroundColor = "blue"
   resultat.style.color = "white"
   resultat.style.width = "25px"
   resultat.style.padding = "10px"
   resultat.style.borderRadius = "50%"
   resultat.style.marginTop = "0"
   resultat.style.marginBottom = "0"
   resultat.style.marginleft = "auto"
   resultat.style.marginright = "auto"
   resultat.textContent=Math.floor(getRandomNumber(Number(min.value) , Number(max.value)))

   // Faire disparaître après 3 secondes (3000 ms)
  setTimeout(() => {
    resultat.textContent = "";
    resultat.removeAttribute("style");
  }, 9000); // 3000 millisecondes = 3 secondes
})

function getRandomNumber(min ,max){
    return Math.random()  * (max-min)+min;
}