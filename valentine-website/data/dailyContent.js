// Daily content for Valentine's Week
// Customize each day with your own messages, memories, and media

export const dailyContent = {
  1: {
    day: 1,
    date: '2026-02-07',
    title: 'Rose Day 🌹',
    theme: 'rose',
    color: '#FF007F',
    unlocked: true,
    content: {
      message: `Happy Rose Day, my love! ❤️
      
Though miles separate us, my love for you grows stronger every day, just like a rose in full bloom. You bring color, fragrance, and beauty to my life.

This rose represents my promise to always cherish you, no matter the distance between us.`,
      
      quote: '"A rose speaks of love silently, in a language known only to the heart."',
      
      // Add your image path here: /images/rose-day.jpg
      image: null,
      
      // You can add a voice note URL or YouTube link
      voiceNote: null,
    }
  },
  
  2: {
    day: 2,
    date: '2026-02-08',
    title: 'Propose Day 💍',
    theme: 'propose',
    color: '#DC143C',
    content: {
      message: `My Dearest,

Every day with you feels like a dream I never want to wake up from. The distance between us only makes me realize how much you mean to me.

I promise to always be there for you, to support your dreams, to make you laugh, and to love you with all my heart. You're my today and all of my tomorrows.

Will you continue being mine, forever? 💕`,
      
      quote: '"In all the world, there is no heart for me like yours."',
      
      // Add a special photo or memory
      image: null,
      
      memory: 'Remember our first video call that lasted 5 hours? That\'s when I knew you were special.',
    }
  },
  
  3: {
    day: 3,
    date: '2026-02-09',
    title: 'Chocolate Day 🍫',
    theme: 'chocolate',
    color: '#8B4513',
    content: {
      message: `Sweet love,

Just like chocolate, you make everything in my life sweeter! Your sweetness is irreplaceable, and thinking of you brings the same joy as the first bite of my favorite chocolate.

I'm sending you chocolates today, but nothing is as sweet as you! 🍫💕`,
      
      quote: '"All you need is love. But a little chocolate now and then doesn\'t hurt." - Charles M. Schulz',
      
      funFact: 'Did you know? The first chocolate box for Valentine\'s Day was created in 1868!',
      
      image: null,
    }
  },
  
  4: {
    day: 4,
    date: '2026-02-10',
    title: 'Teddy Day 🧸',
    theme: 'teddy',
    color: '#8B7355',
    content: {
      message: `My cuddle buddy,

I wish I could hold you tight right now! Until we're together again, this teddy represents all the hugs I'm saving up for you.

Every time you hug it, imagine it's me holding you close. You're always in my thoughts and in my heart. 🧸❤️`,
      
      quote: '"A hug is a handshake from the heart."',
      
      memory: 'I still remember how safe I felt when you hugged me the last time we met.',
      
      image: null,
    }
  },
  
  5: {
    day: 5,
    date: '2026-02-11',
    title: 'Promise Day 🤝',
    theme: 'promise',
    color: '#4169E1',
    content: {
      message: `My forever person,

Today, I want to make you some promises:

✨ I promise to always make time for you, no matter how busy life gets
✨ I promise to support your dreams and celebrate your successes
✨ I promise to be honest, loyal, and true
✨ I promise to make you laugh, even on your hardest days
✨ I promise to love you more with each passing day
✨ I promise that this distance is temporary, but my love is forever

These aren't just words – they're commitments from my heart to yours. 💙`,
      
      quote: '"Promise me you\'ll never forget me, because if I thought you would, I\'d never leave." - A.A. Milne',
      
      image: null,
    }
  },
  
  6: {
    day: 6,
    date: '2026-02-12',
    title: 'Hug Day 🤗',
    theme: 'hug',
    color: '#FF6B9D',
    content: {
      message: `My warm embrace,

Sending you the biggest virtual hug across the miles! 🤗

Close your eyes and feel my arms around you. Feel the warmth, the love, and the comfort. Even though I can't physically hold you right now, my heart is always wrapped around yours.

Here's to all the future hugs we'll share when we're finally together! Until then, this message carries a thousand hugs. 💕`,
      
      quote: '"A hug is worth a thousand words."',
      
      funFact: 'Scientists say hugs reduce stress and boost happiness. I need one from you right now!',
      
      image: null,
    }
  },
  
  7: {
    day: 7,
    date: '2026-02-13',
    title: 'Kiss Day 💋',
    theme: 'kiss',
    color: '#FF1493',
    content: {
      message: `My sweet love,

Sending you infinite kisses through the screen! 💋💋💋

A kiss from you is my favorite feeling in the world. I'm counting down the days until I can kiss you again – until then, every text, every call, every message is a kiss from my heart to yours.

Missing your lips on mine... 😘`,
      
      quote: '"A kiss is a lovely trick designed by nature to stop speech when words become superfluous." - Ingrid Bergman',
      
      memory: 'Our first kiss... I still get butterflies thinking about it.',
      
      image: null,
    }
  },
  
  8: {
    day: 8,
    date: '2026-02-14',
    title: 'Valentine\'s Day ❤️',
    theme: 'valentine',
    color: '#FF0000',
    content: {
      message: `My Valentine, My Everything,

Happy Valentine's Day to the love of my life! ❤️

This week has been my way of showing you just how much you mean to me. Every day, every moment, every breath – it's all better because you're in my life.

Long distance is hard, but loving you is the easiest thing I've ever done. You're my home, no matter where you are.

Thank you for being patient, for being understanding, for being YOU. I love you more than words can express, more than this website can show, more than the distance between us.

You're my forever Valentine. 💕

All my love,
[Your Name]

P.S. - I can't wait until we don't have to celebrate through screens anymore. Soon, my love. Soon. ❤️`,
      
      quote: '"The best thing to hold onto in life is each other." - Audrey Hepburn',
      
      specialNote: 'Look for a special surprise package arriving today! 🎁',
      
      image: null,
      
      // Add a video message URL if you have one
      videoMessage: null,
    }
  }
};

// Helper function to check if a day is unlocked
export const isDayUnlocked = (dayNumber) => {
  const today = new Date();
  const dayDate = new Date(dailyContent[dayNumber].date);
  return today >= dayDate;
};

// Get current active day
export const getCurrentDay = () => {
  const today = new Date();
  for (let i = 1; i <= 8; i++) {
    const dayDate = new Date(dailyContent[i].date);
    if (today.toDateString() === dayDate.toDateString()) {
      return i;
    }
  }
  return null;
};
