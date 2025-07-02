import "./result.css";
export default function Result({ formatter, results }) {
  return (
    <>
      <table id="result">
        <thead>
          <td>Year</td>
          <td>Initial value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </thead>
        <tbody>
          {results.map((result, year) => (
            <tr key={year + 1}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(result.totalInterest)}</td>
              <td>
                {formatter.format(result.valueEndOfYear - result.totalInterest)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
