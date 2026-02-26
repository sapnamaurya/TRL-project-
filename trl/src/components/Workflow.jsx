import Header from "../components/Header";
import "../Styles/home.css";

const steps = [
  { title: "Data Input", icon: "📂" },
  { title: "Questionnaire", icon: "📝" },
  { title: "Assessment", icon: "📊" },
  { title: "AI Prediction", icon: "🤖" },
  { title: "TRL Level", icon: "🚀" },
  { title: "Time Estimation", icon: "⏳" },
  { title: "Report", icon: "📄" }
];

export default function WorkflowPage() {
  return (
    <>
      <Header />

      <div className="workflowPage">
        <h1 className="workflowTitle">System Workflow Process</h1>

        <div className="workflowWrapper">
          {steps.map((step, i) => (
            <div key={i} className="workflowCard">
              <div className="iconBox">{step.icon}</div>
              <h3>{step.title}</h3>

              {i !== steps.length - 1 && (
                <div className="arrow">➜</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}