// Task priorities:
    // 1) зробити скрипт універсальним, розбивши його на css-маніпуляції
    // вийшло створити цілий клас з конструктором який створює елементи
    // 2) створити універсальні функції, які базуються на аргументах та колбеках



    class Dos_HTML_Element {
        constructor(html_tag, html_id, html_class, html_text) {
            this.html_tag = html_tag;
            this.html_id = html_id;
            this.html_class = html_class;
            this.createdNode = null;
           
        }
    // комент тут
        dos_createNode(string) {
            this.createdNode = document.createElement(this.html_tag);
            this.createdNode.id = this.html_id;
            this.createdNode.className = this.html_class;
            this.createdNode.innerText = String(string);

            // Строка 2* - єдиний не універсальний вираз
            // він каже, перед яким дочірнім елементом (тут <table class = "price-search">)
            // батька <div id = "divMain">
            // вставити щойно створений createdNode
            
            return this.createdNode;

        }

        dos_wrap_currentNode(idValue, position) {
            this.wrapper = document.createElement("div");
            this.wrapper.id = idValue;
            this.wrapper.style.cssText = `
                display: flex;
                flex-direction: row; 
                margin: 0.5em;
                padding: 1em;
                position: ${position};
                z-index: 100;
                background: darkgray;

                `
            this.wrapper.append(this.createdNode);
            console.log(this.wrapper);

            return this.wrapper;
            
            
        }


        dos_css_setSize(width, height, heightUnits, display = "flex") {
            let setStyle = this.createdNode.style; 
            setStyle.cssText = 
            `
                display: ${display};
                width: ${width}${heightUnits};
                height: ${height}${heightUnits};
                border: 1px solid;
                align-items: center;
                align-self: center;
                text-align: center;
                justify-content: center;
                padding: 0.5em;
                background-color: ;
                cursor: pointer;
            `
            // console.log(setStyle.cssText.split(";"))
        }
        
        
        get html_attributes() {
            return ` тег: ${this.html_tag} \n ідентифікатор: ${this.html_id} \n клас: ${this.html_class}`
        }
    
    }
    // константа, в яку записується новий елемент html
    let firstDiv = new Dos_HTML_Element("div", "dos_firstDiv", "dos_active"); 
    firstDiv.dos_createNode("TEXT");
    firstDiv.dos_css_setSize(5, 5, "em"); 
    document.body.prepend(firstDiv.dos_wrap_currentNode("dos_wrapper", "fixed"));
    
    let secondDiv = new Dos_HTML_Element("div", "dos_secondDiv");
    secondDiv.dos_createNode("");
    document.querySelector("#dos_wrapper").append(secondDiv.dos_wrap_currentNode("new_dos_wrapper", "none"));

    document.querySelector("#new_dos_wrapper").style.opacity = "0";
    document.querySelector("#new_dos_wrapper").style.transition = "all 0.2s cubic-bezier(0.51, 0.1, 0.96, 0.3) 0s";
    document.querySelector("#new_dos_wrapper").style.border = "1px solid";

    document.querySelector("#new_dos_wrapper").style.paddingLeft = "0.5em";
    document.querySelector("#new_dos_wrapper").style.paddingRight = "1em";
    document.querySelector("#new_dos_wrapper").style.marginLeft = "0.5em";

    

    let firstInput = new Dos_HTML_Element("input", "dos_wrapper_filter", "");
    let newInput = firstInput.dos_createNode("123123");
    newInput.style.height = "32px";
    newInput.style.alignSelf = "center";
    newInput.style.margin = "0.5em";
    document.querySelector("#new_dos_wrapper").append(newInput);


    let secondInput = new Dos_HTML_Element("input", "dos_submit_input", "button");
    let submitInput = secondInput.dos_createNode();
    document.querySelector("#new_dos_wrapper").append(submitInput);
    submitInput.type = "submit";
    submitInput.style.borderStyle = "none";
    submitInput.style.border = "1px solid";
    
    submitInput.style.background = "none";
    submitInput.style.height = "3em";
    submitInput.style.display = "flex";
    submitInput.style.alignSelf = "center";
    submitInput.style.cursor = "pointer";



    
    let input = document.querySelector("input");
    let targetElements = [];
    let vpNameList = document.querySelectorAll("td");

    function insertArgs(...args) {
        let arr = [...args];

        arr.forEach(function (el) {
            return highlightElements(el, "green")

        })

    }
    function highlightElements(str, color) {
        vpNameList.forEach(function (el, i) {
            let lowCaseText = el.innerText.toLowerCase();
            if (lowCaseText.includes(str)) {
                el.style.backgroundColor = color;
                return targetElements.push(el);
            }
            
        })

    }
    submitInput.onkeydown = function(e){
        if(e.keyCode === 13){
            popDownWindow();

        }

    }
    submitInput.onclick = function(e){
        popDownWindow();
 
    }
    function clearHighlight(){
        targetElements.forEach(function(el){
            el.style.backgroundColor = "";
        })
    }
    function popDownWindow() {
        if (String(newInput.value) == "") {
            newInput.style.boxShadow = "rgba(255, 0, 0, 0.49) 0px 0px 0px 3px inset";
        } else {
            insertArgs(newInput.value);
            newInput.value = "";
            
        }

    }


    

    (function showPopUpWindow() {
        let visible = false;
            document.querySelector("#dos_firstDiv").onclick = function showClose() {
                
            if (visible) {
                document.querySelector("#new_dos_wrapper").style.opacity = '0';
                setTimeout(() => {
                    document.querySelector("#new_dos_wrapper").style.display = "none";
                    visible = false;
                }, 199);
            } else {
                document.querySelector("#new_dos_wrapper").style.display = "flex";
                visible = true;
                setTimeout(() => {
                    document.querySelector("#new_dos_wrapper").style.opacity = '1';
                }, 199);
                
            }
        }
        document.querySelector("#dos_wrapper").onmouseover = function() {
            start_color = event.target.style.backgroundColor;
            if (event.target.id === firstDiv.html_id) {
                event.target.style.cssText += `
                    background-color: darkgray;
                    cursor: pointer;
                `;   
            }
        }
        document.querySelector("#dos_wrapper").onmouseout = function() {
            if (event.target.id === firstDiv.html_id) {
                event.target.style.backgroundColor = start_color;
            }
        }
    })();
    
    
    
    
    

    
    // чисто потестити, як будуть працювати ф-ії подій
    // (function testFunc(color, targetElem, start_color) {
        
    //     
    //     document.querySelector("#dos_firstDiv").onclick = function() {
            
    //     }
        
    // })('darkgrey');

    
     
    

    // елемент створюється та вставляється в документ у вигляді:
    //      <div id="dos_firstDiv" class="dos_active"> 
    
    
    // задаємо елементу width і height в будь-яких одиницях виміру
    


