import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import News from "./Pages/news/News";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/news" element={<News />}></Route>
      </Routes>
    </div>
  );
}

export default App;
