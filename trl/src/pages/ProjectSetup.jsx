import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../Styles/projectSetup.css";

export default function ProjectSetup() {
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [projectName, setProjectName] = useState("");
  const [cluster, setCluster] = useState("");
  const [lab, setLab] = useState("");

  const handleStart = () => {
    if (!role || !projectName || !cluster || !lab) {
      alert("Please fill all fields");
      return;
    }

    // ✅ SAVE PROJECT DATA
    const projectData = {
      role,
      projectName,
      cluster,
      lab,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    localStorage.setItem("projectData", JSON.stringify(projectData));

    // 👉 GO TO ASSESSMENT
    navigate("/assessment");
  };

  const handleViewReport = () => {
    navigate("/report");
  };

  return (
    <>
      <Header />

      <div className="setupContainer">
        <h2>Project Assessment Setup</h2>

        {/* Instructions */}
        <div className="instructions">
          <p>1. Please select your role carefully before starting assessment.</p>
          <p>2. Enter correct project name as per official documentation.</p>
          <p>3. Select appropriate cluster and lab for accurate evaluation.</p>
          <p>4. Click start assessment to proceed with TRL & Time estimation.</p>
        </div>

        {/* Form */}
        <div className="formSection">

          <div className="formGroup">
            <label>Role</label>
            <select value={role} onChange={(e)=>setRole(e.target.value)}>
              <option value="">Select Role</option>
              <option>Director</option>
              <option>Project Director</option>
              <option>Scientist</option>
            </select>
          </div>

          <div className="formGroup">
            <label>Project Name</label>
            <input
              type="text"
              placeholder="Enter project name"
              value={projectName}
              onChange={(e)=>setProjectName(e.target.value)}
            />
          </div>

          <div className="formGroup">
            <label>Cluster Name</label>
            <select value={cluster} onChange={(e)=>setCluster(e.target.value)}>
              <option value="">Select Cluster</option>
              <option>Aerospace</option>
              <option>Defense Systems</option>
              <option>AI & Robotics</option>
            </select>
          </div>

          <div className="formGroup">
            <label>Lab Name</label>
            <select value={lab} onChange={(e)=>setLab(e.target.value)}>
              <option value="">Select Lab</option>
              <option>DRDL</option>
              <option>LRDE</option>
              <option>CAIR</option>
            </select>
          </div>

        </div>

        {/* Buttons */}
        <div className="buttonSection">
          <button className="startBtn" onClick={handleStart}>
            Start Assessment
          </button>

          <button className="reportBtn" onClick={handleViewReport}>
            View Report <span className="icon">📄</span>
          </button>
        </div>
      </div>
    </>
  );
}