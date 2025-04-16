import React from 'react';

const Timeline = () => {
  const education = [
    {
      institution: "PSG COLLEGE OF TECHNOLOGY",
      degree: "Master of Computer Applications",
      period: "2024-2026",
      grade: "CGPA - 7.47 (Upto 1st sem)",
    },
    {
      institution: "PSG COLLEGE OF ARTS & SCIENCE",
      degree: "Bachelor's Degree in Computer Science",
      period: "2021-2024",
      grade: "CGPA - 8.0",
    },
    {
      institution: "LISIEUX MAT HR SEC SCHOOL",
      degree: "PCM With Computer Science",
      period: "2019-2021",
      grade: "Percentage: 90.61%",
    },
  ];

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-16">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-violet-500"></div>

      {education.map((edu, index) => {
        const isLeft = index % 2 === 0;

        return (
          <div key={index} className="mb-16 flex justify-between items-center w-full relative">
            {/* Empty space for layout balance */}
            <div className={`w-5/12 ${isLeft ? '' : 'order-1'}`}></div>

            {/* Center circle (always on vertical line) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-8 h-8 rounded-full bg-violet-600 border-4 border-white transition-all duration-300 hover:bg-yellow-400 hover:shadow-[0_0_12px_6px_rgba(255,215,0,0.7)]"></div>
            </div>

            {/* Card */}
            <div
              className={`
                bg-gray-900/60 backdrop-blur-md p-6 rounded-xl shadow-md w-5/12 transition-all duration-300
                hover:shadow-[0_0_15px_6px_rgba(255,215,0,0.4)]
                ${isLeft ? 'order-1 text-right' : 'text-left'}
              `}
            >
              <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
              <p className="text-violet-400 font-medium">{edu.institution}</p>
              <p className="text-sm text-gray-300 mt-1">{edu.period}</p>
              <p className="text-sm text-gray-400">{edu.grade}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
