# RoamLuxe — Premium Hotel Listing Application

RoamLuxe is a modern, responsive, and visually stunning React frontend application designed for seeking luxury accommodation options. It connects to a backend API to retrieve premium hotel listings in real-time, offering advanced client-side sorting, location-based filtering, and dynamic content routing wrapped inside a premium travel aesthetic.

---

## 🌟 Features

* **Real-time API Integration:** Efficiently fetches hotel records from the data endpoint, displaying high-fidelity skeleton loading screens during transition, warning alerts on connection dropouts, and clean listings upon successful fetch calls.
* **Content Routing & Dynamic Active States:** Clicking between tabs (`Discover`, `Hotels`, `Trips`) dynamically routes the viewport state:
  * Selecting **Hotels** defaults the search location to *Pune* and updates all hero header slogans, titles, descriptions, and sort configurations reactively to match the active location.
* **Interactive Search & Filter Bar:** Fully functional location selectors, minimum star-rating drop-downs, keyword searches, and an Indigo-gradient **Sort Button** that adjusts listing orders seamlessly.
* **Responsive CSS Grid Layout:** Adapts responsively to mobile, tablet, and desktop screens (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`).
* **Interactive Hotel Cards:** Features fixed aspect ratios (`aspect-[4/3]`) for layout consistency, ratings, price counters, custom favorite icons, hover translation transitions, and an active **Book Now** handler that triggers checkout alert modals.
* **Premium Design System:** Implemented using a soft, textured dot-grid background (`#faf9f6`), glassmorphism card controls (`backdrop-blur-xl`), capsule-shaped nav elements, and indigo accent branding.

---

## 🛠️ Tech Stack

* **Core Framework:** React 18+ (JavaScript)
* **Build Tool:** Vite (for hot module replacement and lightning-fast compilations)
* **Styling Engine:** Tailwind CSS v4 (native `@tailwindcss/vite` compiling)
* **Icons Library:** Lucide React (for scalable vector outlines)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation & Run Steps
Follow these terminal commands to initialize and launch the project locally:



1. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Launch the Local Development Server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to the address displayed in the console (usually `http://localhost:5173`).

4. **Build the Production Bundle:**
   ```bash
   npm run build
   ```

---

## 📂 Folder Structure

The project follows a standard modular React architecture:

```text
├── public/                 # Static assets
└── src/
    ├── assets/             # Images, logos, SVG files
    ├── components/         # Reusable presentation components
    │   ├── Hero.jsx        # Blurred background, tagline and filter card
    │   ├── HotelCard.jsx   # Media display, pricing, tags, click handlers
    │   ├── HotelList.jsx   # Sorting, filters container, empty/error state mapper
    │   ├── Loader.jsx      # High-fidelity pulse animation skeleton grid
    │   └── Navbar.jsx      # Sticky header, absolute centering navigation capsule links
    ├── hooks/
    │   └── useFetchHotels.js # Hook handling API fetch request, load and error states
    ├── App.jsx             # Main application entry point, holds core state
    ├── index.css           # Global CSS variables, fonts, and Tailwind v4 imports
    └── main.jsx            # DOM mounting entrypoint
```

---

## 🔌 API Integration Details

* **Base URL:** `https://demohotelsapi.pythonanywhere.com/`
* **Data Endpoint:** `https://demohotelsapi.pythonanywhere.com/hotels/`
* **Schema Schema:**
  ```json
  {
    "status": 200,
    "message": "Successfully fetched hotel list",
    "data": [
      {
        "id": 2,
        "name": "Hotel Bliss Luxeon",
        "price": "3017.74",
        "thumbnail": "https://images.unsplash.com...",
        "rating": 4.6,
        "location": "Mumbai",
        "description": "Located in Mumbai..."
      }
    ]
  }
  ```
