# Product Requirements Document: Nigeria Leeds One-Page Landing Site

## 1. Project Overview

**Product Name:** Nigeria Leeds Community Landing Page  
**Version:** 1.0  
**Date:** December 24, 2025  
**Document Owner:** Development Team

### 1.1 Purpose
Create a modern, visually striking one-page landing site for Nigeria Leeds that mirrors the design aesthetic of the Kalypsia charity website while adapting content for a Nigerian diaspora community organization in Leeds, UK.

### 1.2 Target Audience
- Nigerian residents and immigrants in Leeds and Yorkshire
- Young professionals and families
- Community members seeking cultural connection
- New arrivals looking for community support

---

## 2. Design System & Visual Identity

### 2.1 Color Palette
**Primary Colors:**
- **Orange**: `#F28C28` (Main brand color - vibrant, energetic)
- **Deep Purple**: `#4A1D6F` (Secondary brand color)
- **Gold/Yellow**: `#FFB81C` (Accent highlights)

**Neutral Colors:**
- **Off-White**: `#FAF9F6` (Background)
- **Charcoal**: `#2C2C2C` (Body text)
- **Soft Gray**: `#F5F5F5` (Section backgrounds)

**Supporting Colors:**
- **Green Accent**: `#6BBF59` (For Africa map illustrations)
- **White**: `#FFFFFF` (Cards and contrast)

### 2.2 Typography

**Primary Font Family:** 
- Playfair Display (for headings) - Serif, elegant, authoritative
- Alternative: Merriweather, Georgia

**Secondary Font Family:**
- Inter or DM Sans (for body text) - Clean, modern, highly readable
- Alternative: Open Sans, Roboto

**Type Scale:**
- **Hero Heading**: 56px - 72px (desktop), 36px - 42px (mobile)
- **Section Headings (H2)**: 42px - 48px (desktop), 28px - 32px (mobile)
- **Subsection Headings (H3)**: 28px - 32px (desktop), 22px - 24px (mobile)
- **Body Text**: 16px - 18px (desktop), 15px - 16px (mobile)
- **Small Text/Captions**: 14px - 15px

**Font Weights:**
- Headings: 700 (Bold) to 800 (Extra Bold)
- Body: 400 (Regular)
- Emphasis: 600 (Semi-Bold)

**Line Height:**
- Headings: 1.2 - 1.3
- Body text: 1.6 - 1.8

### 2.3 Visual Elements

**Organic Shapes:**
- Abstract paint stroke/blob shapes in orange and gold
- Positioned asymmetrically in corners and edges
- Semi-transparent overlays (opacity: 0.1 - 0.3)
- SVG format for crisp rendering at all sizes

**Map of Africa:**
- Stylized outline/silhouette integration
- Color: Green with orange/gold highlights
- Used as decorative element, not literal geography
- Can be broken into pieces for visual interest

**Photography Style:**
- Authentic, candid community photos
- Warm, vibrant color grading
- Mix of close-up portraits and group shots
- High contrast with good lighting
- Circular or rounded rectangular frames

**Iconography:**
- Line-style icons (2px stroke weight)
- Circular backgrounds with light color fills
- Size: 48px - 64px
- Style: Modern, minimal, geometric

### 2.4 Spacing & Layout

**Container Max Width:** 1280px  
**Section Padding:** 
- Desktop: 80px - 120px (top/bottom)
- Mobile: 48px - 64px (top/bottom)

**Grid System:**
- 12-column grid
- Gutter: 24px (desktop), 16px (mobile)
- Margins: 24px (desktop), 16px (mobile)

**Border Radius:**
- Cards: 16px - 20px
- Buttons: 8px - 12px (slightly rounded, not pill-shaped)
- Images: 12px - 16px

**Shadows:**
- Subtle elevation: `0 4px 12px rgba(0, 0, 0, 0.08)`
- Hover state: `0 8px 24px rgba(0, 0, 0, 0.12)`

### 2.5 Interactive Elements

**Buttons:**
- **Primary CTA**: 
  - Background: Deep Purple (`#4A1D6F`)
  - Text: White
  - Padding: 14px 32px
  - Hover: Darken by 10%, slight lift (transform: translateY(-2px))
  
- **Secondary CTA**: 
  - Background: White with border
  - Border: 2px solid Deep Purple
  - Text: Deep Purple
  - Hover: Background fills with light purple tint

**Hover States:**
- Image cards: Slight zoom (scale: 1.05) with smooth transition
- Links: Underline animation from left to right
- Stat numbers: Pulse or count-up animation on scroll

