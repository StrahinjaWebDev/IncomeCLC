import React from "react";
import { useState } from "react";
import Income from "./Income";


const IncomeDetails = () => {
  const [nav, setNav] = useState(false);
  const [time, setTime] = useState("Weekly");
  const [backgroundColorGross, setBackgroundColorGross] = useState("bg-white");
  const [backgroundColorIncome, setBackgroundColorIncome] =
    useState("bg-white");
   const [isDisplayed, setIsDisplayed] = useState('incomeDetails')
  const [calculate, setCalculate] = useState("");

  

  
 
  const changeBackgroundColorGross = () => {
    setBackgroundColorGross("bg-green-500");
    setBackgroundColorIncome("bg-white-500");
  };

  const changeBackgroundColorIncome = () => {
    setBackgroundColorIncome("bg-green-500");
    setBackgroundColorGross("bg-white-500");
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
              type="number"
              placeholder="e.g. 12,000"
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
            <button
              className={`${backgroundColorGross}`}
              onClick={changeBackgroundColorGross}
            >
              Gross income
            </button>
            <button
              className={`${backgroundColorIncome}`}
              onClick={changeBackgroundColorIncome}
            >
              Net income
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button className="flex ">
              Calculate
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default IncomeDetails;
