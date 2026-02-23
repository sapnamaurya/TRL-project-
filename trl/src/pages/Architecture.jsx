import React, { useState, useEffect } from "react";
import "../Styles/architecture.css";

// WORKFLOW */
const workflow = [
  "User Input",
  "Questionnaire",
  "TRL Assessment Engine",
  "Mathematical Models",
  "SRL Integration",
  "Simulation",
  "Database",
  "Report Generation",
];

/* MODES */
const modes = [
  { title: "Basic Questionnaire", desc: "Initial TRL assigned using structured technical inputs." },
  { title: "Validation", desc: "Lab verification improves accuracy and reduces subjectivity." },
  { title: "Mathematical Models", desc: "Fuzzy logic, AHP and Bayesian analysis." },
  { title: "Simulation", desc: "Monte Carlo prediction of duration and risk." },
  { title: "ERP Integration", desc: "Deployment readiness evaluation." },
  { title: "AI Prediction", desc: "ML predicts maturity and timelines." },
];

/* TRL LEVELS */
const trlLevels = [
  "Basic principles observed and reported",
  "Technology concept and/ or application formulated",
  "Analytical and experimental critical function and/ or characteristic proof of concept",
  "Component and /or breadboard validation in laboratory environment",
  "Component and/ or breadboard validation in relevent environment",
  "System / sunsystem model or prototype demonstration in space environment",
  "System prototype demonstration in space environment ",
  "Actual system completed and'fligth Qualified' successful mission operations",
  "Actual system 'fligth proven' successful mission operations",
];


