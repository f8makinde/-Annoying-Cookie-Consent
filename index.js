let modal = document.getElementById("modal");
let removeModal = document.getElementById("modal-close-btn");
let form = document.getElementById("consent-btn");
let text = document.getElementById("modal-text")
setTimeout(function(){
    modal.style.display = "inline";
}, 1500)


removeModal.addEventListener("click", function(){
    modal.style.display = "none";
})

form.addEventListener("submit", function(event){
  event.preventDefault();
   const formData = new FormData(form);
   const fullName = formData.get("fullName");

    text.innerHTML =    
     `<div class="modal-inner-loading">
    <img src="loading.svg" class="loading">
    <p id="upload-text">Uploading your data to the dark web...</p>
    </div>` 
   
  setTimeout(function(){
    document.getElementById(id="upload-text").textContent = "Making the sale..."
  }, 1500)

  setTimeout(function(){
    document.getElementById("modal-inner").innerHTML = `<h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="pirate.gif">
    </div>`
    removeModal.disabled = false;

  }, 3000)

})

