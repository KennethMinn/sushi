const aboutUsBtn = document.querySelector("#aboutUsBtn");
const popularBtn = document.querySelector("#popularBtn");
const RecentlyBtn = document.querySelector("#RecentlyBtn");
const aboutImage = document.querySelector("#aboutImage");
const aboutText = document.querySelector("#aboutText");
const popularImage = document.querySelector("#popularImage");
const popularText = document.querySelector("#popularText");
const RecentlyImage = document.querySelector("#RecentlyImage");
const RecentlyText = document.querySelector("#RecentlyText");
const nav = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
const allSections = document.querySelectorAll(".section");
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
  RecentlyImage.classList.add(
    "animate__animated",
    "animate__rotateInDownRight"
  );
  RecentlyText.classList.add("animate__animated", "animate__rotateInDownLeft");
});

nav.addEventListener("click", (e) => {
  // e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    nav.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    //sdfsdfds
    e.preventDefault();
    const link = e.target;
    const id = link.getAttribute("href");

    console.log(id);

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const animate = (entries, observe) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  console.log(entry);
  entry.target.classList.remove("opacity-0");
  entry.target.classList.add("animate__animated", "animate__backInRight");
  observe.unobserve(entry.target);
};

const observer = new IntersectionObserver(animate, {
  root: null,
  threshold: 0.3,
});
allSections.forEach((section) => {
  observer.observe(section);
  section.classList.add("opacity-0");
});
