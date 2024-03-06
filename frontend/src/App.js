import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
