import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </header>
    </div>
  );
}

export default App;
