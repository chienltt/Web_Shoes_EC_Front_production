import React from "react";
import './App.css';
import AppContext from "./AppContext";
import {renderRoutes} from "react-router-config";

const App = (props)=>{
  const {route}= props
  return(
    <AppContext.Provider value={{}}>
      {renderRoutes(route.routes)}
    </AppContext.Provider>
  )
}
export default App
// import logo from './logo.svg';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

