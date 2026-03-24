let name2 = prompt("Enter your name");

if(!name2 || name2.trim() === "") name2 = "Guest";


const greetings = document.getElementById("greeting");
const currenthour = new Date().getHours();

let greetingmessage = "";

if(currenthour < 12){

    greetingmessage = `Good Morning,${name2}`;
} else if(currenthour < 17){
    greetingmessage = `Good Afternoon,${name2}`;
}else if(currenthour < 21){
greetingmessage = `Good Evening,${name2}`;
}else{
    greetingmessage = `Good Night,${name2}`;
}

greetings.textContent = greetingmessage;