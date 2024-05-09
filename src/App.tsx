import DirectionsInSub from "./components/directionsInSub/DirectionsInSub";
import Home from "./components/mainSection/Mainsection";
import Navbar from "./components/navbar/Navbar";
import TrainingCost from "./components/trainingCost/TrainingCost";
import "./index.scss";

function App() {
  return (
    <main className="wrapper">
      <Navbar />

      <Home />
      <DirectionsInSub />
      <TrainingCost />
    </main>
  );
}

export default App;
