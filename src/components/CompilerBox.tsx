import React, { useState } from 'react';
import { Play } from 'lucide-react';

const CompilerBox = () => {
  const [showFullInfo, setShowFullInfo] = useState(false);

  const shortInfo = (
    <span>
      <span className="text-blue-400">console</span>
      <span className="text-gray-400">.</span>
      <span className="text-yellow-300">log</span>
      <span className="text-gray-400">(</span>
      <span className="text-green-400">"Hello! I'm Sanjay Panneerselvan"</span>
      <span className="text-gray-400">);</span>
    </span>
  );

  const fullInfo = (
    <>
      <div className="text-gray-500">// About Me</div>
      <span className="text-blue-400">const</span> sanjay <span className="text-gray-400">=</span> <span className="text-gray-400">{'{'}</span>
      
      <div className="ml-4">
        <span className="text-yellow-300">role</span><span className="text-gray-400">:</span>
        <span className="text-green-400"> "Full Stack Developer & AI Enthusiast"</span><span className="text-gray-400">,</span>
      </div>

      <div className="ml-4">
        <span className="text-yellow-300">education</span><span className="text-gray-400">:</span> {'{'}
        <div className="ml-4">
          <span className="text-yellow-300">current</span><span className="text-gray-400">:</span>
          <span className="text-green-400"> "Master of Computer Applications @ PSG College of Technology"</span><span className="text-gray-400">,</span>
        </div>
        <div className="ml-4">
          <span className="text-yellow-300">previous</span><span className="text-gray-400">:</span>
          <span className="text-green-400"> "Bachelor's Degree in Computer Science @ PSG College of Arts & Science"</span>
        </div>
        <span className="ml-4 text-gray-400">{'}'},</span>
      </div>

      <div className="ml-4">
        <span className="text-yellow-300">skills</span><span className="text-gray-400">:</span> {'{'}
        <div className="ml-4">
          <span className="text-yellow-300">languages</span><span className="text-gray-400">:</span> [
          <span className="text-green-400">"C"</span>, <span className="text-green-400">"C++"</span>, <span className="text-green-400">"Python"</span>,
          <span className="text-green-400">"JavaScript"</span>, <span className="text-green-400">"TypeScript"</span>],
        </div>
        <div className="ml-4">
          <span className="text-yellow-300">frontend</span><span className="text-gray-400">:</span> [
          <span className="text-green-400">"React.js"</span>, <span className="text-green-400">"Next.js"</span>, <span className="text-green-400">"TailwindCSS"</span>],
        </div>
        <div className="ml-4">
          <span className="text-yellow-300">backend</span><span className="text-gray-400">:</span> [
          <span className="text-green-400">"Node.js"</span>, <span className="text-green-400">"Express.js"</span>],
        </div>
        <div className="ml-4">
          <span className="text-yellow-300">mobile</span><span className="text-gray-400">:</span> [
          <span className="text-green-400">"Flutter"</span>, <span className="text-green-400">"Dart"</span>],
        </div>
        <div className="ml-4">
          <span className="text-yellow-300">design</span><span className="text-gray-400">:</span> [
          <span className="text-green-400">"Adobe Photoshop"</span>, <span className="text-green-400">"Canva"</span>,
          <span className="text-green-400">"Figma"</span>, <span className="text-green-400">"Adobe Premier Pro"</span>]
        </div>
        <span className="ml-4 text-gray-400">{'}'},</span>
      </div>

      <div className="ml-4">
        <span className="text-yellow-300">interests</span><span className="text-gray-400">:</span> [
        <span className="text-green-400">"Web Development"</span>, <span className="text-green-400">"Artificial Intelligence"</span>,
        <span className="text-green-400">"Poetry"</span>, <span className="text-green-400">"Screenplay Writing"</span>],
      </div>

      <div className="ml-4">
        <span className="text-yellow-300">leadership</span><span className="text-gray-400">:</span> {'{'}
        <div className="ml-4">
          <span className="text-yellow-300">current</span><span className="text-gray-400">:</span>
          <span className="text-green-400"> "President - Rotaract Club of PSGCAS"</span><span className="text-gray-400">,</span>
        </div>
        <div className="ml-4">
          <span className="text-yellow-300">achievements</span><span className="text-gray-400">:</span>
          <span className="text-green-400"> "97 Events organized as President"</span>
        </div>
        <span className="ml-4 text-gray-400">{'}'}</span>
      </div>

      <span className="text-gray-400">{'}'};</span>

      <div className="mt-4">
        <span className="text-blue-400">console</span>
        <span className="text-gray-400">.</span>
        <span className="text-yellow-300">log</span>
        <span className="text-gray-400">(</span>
        <span className="text-green-400">"Nice to meet you! Let's create something amazing together!"</span>
        <span className="text-gray-400">);</span>
      </div>
    </>
  );

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden max-w-3xl mx-auto">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <button
          onClick={() => setShowFullInfo(!showFullInfo)}
          className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-1 rounded flex items-center space-x-2"
        >
          <Play size={16} />
          <span>{showFullInfo ? 'Reset' : 'Run'}</span>
        </button>
      </div>
      <div className="p-4 font-mono text-sm">
        <pre className="whitespace-pre-wrap">
          {showFullInfo ? fullInfo : shortInfo}
        </pre>
      </div>
    </div>
  );
};

export default CompilerBox;