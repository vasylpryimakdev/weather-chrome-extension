import React from "react";
import ReactDOM from "react-dom";
import "./popup.css";
import WeatherCard from "./WeatherCard";

const App: React.FC<{}> = () => {
  return (
    <div style={{ width: "400px", height: "400px" }}>
      <WeatherCard city="Toronto" />
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
