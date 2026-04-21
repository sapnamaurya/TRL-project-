import React, { useState } from "react";
import "../Styles/trl3d.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
export default function TRLLevels() {
  const [level, setLevel] = useState("ground");

  return (
    <div className="containers">
      <Header />
      {/* ---------------- GROUND LEVEL ---------------- */}
      <div className={`screen ${level === "ground" ? "active" : ""}`}>
        <h1 className="title">Integrated Solution For TRL & Project Duration Estimation</h1>

        <h2 className="subtitle">Ground Level</h2>

        <table className="matrix">
          <tbody>
            <tr>
              <td>Technology Readiness Level Tool</td>
              <td>Technology Readiness Level Assessment</td>
              <td>Standalone Technology Readiness Level</td>
              <td>Technology Readiness Level with ERP</td>
              <td>Technology Readiness Level with AI/ML</td>
              <td>Technology Readiness Level with AI?ML Social</td>
            </tr>

            <tr>
              <td>Project Duration Estimation Tool</td>
              <td>Project Duration Estimation Assessment</td>
              <td>Standalone Project Duration Estimation Implementation </td>
              <td>Project Duration Estimation with ERP</td>
              <td>Project Duration Estimation with AI/ML</td>
              <td>Project Duration Estimation with AI/ML Social</td>
            </tr>

            <tr>
              <td>TRL & Project Duration Estimation Tool</td>
              <td>TRL & Project Duration Estimation Assessment</td>
              <td>Standalone TRL and Project Duration Estimation implementation</td>
              <td>TRL and Project Duration Estimation Tool with ERP</td>
              <td>TRL and Project Duration Estimation Tool with AI/ML</td>
              <td>TRL and Project Duration Estimation Tool with AI/Ml Social</td>
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
          <div
            className={`stackLayer l4 ${level === "level4" ? "active" : ""}`}
            onClick={() => setLevel("level4")}
          >
            LEVEL 4
          </div>
          <div
            className={`stackLayer l5 ${level === "level5" ? "active" : ""}`}
            onClick={() => setLevel("level5")}
          >
            LEVEL 5
          </div>
          <div
            className={`stackLayer l6 ${level === "level6" ? "active" : ""}`}
            onClick={() => setLevel("level6")}
          >
            LEVEL 6
          </div>
          <div
            className={`stackLayer l7 ${level === "level7" ? "active" : ""}`}
            onClick={() => setLevel("level7")}
          >
            LEVEL 7
          </div>
        </div>
      </div>

      {/* ---------------- LEVEL 1 ---------------- */}
      <div className={`screen level1 ${level === "level1" ? "active" : ""}`}>
        <h1 className="title">Software For TRL & Project Duration Estimation</h1>
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
                <b>Standalone TRL implementation</b>
                <br />
                NASA DAU Tool
                <br />
                Innovation Assessment
              </td>

              <td>
                <b>TRL with ERP</b>
                <br />
                Siemens Teamcenter
                <br />
                SAP PLM
              </td>

              <td>
                <b>TRL with AI/ML</b>
                <br />
                CARE AI
                <br />
                ESA AI Evaluator
              </td>

              <td>
                <b>TRL with Social media</b>
                <br />
                READINESSnavigator
                <br />
                Kooplex Platform
              </td>
            </tr>

            <tr>
              <td>
                <b>Project Duration Estimation Tool</b>
                <br />
                Jira
                <br />
                MS Project
                <br />
                Primavera
              </td>

              <td>
                <b>Project Duration Estimation Assessment</b>
                <br />
                SEER-SEM
                <br />
                SLIM Estimate
              </td>

              <td>
                <b>Standalone Project Duration Estimation implementation</b>
                <br />
                COCOMO II
                <br />
                SEER SIM
              </td>

              <td>
                <b>Project Duration Estimation with ERP</b>
                <br />
                SAP S/4HANA
                <br />
                Odoo ERP
              </td>

              <td>
                <b>Project Duration Estimation with AI/ML</b>
                <br />
                Forecast AI
                <br />
                ALICE Tech
              </td>

              <td>
                <b>Project Duration Estimation with Social Media</b>
                <br />
                ClickUp AI
                <br />
                Notion AI
              </td>
            </tr>

            <tr>
              <td>
                <b>TRL & TProject Duration Estimation Tool</b>
                <br />
                NASA TAT-C + OpenMDAO
                <br />
                SEER SEM
                <br />
                ANSYS ModelCenter
              </td>

              <td>
                <b>TRL & TProject Duration Estimation Assessment</b>
                <br />
                Siemens TeamCenter + Simcenter
                <br />
                Ansys ModelCenter
                <br />
                IBM Engineering Lifecycle Management
              </td>

              <td>
                <b>Standalone TRL & TProject Duration Estimation implementation</b>
                <br />
                ESA TRL Calculator + COCOMO based Estimation System
              </td>

              <td>
                <b>TRL & TProject Duration Estimation with ERP</b>
                <br />
                Siemens Teamcenter + SAP ERP
                <br />
                Oracle Primavera P6 EPPM + ERP
                <br />
                SAP Portfolio & Project Management (PPM)
              </td>

              <td>
                <b>TRL & TProject Duration Estimation with AI/ML</b>
                <br />
                IBM Engineering Lifecycle Management
                <br />
                Siemens TeamCenter + Predictive Engineering analytics
                <br />
                NASA OpenMBEE + Digital Engineering
              </td>

              <td>
                <b>TRL & TProject Duration Estimation with AI/ML social media</b>
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
        <h1 className="title">Language For TRL & Project Duration Estimation</h1>
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
                <b>Project Duration Estimation Tool</b>
                <br />
                <br />
                <i>Tech:</i> JavaScript, C/Java/Python, MATLAB
              </td>

              <td>
                <b>Project Duration Estimation Assessment</b>
                <br />
                <br />
                <i>Tech:</i> C++, C#, .NET
              </td>

              <td>
                <b>Standalone Project Duration Estimation implementation</b>
                <br />
                <br />
                <i>Tech:</i> C/C++, Python, MATLAB, JavaScript
              </td>

              <td>
                <b>Project Duration Estimation with ERP</b>
                <br />
                <br />
                <i>Tech:</i> ABAP, SAP HANA DB, .NET, PostgreSQL
              </td>

              <td>
                <b>Project Duration Estimation with AI/ML</b>
                <br />
                <br />
                <i>Tech:</i> Python, GraphQL, C++
              </td>

              <td>
                <b>Project Duration Estimation with AI/ML social media</b>
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
                <b>TRL & Project Duration Estimation Tool</b>
                <br />
                <br />
                <i>Tech:</i> Python, C++, .NET, MATLAB
              </td>

              <td>
                <b>TRL & Project Duration Estimation Assessment</b>
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
                <b>TRL & Project Duration Estimation with ERP</b>
                <br />
                <br />
                <i>Tech:</i> Java, C++, .NET, Oracle DB, ABAP
              </td>

              <td>
                <b>TRL & Project Duration Estimation with AI/ML</b>
                <br />
                <br />
                <i>Tech:</i> Java, C++, JavaScript, Python
              </td>

              <td>
                <b>TRL & Project Duration Estimation with AI/ML social media</b>
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
        <h1 className="title">Hardware For TRL & Project Duration Estimation</h1>
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
                <b>Standalone TRL implementation</b>
                <br />
                <i>Hardware:</i>
                <br />
                Laptop
              </td>

              <td>
                <b>TRL with ERP</b>
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
                <b>TRL with AI/ML</b>
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
                <b>TRL with Social Media</b>
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
                <b>Project Duration Estimation Tool</b>
                <br />
                <i>Hardware:</i>
                <br />
                Personal Browser
                <br />
                Windows Workstation
              </td>

              <td>
                <b>Project Duration Estimation Assessment</b>
                <br />
                <i>Hardware:</i>
                <br />
                Engineering Workstation
                <br />
                Personal Computer
              </td>

              <td>
                <b>Standalone Project Duration Estimation </b>
                <br />
                <i>Hardware:</i>
                <br />
                Windows PC
                <br />
                Workstation
              </td>

              <td>
                <b>Project Duration Estimation with ERP</b>
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
                <b>Project Duration Estimation with AI/ML</b>
                <br />
                <i>Hardware:</i>
                <br />
                Distributed CPU/GPU Cloud
                <br />
                HPC Servers
              </td>

              <td>
                <b>Project Duration Estimation with Social Media</b>
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
                <b>TRL & Project Duration Estimation Tool</b>
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
                <b>TRL & Project Duration Estimation Assessment</b>
                <br />
                <i>Hardware:</i>
                <br />
                Standard Workstation
                <br />
                GPU Workstation
              </td>

              <td>
                <b>Standalone TRL & Project Duration Estimation implementation</b>
                <br />
                <i>Hardware:</i>
                <br />
                Standard PC
              </td>

              <td>
                <b>TRL & Project Duration Estimation with ERP</b>
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
                <b>TRL & Project Duration Estimation with AI/ML</b>
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
                <b>TRL & Project Duration Estimation with Social Media</b>
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
      <div className={`screen ${level === "level4" ? "active" : ""}`}>
  <h1 className="title">Protocols For TRL & Time Estimation</h1>
  <h2 className="subtitle">Level-4</h2>

  <table className="matrix levelTable">
    <tbody>
      <tr>
        <td><b>TRL Tool</b><br/>REST API<br/>File-based<br/>RPC</td>
        <td><b>TRL Assessment</b><br/>Client-Server<br/>gRPC<br/>DB API</td>
        <td><b>Standalone TRL</b><br/>Local Pipeline<br/>CLI Tools</td>
        <td><b>TRL ERP</b><br/>REST + SQL<br/>SOAP<br/>Event Driven</td>
        <td><b>TRL AI/ML</b><br/>FastAPI<br/>gRPC<br/>Airflow</td>
        <td><b>TRL Social</b><br/>Kafka<br/>REST APIs<br/>Event Driven</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  );
}
