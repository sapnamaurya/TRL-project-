import React, { useState, useEffect } from "react";
import "../Styles/architecture.css";
import Header from "../components/Header";

/* WORKFLOW */
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

/* MODES (WITH ICONS) */
const modes = [
  { icon: "📋", title: "Basic Questionnaire", desc: "Initial TRL assigned using structured technical inputs." },
  { icon: "🛡️", title: "Validation", desc: "Lab verification improves accuracy and reduces subjectivity." },
  { icon: "∑", title: "Mathematical Models", desc: "Fuzzy logic, AHP and Bayesian analysis." },
  { icon: "📈", title: "Simulation", desc: "Monte Carlo prediction of duration and risk." },
  { icon: "🔗", title: "ERP Integration", desc: "Deployment readiness evaluation." },
  { icon: "🧠", title: "AI Prediction", desc: "ML predicts maturity and timelines." },
];

/* OUTPUTS (WITH ICONS) */
const outputs = [
  { icon: "🎯", title: "TRL Score", desc: "Readiness level 1–9" },
  { icon: "📊", title: "SRL Matrix", desc: "Schedule readiness map" },
  { icon: "📉", title: "Completion Probability", desc: "Probability distribution" },
  { icon: "⚠️", title: "Risk Metrics", desc: "Weighted risk analysis" },
];

/* TRL LEVELS */
const trlLevels = [
  "Basic principles observed and reported",
  "Technology concept and/or application formulated",
  "Analytical and experimental proof of concept",
  "Component validation in laboratory environment",
  "Component validation in relevant environment",
  "System prototype demonstration",
  "System demonstration in operational environment",
  "System complete and qualified",
  "Actual system proven in mission operations",
];

/* COLORS */
const trlColors = [
  "#38bdf8",
  "#60a5fa",
  "#818cf8",
  "#a78bfa",
  "#c084fc",
  "#f472b6",
  "#fb7185",
  "#facc15",
  "#4ade80"
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

      <Header />

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
          <p>Technology Readiness Levels (TRL) evaluate technology maturity.</p>
          <p style={{ marginTop: "10px" }}>
            TRL ranges from 1 (basic principles) to 9 (fully operational system).
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
                background: trlColors[i],
                color: i === 7 ? "#000" : "#020617",
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              <span className="trl-label">TRL {i + 1}</span>
              {text}
            </div>
          ))}
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
              <div className="mode-icon">{m.icon}</div>
              <div>{m.title}</div>
            </div>
          ))}
        </div>

        <div className="mode-desc glass">
          <h3>{active.icon} {active.title}</h3>
          <p>{active.desc}</p>
        </div>
      </section>

      {/* OUTPUT */}
      <section className="section white">
        <h2>Software Outputs</h2>

        <div className="cards">
          {outputs.map((item, i) => (
            <div key={i} className="card glass">
              <h3>{item.icon} {item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}