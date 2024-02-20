
const arrow = document.getElementById("arrow")

window.addEventListener("scroll", ()=> {
    const position = window.scrollY;
    
    if(position <= 5){
        arrow.classList.toggle('fade-out')
        arrow.classList.toggle('fade-in')
    }
})