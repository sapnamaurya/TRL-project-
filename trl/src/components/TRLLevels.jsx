import React, { useState } from "react";
import "../Styles/trl3d.css";

export default function TRLLevels() {
  const [level, setLevel] = useState("ground");

  return (
    <div className="containers">
      {/* ---------------- GROUND LEVEL ---------------- */}
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
        {/* ---------- STACK LEVEL SELECTOR ---------- */}
        <div className="levelStack">
          <div
            className={`stackLayer l1 ${level === "level1" ? "active" : ""}`}
            onClick={() => setLevel("level1")}
          >
            LEVEL 1
          </div>

          <div
            className={`stackLayer l2 ${level === "level2" ? "active" : ""}`}
            onClick={() => setLevel("level2")}
          >
            LEVEL 2
          </div>

          <div
            className={`stackLayer l3 ${level === "level3" ? "active" : ""}`}
            onClick={() => setLevel("level3")}
          >
            LEVEL 3
          </div>
        </div>
      </div>

      {/* ---------------- LEVEL 1 ---------------- */}
      <div className={`screen level1 ${level === "level1" ? "active" : ""}`}>
        <h1 className="title">Software For TRL & Time Estimation</h1>
        <h2 className="subtitle">Level-1</h2>

        <table className="matrix levelTable">
          <tbody>
            <tr>
              <td>
                <b>TRL Tool</b>
                <br />
                ESA TRL Calculator
                <br />
                NASA TRL Worksheet
                <br />
                Horizon Europe Tool
              </td>

              <td>
                <b>TRL Assessment</b>
                <br />
                Clean-Growth Tool
                <br />
                eG Technology Assessment
              </td>

              <td>
                <b>Standalone TRL</b>
                <br />
                NASA DAU Tool
                <br />
                Innovation Assessment
              </td>

              <td>
                <b>TRL ERP</b>
                <br />
                Siemens Teamcenter
                <br />
                SAP PLM
              </td>

              <td>
                <b>TRL AI/ML</b>
                <br />
                CARE AI
                <br />
                ESA AI Evaluator
              </td>

              <td>
                <b>TRL Social</b>
                <br />
                READINESSnavigator
                <br />
                Kooplex Platform
              </td>
            </tr>

            <tr>
              <td>
                <b>Time Tool</b>
                <br />
                Jira
                <br />
                MS Project
                <br />
                Primavera
              </td>

              <td>
                <b>Time Assessment</b>
                <br />
                SEER-SEM
                <br />
                SLIM Estimate
              </td>

              <td>
                <b>Standalone Time</b>
                <br />
                COCOMO II
                <br />
                SEER SIM
              </td>

              <td>
                <b>Time ERP</b>
                <br />
                SAP S/4HANA
                <br />
                Odoo ERP
              </td>

              <td>
                <b>Time AI/ML</b>
                <br />
                Forecast AI
                <br />
                ALICE Tech
              </td>

              <td>
                <b>Time Social</b>
                <br />
                ClickUp AI
                <br />
                Notion AI
              </td>
            </tr>

            <tr>
              <td>
                <b>TRL & Time Estimation Tool</b>
                <br />
                NASA TAT-C + OpenMDAO
                <br />
                SEER SEM
                <br />
                ANSYS ModelCenter
              </td>

              <td>
                <b>TRL & Time Estimation Assessment</b>
                <br />
                Siemens TeamCenter + Simcenter
                <br />
                Ansys ModelCenter
                <br />
                IBM Engineering Lifecycle Management
              </td>

              <td>
                <b>Standalone TRL & Time Estimation implementation</b>
                <br />
                ESA TRL Calculator + COCOMO based Estimation System
              </td>

              <td>
                <b>TRL & Time Estimation with ERP</b>
                <br />
                Siemens Teamcenter + SAP ERP
                <br />
                Oracle Primavera P6 EPPM + ERP
                <br />
                SAP Portfolio & Project Management (PPM)
              </td>

              <td>
                <b>TRL & Time Estimation with AI/ML</b>
                <br />
                IBM Engineering Lifecycle Management
                <br />
                Siemens TeamCenter + Predictive Engineering analytics
                <br />
                NASA OpenMBEE + Digital Engineering
              </td>

              <td>
                <b>TRL & Time Estimation with AI/ML social media</b>
                <br />
                IBM Engineering Lifecycle Management
                <br />
                Siemens TeamCenter + Predictive Engineering analytics
                <br />
                Oracle Primavera P6 + AI Risk Analysis
              </td>
            </tr>
          </tbody>
        </table>

        <div className="levelStack">
          <div
            className={`stackLayer l1 ${level === "level2" ? "active" : ""}`}
            onClick={() => setLevel("level2")}
          >
            LEVEL 2
          </div>

          <div
            className={`stackLayer l2 ${level === "level3" ? "active" : ""}`}
            onClick={() => setLevel("level3")}
          >
            LEVEL 3
          </div>
        </div>
      </div>
      <div className={`screen level1 ${level === "level2" ? "active" : ""}`}>
        <h1 className="title">Language For TRL & Time Estimation</h1>
        <h2 className="subtitle">Level-2</h2>

        <table className="matrix levelTable">
          <tbody>
            <tr>
              <td>
                <b>TRL Tool</b>
                <br />
                <i>Tech:</i> Javascript, Excel VBA + MATLAB/Python, PostgreSQL /
                Oracle / SQL
              </td>

              <td>
                <b>TRL Assessment</b>
                <br />
                <br />
                <i>Tech:</i> JavaScript, Python/.NET, Java stack (ESA)
              </td>

              <td>
                <b>Standalone TRL implementation</b>
                <br /> 
                <br />
                <i>Tech:</i> JavaScript, Excel VBA, HTML, CSS
              </td>

              <td>
                <b>TRL with ERP</b>
                <br />
                <br />
                <i>Tech:</i> Java, C++, JS, Angular, ABAP, SAP HANA SQL
              </td>

              <td>
                <b>TRL with AI/ML</b>
                <br />
                <br />
                <i>Tech:</i> Python, MATLAB, JavaScript
              </td>

              <td>
                <b>TRL with AI/ML social media</b>
                <br />
                <br />
                <i>Tech:</i> Java, Python, Docker, Eclipse RCP
              </td>
            </tr>

            <tr>
              <td>
                <b>Time Estimation Tool</b>
                <br />
                <br />
                <i>Tech:</i> JavaScript, C/Java/Python, MATLAB
              </td>

              <td>
                <b>Time Estimation Assessment</b>
                <br />
                <br />
                <i>Tech:</i> C++, C#, .NET
              </td>

              <td>
                <b>Standalone Time implementation</b>
                <br />
                <br />
                <i>Tech:</i> C/C++, Python, MATLAB, JavaScript
              </td>

              <td>
                <b>Time Estimation with ERP</b>
                <br />
                <br />
                <i>Tech:</i> ABAP, SAP HANA DB, .NET, PostgreSQL
              </td>

              <td>
                <b>Time Estimation with AI/ML</b>
                <br />
                <br />
                <i>Tech:</i> Python, GraphQL, C++
              </td>

              <td>
                <b>Time Estimation with AI/ML social media</b>
                <br />
                Jira + Estimate AI
                <br />
                ClickUp AI
                <br />
                Notion AI
              </td>
            </tr>

            <tr>
              <td>
                <b>TRL & Time Estimation Tool</b>
                <br />
                <br />
                <i>Tech:</i> Python, C++, .NET, MATLAB
              </td>

              <td>
                <b>TRL & Time Estimation Assessment</b>
                <br />
                <br />
                <i>Tech:</i> C++, Python, Java, Eclipse RCP
              </td>

              <td>
                <b>Standalone TRL & Time implementation</b>
                <br />
                <br />
                <i>Tech:</i> Python, Java, MATLAB, SQL DB
              </td>

              <td>
                <b>TRL & Time with ERP</b>
                <br />
                <br />
                <i>Tech:</i> Java, C++, .NET, Oracle DB, ABAP
              </td>

              <td>
                <b>TRL & Time with AI/ML</b>
                <br />
                <br />
                <i>Tech:</i> Java, C++, JavaScript, Python
              </td>

              <td>
                <b>TRL & Time with AI/ML social media</b>
                <br />
                <br />
                <i>Tech:</i> Python, C++, Java, PL/SQL
              </td>
            </tr>
          </tbody>
        </table>

        <div className="levelStack">
          <div
            className={`stackLayer l1 ${level === "level3" ? "active" : ""}`}
            onClick={() => setLevel("level3")}
          >
            LEVEL 3
          </div>
        </div>
      </div>
      <div className={`screen level1 ${level === "level3" ? "active" : ""}`}>
        <h1 className="title">Hardware For TRL & Time Estimation</h1>
        <h2 className="subtitle">Level-3</h2>

        <table className="matrix levelTable">
          <tbody>
            <tr>
              <td>
                <b>TRL Tool</b>
                <br />
                <i>Hardware:</i>
                <br />
                Laptop
                <br />
                Browser
                <br />
                Cloud Server
              </td>

              <td>
                <b>TRL Assessment</b>
                <br />
                <i>Hardware:</i>
                <br />
                Standard PC
                <br />
                Workstation
                <br />
                Browser System
              </td>

              <td>
                <b>Standalone TRL</b>
                <br />
                <i>Hardware:</i>
                <br />
                Laptop
              </td>

              <td>
                <b>TRL ERP</b>
                <br />
                <i>Hardware:</i>
                <br />
                Engineering Workstation
                <br />
                PLM Server Cluster
                <br />
                Enterprise Data Center
              </td>

              <td>
                <b>TRL AI/ML</b>
                <br />
                <i>Hardware:</i>
                <br />
                GPU/CPU ML Servers
                <br />
                HPC Workstation
                <br />
                Cloud Server
              </td>

              <td>
                <b>TRL Social</b>
                <br />
                <i>Hardware:</i>
                <br />
                Secure Enterprise Server
                <br />
                Cloud HPC
                <br />
                Private Cluster
              </td>
            </tr>

            <tr>
              <td>
                <b>Time Tool</b>
                <br />
                <i>Hardware:</i>
                <br />
                Personal Browser
                <br />
                Windows Workstation
              </td>

              <td>
                <b>Time Assessment</b>
                <br />
                <i>Hardware:</i>
                <br />
                Engineering Workstation
                <br />
                Personal Computer
              </td>

              <td>
                <b>Standalone Time</b>
                <br />
                <i>Hardware:</i>
                <br />
                Windows PC
                <br />
                Workstation
              </td>

              <td>
                <b>Time ERP</b>
                <br />
                <i>Hardware:</i>
                <br />
                Enterprise Server
                <br />
                Oracle Cloud
                <br />
                Enterprise Windows Server
              </td>

              <td>
                <b>Time AI/ML</b>
                <br />
                <i>Hardware:</i>
                <br />
                Distributed CPU/GPU Cloud
                <br />
                HPC Servers
              </td>

              <td>
                <b>Time Social</b>
                <br />
                <i>Hardware:</i>
                <br />
                Cloud Workspace
                <br />
                Private Company Server
              </td>
            </tr>

            <tr>
              <td>
                <b>TRL & Time Tool</b>
                <br />
                <i>Hardware:</i>
                <br />
                HPC Workstation
                <br />
                Simulation Servers
                <br />
                Enterprise PC
              </td>

              <td>
                <b>TRL & Time Assessment</b>
                <br />
                <i>Hardware:</i>
                <br />
                Standard Workstation
                <br />
                GPU Workstation
              </td>

              <td>
                <b>Standalone TRL & Time</b>
                <br />
                <i>Hardware:</i>
                <br />
                Standard PC
              </td>

              <td>
                <b>TRL & Time ERP</b>
                <br />
                <i>Hardware:</i>
                <br />
                Enterprise Servers
                <br />
                Private Data Center
                <br />
                Cloud
              </td>

              <td>
                <b>TRL & Time AI/ML</b>
                <br />
                <i>Hardware:</i>
                <br />
                Industrial Servers
                <br />
                HPC Cluster
                <br />
                Research Workstation
              </td>

              <td>
                <b>TRL & Time Social</b>
                <br />
                <i>Hardware:</i>
                <br />
                Enterprise Workstation
                <br />
                Industrial Server
                <br />
                Cloud Server
              </td>
            </tr>
          </tbody>
        </table>
        <div className="levelStack">
          <div
            className={`stackLayer l1 ${level === "ground" ? "active" : ""}`}
            onClick={() => setLevel("ground")}
          >
            GROUND LEVEL
          </div>
        </div>
      </div>
    </div>
  );
}
// import React, { useState } from "react";
// import "../Styles/trl3d.css";

