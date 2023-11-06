import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1>Welcome to Kings Party! 🥳</h1>
      <div className="card">
        <Link to={"game"}>Start Game </Link>
      </div>
    </>
  );
}

export default App;
