_DosFilter = () => {
    function Dos_HTML_Element(html_tag, html_id = null, html_class = null, html_text = null, html_html = null) {
        let html_el = document.createElement(html_tag);
        html_el.id = html_id;
        html_el.className = html_class;
        html_el.innerText = html_text;
        html_el.innerHTML = html_html;
        html_el.type;
        return html_el;

    }

    const _stylesObj = {

        main_wrapper: `
        display: flex;
        flex-direction: row;
        margin: 1em;
        font-size: large;
        padding: 10px;
        position: fixed;
        z-index: 100;
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        
    `,

        button_Show: `
            display: flex;
            width: 5em;
            height: 5em;
            
            
            align-items: center;
            align-self: center;
            text-align: center;
            justify-content: center;
            padding: 0.5em;
            transition: all 0.4s ease 0s;

            border-radius: 0%;
            cursor: pointer;

        `,

        button_Hide: ``,

        arrow: `
            display: flex;
            
            height: 7em;
            background-color: rgb(226, 226, 226);
            padding: 0px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px 0px #515151;
            transition: all 0.3s ease 0s;
            z-index: 1000;
        `,

        wrapper_For_Inputs: `
            display: none;
            flex-direction: row;
            margin: 0em 0em 0em 0.5em;
            padding: 0px 0.5em 0 1em;
            z-index: 100;
            opacity: 1;
            transition: .3s;
            border: 0px solid;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            background: rgb(226, 226, 226);
            box-shadow: 0px 0px 8px 0px #00000070;

        `,

        filter_Input_Field: `
            height: 38px;
            align-self: center;
            margin: 0em;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            padding-left: 10px;
            width: 200px;
            font-weight: light;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

        `,

        filter_Submit_Button: `
            display: flex;
            justify-content: center;
            align-self: center;
            width: 6em;
            height: 2.65em;
            
            background: none;
            border: 1px solid;
            cursor: pointer;
            font-size: smaller;
            transition: 0.2s;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            
        `,

        buttons_wrapper: `
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            
            margin: 0 1em;
        `

    }

    // creating elements
    const firstDiv = new Dos_HTML_Element("div", "dos_firstDiv", "dos_active");
    const dos_arrow = new Dos_HTML_Element("img");
    dos_arrow.src = "https://unitronicsplc.com/wp-content/uploads/intense-cache/icons/plugin/font-awesome/arrow-circle-right.svg";
    const dos_wrapper = new Dos_HTML_Element("div", "dos_wrapper", "dos_active")
    const new_dos_wrapper = new Dos_HTML_Element("div", "dos_secondDiv", "dos_active");
    const newInput = new Dos_HTML_Element("input");
    newInput.placeholder = 'words to search...';
    const submitButton = new Dos_HTML_Element("input", "dos_search_button");
    submitButton.type = "submit";
    submitButton.value = "FIND";
    const clearButton = new Dos_HTML_Element("input", "dos_clear_button");
    clearButton.type = "submit";
    clearButton.value = "CLEAR";
    const buttonWrapper = new Dos_HTML_Element("div", "dos_buts_wrapper")

    // styling this elements
    dos_wrapper.style.cssText = _stylesObj.main_wrapper;
    firstDiv.style.cssText = _stylesObj.button_Show;
    dos_arrow.style.cssText = _stylesObj.arrow;
    new_dos_wrapper.style.cssText = _stylesObj.wrapper_For_Inputs;
    newInput.style.cssText = _stylesObj.filter_Input_Field;
    submitButton.style.cssText = _stylesObj.filter_Submit_Button;
    clearButton.style.cssText = _stylesObj.filter_Submit_Button;
    buttonWrapper.style.cssText = _stylesObj.buttons_wrapper;

    // appearing those elements
    document.body.prepend(dos_wrapper);
    dos_wrapper.append(firstDiv);
    firstDiv.appendChild(dos_arrow);
    dos_wrapper.append(new_dos_wrapper);
    new_dos_wrapper.append(newInput);
    new_dos_wrapper.append(buttonWrapper);
    buttonWrapper.append(submitButton);
    buttonWrapper.append(clearButton);



    // main logic
    let findedElements = [];
    let counter = 0;
    const startTransform = dos_arrow.style.transform;
    let vpNameList = document.querySelectorAll("td");



    // 1
    startSearch = () => {
        if (String(newInput.value) == "") {
            newInput.style.boxShadow = "rgba(255, 0, 0, 0.49) 0px 0px 3px 3px inset";
            newInput.placeholder = "Please, type something here"
        } else {
            let formattedValues = newInput.value.split(',');
            formattedValues = formattedValues.map(el => el = String(el.toLowerCase().trim()));

            insertArgs(formattedValues);
            newInput.value = "";
            
        }

    }
    // 2
    let insertArgs = (formattedArray) => {
        console.log(formattedArray)
        vpNameList.forEach((el, i) => {
            console.log(el.innerText.indexOf(formattedArray[i]));
            
        })
    }

    // 3
    someFunc = (str, bgColor) => {
        
    }

    // 4
    highlightElements = (str, bgColor) => {
        vpNameList("td").forEach((el, i) => {
            let lowCaseText = el.innerText.toLowerCase().trim();
            if (lowCaseText.includes("цільова строка")) {
                console.log(" ");
            }
        })
    }



    // 5
    clearHighlight = () => {
        findedElements.forEach((el) => {
            el.style.backgroundColor = null;
        })
        findedElements.length = 0;
    }




   // події, прикраси та вспливашки
    showPopUpWindow = () => {
        let visible = false;
        dos_wrapper.onmouseover = () => {
            start_color = event.target.style.backgroundColor;
            if (event.target.id === firstDiv.id) {
                event.target.style.cssText += `
                    background-color: #7faeff;
                    cursor: pointer;

                `;

            }

        }
        dos_wrapper.onmouseout = () => {
            if (event.target.id === firstDiv.id) {
                event.target.style.backgroundColor = start_color;

            }

        }

        firstDiv.onclick = showClose = () => {
            if (visible) {
                if (event.target.tagName === "IMG") {
                    visible = false;
                    event.target.style.transform = startTransform;
                    new_dos_wrapper.style.opacity = '0';
                }
                setTimeout(() => {
                    new_dos_wrapper.style.display = "none";
                }, 300);
            } else {
                if (event.target.tagName === "IMG") {
                    visible = true;
                    event.target.style.transform = "scale(-1,1)";
                    new_dos_wrapper.style.opacity = 1;
                }
                setTimeout(() => {
                    new_dos_wrapper.style.display = "flex";
                }, 300);
            }
        }

    }
    showPopUpWindow();

    function buttonsHover(event) {
        const style = this.style;

        if (event.type === "mouseover") {
            style.backgroundColor = "black";
            style.color = "white";
            style.border = "none";
        } else if (event.type === "mouseout") {
            style.background = "none";
            style.color = "black";
            style.border = "1px solid";
        }

    }

    eventListeners = (() => {
        submitButton.addEventListener("mouseover", buttonsHover);
        submitButton.addEventListener("mouseout", buttonsHover);

        clearButton.addEventListener("mouseover", buttonsHover);
        clearButton.addEventListener("mouseout", buttonsHover);

        submitButton.addEventListener("click", startSearch);

        clearButton.addEventListener("click", clearHighlight)
    })();


}
_DosFilter();