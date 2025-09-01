"use client";
import React, { useEffect, useRef, useState } from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-green-700 rounded-xl p-6 flex flex-col items-start text-white hover:bg-green-600 transition-colors duration-300 shadow-lg">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-lg mb-2 leading-tight">{title}</h3>
      <p className="text-green-100 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
  isVisible?: boolean;
  delay?: number;
}

const StepCard = ({ number, title, description, isLast = false, isVisible = false, delay = 0 }: StepCardProps) => {
  return (
    <div 
      className={`flex flex-col items-center text-center relative flex-1 transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Step circle */}
      <div className="relative z-10 mb-6">
        <div className={`w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg transition-all duration-500 ${
          isVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-45'
        }`}
        style={{ transitionDelay: `${delay + 200}ms` }}
        >
          {number}
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-xs">
        <h3 className={`font-bold text-lg text-gray-900 mb-3 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: `${delay + 400}ms` }}
        >{title}</h3>
        <p className={`text-gray-600 text-sm leading-relaxed transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: `${delay + 600}ms` }}
        >{description}</p>
      </div>
    </div>
  );
};

const Work = () => {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([false, false, false]);
  const [visibleArrows, setVisibleArrows] = useState<boolean[]>([false, false]);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger step animations with delays
            setTimeout(() => setVisibleSteps(prev => [true, prev[1], prev[2]]), 100);
            setTimeout(() => {
              setVisibleSteps(prev => [prev[0], true, prev[2]]);
              setVisibleArrows(prev => [true, prev[1]]);
            }, 400);
            setTimeout(() => {
              setVisibleSteps(prev => [prev[0], prev[1], true]);
              setVisibleArrows(prev => [prev[0], true]);
            }, 800);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (stepsRef.current) {
      observer.observe(stepsRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Advanced Monitoring Features
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete biogas digester management in one smart device
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              title="Gas Pressure"
              description="Real-time pressure tracking with precision sensing"
              icon={
                <div className="w-12 h-12 bg-white bg-opacity-30 rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              }
            />
            <FeatureCard
              title="Smart Alerts"
              description="Instant notification for critical conditions"
              icon={
                <div className="w-12 h-12 bg-white bg-opacity-30 rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                  </svg>
                </div>
              }
            />
            <FeatureCard
              title="Usage Analytics"
              description="Detailed breakdown of gas per activity"
              icon={
                <div className="w-12 h-12 bg-white bg-opacity-30 rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                    <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"/>
                  </svg>
                </div>
              }
            />
            <FeatureCard
              title="Leakage Detection"
              description="Advanced sensors detect leaks before they become critical"
              icon={
                <div className="w-12 h-12 bg-white bg-opacity-30 rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                    <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"/>
                  </svg>
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* How BioPima Works Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How BioPima Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple Installation, powerful monitoring
            </p>
          </div>

          {/* Steps */}
          <div ref={stepsRef} className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <StepCard 
              number={1} 
              title="Install Device" 
              description="Easy installation on your existing biogas digester with wireless connectivity."
              isVisible={visibleSteps[0]}
              delay={0}
            />
            
            <div className={`hidden md:block transition-all duration-500 ${
              visibleArrows[0] ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}>
              <svg width="60" height="24" viewBox="0 0 60 24" className="text-green-500">
                <line
                  x1="0"
                  y1="12"
                  x2="45"
                  y2="12"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray="8 4"
                  className={`transition-all duration-1000 ${
                    visibleArrows[0] ? 'stroke-dashoffset-0' : 'stroke-dashoffset-60'
                  }`}
                />
                <polygon points="45,6 60,12 45,18" fill="currentColor" />
              </svg>
            </div>
            
            <StepCard 
              number={2} 
              title="Monitor & Analytics" 
              description="Real-time data collection and intelligent analysis of your biogas system."
              isVisible={visibleSteps[1]}
              delay={200}
            />
            
            <div className={`hidden md:block transition-all duration-500 ${
              visibleArrows[1] ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}>
              <svg width="60" height="24" viewBox="0 0 60 24" className="text-green-500">
                <line
                  x1="0"
                  y1="12"
                  x2="45"
                  y2="12"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray="8 4"
                  className={`transition-all duration-1000 ${
                    visibleArrows[1] ? 'stroke-dashoffset-0' : 'stroke-dashoffset-60'
                  }`}
                />
                <polygon points="45,6 60,12 45,18" fill="currentColor" />
              </svg>
            </div>
            
            <StepCard 
              number={3} 
              title="Optimize Performance" 
              description="Get actionable insights to maximize your biogas production and efficiency."
              isLast={true}
              isVisible={visibleSteps[2]}
              delay={400}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;