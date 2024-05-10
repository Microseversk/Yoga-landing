import Button from "./components/shared/button/Button";
import Typography from "./components/shared/typography/Typography";
import "./index.scss";

function App() {
  return (
    <main className="wrapper">
      {/* <Navbar />

      <Home />
      <DirectionsInSub />
      <TrainingCost />
      <Schedule /> */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h1">Hello World</Typography>
        <Typography variant="h2">Hello World</Typography>
        <Typography variant="h3">Hello World</Typography>
        <Typography variant="h4">Hello World</Typography>
        <Typography variant="p1">Hello World</Typography>
        <Typography variant="p2">Hello World</Typography>
        <Typography variant="p3">Hello World</Typography>
        <Typography variant="button">Hello World</Typography>
        <Typography variant="menu">Hello World</Typography>
        <Button variant="buttom">Hello World</Button>
        <Button variant="dirs">Hello World</Button>
        <Button variant="feedback">Hello World</Button>
        <Button variant="sliderLeft">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.1574 5.00012L6.40031 9.75721C6.35094 9.80659 6.35094 9.88664 6.40031 9.93601L11.1574 14.6931"
              stroke="currentColor"
            />
          </svg>
        </Button>
        <Button variant="sliderRight">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.84308 5.00024L13.6002 9.75734C13.6496 9.80671 13.6496 9.88676 13.6002 9.93614L8.84308 14.6932"
              stroke="currentColor"
            />
          </svg>
        </Button>
      </div>
    </main>
  );
}

export default App;
