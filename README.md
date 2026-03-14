# Viv Sharma Photography Portfolio

A stunning, high-performance portfolio website built for Viv Sharma, a wildlife photographer and conservationist. The application showcases photographic work, accomplishments, gear, and social media presence through a beautifully animated and fully responsive web experience.

## ✨ Features

- **Dynamic Hero Animation**: A mesmerizing scroll-driven aesthetic where the hero text acts as a mask revealing a background video, which smoothly transitions into a full-screen showreel as the user scrolls.
- **Modern UI & Responsive Design**: A beautifully crafted interface using Vanilla CSS featuring a responsive navigation bar, a frosted-glass sliding drawer for mobile devices, and dynamically adapting grid layouts.
- **Component-Driven Architecture**: Refactored into highly modular React components (`Hero`, `Gallery`, `About`, `Gear`, `Awards`, etc.) for extreme code cleanliness and maintainability.
- **Data-Driven Gallery**: The main masonry gallery is powered entirely by a local `src/data/gallery.json` file. Updating portfolio pieces is as simple as adding a new object to the JSON array—no frontend code changes required!
- **Edge-Optimized Media Delivery**: All heavy asset files (videos and high-res images) are hosted and streamed directly from a blazing-fast Cloudflare R2 bucket endpoint to ensure peak performance and minimal load times.

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (with custom properties)
- **Asset Hosting**: Cloudflare R2
- **Icons**: FontAwesome

## 📂 Project Structure

```text
src/
├── components/          # Reusable UI sections
│   ├── About.jsx        # About me section
│   ├── Awards.jsx       # Trophy & awards feature
│   ├── Features.jsx     # Info highlights bar
│   ├── Footer.jsx       # Contact & site metadata
│   ├── Gallery.jsx      # Dynamic image grid
│   ├── Gear.jsx         # Camera & lens configuration
│   ├── Hero.jsx         # Video mask scaling animation
│   ├── Navbar.jsx       # Navigation with mobile state
│   ├── SocialMedia.jsx  # Instagram/YouTube cards
│   └── Stats.jsx        # Stat counter section
├── data/
│   └── gallery.json     # External JSON data feeding the Gallery
├── App.jsx              # Main layout component
├── index.css            # Global styles and media queries
└── main.jsx             # React entry point
```

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone this repository (or download the source code).
2. Install the project dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the Vite development server:
```bash
npm run dev
```

Your app will be running at `http://localhost:5173`.

### Building for Production

To create an optimized production build, run:
```bash
npm run build
```

This will output static files into a `dist/` folder that can be directly deployed to Vercel, Netlify, or your preferred hosting platform.
