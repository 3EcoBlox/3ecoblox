# EcoBlox Duolingo-Style React Implementation Plan

## 🎯 Goal
Convert Duolingo HTML design to React components while keeping:
1. ✅ Bilingual Support (EN/KO) with LanguageContext
2. ✅ Contact Popup (phone + email)
3. ✅ Exact stats (10 weeks, 60 min, 3 roles, 100% launch)

## 📁 File Structure

```
src/
├── components/
│   ├── duolingo/                    # NEW Duolingo-style components
│   │   ├── DuoNavigation.tsx       # Sticky nav with language toggle
│   │   ├── DuoHero.tsx             # Animated hero section
│   │   ├── DuoProgramHighlights.tsx# 3D flip cards
│   │   ├── DuoTimeline.tsx         # Week-by-week cards
│   │   ├── DuoTestimonials.tsx     # Carousel component
│   │   ├── DuoStudentRoles.tsx     # Badge-style roles
│   │   ├── DuoStats.tsx            # Quick stats section
│   │   ├── DuoFooter.tsx           # Footer
│   │   └── LanguageToggle.tsx      # EN/KO switcher
│   ├── ContactPopup.tsx            # KEEP existing
│   └── VideoPopup.tsx              # KEEP existing
├── styles/
│   └── duolingo.css                # NEW: Extracted Duolingo CSS
├── pages/
│   ├── Index.tsx                   # Keep current (for backup)
│   └── DuoIndex.tsx                # NEW: Duolingo-style page
└── contexts/
    └── LanguageContext.tsx         # KEEP existing

```

## 🔧 Implementation Steps

### Step 1: Extract CSS (15 min)
- [ ] Create `src/styles/duolingo.css`
- [ ] Extract all CSS from ecoblox-duolingo-final.html
- [ ] Import in main.tsx or index.html

### Step 2: Language Toggle Component (20 min)
- [ ] Create `LanguageToggle.tsx`
- [ ] Use existing LanguageContext
- [ ] Add EN/KO button with flag emojis or text
- [ ] Place in navigation (top right)

### Step 3: Navigation Component (30 min)
- [ ] Create `DuoNavigation.tsx`
- [ ] Sticky header with Duolingo style
- [ ] Add LanguageToggle component
- [ ] Integrate ContactPopup on CTA button
- [ ] Mobile hamburger menu
- [ ] Translate all nav items with t()

### Step 4: Hero Component (30 min)
- [ ] Create `DuoHero.tsx`
- [ ] Animated gradient background
- [ ] Particle effects (optional for now)
- [ ] 3D buttons with ContactPopup
- [ ] Translate all text with t()

### Step 5: Stats Component (15 min)
- [ ] Create `DuoStats.tsx`
- [ ] Use exact numbers: 10, 60, 3, 100%
- [ ] Animated counters
- [ ] Translate labels with t()

### Step 6: Program Highlights (45 min)
- [ ] Create `DuoProgramHighlights.tsx`
- [ ] 3D flip cards with Duolingo style
- [ ] 6 cards (Game Dev, Environmental, Team, Safety, Trophy, Code)
- [ ] Include DuoStats at bottom
- [ ] Translate all content with t()

### Step 7: Testimonials Carousel (45 min)
- [ ] Create `DuoTestimonials.tsx`
- [ ] Port carousel logic from HTML
- [ ] 5-star ratings
- [ ] Auto-play + manual controls
- [ ] Swipe support
- [ ] Translate testimonials with t()

### Step 8: Timeline Component (30 min)
- [ ] Create `DuoTimeline.tsx`
- [ ] Week-by-week cards
- [ ] Use existing timeline content
- [ ] Duolingo styling
- [ ] Translate with t()

### Step 9: Student Roles (30 min)
- [ ] Create `DuoStudentRoles.tsx`
- [ ] Badge-style cards
- [ ] Colorful icons
- [ ] Translate with t()

### Step 10: Footer (20 min)
- [ ] Create `DuoFooter.tsx`
- [ ] Contact info
- [ ] Social links
- [ ] Translate with t()

### Step 11: Main Page Assembly (20 min)
- [ ] Create `DuoIndex.tsx`
- [ ] Import all components
- [ ] Test flow
- [ ] Ensure bilingual works everywhere

### Step 12: Translation Updates (30 min)
- [ ] Update `LanguageContext.tsx` with new keys
- [ ] Add Korean translations
- [ ] Test EN/KO switching

### Step 13: Testing & Polish (1 hour)
- [ ] Test on Chrome, Firefox, Safari
- [ ] Mobile responsiveness
- [ ] Language switching
- [ ] ContactPopup integration
- [ ] Fix any bugs

### Step 14: Deploy (15 min)
- [ ] Update App.tsx routing
- [ ] Build and test
- [ ] Deploy to Vercel

## ⏱️ Time Estimates

| Task | Time | Cumulative |
|------|------|------------|
| Extract CSS | 15 min | 15 min |
| Language Toggle | 20 min | 35 min |
| Navigation | 30 min | 1h 5min |
| Hero | 30 min | 1h 35min |
| Stats | 15 min | 1h 50min |
| Program Highlights | 45 min | 2h 35min |
| Testimonials | 45 min | 3h 20min |
| Timeline | 30 min | 3h 50min |
| Student Roles | 30 min | 4h 20min |
| Footer | 20 min | 4h 40min |
| Page Assembly | 20 min | 5h |
| Translations | 30 min | 5h 30min |
| Testing | 1h | 6h 30min |
| Deploy | 15 min | 6h 45min |

**Total: ~7 hours** (first pass)

## 🚀 Quick Start Commands

```bash
# Make sure dev server is running
npm run dev

# Create component folders
mkdir -p src/components/duolingo
mkdir -p src/styles

# Start with CSS extraction
# (I'll help you with this)
```

## 📝 Translation Keys Needed

Add to LanguageContext.tsx:

```typescript
// Navigation
'duo.nav.program': string
'duo.nav.timeline': string
'duo.nav.testimonials': string
'duo.nav.roles': string
'duo.nav.getStarted': string

// Hero
'duo.hero.title': string
'duo.hero.subtitle': string
'duo.hero.cta1': string
'duo.hero.cta2': string

// Stats
'duo.stats.weeks': string
'duo.stats.minutes': string
'duo.stats.roles': string
'duo.stats.launch': string

// Testimonials
'duo.testimonials.title': string
'duo.testimonials.subtitle': string

// etc...
```

## ✅ Success Criteria

- [ ] All text is translatable (EN/KO)
- [ ] Language toggle works smoothly
- [ ] ContactPopup opens from CTA buttons
- [ ] Stats show: 10 weeks, 60 min, 3 roles, 100%
- [ ] Mobile responsive
- [ ] Testimonials carousel works
- [ ] No console errors
- [ ] Fast load time (<2s)
- [ ] Works on Chrome, Firefox, Safari
- [ ] Default language is English

## 🎨 Design Notes

- Keep Duolingo green (#58CC02) as primary
- Use Duolingo button styles (3D with shadows)
- Maintain playful, gamified feel
- Bold typography (font-weight: 800)
- Bright colors for engagement
- Smooth animations

## 📞 Contact Info to Use

Phone: +1 480 200 9799
Email: weare@lettuce.build

## 🔄 Iteration Plan

**Phase 1 (Today):** Steps 1-7 (Basic structure + key features)
**Phase 2 (Tomorrow):** Steps 8-11 (Remaining components)
**Phase 3 (Day 3):** Steps 12-14 (Polish + deploy)

---

**Ready to start? Let's begin with Step 1!**
