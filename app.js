let display = document.querySelector(".display");

let buttons = Array.from(document.querySelectorAll(".buttons"));
let result;

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "0";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch (e) {
          display.innerText = Error;
        }
        break;
      case "+/-":
        display.innerText = "-";
        break;

      case "*2":
        let passedT = display.innerText + "*2";
        display.innerText = eval(passedT);

        break;
      case "%":
        let passedText = display.innerText + "/100";
        display.innerText = eval(passedText);
        break;
      case "/2":
        let lol = display.innerText + "/2";
        display.innerText = eval(lol);
        break;

      default:
        if (display.innerText === "0" && e.target.innerText !== ".") {
          display.innerText = e.target.innerText;
        } else {
          display.innerText += e.target.innerText;
        }
    }
  });
});

e.onclick = function () {
  const min = Number(a.value) - Number(b.value);
  c.textContent = min;
};
e.onclick = function () {
  const min = Number(a.value) - Number(b.value);
  c.textContent = min;
};

