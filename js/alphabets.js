export function createAlphabets(lang, loUp) {
   const digits = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61];
   const enLowerLetters = [
      [96, ...digits],
      [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92],
      [97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13],
      [122, 120, 99, 118, 98, 110, 109, 44, 46, 47],
      [32]
   ];

   const enUppperLetters = [
      [126, 33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95, 43],
      [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 123, 125, 124],
      [65, 83, 68, 70, 71, 72, 74, 75, 76, 58, 34, 13],
      [90, 88, 67, 86, 66, 78, 77, 60, 62, 63],
      [32]
   ];

   const rusLowerLetters = [
      [1105, ...digits],
      [1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92],
      [1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 13],
      [1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46],
      [32]
   ];

   const rusUpperLetters = [
      [1025, 33, 34, 8470, 59, 37, 58, 63, 42, 40, 41, 95, 43],
      [1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065, 1047, 1061, 1066, 47],
      [1060, 1067, 1042, 1040, 1055, 1056, 1054, 1051, 1044, 1046, 1069, 13],
      [1071, 1063, 1057, 1052, 1048, 1058, 1068, 1041, 1070, 44],
      [32]
   ];


   // const letters = [];
   // document.onkeypress = function (event) {
   //    letters.push(event.charCode);
   //    console.log(letters);
   // }
   if (lang === 'en' && loUp === 'lower') {
      return enLowerLetters;
   } else if (lang === 'en' && loUp === 'upper') {
      return enUppperLetters;
   } else if (lang === 'rus' && loUp === 'lower') {
      return rusLowerLetters;
   } else return rusUpperLetters;
}