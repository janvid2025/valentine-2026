'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { loveReasons, categories, galleryMessage } from '../../data/loveReasons';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredReasons = selectedCategory === 'all'
    ? loveReasons
    : loveReasons.filter(reason => reason.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gradient-to-br from-pink-50 to-red-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            href="/"
            className="inline-block mb-4 text-gray-600 hover:text-gray-800 transition-colors"
          >
            ← Back to Home
          </Link>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-valentine-red mb-4">
              {galleryMessage.title} 💖
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-2">
              {galleryMessage.subtitle}
            </p>
            <div className="text-6xl my-6 animate-heart-beat">❤️</div>
          </motion.div>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-12"
        >
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">
              Filter by Category
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                    px-6 py-3 rounded-full font-semibold transition-all
                    ${selectedCategory === category.id
                      ? 'bg-valentine-pink text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Reasons Count */}
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600">
            Showing <span className="font-bold text-valentine-red">{filteredReasons.length}</span> reason{filteredReasons.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {filteredReasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotate: Math.random() > 0.5 ? 2 : -2 }}
              onHoverStart={() => setHoveredCard(reason.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative"
            >
              <div
                className="bg-white rounded-3xl shadow-lg p-8 h-full cursor-pointer transition-all hover:shadow-2xl"
                style={{
                  backgroundColor: hoveredCard === reason.id ? reason.color : 'white',
                  borderWidth: '3px',
                  borderColor: reason.color
                }}
              >
                {/* Emoji */}
                <div className="text-6xl mb-4 text-center">
                  {reason.emoji}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center leading-relaxed">
                  {reason.description}
                </p>

                {/* Decorative hearts */}
                <div className="absolute top-2 right-2 text-2xl opacity-20">
                  💕
                </div>
                <div className="absolute bottom-2 left-2 text-2xl opacity-20">
                  💗
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Message */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center mb-8"
        >
          <div className="text-5xl mb-6">💝</div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
            {galleryMessage.footer}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz"
              className="bg-purple-500 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-600 transition-colors"
            >
              Take the Quiz 🎯
            </Link>
            <Link
              href="/"
              className="bg-valentine-pink text-white px-8 py-3 rounded-full font-bold hover:bg-valentine-red transition-colors"
            >
              Back to Home ❤️
            </Link>
          </div>
        </motion.div>

        {/* Heart Counter */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-valentine-pink to-valentine-red text-white rounded-full px-8 py-4 shadow-lg">
            <p className="text-2xl font-bold">
              {loveReasons.length} Reasons & Counting... 💕
            </p>
            <p className="text-sm mt-1 opacity-90">
              (But honestly, there are infinite reasons why I love you!)
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
