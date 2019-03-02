document.onload = function () {
    for (i = 0; i <= 9; i++) {
        document.getElementById("button-" + i).onclick = clickNum;
    }
    document.getElementById("button-.").onclick = clickNum;

    document.getElementById("button-+").onclick = clickOp;
    document.getElementById("button--").onclick = clickOp;
    document.getElementById("button-*").onclick = clickOp;
    document.getElementById("button-/").onclick = clickOp;

    document.getElementById("button-=").onclick = clickEquals;

    document.getElementById("button-clr").onclick = clear;
};

var displayStr = "";
var opArray = [];
var clearNext = true;

function clickNum() {
    if (clearNext) {
        clear();
        clearNext = false;
    }

    if (this.innerHTML === "." && temp.indexOf(".") !== -1) {
        return;
    }

    displayStr += this.innerHTML;
    concatDisplay(this.innerHTML);
}

function clickOp() {
    if (clearNext) {
        clear();
        clearNext = false;
    }
    updateOpArray();
    opArray.push(this.innerHTML);
    concatDisplay(this.innerHTML);
}

function clickEquals() {

    updateOpArray();

    var err = false;

    var res = 0;
    var tempRes = 1;
    var outerState = "plus";
    var innerState = "multiply";

    opArray.forEach(function (val, i, array) {
        if (val === "+" || val === "-" || val === "*" || val === "/") {
            if (i - 1 < 0 || array[i - 1] === "+" || array[i - 1] === "-" || array[i - 1] === "*" || array[i - 1] === "/") {
                err = true;
                return;
            }
            if (val === "+") {
                if (outerState === "plus") {
                    res += tempRes;
                } else {
                    res -= tempRes;
                }
                outerState = "plus";
                tempRes = 1;
                innerState = "multiply";
            } else if (val === "-") {
                if (outerState === "plus") {
                    res += tempRes;
                } else {
                    res -= tempRes;
                }
                outerState = "minus";
                tempRes = 1;
                innerState = "multiply";
            } else if (val === "*") {
                innerState = "multiply";
            } else if (val === "/") {
                innerState = "divide";
            }
        } else {
            if (innerState === "multiply") {
                tempRes *= val;
            } else if (innerState === "divide") {
                tempRes /= val;
            }
        }
    });

    if (outerState === "plus") {
        res += tempRes;
    } else {
        res -= tempRes;
    }

    if (err) {
        document.getElementById("display").innerHTML = "Error de formato";
    } else {
        document.getElementById("display").innerHTML = res;
    }

    clearNext = true;
}

function updateOpArray() {
    if (displayStr !== "") {
        opArray.push(parseFloat(temp));
        displayStr = "";
    }
}

function concatDisplay(char) {
    document.getElementById("display").innerHTML += char;
}

function clear() {
    document.getElementById("display").innerHTML = "";
    displayStr = "";
    opArray = [];
}
