
// main page animate-text
const texts = ["JS","TS","REACT","TAILWIND","NODEJS"];


const textElement = document.getElementById("animated-text");

let index = 0;


function animateText() {
    const word = texts[index];
    textElement.textContent = word;

    // entry animation
    gsap.fromTo(
        textElement, {
        y: 50, opacity: 0
    },
        { y: 0, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" }

    )

    //exit animation 

    gsap.to(textElement, {
        y: -50,
        opacity: 0,
        delay: 2,
        duration: 0.8,
        ease: "power2.in",
        onComplete: () => {
            index = (index + 1) % texts.length;
            animateText();
        },
    });
}

animateText();
