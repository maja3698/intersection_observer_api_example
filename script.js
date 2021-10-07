

const faders = document.querySelectorAll(".fade-in");
const containers = document.querySelectorAll(".container");

const appearoptions = {
  root: null,
  threshold: 0.15,
  rootMargin: "-150px",
};

const appearOnScroll = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearoptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

const banneroptions = {
  root: null,
  threshold: 0,
  rootMargin: "100px",
};

const bannerObserver = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    console.log(entry);
    if (!entry.isIntersecting) {
      entry.target.classList.remove("moveLeft");
    } else {
      entry.target.classList.add("moveLeft");
    }
  });
}, banneroptions);

containers.forEach((container) => {
  bannerObserver.observe(container);
});






// // Declare element you wish to observe
// const element = document.querySelector(".html-element");

// // Declare options for the observer
// const options = {
//   root: null,
//   threshold: 0,
//   rootMargin: "0px",
// };

// // Declare observer ---> Give it a name
// const observer = new IntersectionObserver(function (entries) {
//   entries.forEach((entry) => {
//     // console.log(entry);
//     if (!entry.isIntersecting) {
//       // do something
//     } else {
//       // else do this
//     }
//   });
// }, options);

// //   Set the observer to observe your chosen element.
// observer.observe(element);
