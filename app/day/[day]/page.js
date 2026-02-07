'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { dailyContent, isDayUnlocked } from '../../../data/dailyContent';

export default function DayPage() {
  const params = useParams();
  const router = useRouter();
  const dayNumber = parseInt(params.day);
  const day = dailyContent[dayNumber];

  if (!day) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">Day Not Found</h1>
          <Link href="/" className="text-blue-500 hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  const unlocked = isDayUnlocked(dayNumber);

  if (!unlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center bg-white rounded-3xl p-12 shadow-2xl max-w-md"
        >
          <div className="text-8xl mb-6">🔒</div>
          <h1 className="text-3xl font-bold text-gray-700 mb-4">
            This Day is Locked
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Come back on {new Date(day.date).toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric',
              year: 'numeric'
            })} to unlock this special content!
          </p>
          <Link
            href="/"
            className="inline-block bg-valentine-pink text-white px-8 py-3 rounded-full font-semibold hover:bg-valentine-red transition-colors"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="min-h-screen p-4 md:p-8" style={{ backgroundColor: day.color + '20' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <Link
            href="/"
            className="inline-block mb-6 text-gray-600 hover:text-gray-800 transition-colors"
          >
            ← Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: day.color }}>
            {day.title}
          </h1>
          <p className="text-xl text-gray-600">
            Day {day.day} of 8 • {new Date(day.date).toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric'
            })}
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
        >
          {/* Image if available */}
          {day.content.image && (
            <div className="mb-8 rounded-2xl overflow-hidden">
              <img
                src={day.content.image}
                alt={day.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Main Message */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg md:text-xl leading-relaxed whitespace-pre-line text-gray-700">
              {day.content.message}
            </p>
          </div>

          {/* Quote */}
          {day.content.quote && (
            <div className="border-l-4 pl-6 py-4 mb-8 italic text-gray-600" style={{ borderColor: day.color }}>
              <p className="text-lg">{day.content.quote}</p>
            </div>
          )}

          {/* Memory */}
          {day.content.memory && (
            <div className="bg-yellow-50 rounded-2xl p-6 mb-8 border-2 border-yellow-200">
              <h3 className="text-xl font-bold mb-3 text-yellow-800">💭 Special Memory</h3>
              <p className="text-gray-700">{day.content.memory}</p>
            </div>
          )}

          {/* Fun Fact */}
          {day.content.funFact && (
            <div className="bg-blue-50 rounded-2xl p-6 mb-8 border-2 border-blue-200">
              <h3 className="text-xl font-bold mb-3 text-blue-800">🎉 Fun Fact</h3>
              <p className="text-gray-700">{day.content.funFact}</p>
            </div>
          )}

          {/* Special Note */}
          {day.content.specialNote && (
            <div className="bg-pink-50 rounded-2xl p-6 mb-8 border-2 border-pink-200">
              <h3 className="text-xl font-bold mb-3 text-pink-800">✨ Special Note</h3>
              <p className="text-gray-700">{day.content.specialNote}</p>
            </div>
          )}

          {/* Voice Note */}
          {day.content.voiceNote && (
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4" style={{ color: day.color }}>
                🎤 Voice Message for You
              </h3>
              <audio controls className="w-full">
                <source src={day.content.voiceNote} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}

          {/* Video Message */}
          {day.content.videoMessage && (
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4" style={{ color: day.color }}>
                🎥 Video Message for You
              </h3>
              <div className="aspect-video rounded-2xl overflow-hidden">
                <iframe
                  src={day.content.videoMessage}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-between items-center"
        >
          {dayNumber > 1 ? (
            <Link
              href={`/day/${dayNumber - 1}`}
              className="bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all font-semibold"
            >
              ← Previous Day
            </Link>
          ) : (
            <div></div>
          )}

          {dayNumber < 8 && isDayUnlocked(dayNumber + 1) ? (
            <Link
              href={`/day/${dayNumber + 1}`}
              className="bg-valentine-pink text-white px-6 py-3 rounded-full shadow-lg hover:bg-valentine-red transition-all font-semibold"
            >
              Next Day →
            </Link>
          ) : dayNumber < 8 ? (
            <div className="bg-gray-200 px-6 py-3 rounded-full text-gray-500 font-semibold">
              Next Day 🔒
            </div>
          ) : (
            <div></div>
          )}
        </motion.div>

        {/* Special Valentine's Day Celebration */}
        {dayNumber === 8 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-3xl p-12 shadow-2xl">
              <div className="text-6xl mb-4">❤️💕💖</div>
              <h2 className="text-4xl font-bold mb-4">Happy Valentine's Day!</h2>
              <p className="text-xl mb-6">
                Thank you for experiencing this week with me. I love you more than words can say!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quiz"
                  className="bg-white text-pink-500 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
                >
                  Take the Quiz 🎯
                </Link>
                <Link
                  href="/gallery"
                  className="bg-white text-pink-500 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
                >
                  View Love Gallery 💖
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
