import "../styles/normalize.css";
import "../styles/styles.css";

fetch("../includes/header.html")
    .then(response => {
        return response.text();
    })
    .then(data => {
        document.querySelector("header").innerHTML = data;
    });
fetch("../includes/leftPanel.html")
    .then(response => {
        return response.text();
    })
    .then(data => {
        document.getElementById("leftPanel").innerHTML = data;
        document.getElementById("handleErrorsNode").addEventListener("click", (event) => {
            event.stopPropagation();
            fetch("./pages/global-error-handler-in-express.html")
                .then(response => {
                    return response.text();
                })
                .then(data => {
                    document.querySelector("#middlePanel").innerHTML = data;
                });
        });
    });
fetch("../includes/middlePanel.html")
    .then(response => {
        return response.text();
    })
    .then(data => {
        document.getElementById("middlePanel").innerHTML = data;
    });
fetch("../includes/rightPanel.html")
    .then(response => {
        return response.text();
    })
    .then(data => {
        document.getElementById("rightPanel").innerHTML = data;
    });
fetch("./includes/footer.html")
    .then(response => {
        return response.text();
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });


