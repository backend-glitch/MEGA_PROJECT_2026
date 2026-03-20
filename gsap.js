gsap.registerPlugin(ScrollTrigger);


// 🔥 GROUP 1 → Fade + Slide
gsap.utils.toArray(".group1").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    }
  });
});


// 🔥 GROUP 2 → Parallax
gsap.utils.toArray(".group2").forEach((section) => {
  gsap.from(section, {
    x: -150,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
          toggleActions: "play reverse play reverse"
    }
  });
});

gsap.utils.toArray(".group4").forEach((section) => {
  gsap.from(section, {
    x: 150,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    }
  });
});



// 🔥 GROUP 3 → Pin + Timeline
gsap.utils.toArray(".group3").forEach((section) => {
  
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "+=100%",
      scrub: true,
      pin: true,
    }
  });

  tl.from(section, { scale: 0.8, opacity: 0 })
    .to(section, { scale: 1.1 })
    .to(section, { opacity: 0 });
});