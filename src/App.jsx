import IncomeDetails from "./components/IncomeDetails";
import Income from "./components/Income";
import { useState } from "react";

export default function App() {
  const [componentThatIsDisplayed, setComponentThatIsDisplayed] = useState(
    "incomeDetailsComponent"
  );
  const [inputValue, setInputValue] = useState("");
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
          inputValueState={(state) => setInputValue(state)}
          inputValue={inputValue}
        />
      ) : (
        <Income
          inputValue={inputValue}
          inputValueState={(state) => setInputValue(state)}
        />
      )}
    </div>
  );
}
