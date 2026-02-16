export default function Matrix() {
  return (
    <section className="matrix">
      <h2>Supported Evaluation Modes</h2>
      <table>
        <thead>
          <tr>
            <th>Mode</th>
            <th>Basic</th>
            <th>Assessment</th>
            <th>ERP</th>
            <th>AI</th>
            <th>Social</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>TRL</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr>
          <tr><td>Time</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr>
          <tr><td>Combined</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr>
        </tbody>
      </table>
    </section>
  );
}
