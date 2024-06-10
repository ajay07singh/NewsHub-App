import React from "react";

function Spinner() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center border-2 border-t-0 border-l-0 border-emerald-500 w-[48px] h-[48px] rounded-full animate-spin"></div>
    </div>
  );
}

export default Spinner;
