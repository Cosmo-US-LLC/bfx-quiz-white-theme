
import { useEffect, useState } from "react"

export default function CircularProgress({
  percentage = 0,
  size = 300,
  strokeWidth = 20,
  backgroundColor = "#12121200",
  progressColor = "#D99A26",
  textColor = "#FFFFFF",
  showPercentage = true,
}) {
  const [progress, setProgress] = useState(0); 
const [displayProgress, setDisplayProgress] = useState(0); 


  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setProgress(percentage)
  //   }, 100)

  //   return () => clearTimeout(timer)
  // }, [percentage])

// useEffect(() => {
//   let current = 0;
//   const upInterval = setInterval(() => {
//     current += 2;
//     setProgress(current);
//     setDisplayProgress(current);

//     if (current >= 100) {
//       clearInterval(upInterval);

//       // Step 2: Fill down to final target
//       const downInterval = setInterval(() => {
//         if (current > percentage) {
//           current -= 2;
//           setProgress(current);
//           setDisplayProgress(current);
//         } else {
//           clearInterval(downInterval);
//           setProgress(percentage);
//           setDisplayProgress(percentage);
//         }
//       }, 100);
//     }
//   }, 100);

//   return () => {
//     clearInterval(upInterval);
//   };
// }, [percentage]);


useEffect(() => {
  let current = 0;

  const upInterval = setInterval(() => {
    current += 2;

    if (current >= 100) {
      current = 100;
    }

    setProgress(current);
    setDisplayProgress(Math.round(current));

    if (current === 100) {
      clearInterval(upInterval);

      const downInterval = setInterval(() => {
        if (current > percentage) {
          current -= 2;

          if (current < percentage) {
            current = percentage;
          }

          setProgress(current);
          setDisplayProgress(Math.round(current));
        } else {
          clearInterval(downInterval);
          setProgress(percentage);
          setDisplayProgress(Math.round(percentage));
        }
      }, 120);
    }
  }, 120);

  return () => {
    clearInterval(upInterval);
  };
}, [percentage]);


  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative" style={{ width: size, height: size }}>
      
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rotate-[-90deg]">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke={backgroundColor}
            strokeWidth={strokeWidth}
          />

          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke={progressColor}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.3s ease-in-out" }}
          />
        </svg>

        {showPercentage && (
          <div className="absolute inset-0 flex items-center justify-center" style={{ color: textColor }}>
            <span className="text-[40px] text-[#000] font-bold">{Math.round(displayProgress)}%</span>
          </div>
        )}
      </div>

      {/* {label && (
        <div className="mt-4 text-[16px] font-[700]" style={{ color: textColor }}>
          {label}
        </div>
      )} */}
    </div>
  )
}
