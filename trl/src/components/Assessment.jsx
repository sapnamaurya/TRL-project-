import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../Styles/assessment.css";

export default function Assessment() {
  const navigate = useNavigate();

  const questions = [
    {
      question: "What is the status of basic scientific principles involved in the technology?",
      options: [
        {
          text: "Identified as being present or true.",
          trl: "TRL 1",
          explanation: "Basic principles observed but not experimentally validated."
        },
        {
          text: "Analytically studied to confirm feasibility for potential application.",
          trl: "TRL 2",
          explanation: "Concept formulated and feasibility analyzed theoretically."
        }
      ]
    },
    {
      question: "Has the technology concept been formulated and experimental proof started?",
      options: [
        {
          text: "Concept formulated but no testing.",
          trl: "TRL 2",
          explanation: "Concept exists but no experimental validation yet."
        },
        {
          text: "Experimental proof of concept done.",
          trl: "TRL 3",
          explanation: "Initial experiments validate feasibility."
        }
      ]
    }
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleSelect = (option) => {
    setAnswers({
      ...answers,
      [currentQ]: option
    });
  };

  const handleNext = () => {
    if (!answers[currentQ]) {
      alert("Please select an option");
      return;
    }

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      const project = JSON.parse(localStorage.getItem("projectData"));

      const report = {
        ...project,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        answers
      };

      localStorage.setItem("report", JSON.stringify(report));
      navigate("/report");
    }
  };

  const handlePrevious = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  const handleClear = () => {
    const updated = { ...answers };
    delete updated[currentQ];
    setAnswers(updated);
  };

  return (
    <>
      <Header />

      <div className="assessmentContainer">
        <h2>TRL Assessment</h2>

        <div className="questionBox">
          <h3>{questions[currentQ].question}</h3>

          {questions[currentQ].options.map((opt, i) => (
            <div
              key={i}
              className={`option ${
                answers[currentQ]?.text === opt.text ? "selected" : ""
              }`}
              onClick={() => handleSelect(opt)}
            >
              {opt.text}
            </div>
          ))}
        </div>

        <div className="btnGroup">
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleClear}>Clear</button>
          <button onClick={handleNext}>Save & Next</button>
        </div>
      </div>
    </>
  );
}