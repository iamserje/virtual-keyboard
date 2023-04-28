import { createComponent } from "./create-element.js";
import { createAlphabets } from "./alphabets.js"
import { createKey } from "./create-key.js";

export function createKeyboard(lang) {
   console.log(lang)
   const keyboard = createComponent('div', {
      className: 'keyboard'
   });

   let lower = 'upper';
   // let lang = getLanguage;
   let keyboardTemplate = createAlphabets(lang, lower);
   console.log('len', keyboardTemplate);
   for (let i=0; i<keyboardTemplate.length; i++) {
      const row = createComponent('div', {
         className: 'keyboard__row',
      });
      for (let j=0; j<keyboardTemplate[i].length; j++) {
         let key = createKey();
         key.textContent = String.fromCharCode(keyboardTemplate[i][j]);
         row.append(key);
         if (i === 0 && j === 0) {
            key.className += ' tilda';
         };
         if (i === 0 && j === keyboardTemplate[i].length-1) {
            const backspase = createKey(' backspase', 'Backspase');
            row.append(backspase);
         };
         if (i === 1 && j === 0) {
            const tab = createKey(' tab', 'Tab');
            row.prepend(tab);
         };
         if (i === 1 && j === keyboardTemplate[i].length-1) {
            const del = createKey(' del', 'Del');
            row.append(del);
         };
         if (i === 2 && j === 0) {
            const capsLock = createKey(' capsLock', 'CapsLock');
            row.prepend(capsLock);
         };
         if (i === 2 && j === keyboardTemplate[i].length-1) {
            key.className += ' enter';
            key.textContent = 'Enter';
         };
         if (i === 3 && j === 0) {
            const shiftleft = createKey(' shift-left', 'Shift');
            row.prepend(shiftleft);
         };
         if (i === 3 && j === keyboardTemplate[i].length-1) {
            const arrowup = createKey(' arrow-up', '▲');
            row.append(arrowup);
         };
         if (i === 3 && j === keyboardTemplate[i].length-1) {
            const shiftright = createKey(' shift-right', 'Shift');
            row.append(shiftright);
         };
         if (i === 4) {
            const ctrlleft = createKey(' ctrl-left', 'Ctrl');
            row.prepend(ctrlleft);
            row.children[1].remove();

            const win = createKey(' win', 'Win');
            row.append(win);

            const altLeft = createKey(' alt-left', 'Alt');
            row.append(altLeft);

            const spase = createKey(' space', ' ');
            row.append(spase);

            const altRight = createKey(' alt-right', 'Alt');
            row.append(altRight);

            const arrowleft = createKey(' arrow-left', '◄');
            row.append(arrowleft);

            const arrowdown = createKey(' arrow-down', '▼');
            row.append(arrowdown);

            const arrowright = createKey(' arrow-right', '►');
            row.append(arrowright);

            const ctrlright = createKey(' ctrl-right', 'Ctrl');
            row.append(ctrlright);
         };
      };
      keyboard.append(row);
   };
   return keyboard;
}