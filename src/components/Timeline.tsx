import React from 'react';

const Timeline = () => {
  const education = [
    {
      institution: "PSG COLLEGE OF TECHNOLOGY",
      degree: "Master of Computer Applications",
      period: "2024-2026",
      grade: "CGPA - 7.47 (Upto 1st sem)"
    },
    {
      institution: "PSG COLLEGE OF ARTS & SCIENCE",
      degree: "Bachelor's Degree in Computer Science",
      period: "2021-2024",
      grade: "CGPA - 8.0"
    },
    {
      institution: "LISIEUX MAT HR SEC SCHOOL",
      degree: "PCM With Computer Science",
      period: "2019-2021",
      grade: "Percentage: 90.61%"
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      {education.map((edu, index) => (
        <div key={index} className="relative pl-8 pb-12 group">
          <div className="absolute left-0 top-0 w-1 h-full bg-violet-400 group-hover:bg-violet-600 transition-colors"></div>
          <div className="absolute left-0 top-0 w-4 h-4 -ml-2 rounded-full bg-violet-400 group-hover:bg-violet-600 transition-colors"></div>
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg group-hover:transform group-hover:-translate-y-1 transition-transform">
            <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
            <p className="text-violet-400 mb-2">{edu.degree}</p>
            <p className="text-sm text-gray-400 mb-1">{edu.period}</p>
            <p className="text-sm text-gray-400">{edu.grade}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;