import { useNavigate } from "react-router-dom";

const modules = [
  {
    title: "Architecture",
    desc: "System workflow and component interaction",
    path: "/architecture",
  },
  {
    title: "TRL Levels",
    desc: "Standardized maturity level evaluation",
    path: "/trl",
  },
  {
    title: "Integrated Solution",
    desc: "AI, ERP and standalone evaluation modes",
    path: "/solution",
  },
  {
    title: "Database",
    desc: "Evaluation records and TRL dataset",
    path: "/database",
  },
];

export default function Modules() {
  const navigate = useNavigate();

  return (
    <section className="modules" id="modules">
      <h2>Main Modules</h2>

      <div className="moduleGrid">
        {modules.map((m, i) => (
          <div
            key={i}
            className="card"
            onClick={() => navigate(m.path)}
            style={{ cursor: "pointer" }}
          >
            <h3 className="text-lg font-semibold m-3">{m.title}</h3>
            <p>{m.desc}</p>
            <span className="arrow">→</span>
          </div>
        ))}
      </div>
    </section>
  );
}
