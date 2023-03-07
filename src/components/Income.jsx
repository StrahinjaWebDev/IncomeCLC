// kad se vrati u income details ostaje u inputu vidljiva vrednost
import { useState } from "react";

const Income = ({ income }) => {
  const [currentIncome, setCurrentIncome] = useState(income);

  return (
    <div className="h-[100vh] w-screen flex justify-center items-center">
      <div className="w-[40rem] h-[30rem] border-[1px] border-black flex flex-col">
        <div className="w-[100%] h-[5rem] border-[1px] border-black flex  gap-4">
          <h1>Income tax calculator</h1>
        </div>
        <div className="w-[100%] h-[20rem] border-[1px] border-black flex flex-col ">
          <div className="w-[100%] h-[5rem] border-[1px] border-black flex ">
            {currentIncome > 0 && currentIncome}
          </div>
          <div className="w-[100%] h-[15rem] border-[1px] border-black flex "></div>
        </div>
      </div>
    </div>
  );
};

export default Income;
