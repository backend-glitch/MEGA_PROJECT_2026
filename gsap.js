gsap.registerPlugin(ScrollTrigger);




let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -86 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".group1-wrapper",
    pin: true,
    scrub: 1,
    end: () => "+=" + document.querySelector(".group1-container").offsetWidth
  }
});



// group 1
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


// froup 2
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



// group 3
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





// project transitiom
document.querySelectorAll(".project-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const url = link.getAttribute("href");

    // Animate OUT
    gsap.to("body", {
      opacity: 0,
      y: -50,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        window.location.href = url;
      }
    });
  });
});