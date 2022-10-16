let result_ = document.getElementById("resultButton");
result_.addEventListener("click", calculate);
function calculate() {
    let x = document.getElementById("Nr1").value;
    let y = document.getElementById("Nr2").value;
    let result = x + y;
    if (result) document.getElementById("answer").innerHTML = "The answer is " + result;
}

//# sourceMappingURL=index.aa69868b.js.map
