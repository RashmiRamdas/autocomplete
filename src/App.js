import { useState } from "react";
import "./App.css";
import Autocomplete from "./components/autocomplete/Autocomplete";

function App() {
  return (
    <div className="App">
      <Autocomplete
        suggestions={["apple", "animal", "bat", "cat", "cafe", "dog"]}
      />
    </div>
  );
}

export default App;
