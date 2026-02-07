'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { quizQuestions, quizCompletionMessage } from '../../data/quizQuestions';

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showReward, setShowReward] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [answers, setAnswers] = useState([]);

  const question = quizQuestions[currentQuestion];
  const totalQuestions = quizQuestions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    const isCorrect = answerIndex === question.correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
    }

    setAnswers([...answers, { questionId: question.id, correct: isCorrect }]);
    setShowReward(true);

    // Auto advance after showing reward
    setTimeout(() => {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowReward(false);
      } else {
        setQuizComplete(true);
      }
    }, 3000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowReward(false);
    setQuizComplete(false);
    setAnswers([]);
  };

  if (quizComplete) {
    const perfectScore = score === totalQuestions;
    const percentage = Math.round((score / totalQuestions) * 100);

    return (
      <main className="min-h-screen p-4 md:p-8 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center"
          >
            {/* Celebration Animation */}
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              className="text-8xl mb-6"
            >
              {perfectScore ? '🏆' : score >= totalQuestions * 0.7 ? '🎉' : '💕'}
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-valentine-red mb-4">
              {perfectScore ? quizCompletionMessage.perfectScore : quizCompletionMessage.title}
            </h1>

            <div className="text-6xl font-bold text-valentine-pink mb-6">
              {score} / {totalQuestions}
            </div>

            <div className="text-2xl font-semibold mb-8 text-gray-700">
              {percentage}% Correct!
            </div>

            <div className="bg-pink-50 rounded-2xl p-6 mb-8 border-2 border-pink-200">
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {quizCompletionMessage.message}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="bg-valentine-pink text-white px-8 py-3 rounded-full font-bold hover:bg-valentine-red transition-colors"
              >
                Take Quiz Again
              </button>
              <Link
                href="/gallery"
                className="bg-purple-500 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-600 transition-colors"
              >
                View Love Gallery →
              </Link>
              <Link
                href="/"
                className="bg-gray-200 text-gray-700 px-8 py-3 rounded-full font-bold hover:bg-gray-300 transition-colors"
              >
                Back Home
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gradient-to-br from-purple-100 to-pink-100">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-block mb-4 text-gray-600 hover:text-gray-800 transition-colors"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-valentine-red mb-2">
            Relationship Quiz 🎯
          </h1>
          <p className="text-lg text-gray-600">
            Let's see how well you know us!
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of {totalQuestions}</span>
            <span>Score: {score}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <motion.div
              className="bg-gradient-to-r from-valentine-pink to-valentine-red h-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          {!showReward ? (
            <motion.div
              key={question.id}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                {question.question}
              </h2>

              <div className="grid gap-4">
                {question.options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`
                      p-6 rounded-2xl font-semibold text-lg text-left transition-all
                      ${selectedAnswer === null
                        ? 'bg-gray-50 hover:bg-valentine-pink hover:text-white border-2 border-gray-200 hover:border-valentine-pink'
                        : selectedAnswer === index
                          ? index === question.correctAnswer
                            ? 'bg-green-500 text-white border-2 border-green-600'
                            : 'bg-red-500 text-white border-2 border-red-600'
                          : index === question.correctAnswer
                            ? 'bg-green-500 text-white border-2 border-green-600'
                            : 'bg-gray-100 text-gray-400 border-2 border-gray-200'
                      }
                    `}
                  >
                    <span className="mr-3">
                      {selectedAnswer === null
                        ? ['A.', 'B.', 'C.', 'D.'][index]
                        : index === question.correctAnswer
                          ? '✓'
                          : selectedAnswer === index
                            ? '✗'
                            : ['A.', 'B.', 'C.', 'D.'][index]
                      }
                    </span>
                    {option}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="reward"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center"
            >
              <div className="text-8xl mb-6">
                {selectedAnswer === question.correctAnswer ? '🎉' : '💕'}
              </div>
              
              <h2 className="text-3xl font-bold mb-6 text-valentine-red">
                {selectedAnswer === question.correctAnswer ? 'Correct!' : 'Not Quite!'}
              </h2>

              {/* Reward */}
              {question.reward.type === 'message' && (
                <div className="bg-pink-50 rounded-2xl p-6 border-2 border-pink-200">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {question.reward.content}
                  </p>
                </div>
              )}

              {question.reward.type === 'photo' && (
                <div>
                  {question.reward.image && (
                    <div className="mb-4 rounded-2xl overflow-hidden">
                      <img
                        src={question.reward.image}
                        alt="Reward"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}
                  <div className="bg-pink-50 rounded-2xl p-6 border-2 border-pink-200">
                    <p className="text-lg text-gray-700">
                      {question.reward.content}
                    </p>
                  </div>
                </div>
              )}

              <p className="text-sm text-gray-500 mt-6">
                Moving to next question...
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
