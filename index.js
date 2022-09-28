let modal = document.getElementById("modal");
let removeModal = document.getElementById("modal-close-btn");
setTimeout(function(){
    modal.style.display = "inline";
}, 1500)

removeModal.addEventListener("click", function(){
    modal.style.display = "none";
})