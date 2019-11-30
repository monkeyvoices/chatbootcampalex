let myText = document.getElementById("myText");
let myTextSaved = '';


document.body.addEventListener("keyup", getkey);


function getkey (event) {

let url = "http://192.168.0.124:3000/send?message=" + event.key;

fetch (url);

fetchData();

}

function fetchData () {
    fetch ("http://192.168.0.124:3000").then(d => d.json()).then(writeContent)
    }



function writeContent (data) {
console.log(data.data)
myText.setAttribute("value", data.data)

}

setInterval (fetchData, 5000)
