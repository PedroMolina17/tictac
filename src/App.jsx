import "./App.css";
import { useState } from "react";
const turns = {
  X: "x",
  O: "o",
};

const Square = ({ children, isSelected, updateboard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  const handleClick = () => {
    updateboard(index);
  };
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

const winners_combos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(turns.X);
  const [winner, setWinner] = useState(null);
  const checkWinner = (boardToCheck) => {
    for (const combo of winners_combos) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    return null;
  };
  const updateboard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newturn = turn === turns.X ? turns.O : turns.X;
    setTurn(newturn);
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      alert(`${newWinner}`);
    }
  };
  return (
    <>
      <main className="board">
        <h1>Tic Tac</h1>
        <section className="game">
          {board.map((_, index) => (
            <Square key={index} index={index} updateboard={updateboard}>
              {board[index]}
            </Square>
          ))}
        </section>
        <section className="turn">
          <Square isSelected={turn === turns.X}>{turns.X}</Square>
          <Square isSelected={turn === turns.O}>{turns.O}</Square>
        </section>
      </main>
    </>
  );
}

export default App;
