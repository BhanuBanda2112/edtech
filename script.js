const menubar = document.getElementById("bars");
const pop = document.getElementById("sidenav");

menubar.addEventListener("click", () => {
   pop.style.display = pop.style.display === "none" ? "block" : "none";
});



const menubar1= document.getElementById("user");
const pop1= document.getElementById("profile");

menubar1.addEventListener("click", () => {
   pop1.style.display = pop1.style.display === "none" ? "block" : "none";
});



document.addEventListener("DOMContentLoaded", () => {
   const toggleButton = document.getElementById("toggle");
   const body = document.body;
 
   toggleButton.addEventListener("click", () => {
     body.classList.toggle("dark-mode");
     localStorage.setItem("darkMode", body.classList.contains("dark-mode") ? "true" : "false"); // Store boolean value
   });
 
   const storedPreference = localStorage.getItem("darkMode");
   if (storedPreference === "true") {
     body.classList.add("dark-mode");
   }
 });


 const video = document.getElementById("my-video");
const playPauseBtn = document.getElementById("play-pause-btn");

playPauseBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = "Pause";
  } else {
    video.pause();
    playPauseBtn.textContent = "Play";
  }
});

 














 




window.addEventListener("load", () => {
   const imageSlider = document.getElementById("image-slider");  
   const images = imageSlider.querySelectorAll("img");          
   let currentImageIndex = 0;                               
 
   const changeImage = () => {
     images.forEach((image) => image.style.opacity = 0);     
     images[currentImageIndex].style.opacity = 1;           
     currentImageIndex = (currentImageIndex + 1) % images.length;
   };
 
   setInterval(changeImage, 2000); 
});