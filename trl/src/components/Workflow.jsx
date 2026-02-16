const steps = [
  "Data Input",
  "Questionnaire",
  "Assessment",
  "AI Prediction",
  "TRL Level",
  "Time Estimation",
  "Report"
];

export default function Workflow() {
  return (
    <section className="workflow">
      <h2>System Workflow</h2>
      <div className="flowContainer">
        {steps.map((step, i) => (
          <div key={i} className="flowItem">
            {step}
          </div>
        ))}
      </div>
    </section>
  );
}