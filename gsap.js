gsap.registerPlugin(ScrollTrigger);


// main section
gsap.from(".hero-text", {
  y: 100,
  opacity: 0,
  duration: 1.5
});


// GROUP 1 
gsap.from(".group1 .project-card", {
  x: -150,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".group1",
    start: "top 80%"
  }
});


// GROUP 2
gsap.from(".group2 .project-card", {
  x: 150,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".group2",
    start: "top 80%"
  }
});


// GROUP 3 
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".group3",
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true
  }
});

tl.from(".group3 h1", { scale: 0.5, opacity: 0 })
  .to(".group3 h1", { scale: 1.5 });


  // navbar
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    gsap.to(window, {
      scrollTo: link.getAttribute("href"),
      duration: 1
    });
  });
});


//page next
document.querySelectorAll(".btn").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const url = link.href;

    gsap.to("body", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => window.location.href = url
    });
  });
});