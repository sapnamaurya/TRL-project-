import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import "../Styles/home.css";

const modules = [
  {
    title: "Architecture",
    desc: "System workflow and component interaction",
    path: "/architecture",
    icon: "🏗️"
  },
  {
    title: "TRL Levels",
    desc: "Standardized maturity level evaluation",
    path: "/path",
    icon: "📊"
  },
  {
    title: "Integrated Solution",
    desc: "AI, ERP and standalone evaluation modes",
    path: "/solution",
    icon: "🤖"
  },
  {
    title: "Database",
    desc: "Evaluation records and TRL dataset",
    path: "/database",
    icon: "🗄️"
  },
];

export default function ModulesPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <div className="modulesPage">
        <h1 className="modulesTitle">System Modules</h1>

        <div className="modulesGrid">
          {modules.map((m, i) => (
            <div
              key={i}
              className="moduleCard"
              onClick={() => navigate(m.path)}
            >
              <div className="moduleIcon">{m.icon}</div>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
              <div className="moduleArrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}