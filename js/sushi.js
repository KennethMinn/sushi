const aboutUsBtn = document.querySelector("#aboutUsBtn");
const popularBtn = document.querySelector("#popularBtn");
const RecentlyBtn = document.querySelector("#RecentlyBtn");
const aboutImage = document.querySelector("#aboutImage");
const aboutText = document.querySelector("#aboutText");
const popularImage = document.querySelector("#popularImage");
const popularText = document.querySelector("#popularText");
const RecentlyImage = document.querySelector("#RecentlyImage");
const RecentlyText = document.querySelector("#RecentlyText");

// window.addEventListener("scroll",()=>{
//     console.log(scrollY)
// })

// const animate = () => {
//   aboutImage.classList.add("animate__animated", "animate__backInLeft");
//   aboutText.classList.add("animate__animated", "animate__backInRight");
//   removeEventListener("click", animate);
// };

aboutUsBtn.addEventListener("click", () => {
  aboutImage.classList.add("animate__animated", "animate__backInLeft");
  aboutText.classList.add("animate__animated", "animate__backInRight");
});

popularBtn.addEventListener("click", () => {
  popularImage.classList.add("animate__animated", "animate__zoomInRight");
  popularText.classList.add("animate__animated", "animate__bounce");
});

RecentlyBtn.addEventListener("click", () => {
  RecentlyImage.classList.add("animate__animated", "animate__rotateInDownRight");
  RecentlyText.classList.add("animate__animated", "animate__rotateInDownLeft");
});
