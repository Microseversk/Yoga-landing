import DirectionsInSub from "./components/directionsInSub/DirectionsInSub";
import Home from "./components/mainSection/Mainsection";
import Navbar from "./components/navbar/Navbar";
import "./index.scss";

function App() {
  return (
    <main className="wrapper">
      <Navbar />

      <Home />
      <DirectionsInSub />
    </main>
  );
}

export default App;
