import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const names = ["Alice", "Bob", "Charlie", "David"];

  return (
    <>
      <div className="side-display">
        <h2 className="singer">Choose the Singer</h2>
        <ul className="list">
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
      <div className="container">
        <div className="test">
          <img
            className="img"
            src="/public/image.jpg"
            alt="image"
            height={200}
            width={300}
          />
        </div>

        <h1>Order Summary</h1>
        <p className="para">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>

        <div className="btn-container">
          <div className="btn-container1">
            <p id="annual">Annual Plan</p>
            <p id="price">$59.99/year</p>
          </div>

          <div id="change">
            <p>Change</p>
          </div>
        </div>

        <div className="paymnet">Proceed to Payment</div>

        <p id="cancel">Cancel Order</p>
      </div>
    </>
  );
}

export default App;
