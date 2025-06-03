import React from "react";

const QuizCard = ({ children, title, progress }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-white">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-center mb-4">
            <span className="text-[#6366F1] text-3xl font-bold">F</span>
            <span className="text-[#6366F1] text-3xl font-medium ml-1">Finelo</span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div className="bg-[#6366F1] h-2 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>

          <h2 className="text-xl font-medium text-center mb-6">{title}</h2>

          {children}
        </div>
      </div>
    </main>
  );
};

export default QuizCard;
