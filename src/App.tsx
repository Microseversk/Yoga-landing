import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import "./index.scss";

function App() {
  return (
    <main className="wrapper">
      <Navbar />
      <div style={{ marginTop: "109px" }}>
        <Home />
      </div>
    </main>
  );
}

export default App;
