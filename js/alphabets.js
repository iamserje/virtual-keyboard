export function createAlphabets(lang, loUp) {
   const digits = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61];
   const enLowerCodes = [
      [96, ...digits],
      [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92],
      [97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13],
      [122, 120, 99, 118, 98, 110, 109, 44, 46, 47],
      [32]
   ];

   const enUppperCodes = [
      [126, 33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95, 43],
      [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 123, 125, 124],
      [65, 83, 68, 70, 71, 72, 74, 75, 76, 58, 34, 13],
      [90, 88, 67, 86, 66, 78, 77, 60, 62, 63],
      [32]
   ];

   const rusLowerCodes = [
      [1105, ...digits],
      [1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92],
      [1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 13],
      [1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46],
      [32]
   ];

   const rusUpperCodes = [
      [1025, 33, 34, 8470, 59, 37, 58, 63, 42, 40, 41, 95, 43],
      [1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065, 1047, 1061, 1066, 47],
      [1060, 1067, 1042, 1040, 1055, 1056, 1054, 1051, 1044, 1046, 1069, 13],
      [1071, 1063, 1057, 1052, 1048, 1058, 1068, 1041, 1070, 44],
      [32]
   ];


const enLowerLetters = [
      ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
      ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del'],
      ['caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
      ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'shift'],
      ['ctrl', 'win', 'alt', '', 'alt', '◄', '▼', '►', 'ctrl']
   ];
   const enShiftLetters = [
      ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace'],
      ['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'del'],
      ['caps lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
      ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'shift'],
      ['ctrl', 'win', 'alt', '', 'alt', '◄', '▼', '►', 'ctrl']
   ];
const enCapsLetters = [
      ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
      ['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'del'],
      ['caps lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'],
      ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'shift'],
      ['ctrl', 'win', 'alt', '', 'alt', '◄', '▼', '►', 'ctrl']
   ];
   const rusLowerLetters = [
      ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
      ['tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'del'],
      ['caps lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
      ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'shift'],
      ['ctrl', 'win', 'alt', '', 'alt', '◄', '▼', '►', 'ctrl']
   ];

   const rusShiftLetters = [
      ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'backspace'],
      ['tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'del'],
      ['caps lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
      ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'shift'],
      ['ctrl', 'win', 'alt', '', 'alt', '◄', '▼', '►', 'ctrl']
   ];

   const rusCapsLetters = [
      ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
      ['tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'del'],
      ['caps lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
      ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '▲', 'shift'],
      ['ctrl', 'win', 'alt', '', 'alt', '◄', '▼', '►', 'ctrl']
   ];

   const keyCodes = [
      ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
      ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
      ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
      ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftLeft'],
      ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltLeft', 'ControlLeft', 'ArrowLeft', 'ArrowDown', 'ArrowRight']
   ];

   if (lang === 'en' && loUp === 'lower') {
      return enLowerLetters;
   } else if (lang === 'en' && loUp === 'shiftMode') {
      return enShiftLetters;
   } else if (lang === 'en' && loUp === 'capsMode') {
      return enCapsLetters;
   } else if (lang === 'rus' && loUp === 'lower') {
      return rusLowerLetters;
   } else if (lang === 'rus' && loUp === 'shiftMode') {
      return rusShiftLetters;
   } else if (lang === 'rus' && loUp === 'capsMode') {
      return rusCapsLetters;
   }
}

   // const letters = [];
   // document.onkeydown = function (event) {
   //    letters.push(event.code);
   //    console.log(letters);
   // }