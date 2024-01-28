import "./App.css";
const turns = {
  X: "x",
  O: "o",
};

const boards = Array(9).fill(null);
function App() {
  return (
    <>
      <main className="board">
        <h1>Tic Tac</h1>
        <section className="game">
          {boards.map((_, index) => (
            <div className="cell" key={index}>
              <span className="cell_content">{index}</span>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
