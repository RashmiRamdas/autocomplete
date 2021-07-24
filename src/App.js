import { useState } from "react";
import "./App.css";
import Autocomplete from "./components/autocomplete/Autocomplete";

//https://codesandbox.io/s/8lyp733pj0
//https://www.digitalocean.com/community/tutorials/react-react-autocomplete
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
