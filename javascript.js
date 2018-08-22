var origBoard;
const aiPlayer = "X";
const humPlayer = "O";
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]
const cells = document. querySelectorAll('.cell'); /* Also had .cell as "cell" which stopped the O's from showing up when the user would click in one of the
boxes! */
startGame();

function startGame() {
    document.querySelector(".endgame").style.display = "none"; /*in this line i had an issue where query selector should have been typed 
    querySelector but was typed "querySelectorAll"*/
    origBoard = Array.from(Array(9).keys());  
    for (var i = 0; i < cells.length; i++) {
      cells[i].innerText = '';
      cells[i].style.removeProperty('background-color');
      cells[i].addEventListener('click', turnClick, false);
    }
}

function turnClick(square) {
    turn(square.target.id, humPlayer)
}
function turn(squareId, player) {
    origBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
}
