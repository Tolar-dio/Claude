# Denver Art Museum Guide

A personal web-based application for browsing and managing your Denver Art Museum painting collection.

## Features

- **Gallery View**: Browse all paintings in a beautiful grid layout
- **Sorting**: Sort paintings by title, artist, year, or collection
- **Filtering**: Filter paintings by museum collection
- **Search**: Search across titles, artists, collections, and years
- **Detailed View**: Click any painting to see full information and details
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Getting Started

### Opening the App

1. Open `index.html` in your web browser
   - Double-click the file, or
   - Right-click and select "Open with" your preferred browser

### Directory Structure

```
Claude/
├── index.html          # Main application file
├── styles.css          # Styling
├── script.js           # JavaScript functionality
├── data/
│   └── paintings.json  # Your painting data
└── images/             # Store your painting images here
    └── (your images)
```

## Adding Paintings

### Step 1: Add Your Images

1. Create an `images` folder in the project directory if it doesn't exist
2. Copy your painting images into this folder
3. Supported formats: JPG, PNG, WebP
4. Recommended: Name files descriptively (e.g., `starry-night.jpg`)

### Step 2: Edit paintings.json

Open `data/paintings.json` in any text editor and add your painting entries.

#### Data Format

Each painting entry should follow this structure:

```json
{
  "id": 1,
  "title": "Painting Title",
  "artist": "Artist Name",
  "year": 1920,
  "collection": "Collection Name",
  "image": "images/filename.jpg",
  "description": "Brief description of the painting",
  "details": "Detailed information about the painting, including history, technique, significance, etc."
}
```

#### Field Descriptions

- **id**: Unique number for each painting (increment for each new entry)
- **title**: The painting's title
- **artist**: The artist's name
- **year**: Year the painting was created (use a number)
- **collection**: Museum collection name (e.g., "American Art", "European Art", "Modern & Contemporary")
- **image**: Path to the image file (relative to index.html)
- **description**: Short description (1-2 sentences)
- **details**: Longer writeup with comprehensive information

#### Example Entry

```json
{
  "id": 2,
  "title": "The Blue Dancer",
  "artist": "Edgar Degas",
  "year": 1890,
  "collection": "European Art",
  "image": "images/blue-dancer.jpg",
  "description": "A stunning portrayal of a ballet dancer in motion, showcasing Degas' masterful use of color and movement.",
  "details": "This painting is part of Degas' famous series of ballet dancers. Created in 1890, it demonstrates his innovative approach to capturing movement and his fascination with the world of dance. The use of blue tones creates a dreamy, ethereal quality while the dynamic pose captures a fleeting moment of performance. Degas often worked in pastels for these pieces, allowing him to achieve the soft, luminous effects seen here."
}
```

#### Full Example (Multiple Paintings)

```json
[
  {
    "id": 1,
    "title": "Mountain Landscape",
    "artist": "Thomas Moran",
    "year": 1875,
    "collection": "American Western Art",
    "image": "images/mountain-landscape.jpg",
    "description": "A breathtaking vista of the Rocky Mountains at sunset.",
    "details": "Thomas Moran was instrumental in capturing the beauty of the American West..."
  },
  {
    "id": 2,
    "title": "Portrait of a Lady",
    "artist": "John Singer Sargent",
    "year": 1905,
    "collection": "American Art",
    "image": "images/portrait-lady.jpg",
    "description": "An elegant portrait demonstrating Sargent's virtuoso brushwork.",
    "details": "This portrait showcases Sargent's ability to capture both the physical likeness..."
  }
]
```

### Common Collection Names (Denver Art Museum)

Here are some typical collection names you might use:

- American Western Art
- American Indian Art
- Modern & Contemporary Art
- European Art
- Asian Art
- Pre-Columbian Art
- Spanish Colonial Art
- Architecture & Design
- Photography
- Textile Art

## Tips for Best Results

### Images
- Use high-quality images for best display
- Images are automatically resized to fit the gallery
- If an image fails to load, a placeholder will appear

### Writing Descriptions
- **Description field**: Keep it brief (1-3 sentences) - this appears on hover/preview
- **Details field**: Write comprehensive information here - visible in the modal view
- Include: historical context, artistic technique, significance, interesting facts

### Collections
- Use consistent naming for collections (e.g., always "Modern & Contemporary Art" not sometimes "Modern Art")
- The filter dropdown automatically populates based on your collection names
- Collections are case-sensitive

### JSON Syntax
- Don't forget commas between entries (but not after the last entry)
- Use double quotes for all strings
- Numbers (like year and id) don't need quotes
- Each entry should be enclosed in curly braces `{}`
- The entire file should be wrapped in square brackets `[]`

### Validation
If your JSON file has errors, you can validate it at: https://jsonlint.com/

## Troubleshooting

**Paintings don't appear:**
- Check that `data/paintings.json` exists and is properly formatted
- Validate your JSON syntax
- Check the browser console (F12) for errors

**Images don't load:**
- Verify the image path in the JSON file
- Ensure images are in the correct folder
- Check that image filenames match exactly (case-sensitive)

**Filtering/sorting not working:**
- Refresh the page
- Check for JavaScript errors in the browser console (F12)

## Browser Compatibility

Works with all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Privacy

This app runs entirely in your browser. No data is sent to any server. All information stays on your computer.

## Customization

Feel free to modify:
- **styles.css**: Change colors, fonts, layout
- **index.html**: Adjust the structure or add new features
- **script.js**: Modify sorting/filtering behavior

## License

This is for your personal use. Modify and customize as you wish!