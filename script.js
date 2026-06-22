const navbar = document.getElementById("navbar");
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){
navbar.style.background = "#2563eb";
}

else{
navbar.style.background = "white";
}

if(window.scrollY > 300){
topBtn.style.display = "block";
}
else{
topBtn.style.display = "none";
}

});

topBtn.addEventListener("click", () => {
window.scrollTo({
top:0,
behavior:"smooth"
});
});
