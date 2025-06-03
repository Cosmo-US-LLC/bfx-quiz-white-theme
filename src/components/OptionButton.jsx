import React from "react";

const OptionButton = ({ option, isSelected, onClick }) => {
  return (
    <div
      className={`flex items-center border rounded-lg p-4 cursor-pointer transition-colors ${
        isSelected ? "border-[#6366F1] bg-[#6366F1]/5" : "border-gray-200"
      }`}
      onClick={onClick}
    >
      <label className="flex-grow cursor-pointer">{option}</label>
    </div>
  );
};

export default OptionButton;
