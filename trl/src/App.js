import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import Home from "./pages/Home";
import Architecture from "./pages/Architecture";
import TRLLevels from "./components/TRLLevels";
import ProjectSetup from "./pages/ProjectSetup";
import WorkflowPage from "./components/Workflow";
import ModulesPage from "./components/Modules";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/trl" element={<TRLLevels />} />
        <Route path="/module" element={<ModulesPage />} />
        
        <Route path="/workflow" element={<WorkflowPage />} />
        <Route path="/project-setup" element={<ProjectSetup />} />
      </Routes>
    </Router>
  );
}

export default App;
