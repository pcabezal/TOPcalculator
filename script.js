//Math Functions
// const add = function(a, b) {
// 	return a + b;
// };

// const subtractttt = function(a, b) {
// 	return a - b;
// };
// const divide = function(a, b) {
// 	return a / b;
// };

// const multiply = function(a, b) {
//   return a * b;
// };

// const power = function(a, b) {
//     return a ** b;	
//   };
 
// const factorial = function(n) {
//   if (n === 0) return 1;
//   let product = 1;
//   for (let i = n; i > 0; i--) {
//     product *= i;
//   }
//   return product;
// };


// Button animations
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('clicked');
}

const buttons = Array.from(document.querySelectorAll('.button'));
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));

// Mouse Click Listener
function pressKey(e) {
  const key=document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (key) {key.classList.add('clicked');
    inPut(key.id);}
}



// Key Press Listener
window.addEventListener('keydown', pressKey);

let varA = [];
let varABig;
let varB = [];
let varBBig;
let operand;
let inputStatus = 'takeA';
 
const calculate = function(a, b, operation) {
  return operation(a, b);
}

const myFunctions = {
  add: (a,b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a,b) => a / b,
  multiply: (a,b) => a * b,
};

const clearVars = function() {
  varA = [];
  varB = [];
  varBBig = undefined;
}

buttons.forEach(key => key.addEventListener('click', event => {
   event.target.classList.add('clicked');
   if (!isNaN(Number(key.id))) {
      inPut(key.id);
   } else if (key.id === "clear") {
      clearAll();
   } else if (key.id !== 'equals') {  
      inputStatus = 'takeB';
      if (varABig && varBBig && operand) {
        varABig = calculate(varABig, varBBig, operand);
        updateDisplay(varABig);
        clearVars();
      }
      operand = myFunctions[key.id];

      // clearVars();
   } else if (key.id === 'equals') {
      if (varABig && varBBig && operand) {
        console.log("varABig = " + varABig + ", varBBig = " + varBBig + ", operand = " + operand);
        console.log("results = " + calculate(varABig, varBBig, operand));

        varABig = calculate(varABig, varBBig, operand);
        updateDisplay(varABig);
        clearVars();
        // updateDisplay(calculate(varABig, varBBig, operand));
      }
   }
  }));

const inPut = function(x) {
  if (inputStatus == "takeA") {
    varA.push(Number(x));
    varABig = Number(varA.join(''));
    updateDisplay(varABig);
  } else if (inputStatus =="takeB") {
    varB.push(Number(x));
    varBBig = Number(varB.join(''));
    updateDisplay(varBBig);
  }

}


// input iffy version
// const inPut = function(x) {
//     if (!varA) {
//        varA = Number(x);
//        updateDisplay(varA);
//     } else if (!varB) {
//        varB = Number(x);
//        updateDisplay(varB);
//     }
// }



const clearAll = function(){
  console.log('clear');
  varA = [];
  varABig = undefined;
  varB = [];
  varBBig = undefined;
  operand = undefined;
  inputStatus = "takeA";
  updateDisplay('0');
}
  

// Operations
let result;

const updateDisplay = function(x) {
  document.getElementById("display").innerHTML = x;
}

// 

// console.log(calculate(3,5,subtract))
// calculate(varA, varB, operand);
// console.log(buttons)
  