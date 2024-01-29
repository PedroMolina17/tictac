import "./App.css";
import { useState } from "react";
const turns = {
  X: "x",
  O: "o",
};

const Square = ({ children, isSelected, updateboard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  const handleClick = () => {
    updateboard();
  };

  return (
    <div onClick={updateboard} className={className}>
      {children}
    </div>
  );
};
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(turns.X);
  const updateboard = () => {
    const newturn = turn === turns.X ? turns.O : turns.X;
    setTurn(newturn);
    console.log(newturn);
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
