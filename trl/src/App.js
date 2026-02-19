import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Architecture from "./pages/Architecture";
import TRLLevels from "./components/TRLLevels";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/trl" element={<TRLLevels />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
