// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger, CustomWiggle);

//BOX WILL FADE IN
gsap.to(".opacity-fade", {
  opacity:1,
  duration: 1,
  stagger: 0.4,
  ease: "power1.inout",
  scrollTrigger: {
    trigger: ".opacity-fade",
    start: "top 60%", // when the top of the element hits 50% down the viewport
    toggleActions: "play none none none" // play only once when triggered
  }
});

//BOX WILL COME UP FROM BOTTOM
gsap.to(".box-up", {
  duration: 1,
  y:-100,
  stagger: 0.4,
  ease: "power1.inout",
  scrollTrigger: {
    trigger: ".box-up",
    start: "top 60%", // when the top of the element hits 50% down the viewport
    toggleActions: "play none none none" // play only once when triggered
  }
});

//BEFORE AND AFTER IMAGE SLIDER
gsap.utils.toArray(".img-comparison").forEach(section => {
let tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "center center",
      // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
      end: () => "+=" + section.offsetWidth,
      scrub: true,
      pin: true,
      anticipatePin: 1
    },
    defaults: {ease: "none"}
  });
// animate the container one way...
tl.fromTo(section.querySelector(".img-comparison--imgafter"), { xPercent: 100, x: 0}, {xPercent: 0})
  // ...and the image the opposite way (at the same time)
  .fromTo(section.querySelector(".img-comparison--imgafter img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0);
});

//CUSTOM WIGGLE FOR DIVS

// Create the custom wiggle
CustomWiggle.create("btn--circle-wiggle", {
  wiggles: 7,
  type: "power4"
});
// Animate the element
gsap.to(".btn--circle", {
  duration: 2,
  stagger: 0.2,
  rotation: 15,
  ease: "btn--circle-wiggle",
  scrollTrigger: {
    trigger: ".btn--circle",
    start: "top 50%", // when the top of the element hits 50% down the viewport
    toggleActions: "play none none reset" // play only once when triggered
  }
});
