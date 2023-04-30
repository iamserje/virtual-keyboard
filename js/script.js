import { createKeyboard } from "./create-keyboard.js";
import { createPage } from "./create-page.js";
let lang = 'en';

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
   document.addEventListener('keydown', function(ev) {
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
   });
   document.addEventListener('keyup', function(ev) {
      pressed.delete(ev.code);
   });
}
changeLanguageMark();

// event to add to key ckass active for animate press action:
document.addEventListener('keydown', function(ev){
   let keyCod = ev.code;
   document.querySelector(`.${keyCod}`).classList.add('active');
   setTimeout(()=> {document.querySelector(`.${keyCod}`).classList.remove('active');},100)
});

// to print by clicking by mouse:
const keboard = document.querySelector('.keyboard');
const textarea = document.querySelector('.textarea');
keboard.addEventListener('click', function(ev) {
   textarea.focus();
   if (ev.target.closest('.keyboard__key')) {
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
      ev.preventDefault();
      textarea.value += '\t';
   };
   if (ev.target.closest('.Del')) {
      console.dir(ev.target);
      let karet = textarea.selectionStart;
      console.log('a', karet);
      if (karet === 0) {
         textarea.value = textarea.value.slice(1);
         textarea.selectionStart = textarea.selectionEnd = 0;
      } else if (karet === textarea.value.length-1) {
         let len = textarea.value.length-1;
         console.log('len', len)
         textarea.value = textarea.value.slice(0, len);
      } else if (karet === textarea.value.length) {
         textarea.value = textarea.value;
      } else {
         textarea.value = textarea.value.slice(0, karet) + textarea.value.slice(karet+1);
         textarea.selectionStart = textarea.selectionEnd = karet;
      }
   };
});

