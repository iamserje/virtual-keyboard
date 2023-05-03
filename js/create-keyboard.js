import { createComponent } from "./create-element.js";
import { createAlphabets } from "./alphabets.js"
import { createKey } from "./create-key.js";

export function createKeyboard(lang = 'en', layout = 'lower') {
   // console.log('dada', lang)
   const keyboard = createComponent('div', {
      className: 'keyboard',
   });

   const keyCodes = [
      ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
      ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Del'],
      ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
      ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftLeft'],
      ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltLeft', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlLeft']
   ];

   let keyboardTemplate = createAlphabets(lang, layout);
   // console.log('len', keyboardTemplate);
   for (let i=0; i<keyCodes.length; i++) {
      const row = createComponent('div', {
         className: 'keyboard__row',
      });
      for (let j=0; j<keyCodes[i].length; j++) {
         let key = createKey(keyCodes[i][j], keyboardTemplate[i][j]);

         if (keyCodes[i][j] === 'ShiftLeft' && j > 0) {
            key.classList.add('ShiftRight');
         }
         if (keyCodes[i][j] === 'ControlLeft' && j > 0) {
            key.classList.add('ControlRight');
         }
         if (keyCodes[i][j] === 'AltLeft' && j == 4) {
            key.classList.add('AltRight');
         }
         row.append(key);
      };
      keyboard.append(row);
   };
   return keyboard;
}