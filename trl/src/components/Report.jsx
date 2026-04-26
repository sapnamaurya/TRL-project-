import Header from "../components/Header";
import "../Styles/report.css";

export default function Report() {
  const report = JSON.parse(localStorage.getItem("report"));

  if (!report) return <h2>No Report Found</h2>;

  return (
    <>
      <Header />

      <div className="assessmentContainer">
        <h2 style={{    fontSize:" 40px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "30px"}}>Final Assessment Review Report</h2>

        <p><b>Project:</b> {report.projectName}</p>
        <p><b>Role:</b> {report.role}</p>
        <p><b>Date:</b> {report.date}</p>
        <p><b>Time:</b> {report.time}</p>

        <hr />

        {Object.values(report.answers).map((ans, i) => (
          <div key={i} className="reportCard">
            <p><b>Selected Answer:</b> {ans.text}</p>
            <p><b>TRL Level:</b> {ans.trl}</p>
            <p><b>Reason:</b> {ans.explanation}</p>
          </div>
        ))}
      </div>
    </>
  );
}