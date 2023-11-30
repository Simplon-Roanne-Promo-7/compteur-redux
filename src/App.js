import "./App.css";
import React from "react";
import ComposantInutile from "./ComposantInutile";
import ComposantCasseCouille from "./ComposantCasseCouille";

function App() {
  return (
    <div className='App'>
      <ComposantInutile />
      <ComposantInutile />
      <ComposantCasseCouille />
    </div>
  );
}

export default App;
