# WRC Rally1 2026 Season Tracker

A comprehensive, interactive web application for following the 2026 World Rally Championship Rally1 season.

## Features

### Season Calendar
- Complete 2026 WRC calendar with all 13 rounds
- Interactive rally cards showing status (Live, Completed, Upcoming)
- Click any rally to view detailed information

### Rally Details
For each rally location:
- **Overview**: Full description, stats, weather conditions, and service location
- **Stages**: All stages with interactive maps, elevation profiles, and detailed descriptions
- **Results**: Live standings, stage winners, and power stage results
- **Videos & Photos**: Legendary run videos and stage photography
- **History**: Rally history and past winners

### Interactive Stage Maps
- Visual route representation for each stage
- Elevation profiles showing start, peak, and finish elevations
- Stage status tracking (Complete, Live, Upcoming)
- Detailed stage characteristics and descriptions

### Driver Profiles
Complete bios for all 2026 Rally1 drivers:
- **Sebastien Ogier** (Toyota) - 8x World Champion
- **Kalle Rovanpera** (Toyota) - 2x World Champion
- **Thierry Neuville** (Hyundai) - 2024 World Champion
- **Ott Tanak** (Hyundai) - 2019 World Champion
- **Elfyn Evans** (Toyota)
- **Adrien Fourmaux** (M-Sport Ford)
- **Takamoto Katsuta** (Toyota)
- **Gregoire Munster** (M-Sport Ford)

Each profile includes:
- Personal information and career statistics
- Championship and rally wins
- Detailed biography
- Career highlights

### Championship Standings
- Driver championship with points
- Manufacturer championship
- Points breakdown by rally
- Points system explanation

### TV Schedule
- Automatic timezone detection
- Timezone selector for manual adjustment
- Full schedule for each rally day
- Broadcast information and streaming options

## 2026 Season Calendar

| Round | Rally | Dates | Surface |
|-------|-------|-------|---------|
| R1 | Monte-Carlo | Jan 23-26 | Tarmac/Snow |
| R2 | Sweden | Feb 13-16 | Snow/Ice |
| R3 | Safari Kenya | Mar 20-23 | Gravel |
| R4 | Croatia | Apr 17-20 | Tarmac |
| R5 | Portugal | May 15-18 | Gravel |
| R6 | Sardinia | Jun 5-8 | Gravel |
| R7 | Poland | Jun 26-29 | Gravel |
| R8 | Estonia | Jul 17-20 | Gravel |
| R9 | Finland | Jul 31-Aug 3 | Gravel |
| R10 | Greece | Sep 3-6 | Gravel |
| R11 | Chile | Sep 17-20 | Gravel |
| R12 | Central Europe | Oct 15-18 | Tarmac |
| R13 | Japan | Nov 19-22 | Tarmac |

## Usage

1. Open `index.html` in a web browser
2. Navigate using the main menu:
   - **Season Calendar**: View all 2026 rallies
   - **Current Rally**: Detailed view of the active rally
   - **Drivers**: Browse all Rally1 drivers with full bios
   - **Standings**: Championship standings
   - **TV Schedule**: Broadcast times in your timezone

3. Click on any rally card to view detailed information
4. Click on any driver card to view their full profile
5. In rally view, click on stages to see maps and detailed information

## Technical Details

- **Built with**: HTML5, CSS3, Vanilla JavaScript
- **No dependencies**: Runs entirely in the browser
- **Responsive design**: Works on desktop, tablet, and mobile
- **Dark theme**: Professional motorsport aesthetic
- **Team colors**: Toyota Red, Hyundai Blue, Ford Blue

## File Structure

```
/
├── index.html      # Main application HTML
├── styles.css      # Complete stylesheet
├── script.js       # Application logic and data
└── README.md       # This file
```

## Features Highlight

### Race Week Banner
The banner at the top shows the current race week with live updates during events.

### Interactive Stage Visualization
Each stage includes:
- SVG-based route map with elevation markers
- Start/Peak/Finish elevation display
- Stage profile chart
- Detailed stage description and characteristics

### Driver Modal
Clicking a driver opens a detailed modal with:
- Career statistics
- Personal information
- Full biography
- Career highlights

### Timezone Support
The TV Schedule automatically detects your timezone and converts all broadcast times accordingly. You can also manually select a different timezone.

## Customization

The application uses CSS custom properties for easy theming:

```css
:root {
    --primary-bg: #0a0a0f;
    --accent-red: #ff1744;
    --accent-blue: #00b0ff;
    --toyota-red: #eb0a1e;
    --hyundai-blue: #002c5f;
    --ford-blue: #003478;
}
```

---

*WRC Rally1 2026 Season Tracker - Unofficial Fan Site*
