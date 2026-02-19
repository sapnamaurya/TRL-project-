import React, { useState } from "react";
import "../Styles/architecture.css";
const steps = [
  "User",
  "Questionnaire",
  "Evaluation Engine",
  "TRL Calculator",
  "Time Estimator",
  "AI/ML Prediction",
  "Database",
  "Report",
];
const stages = [
  {
    title: "Basic Questionnaire",
    desc: "User answers structured technical questions. System assigns TRL level using rule-based logic.",
  },
  {
    title: "Assessment Based Validation",
    desc: "Lab feedback and testing environment verification improves TRL accuracy.",
  },
  {
    title: "Standalone Automated System",
    desc: "Fully automated calculation of TRL and estimated development duration.",
  },
  {
    title: "ERP Integration",
    desc: "Industry project data integrated to evaluate real deployment readiness.",
  },
  {
    title: "AI/ML Prediction",
    desc: "Machine learning predicts maturity and development time using past projects.",
  },
  {
    title: "Social Media Intelligence",
    desc: "Technology trend and adoption signals enhance prediction confidence.",
  },
];
export default function Architecture() {
  const [active, setActive] = useState(stages[0]);
  return (
    <div className="bg-[#F5F7FA] min-h-screen text-gray-800">
      {/* HEADER TITLE */}
      <div className="bg-white border-b py-10 text-center shadow-sm">
        <h1 className="text-3xl font-semibold text-[#1B3A57]">
          System Architecture
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Internal working structure of TRL & Time Estimation platform showing
          evaluation flow and prediction modules.
        </p>
      </div>

      {/* OVERVIEW */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-semibold mb-6 text-[#1B3A57]">
          Project Overview
        </h2>

        <p className="leading-relaxed text-lg">
          The system evaluates technology maturity level and estimates
          development time using structured questionnaire data and intelligent
          prediction methods. It provides objective readiness analysis and
          supports multiple evaluation modes including AI and integrated
          systems.
        </p>

        <div className="  grid md:grid-cols-3 gap-6 mt-10">
          <div className="tech-maturity bg-white p-6 rounded-xl shadow-sm border">
            Technology Maturity Evaluation
          </div>
          <div className=" tech-maturity bg-white p-6 rounded-xl shadow-sm border">
            Development Time Prediction
          </div>
          <div className="tech-maturity bg-white p-6 rounded-xl shadow-sm border">
            Multi-Mode Assessment
          </div>
        </div>
      </section>

      {/* WORKFLOW DIAGRAM */}
      <section className="bg-white py-20">
        <h2 className="text-2xl font-semibold text-center mb-12 text-[#1B3A57]">
          Working Flow
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-4 px-6">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="px-6 py-3 rounded-lg bg-[#EEF3F8] border text-sm font-medium shadow-sm">
                {step}
              </div>
              {index !== steps.length - 1 && (
                <span className="text-xl text-gray-400">→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* EVOLUTION */}
      <section className="evolutionSection">
        <h2 className="text-2xl font-semibold text-center mb-8 text-[#1B3A57]">
          System Evaluation Modes
        </h2>

        <div className="stageGrid ">
          {stages.map((s, i) => (
            <div
              key={i}
              className={`stageCard ${active.title === s.title ? "active" : ""}`}
              onClick={() => setActive(s)}
            >
              {s.title}
            </div>
          ))}
        </div>

        {/* COMMENT PANEL */}
        <div className="commentBox">
          <h3>{active.title}</h3>
          <p>{active.desc}</p>
        </div>
      </section>

      {/* COMPONENT DETAILS */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-10 text-[#1B3A57]">
            Component Description
          </h2>

          <div className="space-y-4 text-lg">
            <p>
              <b>Questionnaire Module:</b> Collects project parameters
            </p>
            <p>
              <b>Evaluation Engine:</b> Applies TRL rules
            </p>
            <p>
              <b>TRL Calculator:</b> Assigns maturity level
            </p>
            <p>
              <b>Time Estimator:</b> Predicts development duration
            </p>
            <p>
              <b>AI Module:</b> Learns from historical patterns
            </p>
            <p>
              <b>Database:</b> Stores evaluation records
            </p>
            <p>
              <b>Report Generator:</b> Generates final output
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