**Animations:**
- Scroll-triggered fade-ins with slight upward motion
- Staggered animations for grid items (delay: 0.1s - 0.15s between items)
- Smooth parallax effects on background shapes (subtle, not excessive)

---

## 3. Page Sections & Content Structure

### 3.1 Hero Section

**Layout:**
- Full viewport height on desktop (100vh), auto on mobile
- Two-column layout: 60% text (left), 40% visual (right)
- Z-index layering: Background shapes → Content → Images

**Content Elements:**
- **Logo**: Top left, 48px height
- **Navigation**: Top right (horizontal menu)
  - Links: About, Events, Membership, Contact
  - Mobile: Hamburger menu
  
- **Headline**: 
  - Large, bold statement about community
  - Example: "A community where no Nigerian feels alone in Leeds"
  - Key word(s) highlighted with yellow underline stroke

- **Subheadline**: 
  - 1-2 sentences explaining mission
  - Lighter weight, good contrast

- **CTA Buttons**: 
  - Primary: "Join Community" or "Become a Member"
  - Secondary: "Discover More" (smooth scroll to next section)

- **Visual Element**: 
  - Stylized map of Africa with Nigeria highlighted
  - Portrait photo integrated into map shape
  - Statistical callout (e.g., "500+ Active Members")

**Background:**
- Large orange organic shape (top right corner)
- Subtle dot pattern or texture overlay

---

### 3.2 Core Values/Services Section

**Layout:**
- 4-column grid on desktop
- 2-column on tablet
- Single column on mobile
- Centered alignment

**Content Structure:**
Each value/service card contains:
- **Icon** (line-style, in circular background)
- **Title** (H3, bold)
- **Description** (2-3 sentences)

**Recommended Values:**
1. **Community Building**
   - Icon: Connected people/hands
   - Description: Fostering connections among Nigerians in Leeds through regular meetups and cultural events

2. **Cultural Heritage**
   - Icon: Traditional pattern/drum
   - Description: Celebrating and preserving Nigerian culture while embracing life in the UK

3. **Professional Networking**
   - Icon: Briefcase/network nodes
   - Description: Creating opportunities for career growth and business connections within the community

4. **Support & Guidance**
   - Icon: Helping hand/compass
   - Description: Assisting newcomers with integration, resources, and navigating life in Leeds

**Styling:**
- White background cards with subtle shadow
- Hover: Lift effect with increased shadow
- Icons use brand colors (orange/purple)
- Even vertical spacing between all cards

---

### 3.3 Impact/Achievements Section

**Layout:**
- Left column: Photo collage (40%)
- Right column: Content (60%)
- Reverse on mobile (content first, then images)

**Photo Collage:**
- 3-5 images in overlapping arrangement
- Mix of sizes (large focal image + smaller supporting images)
- Rounded corners (16px)
- Slight rotation on some images (-3° to 3°)
- Orange paint stroke accent behind/between photos

**Content Structure:**
- **Heading**: "What have we done with your support?" or "Our Community in Numbers"
- **Introductory paragraph**: Brief narrative about community growth and impact
- **Statistics** (2x2 grid or list):
  - Members count (e.g., "500+ Active Members")
  - Events hosted (e.g., "50+ Events Annually")
  - Years active (e.g., "10+ Years Strong")
  - Partnerships (e.g., "25+ Local Partners")

**Stat Styling:**
- Large number: 48px - 56px, bold, orange or purple
- Label: 16px, regular weight, charcoal
- Icon above each stat (optional)
- Count-up animation on scroll

**Background:**
- Off-white or light gray
- Organic green shape accent (bottom left)

---

### 3.4 Stories/Testimonials Section

**Layout:**
- Center-aligned heading
- 3-column grid (desktop)
- 2-column (tablet)
- 1-column (mobile)

**Section Heading:**
- "Learn **the stories** of those we've already helped" or "Meet Our Community"
- Yellow underline on emphasized words

**Story Card Structure:**
Each card contains:
- **Portrait Photo** 
  - Square aspect ratio (1:1)
  - Rounded corners
  - Subtle border or shadow
  
- **Name** (H4, bold)
- **Short Quote or Story Title**
- **Brief Description** (2-3 sentences)
- **"Learn more →" link** (optional)

**Example Stories:**
1. Young professional who found networking opportunities
2. Family that connected with cultural community
3. Student who received mentorship and support

