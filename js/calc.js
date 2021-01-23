const expBox = document.querySelector("#expression-box");
const resultBox = document.querySelector("#result-box");
const padUnits = document.querySelectorAll(".pad-unit");
const equalsBtn = document.querySelector(".equals");

let expression = "";
let calculationHistory = [];
let hasClickedEquals = false;
let previousExp = "";

const clearScreen = () => {
  expBox.innerHTML = "";
  resultBox.innerHTML = "";
};

const evaluateExp = (exp) => {
  expBox.innerHTML = "";
  let evaluated;
  try {
    evaluated = eval(exp);
    if (evaluated === undefined) {
      resultBox.innerHTML = "";
    }
  } catch (error) {
    resultBox.innerHTML = "Syntax Error";
  }

  return evaluated;
};

const insertExp = (exp) => {
  // Validate the characters before inserting them into the expression string
  if (exp === "+" || exp === "-" || exp === "*" || exp === "/" || exp === "%") {
    //   If it's a regular arithmetic operator, show it in a span
    expBox.innerHTML += `<span>${exp}</span>`;
    hasClickedEquals = false;
  } else if (exp === "=") {
    //   Run an evaluation function
    resultBox.innerHTML = evaluateExp(expression);
    calculationHistory.push(expression);
    previousExp += expression + ",";
  } else {
    //   It's a number, so show it like that
    expBox.innerHTML += exp;
  }

  // Build the expression String
  expression += exp;
};

padUnits.forEach((unit) => {
  unit.addEventListener("click", () => {
    if (unit.innerHTML === "C") {
      clearScreen();
    } else if (unit.innerHTML === "=") {
      resultBox.innerHTML = evaluateExp(expression);
      previousExp += expression + ",";
      calculationHistory = previousExp.split(",");
      setTimeout(() => {
        expression = "";
      }, 1000);
    } else if (unit.innerHTML === "+/-") {
      console.log("Coming soon");
    } else {
      insertExp(unit.innerHTML);
    }
  });
});

equalsBtn.addEventListener("click", () => {
  resultBox.innerHTML = evaluateExp(expression);
});
