//console.log("Tomate")
//console.error("Le estoy pasando un error")
//función de .stopPropagation --- NO SIGAS
//document.body.addEventListener("keyup", getkey)


let myText2 = document.getElementById("myText2")
let textInput = document.getElementById("myText");

myText2.addEventListener("keyup", getkey)

    function getkey (event) {
        
        console.log(event.key)
    
        event.stopPropagation();
        event.preventDefault();

        textInput.setAttribute("value", event.key);

    }

    