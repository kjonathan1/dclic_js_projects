let openBtn = document.getElementById('btn-open');
let closeBtn = document.getElementById('btn-close');
let modal = document.getElementsByClassName("modal");

function openModal() {
    modal[0].style.display = "block";
}
function closeModal () {
    document.querySelector(".modal").style.display = "none";
}