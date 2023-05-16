import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "./style.css";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        

      </Routes>
      
    </div>
  );
}

export default App;
