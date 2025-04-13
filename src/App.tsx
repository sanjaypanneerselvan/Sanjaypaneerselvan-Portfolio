import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Rocket, Github, Linkedin, Mail, Instagram, Home, User, GraduationCap, Folder, FileText, Mail as ContactIcon, Lightbulb, Quote, ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react';
import LoadingScreen from './components/LoadingScreen';

// Lazy load components
const Particles = lazy(() => import('./components/Particles'));
const TypewriterComponent = lazy(() => import('./components/Typewriter'));
const CompilerBox = lazy(() => import('./components/CompilerBox'));
const Timeline = lazy(() => import('./components/Timeline'));
const ProjectCard = lazy(() => import('./components/ProjectCard'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const ScrollProgress = lazy(() => import('./components/ScrollProgress'));

function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isBoxAnimating, setIsBoxAnimating] = useState(false);

  // Fun facts and quotes data
  const funFactsAndQuotes = [
    {
      type: "fact",
      content: "The first website ever created is still online at info.cern.ch"
    },
    {
      type: "quote",
      content: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      author: "Martin Fowler"
    },
    {
      type: "fact",
      content: "CSS was originally proposed by Håkon Wium Lie on October 10, 1994."
    },
    {
      type: "quote",
      content: "Programs must be written for people to read, and only incidentally for machines to execute.",
      author: "Harold Abelson"
    },
    {
      type: "fact",
      content: "JavaScript was created in just 10 days by Brendan Eich in 1995."
    },
    {
      type: "quote",
      content: "Simplicity is the soul of efficiency.",
      author: "Austin Freeman"
    }
  ];

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setShowSubtitle(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  // Rotate quotes every 8 seconds
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setIsBoxAnimating(true);
      setTimeout(() => {
        setCurrentQuoteIndex((prevIndex) => 
          (prevIndex + 1) % funFactsAndQuotes.length
        );
        setIsBoxAnimating(false);
      }, 500);
    }, 8000);
    
    return () => clearInterval(quoteInterval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevQuote = () => {
    setIsBoxAnimating(true);
    setTimeout(() => {
      setCurrentQuoteIndex((prevIndex) => 
        prevIndex === 0 ? funFactsAndQuotes.length - 1 : prevIndex - 1
      );
      setIsBoxAnimating(false);
    }, 300);
  };

  const handleNextQuote = () => {
    setIsBoxAnimating(true);
    setTimeout(() => {
      setCurrentQuoteIndex((prevIndex) => 
        (prevIndex + 1) % funFactsAndQuotes.length
      );
      setIsBoxAnimating(false);
    }, 300);
  };

  const handleRandomQuote = () => {
    setIsBoxAnimating(true);
    setTimeout(() => {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * funFactsAndQuotes.length);
      } while (newIndex === currentQuoteIndex);
      setCurrentQuoteIndex(newIndex);
      setIsBoxAnimating(false);
    }, 300);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  const currentItem = funFactsAndQuotes[currentQuoteIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-indigo-900 to-violet-900 text-white relative">
      <Suspense fallback={<LoadingScreen />}>
        <Particles />
      </Suspense>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <div className="text-2xl font-bold text-violet-400">SP</div>
          <ul className="flex justify-center space-x-8 flex-1">
            <li>
              <a href="#home" className="hover:text-violet-400 transition flex items-center gap-1">
                <Home size={18} />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-violet-400 transition flex items-center gap-1">
                <User size={18} />
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-violet-400 transition flex items-center gap-1">
                <GraduationCap size={18} />
                <span>Education</span>
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-violet-400 transition flex items-center gap-1">
                <Folder size={18} />
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a href="#resume" className="hover:text-violet-400 transition flex items-center gap-1">
                <FileText size={18} />
                <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-violet-400 transition flex items-center gap-1">
                <ContactIcon size={18} />
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center">
          <Suspense fallback={<div className="h-12 bg-violet-600/20 rounded animate-pulse w-64"></div>}>
            <TypewriterComponent text="Sanjay Panneerselvan" typingSpeed={100} />
          </Suspense>
          {showSubtitle && (
            <div className="h-8 mt-4">
              <Suspense fallback={<div className="h-8 bg-violet-600/20 rounded animate-pulse w-48"></div>}>
                <TypewriterComponent 
                  text={["Full Stack Developer", "AI Enthusiast"]}
                  loop={true}
                  delay={2000}
                  typingSpeed={75}
                />
              </Suspense>
            </div>
          )}
        </div>
        
        {/* Fun Facts and Quotes Box */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 max-w-md w-full px-4">
          <div 
            className={`bg-black/30 backdrop-blur-md p-6 rounded-lg border ${
              currentItem.type === 'quote' ? 'border-violet-500/50' : 'border-emerald-500/50'
            } shadow-lg transition-all duration-500 ${
              isBoxAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
            } hover:shadow-violet-500/20 hover:shadow-lg`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`flex items-center gap-2 ${
                currentItem.type === 'quote' ? 'text-violet-300' : 'text-emerald-300'
              } font-medium`}>
                {currentItem.type === 'quote' ? (
                  <>
                    <Quote size={18} className="animate-pulse" />
                    <span>Dev Quote</span>
                  </>
                ) : (
                  <>
                    <Lightbulb size={18} className="animate-pulse" />
                    <span>Fun Fact</span>
                  </>
                )}
              </div>
              <div className="flex gap-1">
                <button 
                  onClick={handleRandomQuote}
                  className="p-1 hover:bg-violet-700/30 rounded-full transition"
                  title="Random quote/fact"
                >
                  <RefreshCw size={16} className="text-violet-300" />
                </button>
              </div>
            </div>
            <p className="text-white mb-2">{currentItem.content}</p>
            {currentItem.type === 'quote' && currentItem.author && (
              <p className="text-violet-400 text-sm italic text-right">— {currentItem.author}</p>
            )}
            <div className="flex justify-between mt-4 pt-2 border-t border-white/10">
              <button 
                onClick={handlePrevQuote}
                className="p-1 hover:bg-violet-700/30 rounded transition flex items-center gap-1 text-xs"
              >
                <ChevronLeft size={14} />
                <span>Previous</span>
              </button>
              <button 
                onClick={handleNextQuote}
                className="p-1 hover:bg-violet-700/30 rounded transition flex items-center gap-1 text-xs"
              >
                <span>Next</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <Suspense fallback={<div className="h-64 bg-gray-800/50 rounded-lg animate-pulse max-w-3xl mx-auto"></div>}>
            <CompilerBox />
          </Suspense>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
          <Suspense fallback={<div className="h-96 bg-gray-800/50 rounded-lg animate-pulse max-w-3xl mx-auto"></div>}>
            <Timeline />
          </Suspense>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Suspense fallback={<div className="h-64 bg-gray-800/50 rounded-lg animate-pulse"></div>}>
              <ProjectCard 
                title="Crime Record Management System"
                description="A system designed to efficiently store, manage, and retrieve crime-related data, including criminal records, case details, and investigation reports."
                date="December 2023"
                githubLink="https://github.com/yourusername/crime-record-management"
              />
            </Suspense>
            <Suspense fallback={<div className="h-64 bg-gray-800/50 rounded-lg animate-pulse"></div>}>
              <ProjectCard 
                title="Dharma Seva - Food Waste Management"
                description="A platform aimed at minimizing food waste by collecting surplus food from restaurants, events, and households and redistributing it to those in need."
                date="May 2024"
                githubLink="https://github.com/yourusername/dharma-seva"
              />
            </Suspense>
            <Suspense fallback={<div className="h-64 bg-gray-800/50 rounded-lg animate-pulse"></div>}>
              <ProjectCard 
                title="ParkIT - Parking Slot Booking"
                description="A smart parking slot booking system designed to help users find and reserve parking spaces in advance, reducing congestion and saving time."
                date="November 2024"
                githubLink="https://github.com/sanjaypanneerselvan/parkit-parking-system"
              />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Resume</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Skills & Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-violet-400 mb-2">Programming Languages</h4>
                  <p>C, C++, Python, JavaScript, TypeScript</p>
                </div>
                <div>
                  <h4 className="text-violet-400 mb-2">Web Technologies</h4>
                  <p>React.js, Next.js, Node.js, Express.js</p>
                </div>
                <div>
                  <h4 className="text-violet-400 mb-2">Mobile Development</h4>
                  <p>Flutter, Dart</p>
                </div>
                <div>
                  <h4 className="text-violet-400 mb-2">Design Tools</h4>
                  <p>Adobe Photoshop, Figma, Adobe Premier Pro</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <a 
                href="/Sanjay-Resume.pdf" 
                download
                className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg transition flex items-center space-x-2"
              >
                <Rocket className="animate-bounce" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
          <Suspense fallback={<div className="h-96 bg-gray-800/50 rounded-lg animate-pulse max-w-2xl mx-auto"></div>}>
            <ContactForm />
          </Suspense>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 mb-4">
            <a href="https://linkedin.com/in/sanjayp41" className="hover:text-violet-400 transition">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/sanjaypanneerselvan" className="hover:text-violet-400 transition">
              <Github size={24} />
            </a>
            <a href="mailto:sanjaypanneerselvan@gmail.com" className="hover:text-violet-400 transition">
              <Mail size={24} />
            </a>
            <a href="https://www.instagram.com/thangha_tamizhan?igsh=MTNnM29tZ2w0YW9vaQ==" className="hover:text-violet-400 transition">
              <Instagram size={24} />
            </a>
          </div>
          <p className="text-center text-sm">Developed by Sanjay Panneerselvan</p>
        </div>
      </footer>

      {/* Scroll Progress */}
      <Suspense fallback={null}>
        <ScrollProgress />
      </Suspense>
    </div>
  );
}

export default App;