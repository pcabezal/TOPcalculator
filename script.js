// Animations
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('clicked');
}

const buttons = Array.from(document.querySelectorAll('.button'));
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));

mainBoy = document.querySelector(`div[class=mainCalculator]`)

// Display
const updateDisplay = function(x) {
  document.getElementById("display").innerHTML = x;
}

// Key Press Listener
window.addEventListener('keydown', pressKey);

function pressKey(e) {
  const key=document.querySelector(`div[data-key="${e.keyCode}"]`);
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
let typeNum = [];
let typeNumConc = 0;
let varA = 0;
let varB;
let operand;
let inputStatus = 'takeA';
 
const calculate = function(a, b, operation) {
  return operation(a, b);
}

// Math Functions
const myFunctions = {
  add: (a,b) => a + b,
  subtract: (a, b) => a - b,
  divide: function(a,b) { 
    if (b==0) {
      mainBoy.classList.add('hellnaw'); // calc flip on divide by 0
      setTimeout(() => {
        mainBoy.classList.remove('hellnaw');
      }, 750);            
      clearAll();
      return 0;
    } else {
    return a / b; }
    },
  multiply: (a,b) => a * b,
};

// Clears everything
const clearAll = function(){  
  varA = undefined;
  varB = undefined;
  typeNum = [];
  operand = undefined;
  inputStatus = "takeA";
  updateDisplay('0');
}

// Sets up to perform next operation
const clearVars = function() {  
  varA = calculate(varA, varB, operand);
  if (varA > 10000000000) {
    updateDisplay('too big :(')
  } else {
  updateDisplay(Math.round(varA*100000)/100000);
  }
  typeNum = []
  varB = undefined;
}

//Calculator inner workings
const mathinsides = function(key) {
  if (!isNaN(Number(key.id))) {
    if (varA == []) inputStatus = "takeA"; // resets input if equal has already been pressed
    inPut(key.id);

  } else if (key.id === "clear") {  //clear all
    clearAll();

  } else if (key.id=='decimal') {  //make sure decimal can be rationally added
    if (typeof typeNumConc == "number") { 
      if (!typeNum.find(e => e == '.')) {
        typeNum.push('.');
        typeNumConc = Number(typeNum.join(''));
        updateDisplay(typeNum.join(''));
      }
    }

  } else if (key.id=='backspace') {   // backspace one character
    typeNum.pop()
    typeNumConc = Number(typeNum.join(''));
    updateDisplay(typeNum.join(''));
    if (inputStatus == 'takeA') {
      varA = typeNumConc
    } else if (inputStatus == 'takeB') {
      varB = typeNumConc
    }

  } else if (key.id !== 'equals') {   // input operator
    inputStatus = 'takeB';
    typeNum = [];
    if (typeof varA === "number" && typeof varB === "number" && operand) {
      clearVars(); 
    }
    operand = myFunctions[key.id];

  } else if (key.id === 'equals') {  // equals
    if (typeof varA === "number" && typeof varB === "number" && operand) {
      clearVars();
      operand = undefined;
      inputStatus = "takeA";
    }
  }
 }

// translate key/mouse presses into numbers
const inPut = function(x) {      
  if (typeNum.length < 13) {
      typeNum.push(Number(x));
      typeNumConc = Number(typeNum.join(''));
      updateDisplay(typeNumConc);
      if (inputStatus == 'takeA') {
        varA = typeNumConc;
      } else if (inputStatus == 'takeB') {
        varB = typeNumConc;
      }
  }
}