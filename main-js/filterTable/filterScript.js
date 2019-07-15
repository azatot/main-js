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
            width: 7em;
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
    const firstDiv = new Dos_HTML_Element("div", "dos_firstDiv", "dos_active", "SHOW");
    const dos_arrow = new Dos_HTML_Element("img", null, null, null);
    dos_arrow.src = "https://unitronicsplc.com/wp-content/uploads/intense-cache/icons/plugin/font-awesome/arrow-circle-right.svg";
    const dos_wrapper = new Dos_HTML_Element("div", "dos_wrapper", "dos_active")
    const new_dos_wrapper = new Dos_HTML_Element("div", "dos_secondDiv", "dos_active");
    const newInput = new Dos_HTML_Element("input");
    newInput.placeholder = 'words to search...';
    const submitInput = new Dos_HTML_Element("input", "dos_search_button");
    submitInput.type = "submit";
    submitInput.value = "FIND";
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
    submitInput.style.cssText = _stylesObj.filter_Submit_Button;
    clearButton.style.cssText = _stylesObj.filter_Submit_Button;
    buttonWrapper.style.cssText = _stylesObj.buttons_wrapper;

    // appearing those elements
    document.body.prepend(dos_wrapper);
    dos_wrapper.append(firstDiv);
    firstDiv.appendChild(dos_arrow);
    dos_wrapper.append(new_dos_wrapper);
    new_dos_wrapper.append(newInput);
    new_dos_wrapper.append(buttonWrapper);
    buttonWrapper.append(submitInput);
    buttonWrapper.append(clearButton);

    // main logic
    let targetElements = [];
    let counter = 0;
    const startTransform = dos_arrow.style.transform;
    const vpNameList = (tag) => document.querySelectorAll(tag);
    // 2потім ця
    insertArgs = (...args) => {
        let arr = [...args];
        if (targetElements !== 0) {
            newInput.placeholder = "ACCESS! Elements found";
            arr.forEach((el) => {
                formatAllTextToLowCase(el, "green");
            })
        }
        if (targetElements.length === 0) {
            newInput.placeholder = "NOT FOUND ELEMENTS";
        }
        console.log(targetElements)
    }
    
    formatAllTextToLowCaseAndHightLight = (str, color) => {
        str = str.toLowerCase();
        return highlightElements(str, color);
    }

    // 1спочатку відпрацьовує ця
    highlightElements = (str, bgColor) => {
        vpNameList("td").forEach((el, i) => {
            let lowCaseText = el.innerText.toLowerCase();
            if (lowCaseText.includes(str)) {
                el.style.backgroundColor = bgColor;
                targetElements.push(el);
            }
        })
    }

    // 3 і ця
    clearHighlight = () => {
        targetElements.forEach((el) => {
            el.style.backgroundColor = null;
        })
        targetElements.length = 0;
    }

    popDownWindow = () => {
        if (String(newInput.value) == "") {
            newInput.style.boxShadow = "rgba(255, 0, 0, 0.49) 0px 0px 3px 3px inset";
        } else {
            insertArgs(newInput.value);
            newInput.value = "";

        }

    }

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
                visible = false;
                new_dos_wrapper.style.opacity = '0';

                if (event.target.tagName === "IMG") {
                    event.target.style.transform = startTransform;

                }

                setTimeout(() => {
                    new_dos_wrapper.style.display = "none";

                }, 300);

            } else {
                visible = true;

                if (event.target.tagName === "IMG") {
                    event.target.style.transform = "scale(-1,1)"
                }



                setTimeout(() => {
                    new_dos_wrapper.style.display = "flex";
                    new_dos_wrapper.style.opacity = '1';
                }, 300);

            }

        }

    }
    showPopUpWindow();

    submitInput.addEventListener("click", popDownWindow);

    // для цього треба повторити каррінг, щоб написати одну ф-ію, яка буде працювати в різному контексті
    // submitInput.addEventListener("mouseover", submHover);
    // clearButton.addEventListener("mouseover", hoverOnButton);

    clearButton.addEventListener("click", clearHighlight)
}
_DosFilter();