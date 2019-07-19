// Sandbox
console.log("...Sandbox here...\n↕↕↕↕↕↕↕↕↕↕↕↕↕↕↕↕↕↕\n↕↕↕↕↕↕↕↕↕↕↕↕↕↕↕↕↕↕");
// Test

const arrowElement = document.querySelector("#show_button");
const menuRadio = document.querySelector("#menu_radio");

let isVisible = false;
arrowElement.onclick = () => {
    if (isVisible === false) {
        isVisible = true;
        menuRadio.style.left = 150 + "px";
        menuRadio.style.width = 200 + "px";
        console.log(menuRadio.children)

        setTimeout(() => {
            for(let el of menuRadio.children){
                el.style.visibility = "visible";
                el.zIndex = "2";
            }
        }, 200);
    } else if(isVisible === true) {
        isVisible = false;
        menuRadio.style.left = 50 + "px";
        menuRadio.style.width = 0 + "px";
        console.log(menuRadio.children)
        setTimeout(() => {
            for(let el of menuRadio.children){
                el.style.visibility = "hidden";
                el.zIndex = "-1";

            }
        }, 200);
    }
}


