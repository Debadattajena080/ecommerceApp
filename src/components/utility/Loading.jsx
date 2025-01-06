import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-96">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    </div>
  );
};

export default Loading;
