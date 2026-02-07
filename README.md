# 💕 Valentine's Week Website

A beautiful, interactive website to celebrate Valentine's Week with your long-distance partner!

## ✨ Features

- **Valentine's Week Countdown** - Countdown timer to Valentine's Day with daily unlocks
- **8 Daily Pages** - Each day of Valentine's Week (Feb 7-14) has its own special page with messages, photos, and memories
- **Interactive Quiz** - Relationship quiz with rewards for each answer
- **Love Gallery** - Beautiful gallery showcasing all the reasons why you love them
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Smooth Animations** - Beautiful transitions and effects using Framer Motion
- **Date-Based Unlocking** - Content unlocks automatically on the correct dates

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed on your machine
- npm or yarn package manager

### Installation

1. **Install Dependencies**
```bash
cd valentine-website
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

3. **Open in Browser**
Navigate to `http://localhost:3000`

## 🎨 Customization Guide

### 1. Daily Content (`/data/dailyContent.js`)

Update each day with your personal messages:

```javascript
1: {
  title: 'Rose Day 🌹',
  content: {
    message: 'Your personal message here...',
    quote: 'A meaningful quote',
    image: '/images/rose-day.jpg', // Add image path
    voiceNote: '/audio/day1.mp3', // Optional voice note
    memory: 'A special memory you share'
  }
}
```

**Tips:**
- Keep messages heartfelt and personal
- Add photos to `/public/images/` folder
- Voice notes should be in `/public/audio/` folder
- Update all 8 days (Feb 7-14)

### 2. Quiz Questions (`/data/quizQuestions.js`)

Customize with your relationship questions:

```javascript
{
  id: 1,
  question: "Your question here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  correctAnswer: 0, // Index of correct answer (0-3)
  reward: {
    type: 'message', // or 'photo'
    content: 'Sweet message after answering',
    image: '/images/reward.jpg' // If type is 'photo'
  }
}
```

**Tips:**
- Include inside jokes
- Mix easy and challenging questions
- Add personal photos as rewards
- Aim for 10-15 questions

### 3. Love Reasons (`/data/loveReasons.js`)

Add your own reasons:

```javascript
{
  id: 1,
  title: "Your Smile",
  description: "Detailed reason why you love this...",
  emoji: "😊",
  color: "#FFE4E1",
  category: "physical" // physical, personality, support, etc.
}
```

**Tips:**
- Be specific and genuine
- Use different categories
- Add as many as you want (25+ recommended)
- Mix big and small things

### 4. Adding Images

1. Place images in `/public/images/` folder
2. Reference them in your data files as `/images/filename.jpg`
3. Supported formats: JPG, PNG, GIF, WEBP

Example:
```javascript
image: '/images/our-first-date.jpg'
```

### 5. Adding Audio/Video

**Voice Notes:**
1. Add MP3 files to `/public/audio/`
2. Reference: `voiceNote: '/audio/day1.mp3'`

**Videos:**
1. For YouTube videos, use embed URL:
   ```javascript
   videoMessage: 'https://www.youtube.com/embed/VIDEO_ID'
   ```
2. For self-hosted videos, add to `/public/video/` and reference

### 6. Customizing Colors

Edit `/tailwind.config.js`:

```javascript
colors: {
  'valentine-pink': '#FF69B4',
  'valentine-red': '#DC143C',
  'valentine-rose': '#FF007F',
}
```

### 7. Changing Dates

If you want different unlock dates, edit `/data/dailyContent.js`:

```javascript
date: '2026-02-07', // Change to your desired date
```

## 📦 Deployment

### Deploy to Vercel (Recommended - Free)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

2. **Deploy to Vercel**
- Go to [vercel.com](https://vercel.com)
- Sign in with GitHub
- Click "New Project"
- Import your repository
- Click "Deploy"

3. **Get Your URL**
- Vercel will give you a URL like `your-site.vercel.app`
- Share this with your partner!

### Alternative: Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy to Netlify:
- Drag and drop the `.next` folder to [netlify.com/drop](https://app.netlify.com/drop)

## 🎁 Bonus Ideas

### Password Protection
Add a simple password page to make it more special:

Create `/app/page.js` as a login page, and move current home to `/app/home/page.js`

### Custom Domain
- Buy a domain like `ourlove2026.com`
- Connect it to your Vercel/Netlify deployment
- Follow their custom domain guides

### Send as a Gift
- Deploy the site
- Create a beautiful card with the URL
- Send to your partner on Rose Day (Feb 7)

## 🛠️ Project Structure

```
valentine-website/
├── app/
│   ├── page.js              # Home page with countdown
│   ├── day/[day]/page.js    # Dynamic daily content pages
│   ├── quiz/page.js         # Quiz page
│   ├── gallery/page.js      # Love gallery page
│   └── globals.css          # Global styles
├── data/
│   ├── dailyContent.js      # Daily messages & content
│   ├── quizQuestions.js     # Quiz questions & answers
│   └── loveReasons.js       # Love gallery reasons
├── public/
│   ├── images/              # Your photos
│   ├── audio/               # Voice notes
│   └── video/               # Videos
└── package.json
```

## 💡 Tips for Success

1. **Start Early** - Give yourself time to customize everything
2. **Test on Mobile** - Your partner will likely view on phone first
3. **Backup Your Data** - Save all photos and content separately
4. **Personal Touch** - The more personal, the better
5. **Surprise Element** - Don't tell them about all features upfront
6. **Update Regularly** - Can add more content even after deployment

## 🐛 Troubleshooting

**Images not showing:**
- Check file path (should start with `/images/`)
- Verify image is in `/public/images/` folder
- Check file extension matches

**Site not updating:**
- Clear browser cache
- Hard refresh (Ctrl/Cmd + Shift + R)
- Redeploy on Vercel/Netlify

**Quiz not working:**
- Check `correctAnswer` index (0-based)
- Verify all questions have rewards

## 📝 License

This project is open source and available for personal use. Feel free to customize it for your own Valentine!

## ❤️ Made with Love

Built with Next.js, Tailwind CSS, and Framer Motion.

Created for spreading love across distances. 💕

---

**Happy Valentine's Week! 🌹💕**

Remember: The best gift is the thought and effort you put into personalizing this for your special someone!
