import AlwaysInTouch from "./components/alwaysInTouch/AlwaysInTouch";
import Coaches from "./components/coaches/Coaches";
import CustomersFeedback from "./components/customersFeedback/CustomersFeedback";
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
      <CustomersFeedback />
      <AlwaysInTouch />
    </main>
  );
}

export default App;
