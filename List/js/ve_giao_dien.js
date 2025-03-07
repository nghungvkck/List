

document.querySelector(".main__content--button").onclick = ()=>{
    var input =document.querySelector(".main__content--input").value;
    var inputR = input.trim();
    
    var cong_viec = document.querySelector(".allday__list");
    cong_viec.innerHTML+=`
        <li>${inputR}</li>  
        <button class="true allday__title-button">Làm đc</button>
        <button class="false allday__title-button">Ko làm đc</button>
    `
}

document.querySelector(".allday__list").addEventListener("click", (event)=>{
    if ( event.target.classList.contains("false")){
        event.target.style.background = `red`;
    } else   if (event.target.classList.contains("true")){
        event.target.style.background= `blue`;
    }
})