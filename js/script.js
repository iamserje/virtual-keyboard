import { createKeyboard } from "./create-keyboard.js";
import { createPage } from "./create-page.js";
let lang = 'en';
let capsOnOf = 'off';
let shiftOnOf = 'off';

// Capsloc
// if (ev.target.closest('.CapsLock')) {
//    console.log(ev.getModifierState('CapsLock'))
// };

createPage(lang);

function changeLanguageMark() {
   // let flag = false;
   // document.addEventListener('keydown', function(ev) {
   //    if (ev.code === 'AltLeft') {
   //       flag = true;
   //    }
   //    if (ev.code === 'ControlLeft' && flag) {
   //       flag = false;
   //       if (lang === 'en') {
   //          lang = 'rus';
   //       } else {
   //          lang = 'en';
   //       }
   //       console.log('lang of page: ', lang);
   //          createPage(lang);
   //    }
   // });


   const codes = ['AltLeft', 'ControlLeft'];
   let pressed = new Set();
   document.addEventListener('keydown', function (ev) {
      pressed.add(ev.code);
      for (let cod of codes) {
         if (!pressed.has(cod)) {
            return;
         }
      };
      pressed.clear();
      if (lang === 'en') {
         lang = 'rus';
      } else {
         lang = 'en';
      }
      console.log(lang);
      createPage(lang);
      workKeyboard()
      console.log('klava', document.querySelector('.keyboard'));
   });
   document.addEventListener('keyup', function (ev) {
      pressed.delete(ev.code);
   });
}
changeLanguageMark();


function workKeyboard() {
   // event to add to key ckass active for animate press action:
   document.addEventListener('keydown', function (ev) {
      let keyCod = ev.code ? ev.code : 'ShiftLeft';
      console.log(keyCod)
      document.querySelector(`.${keyCod}`).classList.add('active');
      setTimeout(() => { document.querySelector(`.${keyCod}`).classList.remove('active'); }, 100)
   });

   // to print by clicking by mouse:
   const keboard = document.querySelector('.keyboard');
   const textarea = document.querySelector('.textarea');
   keboard.addEventListener('click', function (ev) {
      textarea.focus();
      if (ev.target.closest('.keyboard__key') && !ev.target.closest('.ShiftLeft')) {
         if (document.querySelector('.ShiftLeft').classList.contains('active')) {
            document.querySelector('.ShiftLeft').classList.remove('active');
            shiftOnOf = 'off';
         }
         let key = ev.target.textContent;
         console.log(key)
         if (key.length === 1 && !(ev.target.closest('.ArrowLeft') || ev.target.closest('.ArrowUp') || ev.target.closest('.ArrowDown') || ev.target.closest('.ArrowRight'))) {
            textarea.value += key;
         }
      }
      if (ev.target.closest('.Enter')) {
         textarea.value += '\n';
      };
      if (ev.target.closest('.Backspace')) {
         textarea.value = textarea.value.slice(0, -1);
      };
      if (ev.target.closest('.Tab')) {
         textarea.value += '    ';
      };
      if (ev.target.closest('.Space')) {
         textarea.value += ' ';
      };
      if (ev.target.closest('.Del')) {
         let karet = textarea.selectionStart;
         if (karet === 0) {
            textarea.value = textarea.value.slice(1);
            textarea.selectionStart = textarea.selectionEnd = 0;
         } else if (karet === textarea.value.length - 1) {
            let len = textarea.value.length - 1;
            console.log('len', len)
            textarea.value = textarea.value.slice(0, len);
         } else if (karet === textarea.value.length) {
            textarea.value = textarea.value;
         } else {
            textarea.value = textarea.value.slice(0, karet) + textarea.value.slice(karet + 1);
            textarea.selectionStart = textarea.selectionEnd = karet;
         }
      };
      if (ev.target.closest('.ArrowLeft')) {
         console.dir(ev.target);
         let karet = textarea.selectionStart;
         console.log('a', karet);
         if (karet) {
            textarea.selectionStart = textarea.selectionEnd = karet - 1;
         }
      };
      if (ev.target.closest('.ArrowRight')) {
         console.dir(ev.target);
         let karet = textarea.selectionStart;
         console.log('a', karet);
         textarea.selectionStart = textarea.selectionEnd = karet + 1;

      };

      if (ev.target.closest('.ArrowUp')) {
         let karetBefore = textarea.selectionStart;
         let perenos = '';
         if (textarea.value.indexOf('\n') != -1) {
            perenos = textarea.value.lastIndexOf('\n', karetBefore - 1);
         };
         textarea.selectionStart = textarea.selectionEnd = perenos ? perenos : karetBefore;
      };

      if (ev.target.closest('.ArrowDown')) {
         let karetBefore = textarea.selectionStart;
         let perenos = '';
         if (textarea.value.indexOf('\n') != -1) {
            perenos = textarea.value.indexOf('\n', karetBefore);
         };
         let pos = perenos + karetBefore;
         console.log('textarea ', textarea.value.length);
         console.log('perenos ', perenos);
         console.log('karetBefore ', karetBefore);
         console.log('pos', pos);

         textarea.selectionStart = textarea.selectionEnd = perenos ? perenos + karetBefore + 1 : karetBefore;
      };
      if (ev.target.closest('.CapsLock')) {
         const caps = document.querySelector('.CapsLock');
         if (caps.classList.contains('active')) {
            caps.classList.remove('active');
            capsOnOf = 'off';
            console.log(capsOnOf);
         } else {
            caps.classList.add('active');
            capsOnOf = 'on';
            console.log(capsOnOf);
         };
      };
      // todo for all shifts
      if (ev.target.closest('.ShiftLeft')) {
         const shift = document.querySelector('.ShiftLeft');
         if (shift.classList.contains('active')) {
            shift.classList.remove('active');
            shiftOnOf = 'off';
            console.log(shiftOnOf);
         } else {
            shift.classList.add('active');
            shiftOnOf = 'on';
            console.log(shiftOnOf);
         };


      };

   });
}
workKeyboard();
