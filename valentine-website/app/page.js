'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { dailyContent, isDayUnlocked, getCurrentDay } from '../data/dailyContent';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [currentDay, setCurrentDay] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCurrentDay(getCurrentDay());
    
    const calculateTimeLeft = () => {
      const valentineDay = new Date('2026-02-14T00:00:00');
      const now = new Date();
      const difference = valentineDay - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <main className="min-h-screen p-4 md:p-8">
      {/* Floating Hearts Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-20 animate-float-hearts"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-valentine-red mb-4 animate-heart-beat">
            💕 Valentine's Week 💕
          </h1>
          <p className="text-xl md:text-2xl text-gray-700">
            A special celebration for someone extra special
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-valentine-pink">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-valentine-red">
              Countdown to Valentine's Day ❤️
            </h2>
            <div className="grid grid-cols-4 gap-4 md:gap-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-gradient-to-br from-valentine-pink to-valentine-red text-white rounded-xl p-4 md:p-6 shadow-lg">
                    <div className="text-3xl md:text-5xl font-bold">{value}</div>
                  </div>
                  <div className="text-sm md:text-lg font-semibold mt-2 capitalize text-gray-700">
                    {unit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Daily Content Grid */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-valentine-red">
            Valentine's Week Journey 🌹
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {Object.values(dailyContent).map((day) => {
              const unlocked = isDayUnlocked(day.day);
              const isToday = currentDay === day.day;
              
              return (
                <Link
                  key={day.day}
                  href={unlocked ? `/day/${day.day}` : '#'}
                  className={`block ${!unlocked && 'pointer-events-none'}`}
                >
                  <motion.div
                    whileHover={unlocked ? { scale: 1.05 } : {}}
                    whileTap={unlocked ? { scale: 0.95 } : {}}
                    className={`
                      relative rounded-2xl p-6 shadow-lg transition-all duration-300
                      ${unlocked 
                        ? 'bg-white border-4 border-valentine-pink hover:shadow-2xl cursor-pointer' 
                        : 'bg-gray-200 border-4 border-gray-400 opacity-50'
                      }
                      ${isToday && unlocked && 'ring-4 ring-yellow-400 animate-pulse'}
                    `}
                  >
                    {/* Lock Icon for locked days */}
                    {!unlocked && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl">🔒</div>
                      </div>
                    )}
                    
                    {/* Day Content */}
                    <div className={!unlocked ? 'blur-sm' : ''}>
                      <div className="text-4xl mb-2 text-center">
                        {day.title.split(' ')[1]}
                      </div>
                      <h3 className="text-lg font-bold text-center mb-1">
                        Day {day.day}
                      </h3>
                      <p className="text-sm text-center text-gray-600 font-semibold">
                        {day.title.split(' ')[0]} Day
                      </p>
                      <p className="text-xs text-center text-gray-500 mt-2">
                        {new Date(day.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>

                    {/* Today Badge */}
                    {isToday && unlocked && (
                      <div className="absolute -top-2 -right-2 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        TODAY!
                      </div>
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </motion.div>

        {/* Navigation to Quiz and Gallery */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6 mb-16">
          <Link href="/quiz">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl p-8 shadow-2xl cursor-pointer text-white text-center"
            >
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Relationship Quiz</h3>
              <p className="text-lg">Test how well you know us!</p>
            </motion.div>
          </Link>

          <Link href="/gallery">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-red-400 to-pink-400 rounded-3xl p-8 shadow-2xl cursor-pointer text-white text-center"
            >
              <div className="text-6xl mb-4">💖</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Love Gallery</h3>
              <p className="text-lg">All the reasons I love you</p>
            </motion.div>
          </Link>
        </motion.div>

        {/* Footer Message */}
        <motion.div variants={itemVariants} className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-valentine-pink">
            <p className="text-lg md:text-xl text-gray-700 italic">
              "Distance means so little when someone means so much."
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Made with ❤️ for my special someone
            </p>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
