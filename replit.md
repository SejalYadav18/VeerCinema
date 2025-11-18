# VEER Cinema World

## Project Overview
VEER Cinema World is a premium Indian film production house website inspired by YRF Films, Dharma Productions, and Nadiadwala Grandson Entertainment. The site features a stunning cinematic design with Bollywood-style aesthetics.

## Design System
- **Color Scheme**: Black (#000), Deep Red (#8B0000, #C41E3A), Gold (#D4AF37, #FFD700)
- **Typography**: 
  - Headings: Bebas Neue (cinematic, bold)
  - Body: Inter (clean, readable)
- **Theme**: Dark/Light mode support with premium cinematic aesthetics

## Features
### Frontend
1. **Home Page**: Full-width hero carousel with 4 cinematic banners, parallax scroll effects, latest films slider with 6 films
2. **Films Library**: Grid layout with genre/year filters, film detail modals with cast, synopsis, awards, and BTS gallery
3. **About Page**: Company mission, vision, values, and statistics
4. **Talent Page**: Portfolio grid showcasing 8 actors, directors, and crew members with hover effects
5. **Services Page**: 8 production services with icons and descriptions
6. **Team Page**: Founder spotlight + 6 team members with gold-framed portraits  
7. **Contact Page**: Contact form with category selection, email links, phone, location

### Backend
- Contact form API endpoint (`POST /api/contact`)
- In-memory storage for contact inquiries
- Zod validation for form submissions
- Category filtering support

### Navigation & Layout
- Fixed navigation header with smooth scroll transitions
- Mobile-responsive menu
- Premium footer with quick links, social media, and contact info

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Wouter (routing), Radix UI, Framer Motion
- **Backend**: Express.js, Zod validation
- **Storage**: In-memory (MemStorage)
- **Styling**: Tailwind CSS with custom cinematic theme

## Key Components
- Hero carousel with auto-rotation and manual controls
- Film cards with hover animations
- Modal dialogs for film details
- Responsive navigation
- Contact form with validation
- Scroll-triggered animations

## Image Assets
30+ generated images including:
- 4 hero carousel banners
- 6 film posters  
- 8 actor/actress portraits
- 7 team member portraits
- Film set backgrounds
- Behind-the-scenes production images

## API Endpoints
- `POST /api/contact` - Submit contact inquiry
- `GET /api/contact?category={category}` - Retrieve inquiries (optional category filter)

## Recent Changes (November 18, 2025)
- Fixed React duplicate key warnings in footer
- Simplified contact form portfolio input to URL-based
- Added comprehensive data-testid attributes throughout for testing
- Implemented scroll animation utilities
- All 7 pages complete with full functionality
