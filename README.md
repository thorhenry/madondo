# Madondo League Football Website

A comprehensive football league website built with HTML and JavaScript, featuring embedded CSS styling and dynamic content management.

## Features

### 🏠 **Home Page**
- Hero section with call-to-action
- League statistics overview
- Latest news preview
- Modern, responsive design

### 📊 **League Table**
- Complete Madondo League standings
- Team statistics (played, won, drawn, lost, goals, points)
- Interactive table with hover effects
- Team logos and abbreviations

### 📅 **Fixtures & Results**
- Upcoming match schedules
- Match details (teams, date, time, venue, status)
- Clean card-based layout

### 📰 **News Section**
- Latest football news and updates
- News categories (Championship, Players, Clubs, etc.)
- Article previews with dates and categories

### ⚽ **Clubs Page**
- All Madondo League clubs
- Club statistics and performance data
- Visual club cards with team information

### 👥 **Players Page**
- Top player profiles
- Player statistics (goals, assists, age, nationality)
- Player cards with detailed information

### 🔍 **Global Search**
- Search across all content (clubs, players, news)
- Real-time search results
- Modal popup with search results
- Click to navigate to relevant pages

## Technical Implementation

### File Structure
```
Madondo/
├── index.html          # Main HTML file
├── js/
│   └── script.js       # JavaScript with embedded CSS and functionality
└── README.md          # This file
```

### Key Features
- **Single Page Application (SPA)**: All pages are handled through JavaScript
- **Embedded CSS**: All styling is contained within the JavaScript file
- **Responsive Design**: Mobile-friendly layout
- **Search Functionality**: Global search across all content
- **Dynamic Content**: All data is managed through JavaScript objects

### CSS Styling
- Modern gradient backgrounds
- Card-based layouts
- Hover effects and animations
- Responsive grid systems
- Professional color scheme (blue and gold theme)
- **Comprehensive responsive design** for all devices

### JavaScript Architecture
- **Class-based structure**: `FootballLeagueApp` class manages all functionality
- **Event-driven navigation**: Smooth page transitions
- **Data management**: Centralized data objects for clubs, players, news, and fixtures
- **Search algorithm**: Searches across multiple data types

## How to Use

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **Navigate**: Use the navigation menu to switch between pages
3. **Search**: Use the search bar in the header to find specific content
4. **Responsive**: The website works on desktop, tablet, and mobile devices

## Search Functionality

The global search feature allows you to search for:
- **Clubs**: Search by team name or abbreviation
- **Players**: Search by player name, club, or position
- **News**: Search by article title, content, or category

Search results appear in a modal popup, and clicking on a result will navigate you to the relevant page.

## Browser Compatibility

This website is compatible with:
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Responsive Design

The website is fully responsive and optimized for:
- **Large Desktop** (1200px+)
- **Desktop** (992px - 1199px)
- **Tablet Landscape** (768px - 991px)
- **Tablet Portrait** (576px - 767px)
- **Mobile Large** (480px - 575px)
- **Mobile Small** (320px - 479px)
- **Extra Small Mobile** (below 320px)
- **Landscape orientation** on mobile devices
- **High DPI displays** (Retina screens)

## Customization

To customize the website:
1. **Add more clubs**: Edit the `clubs` array in `script.js`
2. **Add more players**: Edit the `players` array in `script.js`
3. **Add more news**: Edit the `news` array in `script.js`
4. **Add more fixtures**: Edit the `fixtures` array in `script.js`
5. **Modify styling**: Edit the CSS within the `styles` constant in `script.js`

## Future Enhancements

Potential improvements could include:
- Real-time data integration
- User authentication
- Live match updates
- Player transfer news
- Interactive statistics charts
- Social media integration
- Match commentary
- Fantasy league integration

---

**Enjoy exploring the Madondo League website!** ⚽🏆
