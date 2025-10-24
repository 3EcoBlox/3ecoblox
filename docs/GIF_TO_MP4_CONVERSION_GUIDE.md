# GIF to MP4 Conversion Guide

## Overview

This guide will help you convert the GIF files in the EcoBlox project to MP4 format for better performance.

### Why Convert?

**Current GIF files total: ~97MB**
- `section1.gif` - 36MB
- `section6.gif` - 28MB
- `section4.gif` - 15MB
- `section3.gif` - 7.8MB
- `section2.gif` - 5.5MB
- `section7.gif` - 2.4MB
- `section8.gif` - 2.4MB

**After conversion to MP4: ~15-20MB** (60-90% reduction!)

### Benefits:
- ✅ Massive file size reduction (80-90% smaller)
- ✅ Faster page load times
- ✅ Better mobile performance
- ✅ Lower bandwidth costs
- ✅ Better browser compatibility
- ✅ Improved SEO (page speed)

---

## Code Updates (Already Done ✅)

The following components have been updated to use MP4:
- ✅ `src/components/duolingo/DuoLearningSpaces.tsx`
- ✅ `src/components/ProgramHighlights.tsx`

Videos will auto-play, loop, and be muted for optimal UX.

---

## Conversion Options

### Option 1: Using the Batch Script (Windows - Easiest)

**Step 1: Install FFmpeg**

Choose one method:

**A. Using Chocolatey (requires admin):**
```powershell
# Run PowerShell as Administrator
choco install ffmpeg -y
```

**B. Manual Download:**
1. Download from: https://www.gyan.dev/ffmpeg/builds/
2. Extract the zip file
3. Add FFmpeg to your PATH or place ffmpeg.exe in your project folder

**Step 2: Run the Conversion Script**
```bash
# Simply double-click: convert-gifs.bat
# Or run from command line:
convert-gifs.bat
```

The script will convert all 7 GIF files to MP4 automatically!

---

### Option 2: Using FFmpeg Manually (All Platforms)

**Single file conversion:**
```bash
cd public
ffmpeg -i section1.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" section1.mp4
```

**Convert all at once (Mac/Linux):**
```bash
cd public
for file in section*.gif; do
  ffmpeg -i "$file" -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" "${file%.gif}.mp4"
done
```

---

###Option 3: Online Converter (No Installation Required)

**CloudConvert (Recommended):**
1. Go to: https://cloudconvert.com/gif-to-mp4
2. Upload all 7 GIF files
3. Download the MP4 files
4. Place them in the `public/` folder

**Other options:**
- https://convertio.co/gif-mp4/
- https://online-convert.com/

---

## After Conversion

### 1. Verify MP4 Files Exist
Make sure these files are in `/public`:
- ✅ section1.mp4
- ✅ section2.mp4
- ✅ section3.mp4
- ✅ section4.mp4
- ✅ section6.mp4
- ✅ section7.mp4
- ✅ section8.mp4

### 2. Test the Website
```bash
npm run dev
```

Visit the site and check that videos are playing correctly.

### 3. Delete Old GIF Files
Once you've verified MP4s work:
```bash
cd public
rm section*.gif
```

This will free up ~97MB of space!

---

## Troubleshooting

**Videos not playing?**
- Check browser console for errors
- Ensure MP4 files are in `/public` folder
- Try hard refresh (Ctrl+Shift+R)

**File size still large?**
- MP4s should be 60-90% smaller than GIFs
- If not, check FFmpeg conversion settings

**Permission errors during conversion?**
- Run terminal/command prompt as Administrator
- Check file permissions

---

## Technical Details

### Video Attributes Used:
```tsx
<video
  src="/section1.mp4"
  autoPlay     // Auto-starts on page load
  loop         // Repeats indefinitely
  muted        // Required for autoplay
  playsInline  // Plays inline on mobile (no fullscreen)
/>
```

### FFmpeg Parameters Explained:
- `-movflags faststart`: Optimizes for web streaming
- `-pix_fmt yuv420p`: Maximum browser compatibility
- `-vf "scale=trunc(iw/2)*2:trunc(ih/2)*2"`: Ensures even dimensions (required for some codecs)

---

## Next Steps

1. Convert GIF files using one of the methods above
2. Test the website
3. Delete old GIF files
4. Commit the changes
5. Enjoy 80-90% faster load times! 🎉
