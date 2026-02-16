
const modules = [
  {
    title: "Architecture",
    desc: "System workflow and component interaction"
  },
  {
    title: "TRL Levels",
    desc: "Standardized maturity level evaluation"
  },
  {
    title: "Integrated Solution",
    desc: "AI, ERP and standalone evaluation modes"
  },
  {
    title: "Database",
    desc: "Evaluation records and datasets"
  }
];

export default function Modules() {
  return (
    <section className="modules" id="modules">
      <h2>Main Modules</h2>
      <div className="moduleGrid">
        {modules.map((m, i) => (
          <div key={i} className="card">
            <h3>{m.title}</h3>
            <p>{m.desc}</p>
            <span className="arrow">→</span>
          </div>
        ))}
      </div>
    </section>
  );
}

