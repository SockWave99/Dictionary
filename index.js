let list = []

function createText(text) {
    let div1 = document.getElementsByTagName("div")[0];
    let textDiv = document.createElement("div");
    div1.appendChild(textDiv);
    textDiv.innerHTML = text;
    textDiv.id = "textDiv";
}

function checkIfExists () {
    if (document.getElementById("textDiv") != null) {
        document.getElementsByTagName("div")[0].removeChild(document.getElementById("textDiv"));
    }
}

submitBtn.addEventListener("click", () => {
    let word = document.getElementById("inputText").value;
    if (!list.includes(word)) {
        list.push(word);
        checkIfExists();
    }
    else if (document.getElementById("textDiv") == null) {
        createText("This word has already been added.");
    }
});

searchBtn.addEventListener("click", () => {
    let word = document.getElementById("inputSearch").value;
    if (list.includes(word)) {
        checkIfExists();
        createText("This word exists in the list.");
    }
    else {
        checkIfExists();
        createText("This word doesn't exist in the list.");
    }
});