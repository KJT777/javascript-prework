const buttonRock = document.getElementById('button-rock'),
      buttonPaper = document.getElementById('button-paper'),
      buttonScissors = document.getElementById('button-scissors');
const buttonClicked = function(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

const getMoveName = function (argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';
if(randomNumber == 1){
  computerMove = 'kamień';
}
printMessage('Mój ruch to: ' + computerMove);

if (PlayerMove == 'nożyce' && ComputerMove == 'papier')
elseif (PlayerMove == 'kamień' && ComputerMove == 'nożyce')
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
printMessage('Twój ruch to: ' + playerMove);

if (PlayerMove == 'nożyce' && ComputerMove == 'papier')
elseif (PlayerMove == 'kamień' && ComputerMove == 'nożyce') 

if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
} 
else if (PlayerMove == ComputerMove) {
        printMessage('Oj remis!'); }
    }
else { printMessage('Zagrałem ' + ComputerMove + ', a Ty ' + PlayerMove);}
 
const displayResult = function (argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Oj remis!');
  }   else {
      printMessage('Przegrywasz :( Spróbuj jeszcze raz!');
  }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });
buttonRock.addEventListener('click', function() {
  buttonClicked('kamień');
});
buttonPaper.addEventListener('click', function() {
  buttonClicked('papier');
});
buttonScissors.addEventListener('click', function() {
  buttonClicked('nożyce');
});