export default function Architecture() {
  const [active, setActive] = useState(modes[0]);
  const [animate, setAnimate] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 300);

    let p = 0;
    const interval = setInterval(() => {
      p += 1;
      setProgress(p);
      if (p === 100) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="arch-container">

      {/* HEADER */}
      <div className="arch-header glass">
        <h1>Advanced TRL–SRL Architecture</h1>
        <p>Integrated readiness evaluation and schedule prediction system</p>

        <div className="progressBar">
          <div className="progressFill" style={{ width: progress + "%" }} />
        </div>
      </div>
      
       {/* TRL INTRO */}
      <section className="section white">
        <h2>Technology Readiness Levels</h2>

        <div className="mode-desc glass">
          <p>
            Technology Readiness Levels (TRL) are a standardized measurement
            system used to evaluate the maturity level of a technology.
          </p>

          <p style={{marginTop:"10px"}}>
            TRL ranges from 1 (basic principles) to 9 (flight proven system).
          </p>
        </div>
      </section>

      {/* TRL SCALE */}
      <section className="section">
        <h2>TRL Scale</h2>

        <div className="trl-container">
          {trlLevels.map((text, i) => (
            <div
              key={i}
              className="trl-row"
              style={{
                width: animate ? `${55 + i * 5}%` : "0%",
                background: `hsl(${i * 32},80%,50%)`,
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              <span className="trl-label">TRL {i + 1}</span>
              {text}
            </div>
          ))}
        </div>
      </section>

      {/*TRL DESCRIPTION*/} 
      <section className="section">
        <h2>TRL Description</h2>

        <div className="info-box large">
          Technology Readiness Levels (TRL) are a type of measurement system used to assess the maturity level of a particular technology. Each technology project is evaluated against the parameters for each technology level and is then assigned a TRL rating based on the projects progress. There are nine technology readiness levels. TRL 1 is the lowest and TRL 9 is the highest.
        </div>
      </section>

        {/* WORKFLOW */}
      <section className="section white">
        <h2>System Flow Diagram</h2>

        <div className="diagram">
          {workflow.map((step, i) => (
            <div key={i} className="node">
              {step}
              {i !== workflow.length - 1 && <div className="line" />}
            </div>
          ))}
        </div>
      </section>

      {/* STEP 1 */}
      <section className="section white">
        <h2>Step 1 — Mathematical Technique for TRL Assessment</h2>

        <div className="cards">

          <div className="card glass">
            <h3>Objective</h3>
            <p>
              Develop a mathematical technique to estimate TRL values with
              high validity, reduced subjectivity and system-level applicability.
            </p>
          </div>

          <div className="card glass">
            <h3>Granular Assessment</h3>
            <ul>
              <li>TRL computed using multiple factors</li>
              <li>Not based on single judgement</li>
              <li>Captures subsystem maturity</li>
              <li>Improves accuracy</li>
            </ul>
          </div>

          <div className="card glass">
            <h3>Posterior Model</h3>
            <p>
              TRL is computed using posterior model-based calculations instead
              of subjective prior estimation.
            </p>
          </div>

        </div>
      </section>

      {/* FUZZY */}
      <section className="section">
        <h2>Fuzzy Set Based TRL Modeling</h2>

        <div className="cards">

          <div className="card glass">
            <h3>Normalization</h3>
            <p>Aggregated scores normalized for comparability across TRL levels.</p>
          </div>

          <div className="card glass">
            <h3>Membership Functions</h3>
            <p>Triangular functions centered at TRLn overlapping adjacent levels.</p>
          </div>

          <div className="card glass">
            <h3>Multiple Membership</h3>
            <p>A project may belong to multiple TRLs simultaneously.</p>
          </div>

          <div className="card glass">
            <h3>Boundary Behavior</h3>
            <p>Membership highest at center and decreases linearly to neighbors.</p>
          </div>

        </div>
      </section>

      {/* STEP 2 */}
      <section className="section white">
        <h2>Step 2 — Monte Carlo Simulation Model</h2>

        <div className="cards">

          <div className="card glass">
            <h3>Purpose</h3>
            <p>Used to estimate schedule time and project uncertainty.</p>
          </div>

          <div className="card glass">
            <h3>Metrics Generated</h3>
            <ul>
              <li>Mean duration</li>
              <li>Standard deviation</li>
              <li>P95 completion time</li>
              <li>Completion probability</li>
            </ul>
          </div>

          <div className="card glass">
            <h3>Schedule Buffer</h3>
            <p>
              PB = Expected Duration − Percentile₉₅(Duration)
            </p>
          </div>

          <div className="card glass">
            <h3>Why Simulation?</h3>
            <p>Captures uncertainty and improves planning reliability.</p>
          </div>

        </div>
      </section>

{/* EXECUTION */}
<section className="section">
  <h2>Project Execution Plan</h2>

  <div className="cards">

    {/* Pilot Study */}
    <div className="card glass">
      <h3>Pilot Study</h3>
      <p>
        Phased validation conducted on DRDO projects to verify TRL computation
        accuracy, reliability, and real-world applicability before full-scale deployment.
      </p>
    </div>

    {/* Activities */}
    <div className="card glass">
      <h3>Execution Workflow</h3>

      <div className="flow-steps">
        <span>Literature</span>
        <span>Proposal</span>
        <span>Methodology</span>
        <span>Survey</span>
        <span>Analysis</span>
      </div>

    </div>

  </div>
</section>


      {/* TIMELINE */}
      <section className="section white">
        <h2>Project Timeline</h2>

        <div className="cards">
          {[
            "Literature review",
            "Factors identified",
            "Factors finalized",
            "Survey conducted",
            "Analysis report",
            "Risk assessment",
            "Simulation output",
            "CCPM implemented",
            "Objectives achieved"
          ].map((item, i) => (
            <div key={i} className="card glass">{item}</div>
          ))}
        </div>
      </section>

      {/* LITERATURE */}
      <section className="section">
        <h2>Findings from Literature Review</h2>

        <div className="cards">

          <div className="card glass">
            <h3>Group 1</h3>
            <p>Studies focused on TRL factors and limitations.</p>
          </div>

          <div className="card glass">
            <h3>Group 2</h3>
            <p>Linear models cannot capture complex technology behavior.</p>
          </div>

          <div className="card glass">
            <h3>Group 3</h3>
            <p>SRL calculated using IRL × TRL matrices.</p>
          </div>

        </div>
      </section>

      {/* MODES */}
      <section className="section">
        <h2>Evaluation Modes</h2>

        <div className="mode-grid">
          {modes.map((m, i) => (
            <div
              key={i}
              className={`mode-card glass ${active.title === m.title ? "active" : ""}`}
              onClick={() => setActive(m)}
            >
              {m.title}
            </div>
          ))}
        </div>

        <div className="mode-desc glass">
          <h3>{active.title}</h3>
          <p>{active.desc}</p>
        </div>
      </section>

       {/* OUTPUT */}
      <section className="section white">
        <h2>Software Outputs</h2>
        <div className="cards">
          <div className="card glass">TRL Score</div>
          <div className="card glass">SRL Matrix</div>
          <div className="card glass">Completion Probability</div>
          <div className="card glass">Risk Metrics</div>
        </div>
      </section>
     

    </div>
  );
}