const arrow = document.getElementById("arrow")
// const openModal = document.querySelector(".video-btn")
// const closeModal = document.querySelector(".close-modal")
// const modal = document.querySelector(".modal")

// openModal.addEventListener("click", ()=>{
//     modal.showModal() 
// })

// closeModal.addEventListener("click", ()=> {
//     modal.close()
// })

window.addEventListener("scroll", ()=> {
    const position = window.scrollY;
    
    if(position <= 5){
        arrow.classList.toggle('fade-out')
        arrow.classList.toggle('fade-in')
    }
})



