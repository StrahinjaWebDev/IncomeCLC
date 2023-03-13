import React from "react";
import { useState, useEffect } from "react";

const IncomeDetails = (props) => {
  const [nav, setNav] = useState(false);
  const [time, setTime] = useState("Weekly");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(props.inputValue);
  }, []);

  useEffect(() => {
    props.inputValueState(inputValue);
  }, [inputValue]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleTime = () => {
    const timeValue = event.target.value;
    setNav(!nav);
    setTime(timeValue);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="h-[100vh] w-screen flex justify-center items-center">
      <div className="w-[40rem] h-[30rem] border-[1px] border-black flex justify-start items-start">
        <div className="w-[25rem] h-[15rem] border-[1px] border-black flex flex-col gap-4">
          <h1>Income tax calculator</h1>
          <p>What is your total income?</p>
          <div className="flex flex-row">
            <input
              className="border-2 border-black"
              value={inputValue > 0 && inputValue}
              type="number"
              placeholder="e.g. 12,000"
              onChange={(e) => handleInputChange(e)}
            />{" "}
            <button
              onClick={handleNav}
              className="bg-gray-400 border-2 border-black w-[5rem] text-sm"
            >
              {time}
            </button>{" "}
            {nav ? (
              <div className="absolute w-[4.5rem] h-[5rem] bg-gray-500 ml-[11.8rem] mt-7 flex flex-col justify-center gap-1 text-[0.7rem]">
                <button value="Weekly" onClick={handleTime}>
                  Weekly
                </button>
                <button value="Fortnightly" onClick={handleTime}>
                  Fortnightly
                </button>
                <button value="Monthly" onClick={handleTime}>
                  Monthly
                </button>
                <button value="Annualy" onClick={handleTime}>
                  Annualy
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
          <p>Please choose the income type</p>
          <div className="flex flex-row justify-evenly  ">
            <button>Gross income</button>
            <button>Net income</button>
          </div>
          <div className="flex justify-center items-center">
            <button className="flex ">Calculate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeDetails;
