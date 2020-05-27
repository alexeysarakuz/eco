const questionBlocks = document.querySelectorAll(".faq__content-block-header");
const temporaryHidden = document.querySelectorAll(".temporary-hidden");

questionBlocks.forEach((element) =>
  element.addEventListener("click", () => showAnswer(event))
);

function showAnswer(event) {
  questionBlocks.forEach((element) => {
    if (element != event.target.parentNode)
      element.parentNode.classList.remove("active");
  });
  event.target.parentNode.parentNode.classList.toggle("active");
}

const specialSlider = document.querySelector("#special-landing-slider");

let lastScrollTop = 0;

let activeSlide = 1;
let possibleToScrollSlide = true;
// window.onscroll = () => {
//   let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//   if (st > lastScrollTop) {
//     if (
//       specialSlider.getBoundingClientRect().top < 2 &&
//       specialSlider.getBoundingClientRect().top > -10
//     ) {
//       specialSlider.onwheel = (e) => {
//         if (possibleToScrollSlide) {
//           if (event.deltaY > 0) {
//             activeSlide++;
//           } else {
//             console.log(activeSlide);
//             if (activeSlide < 1 || activeSlide > 3) {
//               e.preventDefault();
//             } else {

//             }
//             possibleToScrollSlide = false;
//           }
//           setTimeout(() => {
//             possibleToScrollSlide = true;
//           }, 3000);
//         } else {
//             e.preventDefault();
//         }
//       };
//     }
//   } else {
//     // upscroll code
//   }
//   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
// };
