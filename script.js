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
mainBoy = document.querySelector(`div[class=mainCalculator]`)

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('clicked');
}

const buttons = Array.from(document.querySelectorAll('.button'));
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));

mainBoy.addEventListener('transitionend', removeTransition);

// Key Press Listener
window.addEventListener('keydown', pressKey);

function pressKey(e) {
  const key=document.querySelector(`div[data-key="${e.keyCode}"]`);
  console.log(key);
  if (key) {key.classList.add('clicked');  // prevents errors on random key presses
    mathinsides(key);
  }
}

//Mouse click Listener
buttons.forEach(key => key.addEventListener('click', event => {
  event.target.classList.add('clicked');
  mathinsides(key);
}));


//Calculator and Math functions
let varA = [0];
let varABig = 0;
let varB = [];
let varBBig;
let operand;
let inputStatus = 'takeA';
 
const calculate = function(a, b, operation) {
  return operation(a, b);
}



// come back and clean up divide by 0 sass!!
const myFunctions = {
  add: (a,b) => a + b,
  subtract: (a, b) => a - b,
  divide: function(a,b) { 
    if (b==0) {
      mainBoy.classList.add('hellnaw');
      clearAll();
      // updateDisplay("don't be dum");

      alert("every time you divide by 0 an angel loses its wings");

      return 0;
    } else {
    return a / b; }
    },
  multiply: (a,b) => a * b,
};

const clearVars = function() {  // Sets up to perform next operation
  varABig = calculate(varABig, varBBig, operand);
  updateDisplay(varABig);
  varA = [];
  varB = [];
  varBBig = undefined;
}

const clearAll = function(){  // Clears everything
  varA = [];
  varABig = undefined;
  varB = [];
  varBBig = undefined;
  operand = undefined;
  inputStatus = "takeA";
  updateDisplay('0');
}

const mathinsides = function(key) {
  if (!isNaN(Number(key.id))) {
    if (varA == []) inputStatus = "takeA"; // resets input if equal has already been pressed
    inPut(key.id);
  } else if (key.id === "clear") {
    clearAll(); 
  } 
  else if (key.id !== 'equals') {  
    inputStatus = 'takeB';
    if (typeof varABig === "number" && typeof varBBig === "number" && operand) {
      clearVars();
  } else if (!varABig) {
      varABig = 0;
  }
    operand = myFunctions[key.id];
  } else if (key.id === 'equals') {
    if (typeof varABig === "number" && typeof varBBig === "number" && operand) {
      clearVars();
      operand = undefined;
      inputStatus = "takeA";
    }
  }
}




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



  

// Operations

const updateDisplay = function(x) {
  document.getElementById("display").innerHTML = x;
}