**Card Styling:**
- White background
- Padding: 24px
- Border-radius: 16px
- Hover: Slight lift and shadow increase
- Photos zoom slightly on hover

**Background:**
- White or off-white
- Orange paint stroke accents in corners

---

### 3.5 Location/Presence Section

**Layout:**
- Center-aligned
- Full-width background color block

**Content:**
- **Heading**: "We are always where others need help" or "Connecting Nigerians Across Yorkshire"
- **Subheading**: Brief explanation of geographic reach

**Visual Element:**
- Large map of Nigeria or UK (specifically Yorkshire region)
- Location pins/dots showing areas of member concentration
- Color scheme: Green map, orange/gold pins
- Can be stylized/abstract rather than literal

**Statistics Overlay (on or beside map):**
- Number of active locations
- Coverage area
- Member distribution
- Partner organizations

**Styling:**
- Section background: Soft gray or off-white
- Map: Semi-transparent with solid pin markers
- Clean, modern cartographic style

---

### 3.6 Call-to-Action Section

**Layout:**
- Full-width section
- Dark background (deep purple or charcoal)
- Centered content
- Minimal padding for visual impact

**Content:**
- **Headline**: "Join our community! Everyone can belong." or "Be Part of Something Bigger"
- **Subheading**: Single sentence about membership benefits
- **Dual CTAs**:
  - Primary: "Become a Member" (orange button)
  - Secondary: "Attend an Event" (white outline button)

**Background:**
- Dark overlay (60-80% opacity) on background image
- Background image: Community gathering photo
- Subtle gradient overlay (top to bottom)

**Text Color:**
- White for maximum contrast
- Heading: Very large (48px+)

**Visual Accents:**
- Paint stroke elements in orange/gold
- Subtle texture or pattern overlay

---

### 3.7 Footer Section

**Layout:**
- 3-4 column grid (desktop)
- Stacked columns (mobile)
- Dark background (charcoal or deep purple)

**Content Columns:**

1. **About/Logo**
   - Organization logo
   - Brief tagline (1 sentence)
   - Social media icons (horizontal)
   
2. **Quick Links**
   - About us
   - Events calendar
   - Membership
   - Contact
   
3. **Contact Information**
   - Phone number
   - Email address
   - Physical address (if applicable)
   
4. **Newsletter Signup** (optional)
   - Email input field
   - Subscribe button

**Bottom Bar:**
- Copyright notice
- Privacy policy link
- Terms of service link

**Styling:**
- Text color: White or light gray
- Link hover: Orange underline
- Social icons: White with colored background circles
- Padding: 48px top/bottom

---

## 4. Responsive Design Requirements

### 4.1 Breakpoints
- **Desktop**: 1280px and above
- **Laptop**: 1024px - 1279px
- **Tablet**: 768px - 1023px
- **Mobile (Large)**: 480px - 767px
- **Mobile (Small)**: Below 480px

### 4.2 Mobile-Specific Considerations

**Navigation:**
- Hamburger menu on mobile
- Full-screen overlay menu with fade-in animation
- Menu icon transitions to X when open

**Typography:**
- Reduce heading sizes by 30-40% on mobile
- Maintain readability (minimum 15px for body text)
- Increase line-height slightly for small screens (1.7 - 1.8)

**Images:**
- Switch to single column layouts
- Maintain aspect ratios (use object-fit: cover)
- Reduce photo collage complexity (fewer images)
- Lazy loading for performance

**Buttons:**
- Full-width CTAs on mobile (within container margins)
- Increase touch target size (minimum 44px height)
- More vertical spacing between buttons

**Spacing:**
- Reduce section padding by 40-50%
- Maintain breathing room (minimum 48px between sections)
- Tighten grid gaps (16px vs 24px)

**Interactions:**
- Remove hover effects, replace with tap states
- Disable parallax on mobile for performance
- Simplify animations (reduce motion preference support)

### 4.3 Performance Optimization

**Images:**
- WebP format with JPEG fallback
- Responsive images with srcset
- Maximum width: 2400px
- Compression: 80-85% quality
- Lazy load below-the-fold content

**Animations:**
- Use CSS transforms (GPU-accelerated)
- Avoid layout thrashing
- Respect prefers-reduced-motion
- Maximum 3-4 simultaneous animations

**Code:**
- Minify CSS and JavaScript
- Critical CSS inline in <head>
- Defer non-critical scripts
- Use system fonts as fallback

---

## 5. Technical Specifications

