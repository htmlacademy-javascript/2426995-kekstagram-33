
let chekLine20 = 0;
let chekLine18 = 0;
let chekLine10 = 0;

// Строка короче 20 символов
chekLine20 () {
if (chekLine20 <= 20){
  chekLine20 = true

}
else {  chekLine20 = false

}
}; // true ('проверяемая строка', 20)


// Длина строки ровно 18 символов
chekLine18 () {
  if (chekLine18 <= 18){
    chekLine18 = true

  }
  else {  chekLine18 = false

  }};
имяФункции('проверяемая строка', 18); // true


// Строка длиннее 10 символов
chekLine10 () {
  if (chekLine10 <= 10){
    chekLine10 = true

  }
  else {  chekLine10 = false

  }};
имяФункции('проверяемая строка', 10); // false
