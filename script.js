function login(){

let name=document.getElementById("name").value;

localStorage.setItem("user",name);

window.location.href="dashboard.html";
}

window.onload=function(){

let welcome=document.getElementById("welcome");

if(welcome){

let user=localStorage.getItem("user");

welcome.innerHTML="Welcome "+user;
}
}

function guardianMode(){

document.getElementById("status").innerHTML=
"🛡 AI Guardian Monitoring Journey";

setTimeout(()=>{

let answer=confirm(
"We detected route deviation. Are you safe?"
);

if(!answer){
sendSOS();
}

},10000);
}

function safeRadar(){

document.getElementById("status").innerHTML=
"📍 Nearby Police Station: 500m<br>🏥 Hospital: 800m";
}

function fakeCompanion(){

let speech=
new SpeechSynthesisUtterance(
"Hi, I am waiting for you outside. Call me when you arrive."
);

speechSynthesis.speak(speech);
}

function opportunityHub(){

alert(
"🎓 Scholarship Found\n💼 Internship Found\n📚 Free AI Course Found"
);
}

function sendSOS(){

document.getElementById("status").innerHTML=
"🚨 SOS Alert Triggered";
function openCalculator(){

let code=prompt("Calculator");

if(code==="911#"){
sendSOS();
}
}
}