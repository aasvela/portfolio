const thumbnail =document.querySelector(".card-thumbnail");
const scienceModal = document.querySelector(".science-modal");
const rainyModal = document.querySelector(".rainy-modal");
const bonsaiModal = document.querySelector(".bonsai-modal");
const modal = document.querySelector(".modal")

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

function openModalScience() {
  scienceModal.showModal();
  scienceModal.style.cssText = `
    display: flex;
    `;
}
function openModalRainy() {
  rainyModal.showModal();
  rainyModal.style.cssText = `
    display: flex;
    `;
}
function openModalBonsai() {
  bonsaiModal.showModal();
  bonsaiModal.style.cssText = `
    display: flex;
    `;
}
// function closeModal(){
//   if (scienceModal.style.cssText == "display: flex;") {
//     scienceModal.style.cssText = `
//     display: none; `
//   }
//   if (rainyModal.style.cssText == "display: flex;") {
//     rainyModal.style.cssText = `
//     display: none; `
//   }
//   if (bonsaiModal.style.cssText == "display: flex;") {
//     bonsaiModal.style.cssText = `
//     display: none; `
//   }
// }
  
  // scienceModal.close();
  // scienceModal.style.cssText = `
  //   display: none; `
  
  // }

  
  // function closeRainyModal(){
  //   rainyModal.close();
  //   rainyModal.style.cssText = `
  //     display: none; `
    
  //   }

    
  //   function closeModal(){
  //     bonsaiModal.close();
  //     bonsaiModal.style.cssText = `
  //       display: none; `
      
  //     }
  window.onclick = function(event) {
    if (event.target == scienceModal) {
      scienceModal.close();
      scienceModal.style.cssText = `
      display: none; `
    }
    if (event.target == rainyModal) {
      rainyModal.close();
      rainyModal.style.cssText = `
    display: none; `
  }
  if (event.target == bonsaiModal) {
    bonsaiModal.close();
    bonsaiModal.style.cssText = `
  display: none; `
}
}
document.onkeyup = function(event) {
  if (event.keyCode === 27){
    scienceModal.close();
    scienceModal.style.cssText = `
      display: none; `
  }
  if (event.keyCode === 27){
    rainyModal.close();
    rainyModal.style.cssText = `
      display: none; `
  }
  if (event.keyCode === 27){
    bonsaiModal.close();
    bonsaiModal.style.cssText = `
      display: none; `
  }
}