// export default function TRLLevels() {
//   const [level, setLevel] = useState("ground");

//   return (
//     <div className="containers">

//       {/* ---------------- GROUND LEVEL ---------------- */}
//       <div className={`screen ${level === "ground" ? "active" : ""}`}>
//         <h1 className="title">Integrated Solution For TRL & Time Estimation</h1>
//         <h2 className="subtitle">Ground Level</h2>

//         <table className="matrix">
//           <tbody>
//             <tr>
//               <td>Technology Readiness Level Tool</td>
//               <td>Technology Readiness Level Assessment</td>
//               <td>Standalone Technology Readiness Level</td>
//               <td>Technology Readiness Level ERP</td>
//               <td>Technology Readiness Level AI/ML</td>
//               <td>Technology Readiness Level Social</td>
//             </tr>

//             <tr>
//               <td>Time Tool</td>
//               <td>Time Assessment</td>
//               <td>Standalone Time</td>
//               <td>Time ERP</td>
//               <td>Time AI/ML</td>
//               <td>Time Social</td>
//             </tr>

//             <tr>
//               <td>TRL & Time Tool</td>
//               <td>TRL & Time Assessment</td>
//               <td>Standalone Combined</td>
//               <td>Combined ERP</td>
//               <td>Combined AI/ML</td>
//               <td>Combined Social</td>
//             </tr>
//           </tbody>
//         </table>

