import React, { useState } from "react";
import Counter from "./components/Counter";
import './styles/App.css'
function App() {

  const [value,setValue] = useState('TEXT');

  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>1. JS</strong>
          <div>
            JS-language
          </div>
        </div>
        <div className="post__btns ">
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
