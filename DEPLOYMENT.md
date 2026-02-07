# 🚀 Deployment Guide - Step by Step

## Option 1: Vercel (Recommended - Easiest & Free)

### What You'll Need:
- GitHub account (free)
- Vercel account (free)
- Your customized valentine-website folder

### Steps:

#### 1. Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Name it `valentine-week-2026` (or any name you like)
4. Set to "Public" or "Private" (private recommended)
5. Click "Create repository"

#### 2. Upload Your Code to GitHub

**Option A: Using GitHub Website (Easier)**
1. In your new repository, click "uploading an existing file"
2. Drag and drop your entire `valentine-website` folder
3. Click "Commit changes"

**Option B: Using Command Line**
```bash
cd valentine-website
git init
git add .
git commit -m "Valentine's Week Website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/valentine-week-2026.git
git push -u origin main
```

#### 3. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" → "Continue with GitHub"
3. After signing in, click "Add New..." → "Project"
4. Find and select your `valentine-week-2026` repository
5. Click "Import"
6. Leave all settings as default
7. Click "Deploy"
8. Wait 2-3 minutes for deployment

#### 4. Get Your Website URL

After deployment:
- Vercel will show your URL: `your-project-name.vercel.app`
- Click on it to view your live website!
- Share this URL with your partner

### Updating Your Site Later

If you want to change anything after deploying:

1. Update your files locally
2. Push to GitHub:
```bash
git add .
git commit -m "Updated content"
git push
```
3. Vercel automatically redeploys (takes 1-2 minutes)

---

## Option 2: Netlify (Alternative - Also Free)

### Steps:

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select your repository
5. Click "Deploy site"
6. Get your URL: `your-site-name.netlify.app`

---

## Option 3: Manual Deploy (No GitHub Needed)

### For Netlify Drop:

1. On your computer, open terminal in `valentine-website` folder
2. Run: `npm run build`
3. Wait for build to complete
4. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
5. Drag and drop the entire `valentine-website` folder
6. Get your instant URL!

---

## 🎨 Custom Domain (Optional)

Want a special domain like `ourlove2026.com`?

### Buy a Domain:
- [Namecheap](https://namecheap.com) - $8-12/year
- [GoDaddy](https://godaddy.com) - $10-15/year
- Google Domains - $12/year

### Connect to Vercel:
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow Vercel's DNS instructions
5. Usually works in 10-30 minutes

### Connect to Netlify:
1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow DNS setup instructions

---

## ✅ Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All 8 days have personalized messages
- [ ] Quiz questions are customized
- [ ] Love gallery reasons are updated
- [ ] Your photos are added to `/public/images/`
- [ ] Tested locally with `npm run dev`
- [ ] All images load correctly
- [ ] Dates are correct (Feb 7-14, 2026)
- [ ] Your name is in Day 8 message
- [ ] No placeholder content left

---

## 🐛 Common Issues & Solutions

### "Module not found" error
```bash
npm install
npm run dev
```

### Images not showing after deploy
- Check images are in `/public/images/` folder
- File paths should start with `/images/` (not `./images/`)
- Commit and push images to GitHub

### Site not updating
- Clear browser cache (Ctrl/Cmd + Shift + R)
- Check Vercel/Netlify deployment logs
- Verify files were pushed to GitHub

### Build fails on Vercel
- Check Node.js version (should be 18+)
- Run `npm run build` locally first to check for errors
- Check Vercel build logs for specific error

---

## 📱 Testing Checklist

After deployment, test:

- [ ] Home page loads
- [ ] Countdown shows correctly
- [ ] Can navigate to each day
- [ ] Locked days show lock icon
- [ ] Unlocked days show content
- [ ] Quiz works correctly
- [ ] Gallery displays all reasons
- [ ] Mobile view looks good
- [ ] All images load
- [ ] All links work

---

## 🎁 Sharing with Your Partner

### Creative Ways to Share:

1. **Rose Day (Feb 7)**
   - Text them: "I have a surprise for you... visit [your-url]"
   - Or create a QR code and send an image

2. **Create a QR Code**
   - Use [qr-code-generator.com](https://www.qr-code-generator.com)
   - Enter your URL
   - Download QR code
   - Send as an image: "Scan this for a surprise! 💕"

3. **Beautiful Card**
   - Design a card with the URL
   - Write: "Our Valentine's Week Journey Awaits at: [URL]"

4. **Scavenger Hunt**
   - Hide the URL as the final clue
   - Make them solve puzzles to get it

---

## 💰 Cost Breakdown

**Completely Free Option:**
- Hosting: Vercel/Netlify (Free forever)
- Domain: Use provided subdomain (Free)
- **Total: $0**

**With Custom Domain:**
- Hosting: Vercel/Netlify (Free)
- Domain: $8-15/year
- **Total: $8-15/year**

---

## 📞 Need Help?

If something isn't working:

1. Check the error message carefully
2. Read the troubleshooting section above
3. Search the error on Google
4. Check Vercel/Netlify documentation
5. Make sure all files are uploaded correctly

---

**Remember:** Take your time with deployment. Test everything locally first!

Good luck, and happy Valentine's Week! 💕
