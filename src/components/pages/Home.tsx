import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Users, Award, Cpu, Zap, Target, TrendingUp, ChevronDown, Play, Pause, TicketSlashIcon, PackageSearch } from 'lucide-react';
import { m } from 'framer-motion';

const Home: React.FC = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const achievements = [
    { label: 'Students Mentored', value: 300, suffix: '+', color: 'from-blue-500 to-cyan-500' },
    { label: 'Projects Delivered', value: 15, suffix: '+', color: 'from-green-500 to-emerald-500' },
    { label: 'Events Organized', value: 10, suffix: '+', color: 'from-purple-500 to-pink-500' },
    { label: 'Club Growth', value: 400, suffix: '%', color: 'from-orange-500 to-red-500' },
  ];

  const innovations = [
    {
      title: 'CyberUtsav 2024',
      impact: '200+ Attendees',
      description: 'Major tech fest with corporate sponsors',
      metric: '₹1L+ Budget',
      icon: Target
    },
    {
      title: 'Robotics Lab Setup',
      impact: 'State-of-art Facility',
      description: 'Arduino, Raspberry Pi, 3D printing',
      metric: '20+ Projects',
      icon: Cpu
    },
    {
      title: 'IT Skills Program',
      impact: '200+ Students',
      description: 'Practical programming workshops',
      metric: '98% Success Rate',
      icon: Code
    }
  ];

  useEffect(() => {
    if (!isAnimating) return;
    
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % achievements.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isAnimating, achievements.length]);

  const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [value]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, #06b6d4 0%, transparent 50%)
          `,
          backgroundSize: '400px 400px',
          animation: 'float 20s ease-in-out infinite'
        }}></div>
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {i % 3 === 0 && <div className="w-2 h-2 bg-blue-400 rounded-full"></div>}
            {i % 3 === 1 && <div className="w-1 h-8 bg-purple-400 rounded-full rotate-45"></div>}
            {i % 3 === 2 && <div className="w-6 h-1 bg-cyan-400 rounded-full"></div>}
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Header */}
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Leading Innovation • Building Communities</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              Sanjay Bhandari
            </h1>

            <div className="space-y-4 mb-12">
              <p className="text-xl lg:text-2xl text-gray-300 font-light">
                President, GoldenGate Science & Robotics Club
              </p>
              <p className="text-lg text-gray-400">
                Founder & Former President, Shanti IT Club
              </p>
            </div>

            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Transforming ideas into impact through strategic leadership, technical innovation, 
              and community empowerment. Building the next generation of technologists.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/projects"
                className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-blue-500/25 hover:scale-105"
              >
                <span className="text-lg">View Impact</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/clubs"
                className="group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105"
              >
                <Users size={20} />
                <span className="text-lg">Leadership Journey</span>
              </Link>
            </div>
          </div>

          {/* Dynamic Metrics Display */}
          <div className="relative mb-20">
            <div className="text-center mb-8">
              <button
                onClick={() => setIsAnimating(!isAnimating)}
                className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                {isAnimating ? <Pause size={16} /> : <Play size={16} />}
                <span className="text-sm">Real Impact Metrics</span>
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.label}
                  className={`relative p-8 rounded-3xl transition-all duration-500 ${
                    currentMetric === index
                      ? 'bg-gradient-to-br from-white/20 to-white/10 border-2 border-white/30 scale-105 shadow-2xl'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2 text-center">
                    {currentMetric === index ? (
                      <AnimatedCounter value={achievement.value} suffix={achievement.suffix} />
                    ) : (
                      `${achievement.value}${achievement.suffix}`
                    )}
                  </div>
                  <div className="text-gray-300 text-center font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Innovation Showcase */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Strategic Innovations
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Transforming vision into measurable outcomes through strategic leadership
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {innovations.map((innovation, index) => (
                <div
                  key={innovation.title}
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="absolute top-6 right-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <innovation.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {innovation.title}
                    </h3>
                    <p className="text-blue-300 font-semibold text-lg mb-3">{innovation.impact}</p>
                    <p className="text-gray-300 leading-relaxed">{innovation.description}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-cyan-400">{innovation.metric}</div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <ArrowRight size={16} className="text-white group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 text-gray-400 mb-4 animate-bounce">
              <ChevronDown size={20} />
              <span className="text-sm">Explore the journey</span>
              <ChevronDown size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Current Leadership Section */}
      <section className="relative py-20 bg-gradient-to-r from-black/20 to-black/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 text-sm font-medium">Current Position</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Leading GoldenGate Science & Robotics Club
                </h3>
                <p className="text-blue-300 text-lg font-semibold mb-4">President • March 2025 - Present</p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Driving innovation in robotics education, scaling community impact through strategic partnerships, 
                  and establishing sustainable growth frameworks for emerging technologies.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">300%</div>
                  <div className="text-gray-300 text-sm">Membership Growth</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="text-2xl font-bold text-green-400 mb-2">₹2L+</div>
                  <div className="text-gray-300 text-sm">Event Budget Managed</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-blue-300 text-sm font-medium">Founded & Led</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Built Shanti IT Club from Ground Up
                </h3>
                <p className="text-purple-300 text-lg font-semibold mb-4">Founder & Former President • 2021 - 2023</p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Established comprehensive IT education programs, created sustainable mentorship frameworks, 
                  and built lasting community impact through practical skill development initiatives.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="text-2xl font-bold text-purple-400 mb-2">200+</div>
                  <div className="text-gray-300 text-sm">Students Mentored</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="text-2xl font-bold text-orange-400 mb-2">15+</div>
                  <div className="text-gray-300 text-sm">Major Events</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

export default Home;
