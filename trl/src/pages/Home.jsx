import Header from "../components/Header";
import Workflow from "../components/Workflow";
import Modules from "../components/Modules";
import Matrix from "../components/Matrix";
import Footer from "../components/Footer";
import "../Styles/home.css";

export default function Home() {
  return (
    <>
      <Header />

      <section className="intro">
        <h1>Technology Readiness & Development Time Evaluation Platform</h1>
        <p>
          Evaluate technology maturity and predict deployment time using
          structured questionnaires, assessment data and AI-based prediction
          models.
        </p>
      <button
  className="primaryBtn"
  onClick={() =>
    document.getElementById("modules").scrollIntoView({
      behavior: "smooth"
    })
  }
>
  Start Evaluation
</button>

      </section>

      <Workflow />
      <Modules />
      <Matrix />
      <Footer />
    </>
  );
}
