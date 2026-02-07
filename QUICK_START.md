# 🚀 Quick Customization Guide

## Step-by-Step: Make It Personal in 30 Minutes

### 1️⃣ Personalize Daily Messages (10 minutes)

Open `/data/dailyContent.js` and update:

**For each day (1-8), change:**
- `message` - Write your heartfelt message
- `quote` - Add a meaningful quote
- `memory` - Share a special moment you remember

Example:
```javascript
message: `Happy Rose Day, [Her Name]!

Remember when we talked for 5 hours on our first call? 
That's when I knew you were special...`,
```

### 2️⃣ Add Your Photos (5 minutes)

1. Create folder: `/public/images/`
2. Add your photos (rename them simply):
   - `rose-day.jpg`
   - `propose-day.jpg` 
   - `chocolate-day.jpg`
   - etc.

3. Update in `dailyContent.js`:
```javascript
image: '/images/rose-day.jpg',
```

### 3️⃣ Customize Quiz (10 minutes)

Open `/data/quizQuestions.js`:

**Replace with YOUR questions:**
```javascript
{
  question: "When did we first say 'I love you'?",
  options: [
    "After 1 month",
    "After 3 months", 
    "After 6 months",
    "We haven't yet 😊"
  ],
  correctAnswer: 1, // Index: 0, 1, 2, or 3
  reward: {
    content: 'That was the best day of my life! ❤️'
  }
}
```

### 4️⃣ Add Your Love Reasons (5 minutes)

Open `/data/loveReasons.js`:

**Add more reasons or edit existing:**
```javascript
{
  title: "The Way You Laugh",
  description: "Your laugh is my favorite sound. I could listen to it all day!",
  emoji: "😄",
  color: "#FFE4E1",
  category: "physical"
}
```

**Quick categories:**
- `physical` - Appearance, smile, eyes, laugh
- `personality` - Kindness, humor, intelligence
- `support` - How they help you, encourage you
- `relationship` - Loyalty, effort, commitment
- `little things` - Daily habits, texts, surprises

### 5️⃣ Final Touches

**In `/data/dailyContent.js`, Day 8 (Valentine's):**
- Add your name at the end of the message
- Make it extra special!

**In `/app/page.js`:**
- Change "Made with ❤️ for my special someone" to her name

## ✅ Checklist Before Deploying

- [ ] Updated all 8 daily messages
- [ ] Added personal photos (at least 3-4)
- [ ] Customized quiz questions (10+ questions)
- [ ] Added love reasons (20+ reasons)
- [ ] Changed "your name" to actual name in Day 8
- [ ] Tested locally (`npm run dev`)
- [ ] All images showing correctly
- [ ] Dates are correct (Feb 7-14, 2026)

## 🎯 Priority Customizations

**MUST DO:**
1. Daily messages (all 8 days)
2. Your name in Day 8 message
3. At least 3-4 personal photos

**SHOULD DO:**
4. Quiz questions
5. Love reasons  

**NICE TO HAVE:**
6. Voice notes
7. Video messages
8. Custom colors

## 💾 Save Your Work

After customizing, save everything:

```bash
git init
git add .
git commit -m "Personalized for Valentine's Week"
```

Then deploy to Vercel (see main README.md)!

---

**Remember:** It's the personal touches that make it special! ❤️
