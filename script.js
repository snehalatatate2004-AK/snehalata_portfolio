const text = "AI Developer • ML Innovator • Future Tech Builder";
let i = 0;


function type(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(type,60);
}
}


window.onload = type;