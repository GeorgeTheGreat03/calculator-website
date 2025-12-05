const display = document.getElementById("display");
const preview = document.getElementById("preview");

function addToDisplay(value) {
    display.value += value;
    showPreview();
}

function resetCalc() {
    display.value = "";
    preview.innerText = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
    showPreview();
}

function calculate() {
    try {
        display.value = eval(display.value);
        preview.innerText = "";
    } catch {
        preview.innerText = "Error";
    }
}

function showPreview() {
    try {
        const result = eval(display.value);
        if (!isNaN(result)) {
            preview.innerText = "= " + result;
        }else{
            preview.innerText = "";
        }
    } catch {
        preview.innerText = "";
    }
}

document.addEventListener("keydown", function(e) {
    const key = e.key;

    if (!isNaN(key) || "+-*/.".includes(key)) {
        addToDisplay(key);
    }

    if (key === "Enter") {
        calculate();
    }

    if (key === "Backspace") {
        backspace();
    }

    if (key === "Escape") {
        resetCalc();
    }
});
