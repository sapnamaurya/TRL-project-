import Header from "../components/Header";
import "../Styles/report.css";
import html2pdf from "html2pdf.js"; // Library import karein
import { useRef } from "react";

export default function Report() {
  const report = JSON.parse(localStorage.getItem("report"));
  const reportRef = useRef(); // PDF area ko select karne ke liye ref

  if (!report) return <h2>No Report Found</h2>;

  const handleDownload = () => {
    const element = reportRef.current; // Is div ka PDF banega
    const options = {
      margin: 10,
      filename: `${report.projectName}_Report.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <>
      <Header />

    

      {/* Is div ke andar jo bhi hai wo PDF mein aayega */}
      <div ref={reportRef} className="assessmentContainers">
        <h2 style={{ 
          fontSize: "40px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "30px" 
        }}>Final Assessment Review Report</h2>

        <div style={{ marginBottom: "20px" }}>
          <p><b>Project:</b> {report.projectName}</p>
          <p><b>Role:</b> {report.role}</p>
          <p><b>Date:</b> {report.date}</p>
          <p><b>Time:</b> {report.time}</p>
        </div>

        <hr />

        {Object.values(report.answers).map((ans, i) => (
          <div key={i} className="reportCard" style={{ padding: "15px", borderBottom: "1px solid #ccc" }}>
            <p><b>Selected Answer:</b> {ans.text}</p>
            <p><b>TRL Level:</b> {ans.trl}</p>
            <p><b>Reason:</b> {ans.explanation}</p>
          </div>
        ))}
      </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button 
          onClick={handleDownload}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Download Report as PDF
        </button>
      </div>
    </>
  );
}