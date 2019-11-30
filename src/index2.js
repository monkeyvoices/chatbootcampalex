
let myText = document.getElementById("myText");
let myTextSaved = '';


document.body.addEventListener("keyup", getkey);


function getkey (event) {

if (event.key === "Backspace") {
    myTextSaved = "";  
} 

else {
    myTextSaved = myTextSaved + event.key;
}

    console.log(event.key)
    myText.getAttribute(myTextSaved)
    myText.setAttribute("value", myTextSaved);


}



fetch ("http://192.168.0.124:3000").then(d => d.json()).then(writeContent)

function writeContent (data) {
console.log(data.data)
myText.setAttribute("value", data.data)

}