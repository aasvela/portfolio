const thumbnail =document.querySelector(".card-thumbnail");
const modal = document.querySelector(".card-modal");

thumbnail.addEventListener("click",  () =>{

    if(modal.style.display === "flex"){

        modal.style.display = "none"
    }
    else {
        modal.style.display = "flex"

        // modal.innerHTML = 

    }


 
    console.log(event)
})

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