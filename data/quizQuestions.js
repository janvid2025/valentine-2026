// Relationship Quiz Questions
// Customize these with your own special memories and inside jokes!

export const quizQuestions = [
  {
    id: 1,
    question: "When did we have our first video call?",
    options: [
      "January 2024",
      "March 2024",
      "June 2024",
      "September 2024"
    ],
    correctAnswer: 1, // Index of correct answer (0-based)
    reward: {
      type: 'message',
      content: 'That 5-hour call felt like 5 minutes! You had me hooked from the start. ❤️'
    }
  },
  
  {
    id: 2,
    question: "What's my favorite thing about you?",
    options: [
      "Your smile",
      "Your sense of humor",
      "Your kindness",
      "Everything!"
    ],
    correctAnswer: 3,
    reward: {
      type: 'message',
      content: 'Trick question! I love EVERYTHING about you, but especially your beautiful heart. 💕'
    }
  },
  
  {
    id: 3,
    question: "What was our first inside joke?",
    options: [
      "The coffee incident",
      "The 'typing...' saga",
      "The voice note mix-up",
      "The emoji war"
    ],
    correctAnswer: 0, // Change this to match your inside joke
    reward: {
      type: 'photo',
      content: 'Remember this? Still makes me laugh! 😂',
      image: '/images/quiz-reward-1.jpg' // Add your photo
    }
  },
  
  {
    id: 4,
    question: "What song reminds me of you?",
    options: [
      "Perfect - Ed Sheeran",
      "A Thousand Miles - Vanessa Carlton",
      "All of Me - John Legend",
      "Distance - Christina Perri"
    ],
    correctAnswer: 1, // Customize this
    reward: {
      type: 'message',
      content: 'Every time I hear this song, I think of you and smile. 🎵'
    }
  },
  
  {
    id: 5,
    question: "What do I miss most about you right now?",
    options: [
      "Your laugh",
      "Your hugs",
      "Your presence",
      "All of the above"
    ],
    correctAnswer: 3,
    reward: {
      type: 'message',
      content: 'I miss everything about you. Every. Single. Thing. Can\'t wait to be together again! 💗'
    }
  },
  
  {
    id: 6,
    question: "What's our favorite activity to do together (virtually)?",
    options: [
      "Watch movies together",
      "Play online games",
      "Just talk for hours",
      "Cook the same meal together"
    ],
    correctAnswer: 2, // Customize
    reward: {
      type: 'message',
      content: 'Those endless conversations are my favorite. We could talk about anything and everything! 🌙'
    }
  },
  
  {
    id: 7,
    question: "When I'm having a bad day, what do you do that always makes me feel better?",
    options: [
      "Send funny memes",
      "Just listen to me vent",
      "Give me encouraging words",
      "Send voice notes"
    ],
    correctAnswer: 1, // Customize
    reward: {
      type: 'message',
      content: 'You have this amazing ability to make everything better just by being there. Thank you for always listening. 🤗'
    }
  },
  
  {
    id: 8,
    question: "What's the most romantic thing we've done despite the distance?",
    options: [
      "Virtual stargazing together",
      "Surprise care package",
      "Watching the sunrise/sunset at the same time",
      "Unexpected video call"
    ],
    correctAnswer: 0, // Customize
    reward: {
      type: 'photo',
      content: 'This moment will always be special to me. 🌟',
      image: '/images/quiz-reward-2.jpg'
    }
  },
  
  {
    id: 9,
    question: "What's our dream destination to visit together?",
    options: [
      "Paris, France",
      "Santorini, Greece",
      "Kyoto, Japan",
      "Maldives"
    ],
    correctAnswer: 0, // Customize
    reward: {
      type: 'message',
      content: 'We\'re going to make this dream come true someday. I promise! 🗼✈️'
    }
  },
  
  {
    id: 10,
    question: "Complete this sentence: 'You are my...'",
    options: [
      "Sunshine",
      "Best friend and soulmate",
      "Favorite notification",
      "Forever person"
    ],
    correctAnswer: 1, // All are correct, but customize
    reward: {
      type: 'message',
      content: 'You\'re my best friend, my soulmate, my everything. Distance means so little when you mean so much. ❤️'
    }
  },
  
  {
    id: 11,
    question: "What time of day do I think about you the most?",
    options: [
      "Morning when I wake up",
      "Throughout the entire day",
      "Night before sleeping",
      "Every single moment"
    ],
    correctAnswer: 3,
    reward: {
      type: 'message',
      content: 'You\'re on my mind 24/7. From the moment I wake up to the moment I fall asleep thinking about you. 🌙☀️'
    }
  },
  
  {
    id: 12,
    question: "What's the first thing I'll do when we finally meet again?",
    options: [
      "Give you the longest hug ever",
      "Kiss you like there's no tomorrow",
      "Just stare at you in disbelief",
      "All of the above, in that order"
    ],
    correctAnswer: 3,
    reward: {
      type: 'message',
      content: 'I\'m counting down the days until I can hold you in my arms again. That reunion is going to be magical! 💫'
    }
  }
];

// Final message after completing the quiz
export const quizCompletionMessage = {
  title: "You Know Me So Well! 💕",
  message: `Congratulations on completing the quiz! 
  
Whether you got them all right or not doesn't matter – what matters is that we know each other's hearts.

Every question reminded me of our beautiful journey together. Thank you for being the most amazing partner, even across the miles.

I love you more than this quiz could ever express! ❤️

Now go check out the Love Gallery to see all the reasons why you're so special to me! 🎨`,
  
  perfectScore: "WOW! Perfect score! You really do know me inside out. That's true love right there! 🏆❤️"
};
