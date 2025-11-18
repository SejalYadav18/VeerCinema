# VEER CINEMA WORLD - Design Guidelines

## Design Approach
**Reference-Based**: Inspired by YRF Films, Dharma Productions, and Nadiadwala Grandson Entertainment - premium Bollywood production house aesthetics with cinematic grandeur.

## Color Palette
- **Primary**: Black (#000000)
- **Accent**: Deep Red (#8B0000, #C41E3A)
- **Luxury**: Gold (#D4AF37, #FFD700)
- **Neutrals**: Dark grays for text, white for contrast

## Typography
- **Headings**: Bold, dramatic cinematic fonts (Think big, impactful movie titles) - Use Google Fonts like "Bebas Neue", "Teko", or "Anton" for headings
- **Body**: Clean, readable sans-serif (Inter, Open Sans, or Roboto)
- **Hierarchy**: 
  - H1: 4xl-6xl (Hero titles)
  - H2: 3xl-4xl (Section headers)
  - H3: 2xl-3xl (Card titles)
  - Body: base-lg

## Layout System
- **Spacing**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 (p-8, py-20, gap-6, etc.)
- **Containers**: max-w-7xl for content, full-width for hero sections
- **Grid**: 3-column on desktop, 2-column tablet, 1-column mobile for cards/portfolios

## Page-Specific Layouts

### 1. HOME PAGE
**Hero Section**:
- Full-width cinematic image carousel (4 high-quality Bollywood-style film banners)
- Height: 90vh minimum
- Dark overlay gradient for text readability
- Centered text: "VEER CINEMA WORLD" + tagline "Where Stories Turn Into Legend"
- Two CTAs: "Explore Films" (gold button) and "About Us" (outlined button) with backdrop blur
- Auto-rotating carousel with smooth transitions

### 2. LATEST FILMS SLIDER
- Horizontal scrolling carousel (6 films)
- Each card: Vertical film poster (2:3 aspect ratio), title overlay on hover
- Click opens modal with: Full poster, trailer embed placeholder, synopsis, cast grid (4-6 actors with small portraits), behind-the-scenes gallery (3-4 images)
- Films: The Rising Shadows, Eternal Bloom, City of Wolves, Veer: The Legend Within, The Crimson Hunt, Saffron Sky

### 3. ABOUT SECTION
- Gold decorative borders (top/bottom or corner accents)
- Cinematic background image (film set/director workspace) with dark overlay
- Centered content block (max-w-4xl)
- Premium paragraph spacing with gold accent line
- Mission statement prominently displayed

### 4. ACTORS & ACTRESSES PORTFOLIO
- 8-card grid (4 columns desktop, 2 tablet, 1 mobile)
- Cards: Lead Actor, Lead Actress, Supporting Actor, Supporting Actress, Director, Cinematographer, Script Writer, Music Director
- Square portraits with gold border on hover
- Smooth scale + shadow hover effect
- Name + role overlay

### 5. FILMS PAGE (LIBRARY)
- Masonry or grid layout (3-4 columns)
- Poster thumbnails with genre tag + year
- Modal on click showing: HD poster, genre, year, full synopsis, cast with images, trailer embed, awards section, gallery grid (6+ images)
- Filter/sort by genre, year (top of page)

### 6. SERVICES PAGE
- 8 service cards in grid
- Each card: Premium icon, title, 2-3 sentence description
- Services: Film Production, Script Development, Casting, Direction, Post-Production, Music Production, VFX & CGI, Web Series Production
- Staggered fade-in animation on scroll

### 7. TEAM PAGE
- Gold-framed portraits (Bollywood glamour style)
- Founder featured larger at top: Veer Pratap Singh - Producer, Creative Director
- 6 team members below in grid: Head of Production, Casting Director, Script Lead, Cinematographer, VFX Supervisor, Music Director
- Name + title below each portrait

### 8. CONTACT PAGE
- Two-column layout (form + info)
- Form fields: Name, Email, Message textarea, Dropdown (Film Inquiry/Casting/Media/Career), File upload for portfolio
- Contact emails displayed: contact@veercinemaworld.com, casting@veercinemaworld.com, media@veercinemaworld.com
- Gold submit button

### 9. FOOTER
- Three sections: Branding (logo + tagline "Cinema. Courage. Creativity."), Navigation links, Social icons
- Copyright: "VEER Cinema World © 2025"
- Links: Films | About | Services | Talent | Careers | Contact
- Social: Instagram, YouTube, Facebook, IMDb icons

## Component Library
- **Buttons**: Gold primary with hover brightness, outlined secondary with gold border
- **Cards**: Black background with subtle red/gold accents, shadow on hover
- **Modals**: Centered overlay with dark backdrop, gold close button
- **Forms**: Dark inputs with gold focus state
- **Navigation**: Fixed header with transparent-to-black scroll transition

## Animations
- Parallax hero scrolling
- Scroll-triggered fade-ins (cards, sections)
- Smooth carousel transitions
- Hover scale effects on cards
- Modal slide-up entrance

## Images Required
- **Hero Carousel**: 4 cinematic Bollywood-style film banners (action, romance, thriller, drama themes)
- **Film Posters**: 6 vertical movie posters for slider
- **Actor Portraits**: 8 professional headshots (Bollywood glamour style)
- **About Background**: Film set or director workspace
- **Behind-the-scenes**: 12-18 production stills for film modals
- **Team Portraits**: 7 professional gold-framed portraits

All images should have dramatic lighting, cinematic color grading (rich blacks, warm golds, deep reds), and premium quality feel.