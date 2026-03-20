const countervalue = document.getElementById("counter");
const increasebtn = document.getElementById("increasebtn");
const resetbtn = document.getElementById("resetbtn");
const decreasebtn = document.getElementById("decreasebtn");


let counter = 0;

function updatefunction(){

    countervalue.textContent = counter;

    console.log(counter);
}

increasebtn.addEventListener("click",() => {

    counter++;
    updatefunction();
});

decreasebtn.addEventListener("click",() => {

    counter--;
    updatefunction();
});

resetbtn.addEventListener("click",() => {

    counter = 0;
    updatefunction();
})