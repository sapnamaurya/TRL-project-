import React, { useState } from "react";
import "../Styles/trl3d.css";

export default function TRLLevels() {

  const [level, setLevel] = useState("ground");

  return (
    <div className="containers">

      {/* ================= GROUND ================= */}
      <div className={`screen ${level === "ground" ? "active" : ""}`}>

        <h1 className="title">Integrated Solution For TRL & Time Estimation</h1>
        <h2 className="subtitle">Ground Level</h2>

        <table className="matrix">
          <tbody>
            <tr>
              <td>Technology Readiness Level Tool</td>
              <td>Technology Readiness Level Assessment</td>
              <td>Standalone Technology Readiness Level</td>
              <td>Technology Readiness Level ERP</td>
              <td>Technology Readiness Level AI/ML</td>
              <td>Technology Readiness Level Social</td>
            </tr>

            <tr>
              <td>Time Tool</td>
              <td>Time Assessment</td>
              <td>Standalone Time</td>
              <td>Time ERP</td>
              <td>Time AI/ML</td>
              <td>Time Social</td>
            </tr>

            <tr>
              <td>TRL & Time Tool</td>
              <td>TRL & Time Assessment</td>
              <td>Standalone Combined</td>
              <td>Combined ERP</td>
              <td>Combined AI/ML</td>
              <td>Combined Social</td>
            </tr>
          </tbody>
        </table>

        {/* LEVEL SELECTOR */}
        <div className="levelSelector">
          <div className={`levelCard ${level==="level1"?"active":""}`} onClick={()=>setLevel("level1")}>Level 1</div>
          <div className={`levelCard ${level==="level2"?"active":""}`} onClick={()=>setLevel("level2")}>Level 2</div>
          <div className={`levelCard ${level==="level3"?"active":""}`} onClick={()=>setLevel("level3")}>Level 3</div>
        </div>

      </div>

      {/* ================= LEVEL 1 ================= */}
      <div className={`screen ${level === "level1" ? "active" : ""}`}>
        <h1 className="title">Software For TRL & Time Estimation</h1>
        <h2 className="subtitle">Level 1 — Tools</h2>

        <table className="matrix levelTable">
          <tbody>
            <tr>
              <td><b>TRL Tool</b><br/>ESA TRL Calculator<br/>NASA TRL Worksheet<br/>Horizon Europe Tool</td>
              <td><b>TRL Assessment</b><br/>Clean-Growth Tool<br/>eG Technology Assessment</td>
              <td><b>Standalone TRL</b><br/>NASA DAU Tool<br/>Innovation Assessment</td>
              <td><b>TRL ERP</b><br/>Siemens Teamcenter<br/>SAP PLM</td>
              <td><b>TRL AI/ML</b><br/>CARE AI<br/>ESA AI Evaluator</td>
              <td><b>TRL Social</b><br/>READINESSnavigator<br/>Kooplex Platform</td>
            </tr>
          </tbody>
        </table>

        <div className="levelSelector">
          <div className="levelCard" onClick={()=>setLevel("ground")}>Ground</div>
          <div className="levelCard" onClick={()=>setLevel("level2")}>Level 2</div>
        </div>
      </div>

      {/* ================= LEVEL 2 ================= */}
      <div className={`screen ${level === "level2" ? "active" : ""}`}>
        <h1 className="title">Technology Used</h1>
        <h2 className="subtitle">Level 2 — Languages & Stack</h2>

        <table className="matrix levelTable">
          <tbody>
            <tr>
              <td><b>TRL Tool</b><br/>JavaScript<br/>Excel VBA<br/>MATLAB/Python</td>
              <td><b>TRL ERP</b><br/>Java<br/>C++<br/>SAP ABAP</td>
              <td><b>AI/ML</b><br/>Python<br/>TensorFlow<br/>MATLAB</td>
            </tr>
          </tbody>
        </table>

        <div className="levelSelector">
          <div className="levelCard" onClick={()=>setLevel("level1")}>Level 1</div>
          <div className="levelCard" onClick={()=>setLevel("level3")}>Level 3</div>
        </div>
      </div>

      {/* ================= LEVEL 3 ================= */}
      <div className={`screen ${level === "level3" ? "active" : ""}`}>
        <h1 className="title">Deployment Hardware</h1>
        <h2 className="subtitle">Level 3 — Infrastructure</h2>

        <table className="matrix levelTable">
          <tbody>
            <tr>
              <td><b>Basic Tools</b><br/>Laptop<br/>Browser</td>
              <td><b>ERP</b><br/>Enterprise Server<br/>Data Center</td>
              <td><b>AI/ML</b><br/>GPU Servers<br/>HPC Cluster</td>
            </tr>
          </tbody>
        </table>

        <div className="levelSelector">
          <div className="levelCard" onClick={()=>setLevel("ground")}>Back To Ground</div>
        </div>
      </div>

    </div>
  );
}