//         {/* 🔥 STACK SELECTOR */}
//         <div className="stackWrapper">
//           <div className="stackCard level3" onClick={() => setLevel("level3")}>
//             <span>Level 3</span>
//           </div>

//           <div className="stackCard level2" onClick={() => setLevel("level2")}>
//             <span>Level 2</span>
//           </div>

//           <div className="stackCard level1" onClick={() => setLevel("level1")}>
//             <span>Level 1</span>
//           </div>
//         </div>
//       </div>

//       {/* ---------------- LEVEL 1 ---------------- */}
//       <div className={`screen ${level === "level1" ? "active" : ""}`}>
//         <h1 className="title">Software For TRL & Time Estimation</h1>
//         <h2 className="subtitle">Level-1</h2>

//         <table className="matrix levelTable">
//           <tbody>
//             <tr>
//               <td><b>TRL Tool</b><br/>ESA TRL Calculator<br/>NASA TRL Worksheet<br/>Horizon Europe Tool</td>
//               <td><b>TRL Assessment</b><br/>Clean-Growth Tool<br/>eG Technology Assessment</td>
//               <td><b>Standalone TRL</b><br/>NASA DAU Tool<br/>Innovation Assessment</td>
//               <td><b>TRL ERP</b><br/>Siemens Teamcenter<br/>SAP PLM</td>
//               <td><b>TRL AI/ML</b><br/>CARE AI<br/>ESA AI Evaluator</td>
//               <td><b>TRL Social</b><br/>READINESSnavigator<br/>Kooplex Platform</td>
//             </tr>
//           </tbody>
//         </table>

