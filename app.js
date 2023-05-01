let body = document.querySelector('body');

function creatKeyBoard () { 
  let header = document.createElement('header');
  header.className = "header";
  body.appendChild(header);

  let title = document.createElement('h1');
  title.className = "header__title";
  header.appendChild(title);
  title.textContent = "Virtual Keyboard";

  let textarea = document.createElement('textarea');
  textarea.className = "header__input";
  textarea.placeholder = "Enter your text...";
  textarea.focus();
  header.appendChild(textarea);

  let div = document.createElement('div');
  div.className = "keyboard";
  header.appendChild(div);

  let paragraph = document.createElement('button');
  paragraph.className = "keyboard-button";
  paragraph.textContent = "§";
  div.appendChild(paragraph);

  for (let i = 0; i <= 11; i++) {
    let numbers = document.createElement('button');
    numbers.className = "keyboard-button";
    let differentSypbols = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "´"];
    numbers.textContent = `${differentSypbols[i]}`;
    div.appendChild(numbers);
  }

  let remove = document.createElement('button');
  remove.className = "keyboard-button button-size-2 button-small-type button-right button-delete";
  remove.id = 'delete';
  remove.textContent = "delete";
  div.appendChild(remove);

  let tab = document.createElement('button');
  tab.className = "keyboard-button button-size-2 button-small-type button-tab";
  tab.textContent = "tab";
  div.appendChild(tab);

  for (let i = 0; i < 13; i++) {
    let letterSymbols = document.createElement('button');
    letterSymbols.className = "keyboard-button";
    let symbols = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"]; 
    letterSymbols.textContent = `${symbols[i]}`;
    div.appendChild(letterSymbols);
  }

  let capsLock = document.createElement('button');
  capsLock.className = "keyboard-button button-size-3 button-small-type button-caps-lock";
  capsLock.textContent = "caps lock";
  div.appendChild(capsLock);
  
  for (let i = 0; i < 11; i++) {
    let letterSymbols_ = document.createElement('button');
    letterSymbols_.className = "keyboard-button";
    let symbols_ = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"]; 
    letterSymbols_.textContent = `${symbols_[i]}`;
    div.appendChild(letterSymbols_);
  }

  let return_ = document.createElement('button');
  return_.className = "keyboard-button button-size-3 button-small-type button-right button-return";
  return_.textContent = "return";
  div.appendChild(return_);

  let shift_ = document.createElement('button');
  shift_.className = "keyboard-button button-size-4 button-small-type";
  shift_.textContent = "shift";
  div.appendChild(shift_);

  for (let i = 0; i < 10; i++) {
    let letterSymbols__ = document.createElement('button');
    letterSymbols__.className = "keyboard-button";
    let symbol = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]; 
    letterSymbols__.textContent = `${symbol[i]}`;
    div.appendChild(letterSymbols__);
  };

  let arrowUp = document.createElement('button');
  arrowUp.className = "keyboard-button button-small";
  arrowUp.textContent = "▲";
  div.appendChild(arrowUp);

  let shift__ = document.createElement('button');
  shift__.className = "keyboard-button button-size-4 button-small-type";
  shift__.textContent = "shift";
  div.appendChild(shift__);

  let ctrlLeft = document.createElement('button');
  ctrlLeft.className = "keyboard-button button-size-6 button-small-type button-right button-keyboard button-ctrl";
  ctrlLeft.textContent = "ctrl";
  div.appendChild(ctrlLeft);

  let optionLeft = document.createElement('button');
  optionLeft.className = "keyboard-button button-size-6 button-small-type button-right button-keyboard button-option";
  optionLeft.textContent = "option";
  div.appendChild(optionLeft);

  let commandLeft = document.createElement('button');
  commandLeft.className = "keyboard-button button-size-2 button-small-type button_";
  commandLeft.textContent = "command";
  div.appendChild(commandLeft);

  let spacebar = document.createElement('button');
  spacebar.className = "keyboard-button button-size-7";
  div.appendChild(spacebar);

  let optionRight = document.createElement('button');
  optionRight.className = "keyboard-button button-size-6 button-small-type button-right button-keyboard button-option";
  optionRight.textContent = "option";
  div.appendChild(optionRight);

  let arrowLeft = document.createElement('button');
  arrowLeft.className = "keyboard-button button-small";
  arrowLeft.textContent = "◄";
  div.appendChild(arrowLeft);

  let arrowDown = document.createElement('button');
  arrowDown.className = "keyboard-button button-small";
  arrowDown.textContent = "▼";
  div.appendChild(arrowDown);

  let arrowRight = document.createElement('button');
  arrowRight.className = "keyboard-button button-small";
  arrowRight.textContent = "►";
  div.appendChild(arrowRight);

  let ctrlRight = document.createElement('button');
  ctrlRight.className = "keyboard-button button-size-6 button-small-type button-right button-keyboard button-ctrl";
  ctrlRight.textContent = "ctrl";
  div.appendChild(ctrlRight);

  let audio = document.createElement('audio');
  audio.id = "sound";
  header.appendChild(audio);
  
  let source = document.createElement('source');
  source.src = "sounds/sound.mp3";
  audio.appendChild(source);

  let description = document.createElement('h2');
  description.className = "description";
  description.textContent = "The keyboard was created on the macOS operating system. For to switch a language you have to press left ctrl + space."
  header.appendChild(description);
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
    if (button_[i].innerHTML == index.key.toLowerCase()) {
      button_[i].classList.add('active');
    }
  }
  input_.innerHTML+=index.key
  if(index.key == 'Backspace') {
    input_.innerHTML = input_.innerHTML.slice(0, -10);
  }
});

document.body.addEventListener('keyup', function(index){
  for(let j = 0 ; j < button_.length; j++){
      if(button_[j].innerHTML == index.key.toLowerCase()){
          button_[j].classList.remove('active');
    }
  }
});

/*buttons with mouse*/
for (let x of button_) {
    x.addEventListener('mousedown', function() {
      x.classList.add("active");
      input_.innerHTML += x.innerHTML;
    })
  }
  
  for (let y of button_) {
    y.addEventListener('mouseup', function() {
        y.classList.remove('active')
    })
  }

  space.addEventListener('mousedown', function() {
    space.classList.add("active");
    input_.innerHTML += " ";
  })
  space.addEventListener('mouseup', function() {
    space.classList.remove('active');
  })

  function back() {
    delete_.className += ' active';
    input_.innerHTML = input_.innerHTML.slice(0, -7);
  }
  delete_.onmousedown = back;
  delete_.onmouseup = function () {
    delete_.classList.remove('active');
  }

  document.body.addEventListener('keydown', function(e) {
    for(let i = 0; i < button_.length; i++) {
      let test = document.querySelectorAll(".keyboard-button")[i].textContent.toString();
      if (e.code == 'CapsLock' && test.length === 1) {
        button_[i].innerHTML = button_[i].textContent.toUpperCase()
      }
    }
  });

  document.body.addEventListener('keyup', function(e) {
    for(let i = 0; i < button_.length; i++) {
      let test = document.querySelectorAll(".keyboard-button")[i].textContent.toString();
      if (e.code == 'CapsLock' && test.length === 1) {
        button_[i].innerHTML = button_[i].textContent.toLowerCase();
      }
    }
  });

  capsLock.addEventListener('mousedown', function() {
    for(let i = 0; i < button_.length; i++) {
      let test = document.querySelectorAll(".keyboard-button")[i].textContent.toString();
      if (test.length === 1) {
        button_[i].textContent = button_[i].textContent.toUpperCase()
      }
    }
  });







  





  