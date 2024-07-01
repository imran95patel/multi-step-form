import React from "react";

const TabNavigation = ({ currentStep, setStep }) => {
  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={() => setStep(1)}
        disabled={currentStep === 1}
        className={`py-2 px-4 rounded focus:outline-none ${
          currentStep === 1
            ? "bg-teal-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        Form 1
      </button>
      <button
        onClick={() => setStep(2)}
        disabled={currentStep === 2}
        className={`py-2 px-4 rounded focus:outline-none ${
          currentStep === 2
            ? "bg-teal-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        Form 2
      </button>
      <button
        onClick={() => setStep(3)}
        disabled={currentStep === 3}
        className={`py-2 px-4 rounded focus:outline-none ${
          currentStep === 3
            ? "bg-teal-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        Form 3
      </button>
    </div>
  );
};

export default TabNavigation;
