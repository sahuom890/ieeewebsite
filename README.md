# 🌐 IEEE Student Branch Chapter Portal

<div align="center">

  <img src="https://img.shields.io/badge/IEEE-Computer%20Society-00629B?style=for-the-badge&logo=ieee&logoColor=white" alt="IEEE CS" />
  <img src="https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-7.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Hosted_on-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify" />

  <br/><br/>

  **A modern, responsive, and feature-packed web portal for the IEEE Student Branch Chapter.**

  <br/>

  [🚀 Live Demo](https://ieee-college-branch.netlify.app/) • [📦 GitHub Repository](https://github.com/sahuom890/ieeewebsite) • [🐛 Report Bug](https://github.com/sahuom890/ieeewebsite/issues) • [✨ Request Feature](https://github.com/sahuom890/ieeewebsite/issues)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Website Pages & Architecture](#-website-pages--architecture)
- [Tech Stack](#-tech-stack)
- [UI & Design Highlights](#-ui--design-highlights)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Running Locally](#installation--running-locally)
- [Project Directory Structure](#-project-directory-structure)
- [Author & Credits](#-author--credits)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

The **IEEE Student Branch Chapter Portal** serves as the central digital hub for engineering students, innovators, and committee members. Designed to empower future tech leaders, the platform streamlines event discovery, technical workshop registrations, chapter history exploration, visual galleries, and direct communication.

### 🎯 Mission & Impact
- **500+** Active Student Members
- **45+** Technical Workshops, Hackathons & Bootcamps Organized
- **12+** Excellence & Innovation Awards Won

---

## ✨ Key Features

- 🌓 **Dynamic Dark / Light Mode:** Seamless real-time theme switcher with smooth transitions and persistent visual contrast.
- 📅 **Events Hub & Filter System:** Browse upcoming workshops, hackathons, and past events with live search, status tags (`UPCOMING`, `PAST`), and dynamic filters.
- 📍 **Interactive Event Details:** Dedicated event overview pages featuring detailed descriptions, agendas, entry guidelines, and embedded Google Maps for venue navigation.
- 📝 **Event & Membership Registration Portal:** Multi-field registration flow collecting student contact data, branch, year of study, and event preferences.
- 🏛️ **Chapter Legacy & Milestones:** Interactive timeline tracing the branch's evolution from inception to national chapter excellence awards.
- 👥 **Executive Committee Showcase:** Hierarchical display of faculty advisors, domain leads, technical heads, co-heads, and student volunteers.
- 📸 **"Memories in Motion" Gallery:** High-definition responsive photo grid capturing the spirit of hackathons, code sprints, and community meetups.
- 📰 **Live News Ticker:** Real-time updates and notification banners highlighting upcoming competitions, registration deadlines, and branch announcements.
- 📱 **Mobile-First & Fully Responsive:** Fluid layouts designed with glassmorphism, micro-animations, and fast page load times across all screen sizes.

---

## 📑 Website Pages & Architecture

```
├── 🏠 Home Page (/#/)
│   ├── Hero Section ("Empowering Tech Pioneers of Tomorrow")
│   ├── College & Chapter Info Banner
│   ├── Impact Statistics (Members, Events, Awards)
│   ├── Featured Events Showcase
│   ├── Live News Ticker
│   └── Image Gallery Preview
│
├── ℹ️ About Us (/#/about)
│   ├── Chapter Genesis, Vision & Mission
│   ├── Historical Milestones Timeline (2018 – Present)
│   └── "Why Join IEEE" Core Benefits
│
├── 📅 Events Page (/#/events)
│   ├── Category Tabs (All / Upcoming / Past)
│   ├── Event Cards (e.g., Talash-e-Khazana, Figma Forge, Idea2App)
│   └── Event Details, Date, Time, Venue & Registration Links
│
├── 👥 Team Page (/#/team)
│   ├── Faculty Advisors & Branch Counselors
│   ├── Core Committee & Domain Leads (Technical, Design, Events, PR)
│   └── Student Volunteers & Coordinators
│
├── 🖼️ Gallery (/#/gallery)
│   └── Curated photo showcase of workshops, tech talks, and hackathons
│
└── 📬 Contact Us (/#/contact)
    ├── Interactive Query & Feedback Form
    ├── Campus Address & Direct Contact Info
    ├── Embedded Google Maps Location
    └── Official Social Media Links
```

---

## 🛠️ Tech Stack

### **Frontend & Core**
| Technology | Description |
|---|---|
| ![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB) | Modern UI component rendering and state management |
| ![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=flat-square&logo=vite&logoColor=white) | Ultra-fast next-generation frontend tooling & build system |
| ![React Router](https://img.shields.io/badge/React_Router_v7-CA4245?style=flat-square&logo=react-router&logoColor=white) | Client-side declarative routing and hash navigation |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) | Utility-first styling, responsive design, and dark theme support |
| ![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-F05032?style=flat-square&logo=lucide&logoColor=white) | Clean, scalable modern vector icons |

### **Deployment & Infrastructure**
| Technology | Description |
|---|---|
| ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white) | Continuous deployment, CDN caching, and production hosting |
| ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) | Distributed version control and collaboration |
| ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) | Code repository hosting and issue tracking |

---

## 🎨 UI & Design Highlights

- **Aesthetic Palette:** Deep space obsidian dark theme (`#0a0908` / `#0a0a0c`) contrasted with vibrant electric orange & amber accents (`#ea580c`, `#fb923c`, `#fbbf24`).
- **Glassmorphism:** Elegant backdrop blur filters (`backdrop-filter: blur(12px)`) with subtle borders for cards and navigation bars.
- **Typography:** Premium Google Fonts pairing featuring **Poppins** for headings and **Inter** for body readability.
- **Micro-Interactions:** Smooth button pulse animations, 3D perspective hover cards (`perspective-1000`), float/drift keyframes, and subtle noise grain textures.

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (`v18.x` or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)

### Installation & Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sahuom890/ieeewebsite.git
   cd ieeewebsite
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

4. **Build for Production:**
   ```bash
   npm run build
   ```

5. **Preview the Production Build:**
   ```bash
   npm run preview
   ```

---

## 📂 Project Directory Structure

```
ieeewebsite/
├── public/                 # Static assets, logos, and icons
├── src/
│   ├── assets/             # Images, banners, and vector assets
│   ├── components/
│   │   ├── home/           # Hero, CollegeInfoBanner, ImageGallery
│   │   ├── layout/         # Navbar, Footer
│   │   └── ui/             # Button, EventCard, NewsTicker, ProfileCard, SocialMediaBar
│   ├── pages/              # Main route pages (Home, About, Events, Team, Contact)
│   ├── App.css             # Component-level styling & animations
│   ├── index.css           # Global Tailwind and font styles
│   ├── App.jsx             # Main Application router & layout structure
│   └── main.jsx            # Application entry point
├── index.html              # HTML template with fonts and metadata
├── vite.config.js          # Vite configuration
├── vercel.json             # Vercel deployment configuration
├── package.json            # Project dependencies and npm scripts
└── README.md               # Project documentation
```

---

## 👨‍💻 Author & Credits

<div align="center">

### **Om Sahu**
**Technical Head — IEEE Committee**

[![GitHub](https://img.shields.io/badge/GitHub-sahuom890-181717?style=for-the-badge&logo=github)](https://github.com/sahuom890)
[![Website](https://img.shields.io/badge/Live_Portal-IEEE_Branch-00629B?style=for-the-badge&logo=safari)](https://ieee-college-branch.netlify.app/)

*Designed, developed, and deployed with passion to serve the student engineering community.*

</div>

---

## 🤝 Contributing

Contributions, suggestions, and feedback are always welcome!

1. Fork the repository: `git fork https://github.com/sahuom890/ieeewebsite`
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

<div align="center">
  <sub>Made with ❤️ by <b>Om Sahu</b> (Technical Head, IEEE Committee) & the IEEE Student Branch Team</sub>
</div>
