const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");
const scene4 = document.getElementById("scene4");
const scene5 = document.getElementById("scene5");
const buttonContainer = document.getElementById("button-container");
const button = document.getElementById("btn");
const birthdayText = document.getElementById("birthdayText");

setTimeout(() => {
  scene1.classList.add("show");
}, 300);

setTimeout(() => {
  scene1.style.display = "none";
  scene2.style.display = "block";
  scene2.classList.add("show");
}, 4000);

setTimeout(() => {
  buttonContainer.style.opacity = 1;
}, 6000);

button.addEventListener("click", () => {
  scene2.classList.remove("show");
  scene2.style.opacity = 0;

  setTimeout(() => {
    scene2.style.display = "none";
    scene3.style.display = "block";
    scene3.classList.add("show");
  }, 700);

  setTimeout(() => {
    scene3.classList.remove("show");
    scene3.style.opacity = 0;

    setTimeout(() => {
      scene3.style.display = "none";
      scene5.style.display = "block";
      scene5.classList.add("show");
    }, 900);
  }, 2000);

  setTimeout(() => {
    scene5.classList.remove("show");
    scene5.style.opacity = 0;
    buttonContainer.style.opacity = 0;

    setTimeout(() => {
      scene5.style.display = "none";
      birthdayText.style.opacity = 1;
      scene4.style.display = "block";
      scene4.classList.add("show");

      for (let i = 0; i < 15; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = (2 + Math.random() * 3) + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
      }
    }, 1000);
  }, 5000);
});


