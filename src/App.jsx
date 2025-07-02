import { useState } from "react";
import Input from "./components/input";
import Result from "./components/result.jsx";
import { calculateInvestmentResults, formatter } from "./util/investment.js";

function App() {
  const [userInputValues, setUserInputValues] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });
  function handleInputchange(value, keyName) {
    setUserInputValues((prevInputvalues) => {
      return {
        ...prevInputvalues,
        [keyName]: value,
      };
    });
  }
  const results = calculateInvestmentResults(userInputValues);
  let resultDisplay;

  if (userInputValues.duration > 0) {
    resultDisplay = <Result results={results} formatter={formatter} />;
  } else {
    resultDisplay = (
      <p className="center">Please Enter a duration greaterthan zero.</p>
    );
  }

  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <Input
            inputName="Initial Investment"
            labelName="initialInvestment"
            handleInputchange={handleInputchange}
          />
          <Input
            inputName="Annual Investment"
            labelName="annualInvestment"
            handleInputchange={handleInputchange}
          />
        </div>

        <div className="input-group">
          <Input
            inputName="Expected return"
            labelName="expectedReturn"
            handleInputchange={handleInputchange}
          />
          <Input
            inputName="Duration"
            labelName="duration"
            handleInputchange={handleInputchange}
          />
        </div>
      </section>{" "}
      {resultDisplay}
      {/* <Result results={results} formatter={formatter} /> */}
    </>
  );
}

export default App;
