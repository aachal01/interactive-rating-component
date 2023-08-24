const ratingDispay = document.getElementById('rate-dis');
const userChoices = document.querySelectorAll('.btn');
let finalRate
userChoices.forEach(userChoice => userChoice.addEventListener('click', (e) =>{
    finalRate = e.target.id
    ratingDispay.innerHTML = finalRate
    
}))



document.querySelector('.subt-btn').addEventListener("click", (event) => {
    console.log(finalRate)
    event.preventDefault();
    if(finalRate > 0 && finalRate < 6){
        document.getElementById('con1').style.display = "none"
        document.getElementById('con2').style.display = "block"
    }else{
        alert("You haven't selected any choice")
    }   
})

