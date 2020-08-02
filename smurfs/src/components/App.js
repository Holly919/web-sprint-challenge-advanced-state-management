// import React, { Component } from "react";
// import "./App.css";
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>SMURFS! 2.0 W/ Redux</h1>
//         <div>Welcome to your state management version of Smurfs!</div>
//         <div>Start inside of your `src/index.js` file!</div>
//         <div>Have fun!</div>
//       </div>
//     );
//   }
// }

// export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";

import { SmurfContext } from "../contexts/SmurfContext";

import Smurf from "./Smurf";

import "./App.css";

function App() {
  const [smurfs, setSmurfs] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        console.log("axios response ", res.data);
        setSmurfs(res.data);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  }, []);

  console.log("smurfs ", smurfs);

  return (
    <div className="App">
      <h1>SMURFS! Let's get Smurfy!</h1>
      <SmurfContext.Provider value={{ smurfs }}>
        <Smurf />
      </SmurfContext.Provider>
    </div>
  );
}

export default App;