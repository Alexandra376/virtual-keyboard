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
  paragraph.className = "button";
  paragraph.textContent = "§";
  form.appendChild(paragraph);

  for (let i = 0; i <= 11; i++) {
    const numbers = document.createElement('button');
    numbers.className = "button";
    let differentSypbols = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "´"];
    numbers.textContent = `${differentSypbols[i]}`;
    form.appendChild(numbers);
  }

  const remove = document.createElement('button');
  remove.className = "button button-size-2 button-small-type button-right";
  remove.textContent = "delete";
  form.appendChild(remove);

  const tab = document.createElement('button');
  tab.className = "button button-size-2 button-small-type";
  tab.textContent = "tab";
  form.appendChild(tab);

  for (let i = 0; i < 13; i++) {
    const letterSymbols = document.createElement('button');
    letterSymbols.className = "button";
    let symbols = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"]; 
    letterSymbols.textContent = `${symbols[i]}`;
    form.appendChild(letterSymbols);
  }

  const capsLock = document.createElement('button');
  capsLock.className = "button button-size-3 button-small-type button-caps-lock";
  capsLock.textContent = "caps lock";
  form.appendChild(capsLock);
  
  for (let i = 0; i < 11; i++) {
    const letterSymbols_ = document.createElement('button');
    letterSymbols_.className = "button";
    let symbols_ = ["A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'"]; 
    letterSymbols_.textContent = `${symbols_[i]}`;
    form.appendChild(letterSymbols_);
  }

  const return_ = document.createElement('button');
  return_.className = "button button-size-3 button-small-type button-right";
  return_.textContent = "return";
  form.appendChild(return_);

  const shift_ = document.createElement('button');
  shift_.className = "button button-size-4 button-small-type";
  shift_.textContent = "shift";
  form.appendChild(shift_);

  for (let i = 0; i < 10; i++) {
    const letterSymbols__ = document.createElement('button');
    letterSymbols__.className = "button";
    let symbol = ["Z", "X", "C", "V", "B", "N", "M", ",", ".", "/"]; 
    letterSymbols__.textContent = `${symbol[i]}`;
    form.appendChild(letterSymbols__);
  };

  const shift__ = document.createElement('button');
  shift__.className = "button button-size-4 button-small-type";
  shift__.textContent = "shift";
  form.appendChild(shift__);

  for (let i = 0; i < 2; i++) {
  const ctrlOptionLeft = document.createElement('button');
  ctrlOptionLeft.className = "button button-size-6 button-small-type";
  let symbolsTwo = ["ctrl", "option"];
  ctrlOptionLeft.textContent = `${symbolsTwo[i]}`;
  form.appendChild(ctrlOptionLeft);
  };

  const commandLeft = document.createElement('button');
  commandLeft.className = "button button-size-2 button-small-type button_";
  commandLeft.textContent = "command";
  form.appendChild(commandLeft);

  const spacebar = document.createElement('button');
  spacebar.className = "button button-size-7";
  form.appendChild(spacebar);

  const commandRight = document.createElement('button');
  commandRight.className = "button button-size-2 button-small-type button-right button_";
  commandRight.textContent = "command";
  form.appendChild(commandRight);

  for (let i = 0; i < 2; i++) {
    const ctrlOptionRight = document.createElement('button');
    ctrlOptionRight.className = "button button-size-6 button-small-type button-right";
    let symbolsTwo = ["option", "ctrl"];
    ctrlOptionRight.textContent = `${symbolsTwo[i]}`;
    form.appendChild(ctrlOptionRight);
    };

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