/*


function askWordsToHide() {
    let targetElements = [];
    
    let openPopButton = document.querySelector(".button");
        openPopButton.innerText = "SHOW FILTER"
        openPopButton.style.marginBottom = "0";
    
    let closePopButton = document.createElement("div");
    let blockWrapper = document.querySelector("#block-wrapper")
    let vpNameList = document.querySelectorAll("td");
    
    let input = document.createElement("input");
    let windowDiv = document.createElement("div");
        windowDiv.style.display = "none";
    let titleOfDiv = document.createElement("p");
    let clearFilter = document.createElement("div");

    let buttonsBlock = document.querySelector("#buttons");
        // buttonsBlock.style.display = flex;
        // buttonsBlock.style.flexDirection = column;
        
    // ф-ія, що приймає будь-яку кількість аргументів
    // перетворює в массив
    // перебирає масив, виконуючи для кожного ф-ію hideElements()

    function insertArgs(...args) {
        let arr = [...args];

        arr.forEach(function (el) {
            return highlightElements(el, "green")

        })

    }

    //ф-ія, що приховує заданий строчний аргумент
    function highlightElements(str, color) {
        vpNameList.forEach(function (el, i) {
            let lowCaseText = el.innerText.toLowerCase();
            if (lowCaseText.includes(str)) {
                el.style.backgroundColor = color;
                return targetElements.push(el);
            }
            
        })

    }

  


    // Enter натискаємо - функцію запускаємо
    input.onkeydown = function(e){
        if(e.keyCode === 13){
            popDownWindow();

        }

    }

    // ЛКМ жмякаю - ... і popUpWindow();
    closePopButton.onclick = function(e){
        popDownWindow();
 
    }

    // Відкриває вікно

    function modifyWindow() {
        
        blockWrapper.appendChild(windowDiv);
        // blockWrapper.insertBefore()
        console.log(this)
        if (windowDiv.style.display == "none") {
            closePopButton.className = "button";
            closePopButton.innerText = "close and apply";
            input.placeholder = "Words for search...";

            titleOfDiv.innerText = "filter".toUpperCase();       
            titleOfDiv.className = "flex-center";
            titleOfDiv.className = "title_of_window";
            
            windowDiv.style.display = "flex";
            windowDiv.id = "showPopUpWindow";
            windowDiv.appendChild(input);
            buttonsBlock.appendChild(closePopButton);
            buttonsBlock.appendChild(clearFilter);
            buttonsBlock.style.display = "flex";
            buttonsBlock.style.flexDirection = "column";
            buttonsBlock.style.width = "200px";
            windowDiv.appendChild(buttonsBlock);
            windowDiv.insertBefore(titleOfDiv, windowDiv.firstChild);
            
            
            clearFilter.innerText = "reset";
            clearFilter.style.display = "flex";
            clearFilter.className = "button";

            this.innerText = "HIDE FILTER";
            
        } else  {
            windowDiv.style.display = "none";
            this.innerText = "SHOW FILTER";
            
        }
    }

    function clearHighlight(){
        targetElements.forEach(function(el){
            el.style.backgroundColor = "";
        })
    }

    openPopButton.addEventListener("click", modifyWindow, false);
    clearFilter.addEventListener("click", clearHighlight, false); 


    // закриває вікно
    function popDownWindow() {
        if (String(input.value) == "") {
            input.style.boxShadow = "rgba(255, 0, 0, 0.49) 0px 0px 0px 3px inset";
        } else {
            insertArgs(input.value);
            input.value = "";
            
        }

    }
    


}
askWordsToHide();



*/
