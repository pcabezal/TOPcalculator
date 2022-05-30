//Math Functions
// const add = function(a, b) {
// 	return a + b;
// };

const subtractttt = function(a, b) {
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

let varA = [];
let varABig;
let varB = [];
let varBBig = 4
let operand;
 
const adddd = (a,b) => a + b;
 
const calculate = function(a, b, operation) {
  // console.log(operation);
  // console.log(typeof operation);
  return operation(a, b);
}

const myFunctions = {
  add: (a,b) => a + b,
  subtract: (a, b) => a - b,
    
  };
  


  // const myFunctions = {
  //   add: add(),
  //   subtract: subtract()
  //   };
    
  //   operand = myFunctions[key.id]

// console.log(operation);
// console.log(typeof operation);
// console.log(calculate(2, 7, add));

buttons.forEach(key => key.addEventListener('click', event => {
   event.target.classList.add('clicked');
   if (!isNaN(Number(key.id))) {
     inPut(key.id);
   } else if (key.id === "clear") {
    clearAll();
   }
   else if (key.id !== 'equals') {
    operand = myFunctions[key.id];
   } else if (key.id === 'equals') {
       console.log("results = " + calculate(varABig, varBBig, operand));
      updateDisplay(calculate(varABig, varBBig, operand));
   }
  }));


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

const inPut = function(x) {

     varA.push(Number(x));
     varABig = Number(varA.join(''));
     updateDisplay(varABig);

}

const clearAll = function(){
  console.log('clear');
  varA = [];
  varABig = [];
  varB = [];
  varBBig = [];
  updateDisplay(varABig);
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
  