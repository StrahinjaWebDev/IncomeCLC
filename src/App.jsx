import IncomeDetails from "./components/IncomeDetails";
import Income from "./components/Income";
import { useState } from "react";

export default function App() {
  const [componentThatIsDisplayed, setComponentThatIsDisplayed] = useState(
    "incomeDetailsComponent"
  );
  const [income, setIncome] = useState(0);

  return (
    <div>
      <div>
        <button onClick={() => setComponentThatIsDisplayed("incomeComponent")}>
          Income
        </button>
        <button
          onClick={() => setComponentThatIsDisplayed("incomeDetailsComponent")}
        >
          Income Details
        </button>
      </div>

      {componentThatIsDisplayed === "incomeDetailsComponent" ? (
        <IncomeDetails
          income={(value) => setIncome(value)}
          inputState={income}
        />
      ) : (
        <Income
        income={income} />
        
      )}
    </div>
  );
}
