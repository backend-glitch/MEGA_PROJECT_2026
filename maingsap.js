// for mainpage

//main-logo
gsap.from(".main-logo",{
    x : -300,
    duration :2,
    ease : "power1.out"
})

gsap.from(".github-logo",{
    x : 300,
    duration :2,
    ease : "power1.out"
})

gsap.from(".main-head",{
    y : 300,
    duration :2,
    ease : "power1.out"
})
gsap.from(".main-head-2",{
    y : 300,
    duration :2,
    ease : "power1.out"
})





gsap.from(".container",{
    x : -300,
    y  : -300,
    duration :2,
    ease : "power1.out"
})


gsap.from(".navbar",{
   
    y  : -300,
    duration :2,
    ease : "power1.out"
})

gsap.fromTo(".moving-ball",{
    y : -130,

},{
 y: -250,
    duration: 1,  
    // delay: 2, 
    repeat: -1, 
    yoyo: true,
    ease: "power1.inOut"
})


gsap.to(".shadow", {
    scaleX: 0.5,
    opacity: 0.3,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"

})