import React from "react";
import "./App.css";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfAdd";

function App() {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfList />
      <SmurfForm />
    </div>
  );
}

export default App;
