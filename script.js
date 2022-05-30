//Math Functions
// const add = function(a, b) {
// 	return a + b;
// };

const subtract = function(a, b) {
	return a - b;
};

const divide = function(a, b) {
	return a / b;
};

const multiply = function(a, b) {
  return a * b;
};

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

let varA;
let varB;
let operand;
let fnstring;
let fnparams = [1,2,3];
let fn = window[fnstring];
if (typeof fn === "function") fn.apply(null, fnparams);
 
const add = (a,b) => a + b;
 
const calculate = function(a, b, operation) {
  console.log(operation);
  console.log(typeof operation);
  return operation(a, b);
}

// console.log(operation);
// console.log(typeof operation);
// console.log(calculate(2, 7, add));

buttons.forEach(key => key.addEventListener('click', event => {
   event.target.classList.add('clicked');
   if (!isNaN(Number(key.id))) {
     inPut(key.id);
   } else if (key.id !== 'equals') {
     operand = key.id;
   } else if (key.id === 'equals') {
    //  console.log('im trying i swear ' + varA + operand + varB)
     console.log(calculate(varA, varB, operand));
    //  console.log('im trying i swear2 ' + varA + operand + varB)
   }
  }));

const inPut = function(x) {
    if (!varA) {
       varA = Number(x);
       updateDisplay(varA);
    } else if (!varB) {
       varB = Number(x);
       updateDisplay(varB);
    }
}
  

// Operations

let displayNum;
let displayNumConc;
let result;




// const operate = function(operator,a,b) {
//     return [operator](a,b);
// }

const updateDisplay = function(x) {
  document.getElementById("display").innerHTML = x;
}

// 


// console.log(calculate(3,5,subtract))

// calculate(varA, varB, operand);



// console.log(buttons)
  