//         <div className="backBtn" onClick={() => setLevel("ground")}>Back</div>
//       </div>

//       {/* ---------------- LEVEL 2 ---------------- */}
//       <div className={`screen ${level === "level2" ? "active" : ""}`}>
//         <h1 className="title">Software For TRL & Time Estimation</h1>
//         <h2 className="subtitle">Level-2</h2>

//         <table className="matrix levelTable">
//           <tbody>
//             <tr>
//               <td><b>TRL Tool</b><br/>ESA TRL Calculator<br/>NASA TRL Calculator<br/>Horizon Europe Tool<br/><br/><i>Tech:</i> JS, Python, SQL</td>
//               <td><b>TRL ERP</b><br/>Teamcenter<br/>Windchill<br/>SAP PLM<br/><br/><i>Tech:</i> Java, ABAP</td>
//               <td><b>TRL AI/ML</b><br/>CARE AI<br/>ESA AI<br/><br/><i>Tech:</i> Python, MATLAB</td>
//             </tr>
//           </tbody>
//         </table>

//         <div className="backBtn" onClick={() => setLevel("ground")}>Back</div>
//       </div>

//       {/* ---------------- LEVEL 3 ---------------- */}
//       <div className={`screen ${level === "level3" ? "active" : ""}`}>
//         <h1 className="title">Software For TRL & Time Estimation</h1>
//         <h2 className="subtitle">Level-3</h2>

//         <table className="matrix levelTable">
//           <tbody>
//             <tr>
//               <td><b>TRL Tool</b><br/><i>Hardware:</i><br/>Laptop<br/>Browser<br/>Cloud</td>
//               <td><b>AI/ML</b><br/><i>Hardware:</i><br/>GPU Server<br/>HPC Cluster</td>
//               <td><b>ERP</b><br/><i>Hardware:</i><br/>Enterprise Server</td>
//             </tr>
//           </tbody>
//         </table>

//         <div className="backBtn" onClick={() => setLevel("ground")}>Back</div>
//       </div>

//     </div>
//   );
// }
