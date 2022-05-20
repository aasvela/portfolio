const thumbnail =document.querySelector(".card-thumbnail");
const modal = document.querySelector(".modal");

// thumbnail.addEventListener("click",  () =>{

//     if(modal.style.display === "flex"){

//         modal.style.display = "none"
//     }
//     else {
//         modal.style.display = "flex"

//         // modal.innerHTML = 

//     }


 
//     console.log(event)
// })

// thumbnail.addEventListener("click", () => {
//     modal.showModal();
//     modal.style.cssText = `
//     display: flex;
//     `;
//     // modalImagesContainer.innerHTML += 
//     // `
//     // <img class="modal-image" src="assets/csm1.jpg" />
//     // <img class="modal-image" src="assets/csm2.jpg" />
//     // <img class="modal-image" src="assets/csm3.jpg" />
//     // `; 
// });

function openModal() {
    modal.showModal();
    modal.style.cssText = `
    display: flex;
    `;
}

function closeModal(){
    modal.close();
    modal.style.cssText = `
    display: none; `
  
  }
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.close();
        modal.style.cssText = `
      display: none; `
    }
  }
  document.onkeyup = function(event) {
    if (event.keyCode === 27){
        modal.close();
        modal.style.cssText = `
      display: none; `
    }
  }