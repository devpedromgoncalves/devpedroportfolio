// Console text
const consoleText = (words, id, colors = ["#fff"]) => {
  let letterCount = 1;
  let x = 1;
  let waiting = false;
  const target = document.getElementById(id);
  target.style.color = colors[0];
  setInterval(() => {
    if (letterCount === 0 && !waiting) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      setTimeout(() => {
        colors.push(colors.shift());
        words.push(words.shift());
        x = 1;
        target.style.color = colors[0];
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && !waiting) {
      waiting = true;
      setTimeout(() => {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1800);
    } else if (!waiting) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 105);

  let visible = true;
  setInterval(() => {
    const con = document.getElementById("console");
    con.className = visible
      ? "console-underscore hidden"
      : "console-underscore";
    visible = !visible;
  }, 400);
};

consoleText(
  ["Hello!", "I'm Pedro Gonçalves and I'm a Junior Software Developer."],
  "text",
  ["white", "white", "white"]
);

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
