let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';
if(randomNumber == 1){
  computerMove = 'kamień';
}
printMessage('Mój ruch to: ' + computerMove);

if (PlayerMove == 'nożyce' && ComputerMove == 'papier')
else if (PlayerMove == 'kamień' && ComputerMove == 'nożyce') {


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
printMessage('Twój ruch to: ' + playerMove);

if (PlayerMove == 'nożyce' && ComputerMove == 'papier')
else if (PlayerMove == 'kamień' && ComputerMove == 'nożyce') {

if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
} 
else if (PlayerMove == ComputerMove) {
        printMessage('Oj remis!'); 

else { printMessage('Zagrałem ' + ComputerMove + ', a Ty ' + PlayerMove); 
