let search=document.querySelector('.searchbox');
document.querySelector('#searchicon').onclick =()=>{
search.classList.toggle('active');
}

function showPopup(event) {
  event.preventDefault();
  document.getElementById("custom-popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("custom-popup").style.display = "none";
}
