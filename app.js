const body = document.querySelector('body');

function creatKeyBoard () { 
  const header = document.createElement('header');
  header.className = "header";
  body.appendChild(header);

  const title = document.createElement('h1');
  title.className = "header__title";
  header.appendChild(title);
  title.textContent = "Virtual Keyboard";

  const textarea = document.createElement('textarea');
  textarea.className = "header__input";
  textarea.ariaPlaceholder = "Enter your text....";
  textarea.focus();
  header.appendChild(textarea);

  const form = document.createElement('form');
  form.className = "keyboard";
  header.appendChild(form);

  const paragraph = document.createElement('button');
  paragraph.className = "keyboard-button";
  paragraph.textContent = "§";
  form.appendChild(paragraph);

  for (let i = 0; i <= 11; i++) {
    const numbers = document.createElement('button');
    numbers.className = "keyboard-button";
    let differentSypbols = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "´"];
    numbers.textContent = `${differentSypbols[i]}`;
    form.appendChild(numbers);
  }

  const remove = document.createElement('button');
  remove.className = "keyboard-button button-size-2 button-small-type button-right button-delete";
  remove.textContent = "delete";
  form.appendChild(remove);

  const tab = document.createElement('button');
  tab.className = "keyboard-button button-size-2 button-small-type button-tab";
  tab.textContent = "tab";
  form.appendChild(tab);

  for (let i = 0; i < 13; i++) {
    const letterSymbols = document.createElement('button');
    letterSymbols.className = "keyboard-button";
    let symbols = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"]; 
    letterSymbols.textContent = `${symbols[i]}`;
    form.appendChild(letterSymbols);
  }

  const capsLock = document.createElement('button');
  capsLock.className = "keyboard-button button-size-3 button-small-type button-caps-lock";
  capsLock.textContent = "caps lock";
  form.appendChild(capsLock);
  
  for (let i = 0; i < 11; i++) {
    const letterSymbols_ = document.createElement('button');
    letterSymbols_.className = "keyboard-button";
    let symbols_ = ["A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'"]; 
    letterSymbols_.textContent = `${symbols_[i]}`;
    form.appendChild(letterSymbols_);
  }

  const return_ = document.createElement('button');
  return_.className = "keyboard-button button-size-3 button-small-type button-right button-return";
  return_.textContent = "return";
  form.appendChild(return_);

  const shift_ = document.createElement('button');
  shift_.className = "keyboard-button button-size-4 button-small-type";
  shift_.textContent = "shift";
  form.appendChild(shift_);

  for (let i = 0; i < 10; i++) {
    const letterSymbols__ = document.createElement('button');
    letterSymbols__.className = "keyboard-button";
    let symbol = ["Z", "X", "C", "V", "B", "N", "M", ",", ".", "/"]; 
    letterSymbols__.textContent = `${symbol[i]}`;
    form.appendChild(letterSymbols__);
  };

  const arrowUp = document.createElement('button');
  arrowUp.className = "keyboard-button button-small";
  arrowUp.textContent = "▲";
  form.appendChild(arrowUp);

  const shift__ = document.createElement('button');
  shift__.className = "keyboard-button button-size-4 button-small-type";
  shift__.textContent = "shift";
  form.appendChild(shift__);

  const ctrlLeft = document.createElement('button');
  ctrlLeft.className = "keyboard-button button-size-6 button-small-type button-right button-keyboard button-ctrl";
  ctrlLeft.textContent = "ctrl";
  form.appendChild(ctrlLeft);

  const optionLeft = document.createElement('button');
  optionLeft.className = "keyboard-button button-size-6 button-small-type button-right button-keyboard button-option";
  optionLeft.textContent = "option";
  form.appendChild(optionLeft);

  const commandLeft = document.createElement('button');
  commandLeft.className = "keyboard-button button-size-2 button-small-type button_";
  commandLeft.textContent = "command";
  form.appendChild(commandLeft);

  const spacebar = document.createElement('button');
  spacebar.className = "keyboard-button button-size-7";
  form.appendChild(spacebar);

  const optionRight = document.createElement('button');
  optionRight.className = "keyboard-button button-size-6 button-small-type button-right button-keyboard button-option";
  optionRight.textContent = "option";
  form.appendChild(optionRight);

  const arrowLeft = document.createElement('button');
  arrowLeft.className = "keyboard-button button-small";
  arrowLeft.textContent = "◄";
  form.appendChild(arrowLeft);

  const arrowDown = document.createElement('button');
  arrowDown.className = "keyboard-button button-small";
  arrowDown.textContent = "▼";
  form.appendChild(arrowDown);

  const arrowRight = document.createElement('button');
  arrowRight.className = "keyboard-button button-small";
  arrowRight.textContent = "►";
  form.appendChild(arrowRight);

  const ctrlRight = document.createElement('button');
  ctrlRight.className = "keyboard-button button-size-6 button-small-type button-right button-keyboard button-ctrl";
  ctrlRight.textContent = "ctrl";
  form.appendChild(ctrlRight);

  const audio = document.createElement('audio');
  audio.id = "sound";
  header.appendChild(audio);
  
  const source = document.createElement('source');
  source.src = "sounds/sound.mp3";
  audio.appendChild(source);

  const description = document.createElement('h2');
  description.className = "description";
  description.textContent = "The keyboard was created on the macOS Ventura 13.3.1 operating system. For to switch a language you have to press left ctrl + space."
  header.appendChild(description);

  const buttonSound = document.querySelector('button');
  buttonSound.onclick = new Audio("sounds/sound.mp3").play();
}
creatKeyBoard();


let input_ = document.querySelector('.header__input');
let button_ = document.querySelectorAll('.keyboard-button');
let delete_ = document.querySelector('.button-delete');
let space = document.querySelector('.button-size-7');
let tab = document.querySelector('.button-tab');
let capsLock = document.querySelector('.button-caps-lock');
let shift = document.querySelector('.button-size-4');
let ctrl = document.querySelector('.button-ctrl');
let option = document.querySelector('.button-option');
let command = document.querySelector('.button_');
let return_ = document.querySelector('.button-return');


/*Connection with external keyboard*/

document.body.addEventListener('keydown', function(index) {
  for (let i = 0; i < button_.length; i++) {
    if (button_[i].innerHTML == index.key.toUpperCase()) {
      button_[i].classList.add('active');
    }
  }
  input_.innerHTML+=index.key
  if(index.key == 'delete_') {
    input_.innerHTML = input_.innerHTML.slice(0, -10);
  }
})

document.body.addEventListener('keyup', function(index){
  for(let j = 0 ; j < button_.length; j++){
      if(button_[j].innerHTML == index.key.toUpperCase()){
          button_[j].classList.remove('active');
    }
  }
})

/*buttons with mouse*/

for (let x of button_) {
  x.addEventListener('mousedown', function() {
    x.className = "active";
    input_.innerHTML += x.innerHTML;
  })
}

for (let y of button_) {
  y.addEventListener('mouseup', function() {
    y.className = '';
  })
}
// space.addEventListener('mousedown', function() {
//   space.classList.add('active');
//   input_.innerHTML += "";
// })
// space.addEventListener('mouseup', function() {
//   space.classList.remove('active');
// })
// function back() {
//   delete_.className += "active";
//   input_.innerHTML = input_.innerHTML.slice(0, -1);
// }
// delete_.onmousedown = back;
// delete_.onmousedown = function () {
//   delete_.classList.remove('active');
// }




