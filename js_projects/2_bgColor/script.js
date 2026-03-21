const btn = document.getElementById("btn");
const stats = document.getElementById("stats");

function getrandomcolor() {

    const r1 = Math.floor(Math.random() * 256);
    const g1 = Math.floor(Math.random() * 256);
    const b1 = Math.floor(Math.random() * 256);

    const r2 = Math.floor(Math.random() * 256);
    const g2 = Math.floor(Math.random() * 256);
    const b2 = Math.floor(Math.random() * 256);

     const directions = ["to left", "to right", "to top", "to bottom"];
      const randomDirection = directions[Math.floor(Math.random() * directions.length)];


  
    return `linear-gradient(${randomDirection}, rgb(${r1},${g1},${b1}), rgb(${r2},${g2},${b2}))`;
}

let getrandom = "";

btn.addEventListener("click", () => {
    console.log(getrandomcolor());
     getrandom = getrandomcolor(); 
    document.body.style.background = getrandom;

      codeBox.textContent = getrandom;
});

 stats.addEventListener("click", () => {

      if (getrandom) {

        navigator.clipboard.writeText(getrandom)
           .then(() =>alert("Gradient code copied!"))
          .catch(err => console.error("Failed to copy:", err));
      } else {
        alert("Generate a gradient first!");
      }
    });
