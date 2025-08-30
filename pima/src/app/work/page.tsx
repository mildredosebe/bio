interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  const baseClasses = "rounded-lg p-6 flex flex-col items-center text-center shadow-md text-white";
  const bgClass = "bg-green-700";

  const combinedClasses = `${baseClasses} ${bgClass}`;
  return (
    <div className={combinedClasses}>
      {icon}
      <div className="font-semibold text-lg mb-2">{title}</div>
      <div className="text-xs">{description}</div>
    </div>
  );
};

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

const StepCard = ({ number, title, description }: StepCardProps) => {
  const baseCircleClasses = "w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold border-4 mb-2";
  const bgClass = "bg-green-700 text-white";
  const borderClass = "border-green-200";

  const circleClasses = `${baseCircleClasses} ${bgClass} ${borderClass}`;
  return (
    <div className="flex flex-col items-center max-w-xs flex-1">
      <div className="flex items-center">
        <div className={circleClasses}>{number}</div>
        {number !== 3 && (
          <div className="hidden md:block">
            <svg width="80" height="24" viewBox="0 0 80 24" aria-hidden="true">
              <line
                x1="0"
                y1="12"
                x2="72"
                y2="12"
                stroke="#7cb342"
                strokeWidth="3"
                strokeDasharray="6 6"
              />
              <polygon points="72,6 80,12 72,18" fill="#7cb342" />
            </svg>
          </div>
        )}
      </div>
      <div className="font-bold text-center mt-4 mb-1">{title}</div>
      <div className="text-gray-700 text-sm text-center">{description}</div>
    </div>
  );
};

const Work = () => {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center px-4 py-16">
      <section className="w-full max-w-4xl flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
          Advanced Monitoring Features
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Complete biogas digester management in one smart device
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
          <FeatureCard
            title="Gas Pressure"
            description="Real-time pressure tracking with precision sensing"
            icon={
              <svg viewBox="0 0 48 48" className="w-10 h-10 mb-3" fill="none" aria-hidden="true">
                <circle cx="20" cy="20" r="12" fill="#fff" />
                <path d="M32 20A12 12 0 0 1 20 32" stroke="#fff" strokeWidth="2" />
                <circle cx="32" cy="24" r="3" fill="#fff" />
                <circle cx="24" cy="32" r="3" fill="#fff" />
              </svg>
            }
          />
          <FeatureCard
            title="Smart Alerts"
            description="Instant notification for critical conditions"
            icon={
              <svg viewBox="0 0 48 48" className="w-10 h-10 mb-3" fill="none" aria-hidden="true">
                <path d="M24 10v16" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                <circle cx="24" cy="34" r="2" fill="#fff" />
                <rect x="20" y="28" width="8" height="4" rx="2" fill="#fff" />
              </svg>
            }
          />
          <FeatureCard
            title="Usage Analytics"
            description="Detailed breakdown of gas per activity"
            icon={
              <svg viewBox="0 0 48 48" className="w-10 h-10 mb-3" fill="none" aria-hidden="true">
                <rect x="12" y="29" width="6" height="7" fill="#fff" />
                <rect x="21" y="22" width="6" height="14" fill="#fff" />
                <rect x="30" y="17" width="6" height="19" fill="#fff" />
              </svg>
            }
          />
          <FeatureCard
            title="Leakage Detection"
            description="Advanced sensors detect leaks before they become critical"
            icon={
              <svg viewBox="0 0 48 48" className="w-10 h-10 mb-3" fill="none" aria-hidden="true">
                <path d="M30 14V8h10v14" stroke="#fff" strokeWidth="3" />
                <circle cx="35" cy="29" r="2" fill="#fff" />
                <rect x="10" y="30" width="8" height="4" rx="2" fill="#fff" />
              </svg>
            }
          />
        </div>
      </section>

      <section className="w-full max-w-4xl mt-24 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
          How BioPima Works
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Simple Installation, powerful monitoring
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center w-full mt-6">
          <StepCard number={1} title="Install Device" description="Easy installation on your existing biogas digester with wireless connectivity." />
          <StepCard number={2} title="Monitor & Analytics" description="Real-time data collection and intelligent analysis of your biogas system." />
          <StepCard number={3} title="Optimize Performance" description="Real-time data collection and intelligent analysis of your biogas system." />
        </div>
      </section>
    </main>
  );
};

export default Work;