import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Read from "./Pages/Read";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import Update from "./Pages/Update";
import "./style.css";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/read" element={<Read /> } />
        <Route path="/update" element={<Update /> } />

      </Routes>
      
    </div>
  );
}

export default App;
