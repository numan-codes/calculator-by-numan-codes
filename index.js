var result = document.getElementById("result");

function display(number){
    result.value += number;
}

function calculate() {
    try {
        let expression = result.value;

        // convert symbols to JS operators
        expression = expression.replace(/x/g, "*");
        expression = expression.replace(/÷/g, "/");
        expression = expression.replace(/%/g, "/100");

        let final_result = Function('"use strict"; return (' + expression + ')')();
        result.value = final_result;

    } catch (error) {
        result.value = "Error";
    }
}

function clrs() {
    result.value = "";
}

function dle() {
    result.value = result.value.slice(0, -1);
}