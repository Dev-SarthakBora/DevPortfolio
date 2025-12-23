import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 20,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Floating orbs */}
      <div 
        className="orb w-[500px] h-[500px] -top-[10%] -right-[10%]"
        style={{ 
          background: 'radial-gradient(circle, hsl(185 100% 50% / 0.15) 0%, transparent 70%)',
          animationDelay: '0s'
        }}
      />
      <div 
        className="orb w-[400px] h-[400px] -bottom-[10%] -left-[5%]"
        style={{ 
          background: 'radial-gradient(circle, hsl(260 80% 55% / 0.15) 0%, transparent 70%)',
          animationDelay: '5s'
        }}
      />
      <div 
        className="orb w-[350px] h-[350px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ 
          background: 'radial-gradient(circle, hsl(280 100% 65% / 0.1) 0%, transparent 70%)',
          animationDelay: '10s'
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            bottom: '-10px',
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
