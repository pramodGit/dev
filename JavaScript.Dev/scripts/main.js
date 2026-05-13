import "/styles/normalize.css";
import "/styles/styles.css";
import "/styles/accordian.css";
import { loadMiddlePanelContent, loadRightPanelContent } from './helper.js';

fetch("includes/header.html")
    .then(response => {
        return response.text();
    })
    .then(data => {
        document.querySelector("header").innerHTML = data;
        (async (url) => {
            // const response = await fetch(url);
            // const navigation = await response.json();
            //document.getElementById("navigation").innerHTML = navigation.nav;
            // let navigationDiv = document.getElementById("navigation");
            // const createHTMLElement = (HtmlTag, obj) => {
            //     let element = document.createElement(HtmlTag);
            //     element.textContent = obj.title;
            //     element.setAttribute("href", obj.link);
            //     if (obj.title.toLowerCase() === 'javascript') {
            //         element.setAttribute("aria-current", "page");
            //     }
            //     return element;
            // };
            // for(let n in navigation) {
            //     navigationDiv.appendChild(createHTMLElement('a', navigation[n]));
            // }
            // let theme = document.createElement('div');
            // theme.textContent = 'Theme';
            // theme.setAttribute("class", "theme");
            // navigationDiv.appendChild(theme);
            
        })(`https://dzs4fietmtf6hgobtp6qchdeoi0nflro.lambda-url.ap-south-1.on.aws/?javascript=true`);
        
    });
fetch("includes/leftPanel.html")
    .then(response => {
        return response.text();
    })
    .then(data => {
        document.getElementById("leftPanel").innerHTML = data;
        const eventHandler = (e) => {
            e.stopPropagation();
            //e.preventDefault();
            const idVal = e.target.getAttribute("id");
            const view = e.target.getAttribute("data-include");
            let htmlMiddlePage = '';
            let htmlRightPage = '';
            if(idVal === "javascriptDesignPatern") {
                htmlMiddlePage = "javascript-design-patern.html";
                htmlRightPage = "none-right-panel.html";
            } else if (idVal === "promiseAsync") {
                htmlMiddlePage = "promise-async.html";
                htmlRightPage = "promise-all-right-panel.html";
            } else if (idVal === "promiseAll") {
                htmlMiddlePage = "async-promise-all.html";
                htmlRightPage = "none-right-panel.html";
            } else if (idVal === "promiseAllSettled") {
                htmlMiddlePage = "promise-all-settled.html";
                htmlRightPage = "none-right-panel.html";
            } else if (idVal === "typeScriptEnumType") {
                htmlMiddlePage = "typescript-enum-vs-type.html";
                htmlRightPage = "typescript-enum-vs-type-right-panel.html";
            } else if (idVal === "qa") {
                htmlMiddlePage = "questions-answers-accordian.html";
                htmlRightPage = "none-right-panel.html";
            }
            if(view === "view") {
                loadMiddlePanelContent(htmlMiddlePage);
                const main = document.getElementsByTagName("main")[0];
                const rightPanel = document.getElementById("rightPanel");
                if(htmlRightPage !== 'none-right-panel.html') {
                    loadRightPanelContent(htmlRightPage);
                    main.classList.remove('two-column');
                    rightPanel.classList.remove('none');
                } else {
                    main.classList.add('two-column');
                    rightPanel.classList.add('none');
                }
            }
        };
        document.body.addEventListener("click", eventHandler);
        // document.body.removeEventListener("click", eventHandler);
    });
fetch("includes/middlePanel.html")
    .then(response => {
        return response.text();
    })
    .then(data => {
        document.getElementById("middlePanel").innerHTML = data;
        document.body.addEventListener("click", (e) => {
            e.stopPropagation();
            const element = e.target;
            if(element.hasAttribute("data-accordian")) {
                const accordian = accordianEffect(element);
                accordian(element);
            }
            
        });
    });
fetch("includes/rightPanel.html")
    .then(response => {
        return response.text();
    })
    .then(data => {
        document.getElementById("rightPanel").innerHTML = data;
    });
fetch("includes/footer.html")
    .then(response => {
        return response.text();
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });

function accordianEffect(element) {
    const accordian = element.closest("#accordian");
    const wrapper = accordian.querySelectorAll(".wrapper");
    return function() {
        wrapper.forEach(v => v.classList.remove("active"));
        element.parentElement.classList.add("active");
    }
}

