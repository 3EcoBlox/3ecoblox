# EcoBlox CTA (Call-to-Action) Implementation Guide

## What are CTAs?

CTAs (Call-to-Actions) are buttons or links that prompt users to take a specific action. They're critical for converting website visitors into leads and customers.

## Current CTAs on Your Website

### 1. **Primary CTA: "Schedule Discovery Call"**
- **Location**: Hero section (top of page), Navigation bar, Footer
- **Action**: Opens contact popup with phone and email
- **Purpose**: Generate leads for enrollment
- **Status**: ✅ Fully functional

### 2. **Secondary CTA: "Watch Sample Class"**
- **Location**: Hero section
- **Action**: Opens video popup showing your sample class
- **Purpose**: Build trust and showcase program quality
- **Status**: ✅ Just implemented

## CTA Best Practices Implemented

### Visual Hierarchy
1. **Primary CTA** (Green with pulse animation)
   - Most important action
   - Duolingo green (#58CC02)
   - Pulsing animation to draw attention

2. **Secondary CTA** (Blue)
   - Supporting action
   - Blue color (#1CB0F6)
   - Less prominent than primary

### Strategic Placement
- **Above the fold**: Both CTAs visible immediately
- **Multiple touchpoints**: CTAs appear in navigation and footer
- **After value prop**: Users see benefits before being asked to act

## How to Customize CTAs

### Change CTA Text
Edit the language context file for bilingual support:
```typescript
// src/contexts/LanguageContext.tsx
hero: {
  scheduleCall: "SCHEDULE DISCOVERY CALL",  // Change this
  watchSample: "WATCH SAMPLE CLASS"          // Change this
}
```

### Change Video URL
Edit the DuoHero component:
```typescript
// src/components/duolingo/DuoHero.tsx
<VideoPopup
  videoUrl="/your-video.mp4"  // Local file
  // OR
  videoUrl="https://youtube.com/watch?v=YOUR_VIDEO_ID"  // YouTube
  title="Your Title"
>
```

### Add More CTAs

You can add CTAs to any section using the components:

#### Contact CTA
```tsx
import ContactPopup from "@/components/ContactPopup";

<ContactPopup>
  <button className="duo-btn duo-btn-primary">
    Contact Us
  </button>
</ContactPopup>
```

#### Video CTA
```tsx
import VideoPopup from "@/components/VideoPopup";

<VideoPopup videoUrl="YOUR_VIDEO_URL" title="Video Title">
  <button className="duo-btn duo-btn-blue">
    Watch Video
  </button>
</VideoPopup>
```

## CTA Optimization Tips

### 1. **Use Action-Oriented Language**
- ✅ "Schedule Your Free Call"
- ✅ "Watch Sample Class"
- ✅ "Get Started Today"
- ❌ "Click Here"
- ❌ "Submit"
- ❌ "Learn More"

### 2. **Create Urgency**
- "Limited Spots Available"
- "Enroll for Fall 2025"
- "Free Discovery Call"

### 3. **Remove Friction**
- Your current CTAs are great - popup instead of form page
- One-click contact (phone/email)
- Auto-play video

### 4. **A/B Test Variations**
Try testing:
- Different button colors
- Different text ("Join EcoBlox" vs "Schedule Call")
- Button size and placement

## Recommended Additional CTAs

### 1. **Bottom of Page CTA Section**
Add a final CTA section before the footer:

```tsx
<section className="duo-cta-section">
  <h2>Ready to Transform Your Child's Future?</h2>
  <p>Join students creating games that change the world</p>
  <ContactPopup>
    <button className="duo-btn duo-btn-primary duo-btn-large">
      Schedule Free Discovery Call
    </button>
  </ContactPopup>
</section>
```

### 2. **After Learning Path Section**
Add encouragement after showing the curriculum:
```tsx
<div style={{ textAlign: 'center', padding: '40px' }}>
  <ContactPopup>
    <button className="duo-btn duo-btn-primary">
      Enroll Your Child Today
    </button>
  </ContactPopup>
</div>
```

### 3. **Sticky CTA (Optional)**
Add a floating button that follows scroll:
- Only shows after user scrolls 50%
- Non-intrusive
- High conversion rate

## Measuring CTA Success

Track these metrics:
1. **Click-through rate (CTR)**: % of visitors who click
2. **Conversion rate**: % who complete desired action
3. **Bounce rate**: Users leaving without clicking
4. **Position testing**: Which placement converts best

## Current CTA Performance Features

✅ **Animations**: Pulse effect draws attention
✅ **Mobile responsive**: Works on all devices
✅ **Bilingual support**: EN/KO toggle
✅ **Accessibility**: Keyboard navigation supported
✅ **Multiple touchpoints**: Navigation, hero, footer
✅ **Low friction**: Popup vs new page
✅ **Visual hierarchy**: Primary vs secondary clear

## Next Steps

1. **Add analytics** to track CTA clicks
2. **A/B test** different CTA copy
3. **Add social proof** near CTAs (testimonials, student count)
4. **Consider exit-intent popup** for leaving visitors
5. **Add urgency indicators** ("5 spots left for Fall 2025")

## Questions?

The CTAs are now fully functional! Test them out:
- Click "Schedule Discovery Call" to see contact popup
- Click "Watch Sample Class" to see video popup