### 5.1 Technology Stack Recommendations
- **Framework**: React, Next.js, or vanilla HTML/CSS
- **Styling**: Tailwind CSS or styled-components
- **Animations**: Framer Motion or GSAP
- **Icons**: Lucide React, Heroicons, or custom SVG
- **Forms**: Formspree, Netlify Forms, or custom backend

### 5.2 Accessibility Requirements (WCAG 2.1 AA)
- Semantic HTML5 elements
- ARIA labels where necessary
- Keyboard navigation support
- Focus visible states (outline or custom styling)
- Color contrast ratio minimum 4.5:1 (body text)
- Color contrast ratio minimum 3:1 (large text/UI elements)
- Alt text for all images
- Skip navigation link
- Form labels and error messages

### 5.3 Browser Support
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 13+)
- Chrome Mobile (Android 10+)

### 5.4 SEO Requirements
- Semantic heading hierarchy (single H1, proper nesting)
- Meta description (150-160 characters)
- Open Graph tags for social sharing
- Descriptive page title (50-60 characters)
- Structured data (Organization schema)
- Optimized images with descriptive filenames
- Fast page load (target: < 3 seconds)

---

## 6. Content Guidelines

### 6.1 Tone of Voice
- **Warm and welcoming**: Like a friend inviting you to join
- **Authentic**: Real stories, real people, honest challenges
- **Proud**: Celebrating Nigerian heritage without apology
- **Inclusive**: Everyone welcome, regardless of background
- **Action-oriented**: Clear calls to action, encouraging participation

### 6.2 Writing Style
- Short paragraphs (2-3 sentences maximum)
- Active voice
- Conversational but professional
- Avoid jargon or overly formal language
- Use "we" and "our" to build community feeling

### 6.3 Image Guidelines
- Real community members (not stock photos)
- Diverse representation (age, gender, professions)
- Natural, candid moments
- Good lighting and composition
- High resolution (minimum 1920px wide for hero images)
- Obtain proper releases for identifiable individuals

---

## 7. Success Metrics

### 7.1 User Engagement
- Average time on page: > 2 minutes
- Scroll depth: 75% of users reach CTA section
- Click-through rate on CTAs: > 5%
- Mobile bounce rate: < 50%

### 7.2 Performance
- Page load time: < 3 seconds (3G connection)
- Lighthouse score: > 90 (Performance, Accessibility, Best Practices)
- Core Web Vitals: All "Good" ratings

### 7.3 Conversion Goals
- Membership inquiry submissions
- Event registration clicks
- Newsletter signups
- Social media follows

---

## 8. Implementation Phases

### Phase 1: Design & Prototyping (Week 1-2)
- Wireframes for all sections
- High-fidelity mockups (desktop + mobile)
- Design system documentation
- Stakeholder review and approval

### Phase 2: Development (Week 3-5)
- Setup project structure
- Implement responsive layout
- Add animations and interactions
- Content integration
- Cross-browser testing

### Phase 3: Testing & Optimization (Week 6)
- User testing with community members
- Accessibility audit
- Performance optimization
- SEO implementation
- Bug fixes

### Phase 4: Launch & Monitoring (Week 7)
- Deploy to production
- Set up analytics
- Monitor performance metrics
- Gather user feedback
- Iterate based on data

---

## 9. Future Enhancements (Post-Launch)

- Events calendar integration
- Member directory/portal
- Blog section for community stories
- Photo gallery from events
- Online payment for membership
- Language toggle (English/Yoruba/Igbo/Hausa)
- Integration with social media feeds
- Newsletter archive

---

## 10. Appendix

### 10.1 Design Inspiration References
- Kalypsia charity website (provided screenshot)
- Modern nonprofit websites with strong visual identity
- Community organization landing pages
- Cultural heritage sites with contemporary design

### 10.2 Asset Requirements List
- Logo (SVG format, multiple sizes)
- Hero image (2400x1600px minimum)
- 3-5 community photos for collage (1200x1200px minimum)
- 3 testimonial portraits (800x800px minimum)
- 4 icons for values section (SVG)
- Map illustration (SVG or high-res PNG)
- Background pattern/texture files
- Organic shape graphics (SVG)

### 10.3 Content Needed from Stakeholders
- Mission statement
- Community statistics/numbers
- 3 testimonial stories with quotes
- List of events and activities
- Membership benefits
- Contact information
- Social media handles

---

**Document Version History:**
- v1.0 - December 24, 2025 - Initial PRD draft

**Approvals Required:**
- [ ] Project Stakeholder
- [ ] Design Lead
- [ ] Development Lead
- [ ] Content Manager