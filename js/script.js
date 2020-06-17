const buttonRock = document.getElementById("button-rock"),
  buttonPaper = document.getElementById("button-paper"),
  buttonScissors = document.getElementById("button-scissors");

const playGame = function (PlayerMove) {
  clearMessages();
  console.log(PlayerMove + " został kliknięty");

  const getMoveName = function (argMoveId) {
    console.log("wywołano funkcję getMoveName z argumentem: " + argMoveId);
    if (argMoveId == 1) {
      return "kamień";
    } else if (argMoveId == 2) {
      return "papier";
    } else if (argMoveId == 3) {
      return "nożyce";
    } else {
      printMessage(
        "Nie znam ruchu o id " + argMoveId + '. Zakładam, że chodziło o "kamień".'
      );
      return "kamień";
    }
  };

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log("Wylosowana liczba to: " + randomNumber);

  const ComputerMove = getMoveName(randomNumber);

  const displayResult = function (argPlayerMove, argComputerMove) {

    if (argPlayerMove == "papier" && argComputerMove == "kamień") {
      printMessage("Wygrywasz!");
    } else if (argPlayerMove == "kamień" && argComputerMove == "nożyce") {
      printMessage("Wygrywasz!");
    } else if (argPlayerMove == "nożyce" && argComputerMove == "papier") {
      printMessage("Wygrywasz!");
    } else if (argPlayerMove == argComputerMove) {
      printMessage("Oj remis!");
    } else {
      printMessage("Przegrywasz :( Spróbuj jeszcze raz!");
    }
    printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
  };

  displayResult(PlayerMove, ComputerMove);
};

buttonRock.addEventListener("click", function () {
  playGame("kamień");
});

buttonPaper.addEventListener("click", function () {
  playGame("papier");
});

buttonScissors.addEventListener("click", function () {
  playGame("nożyce");
});
