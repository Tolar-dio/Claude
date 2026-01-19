# Daily History

A personal web-based application that presents a unique historical figure each day, with inspiring lessons and values you can apply to your own life. Unlike typical history apps focused on famous figures like Napoleon or Caesar, Daily History spotlights lesser-known but equally remarkable individuals like Lajos Kossuth, Ida B. Wells, and Vasily Arkhipov.

## Features

- **Daily Figure**: See a different historical figure each day based on the date
- **Personal Lessons**: Each figure comes with a lesson or value applicable to modern life
- **Detailed Stories**: Click "Read Full Story" to learn their complete history
- **Admin Mode**: Add, edit, and manage your collection of historical figures
- **View All Figures**: Browse the complete list of figures in your collection
- **Export/Import**: Backup and restore your figure collection
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Private & Local**: All data stays on your computer in browser storage

## Getting Started

### Opening the App

1. Open `index.html` in your web browser
   - Double-click the file, or
   - Right-click and select "Open with" your preferred browser
2. The app will display today's historical figure automatically

### Directory Structure

```
Claude/
├── index.html          # Main application file
├── styles.css          # Styling
├── script.js           # JavaScript functionality
└── data/
    └── figures.json    # Your historical figures data
```

## Using the App

### Viewing the Daily Figure

- The app automatically displays a different historical figure each day
- Read their summary and the personal lesson highlighted on the main screen
- Click "Read Full Story" to see their complete biography in a modal

### Admin Mode

Click the "Admin Mode" button in the header to access management features:

- **Add New Figure**: Add historical figures to your collection
- **View All Figures**: Browse and manage all figures
- **Export Data**: Download your collection as a JSON file
- **Import Data**: Restore from a backup or add figures from a file
- **Edit/Delete**: Modify or remove figures from your collection

## Data Structure

Each historical figure entry follows this structure:

```json
{
  "id": 1,
  "name": "Full Name",
  "years": "1802-1894",
  "region": "Country/Region",
  "field": "Profession/Field",
  "image": "",
  "summary": "Brief 2-3 sentence summary of who they were",
  "lesson": "**Lesson Title**: The personal value or lesson we can learn from their life story",
  "details": "Full biographical details with multiple paragraphs about their life, achievements, and significance"
}
```

### Field Descriptions

- **id**: Unique number for each figure (auto-generated when using admin mode)
- **name**: The person's full name
- **years**: Their lifespan (e.g., "1920-1951")
- **region**: Country or region they're associated with
- **field**: Their profession or area of contribution
- **image**: Path to image file (optional - leave empty string if no image)
- **summary**: Brief introduction (2-3 sentences)
- **lesson**: Personal lesson or value from their life (use **markdown** for bold titles)
- **details**: Comprehensive biography with their full story

### Markdown Support

The lesson and details fields support markdown formatting:

- **Bold**: `**text**` becomes **text**
- *Italic*: `*text*` becomes *text*
- Paragraphs: Separate with blank lines
- The lesson should start with a bold title like `**Resilience in Defeat**:`

## Adding Figures

### Using Admin Mode (Recommended)

1. Click "Admin Mode" in the header
2. Click "+ Add New Figure"
3. Fill out the form with the figure's information
4. Click "Save Figure"

### Manually Editing figures.json

Open `data/figures.json` in a text editor and add entries following the structure above.

Example entry:

```json
{
  "id": 1,
  "name": "Ida B. Wells",
  "years": "1862-1931",
  "region": "United States",
  "field": "Journalist & Civil Rights Activist",
  "image": "",
  "summary": "An investigative journalist who documented and campaigned against lynching in America, risking her life to expose racial violence through detailed, data-driven reporting.",
  "lesson": "**Truth as Weapon**: Wells showed that facts and documentation can challenge even the most entrenched power structures. When mobs destroyed her newspaper, she didn't stop—she published elsewhere. This teaches us that speaking truth to power requires both courage and strategy.",
  "details": "Born into slavery in Mississippi, Ida B. Wells became a teacher and then a journalist. In 1892, when three of her friends were lynched in Memphis, she began investigating lynchings throughout the South.\n\nWells discovered that the common justification for lynching—protecting white women—was largely a myth. Most victims were killed for economic competition or violating social codes. She published her findings in detailed investigative articles, using statistics and eyewitness accounts."
}
```

## The Daily Rotation

The app uses a deterministic algorithm to select the daily figure:

- The same figure appears on the same date every year
- Everyone viewing the app sees the same figure on the same day
- The algorithm cycles through all available figures
- As you add more figures, the rotation extends

## Curating Your Collection

### Finding Lesser-Known Figures

Look for:

- Historical figures from underrepresented regions or time periods
- People who made significant contributions but aren't household names
- Individuals whose stories offer unique personal lessons
- Those who exemplify specific virtues: courage, persistence, integrity, innovation

### Writing Compelling Lessons

Focus on:

- Universal human challenges and how they overcame them
- Values that translate across time and culture
- Specific actions or decisions that demonstrate the lesson
- How their example applies to everyday modern life

### Balance Your Collection

Consider including:

- Different time periods (ancient to modern)
- Various regions and cultures
- Diverse fields (science, arts, politics, activism, etc.)
- Both triumph and tragedy as teaching moments
- Men and women in equal measure

## Privacy & Data

- All data is stored in your browser's localStorage
- Nothing is sent to any server
- Your collection is private and local to your computer
- Use Export/Import to backup or transfer between devices

## Browser Compatibility

Works with all modern browsers:

- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Customization

Feel free to modify:

- **styles.css**: Change colors, fonts, or layout
- **index.html**: Adjust the structure
- **script.js**: Modify rotation logic or add features

## Tips for Best Results

### Writing Style

- Keep summaries concise (2-3 sentences max)
- Make lessons specific and actionable
- Use storytelling in the details section
- Include dates, places, and concrete events

### Lesson Themes

Strong lesson themes include:

- Resilience and perseverance
- Moral courage
- Innovation and creativity
- Standing up for justice
- Hidden depths and unexpected talents
- The power of individual action
- Finding meaning in adversity

### Quality Over Quantity

Better to have 20 well-researched, thoughtfully written figures than 100 hastily compiled entries.

## Troubleshooting

**Figures don't appear:**

- Check that `data/figures.json` exists and is valid JSON
- Validate your JSON at https://jsonlint.com/
- Check browser console (F12) for errors

**Same figure every day:**

- Ensure you have multiple figures in your collection
- Clear localStorage and reload (note: this erases custom additions)

**Admin mode not working:**

- Refresh the page
- Check browser console for JavaScript errors

## License

This is for your personal use and learning. Modify and customize as you wish!

---

*"The past is never dead. It's not even past."* — William Faulkner
