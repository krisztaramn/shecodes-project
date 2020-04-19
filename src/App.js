import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Test</p>
        <p className="open-source">
          <a
            href="https://github.com/krisztaramn/shecodes-project"
            target="_blank"
            className="github-link"
          >
            {" "}
            Open-source cod
          </a>{" "}
          by Krisztina Ramn
        </p>
      </header>
    </div>
  );
}

export default App;
