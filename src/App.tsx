import Coaches from "./components/coaches/Coaches";
import DirectionsInSub from "./components/directionsInSub/DirectionsInSub";
import Home from "./components/mainSection/Mainsection";
import Navbar from "./components/navbar/Navbar";
import Schedule from "./components/schedule/Schedule";
import TrainingCost from "./components/trainingCost/TrainingCost";
import "./index.scss";

function App() {
  return (
    <main className="wrapper">
      <Navbar />
      <Home />
      <DirectionsInSub />
      <TrainingCost />
      <Schedule />
      <Coaches />
    </main>
  );
}

export default App;
