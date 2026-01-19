// Global variables
let figures = [];
let isAdminMode = false;
let editingFigureId = null;
const STORAGE_KEY = 'daily_history_figures';

// DOM elements
const dailyFigureDiv = document.getElementById('dailyFigure');
const currentDateDiv = document.getElementById('currentDate');
const modal = document.getElementById('modal');
const closeModalBtn = document.querySelector('.close');
const adminToggle = document.getElementById('adminToggle');
const adminControls = document.getElementById('adminControls');
const adminModal = document.getElementById('adminModal');
const closeAdminModal = document.querySelector('.close-admin');
const figureForm = document.getElementById('figureForm');
const addFigureBtn = document.getElementById('addFigureBtn');
const viewAllBtn = document.getElementById('viewAllBtn');
const cancelFormBtn = document.getElementById('cancelFormBtn');
const exportDataBtn = document.getElementById('exportDataBtn');
const importDataBtn = document.getElementById('importDataBtn');
const importFileInput = document.getElementById('importFileInput');
const figureImageInput = document.getElementById('figureImage');
const imagePreview = document.getElementById('imagePreview');
const allFiguresModal = document.getElementById('allFiguresModal');
const closeAllFigures = document.querySelector('.close-all-figures');
const allFiguresList = document.getElementById('allFiguresList');

// Get today's figure based on date
function getTodaysFigure() {
    if (figures.length === 0) return null;

    // Get days since epoch (ensures same figure for same date)
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    // Use modulo to cycle through figures
    const index = dayOfYear % figures.length;
    return figures[index];
}

// Display current date
function displayCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = new Date().toLocaleDateString('en-US', options);
    currentDateDiv.textContent = dateString;
}

// Load figures from localStorage or JSON file
async function loadFigures() {
    try {
        // First check localStorage
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            figures = JSON.parse(stored);
            displayDailyFigure();
            return;
        }

        // If no localStorage, try loading from JSON
        const response = await fetch('data/figures.json');
        figures = await response.json();

        // Save to localStorage for future use
        saveFigures();

        displayDailyFigure();
    } catch (error) {
        console.error('Error loading figures:', error);
        figures = [];
        dailyFigureDiv.innerHTML = `
            <div class="empty-state">
                <h3>Welcome to Daily History!</h3>
                <p>No historical figures yet. Enable Admin Mode to add your first figure.</p>
            </div>
        `;
    }
}

// Save figures to localStorage
function saveFigures() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(figures));
}

// Display today's figure
function displayDailyFigure() {
    displayCurrentDate();

    const todaysFigure = getTodaysFigure();

    if (!todaysFigure) {
        dailyFigureDiv.innerHTML = `
            <div class="empty-state">
                <h3>No figures available</h3>
                <p>${isAdminMode ? 'Click "Add New Figure" to get started!' : 'Check back soon!'}</p>
            </div>
        `;
        return;
    }

    const card = createFigureCard(todaysFigure);
    dailyFigureDiv.innerHTML = '';
    dailyFigureDiv.appendChild(card);
}

// Create figure card element
function createFigureCard(figure) {
    const card = document.createElement('div');
    card.className = 'figure-card';

    card.innerHTML = `
        <div class="figure-header">
            <h2>${figure.name}</h2>
            <p class="figure-years">${figure.years}</p>
            <p class="figure-meta">${figure.region} • ${figure.field}</p>
        </div>
        <div class="figure-summary">
            <h3>Who They Were</h3>
            <p>${figure.summary}</p>
        </div>
        <div class="figure-lesson">
            <h3>The Lesson</h3>
            <div>${formatText(figure.lesson)}</div>
        </div>
        <button class="btn-read-more" onclick="openFigureModal(${figure.id})">Read Full Story</button>
        ${isAdminMode ? `
            <div class="card-actions">
                <button class="btn-edit" onclick="editFigure(${figure.id}); event.stopPropagation();">Edit</button>
                <button class="btn-danger" onclick="deleteFigure(${figure.id}); event.stopPropagation();">Delete</button>
            </div>
        ` : ''}
    `;

    return card;
}

// Format text with markdown-style formatting
function formatText(text) {
    if (!text) return '';

    // Escape HTML to prevent XSS
    let formatted = text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    // Convert markdown headers (must be at start of line or after <br>)
    formatted = formatted.replace(/^### (.+)$/gm, '<h4>$1</h4>');
    formatted = formatted.replace(/^## (.+)$/gm, '<h3>$1</h3>');
    formatted = formatted.replace(/^# (.+)$/gm, '<h2>$1</h2>');

    // Convert bullet lists (- or * at start of line)
    formatted = formatted.replace(/^[\-\*] (.+)$/gm, '<span class="bullet-item">• $1</span>');

    // Convert numbered lists
    formatted = formatted.replace(/^\d+\. (.+)$/gm, '<span class="bullet-item">$&</span>');

    // Convert inline code `code`
    formatted = formatted.replace(/`(.+?)`/g, '<code>$1</code>');

    // Convert markdown-style formatting
    // Bold: **text** or __text__ (do this before italic to avoid conflicts)
    formatted = formatted.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/__(.+?)__/g, '<strong>$1</strong>');

    // Italic: *text* or _text_ (but not part of bold)
    formatted = formatted.replace(/(?<!\*)\*([^\*]+?)\*(?!\*)/g, '<em>$1</em>');
    formatted = formatted.replace(/(?<!_)_([^_]+?)_(?!_)/g, '<em>$1</em>');

    // Convert line breaks to <br>
    formatted = formatted.replace(/\n/g, '<br>');

    // Convert double spaces to preserve them
    formatted = formatted.replace(/  /g, '&nbsp;&nbsp;');

    return formatted;
}

// Open modal with figure details
function openFigureModal(id) {
    const figure = figures.find(f => f.id === id);
    if (!figure) return;

    document.getElementById('modalName').textContent = figure.name;
    document.getElementById('modalYears').textContent = figure.years;
    document.getElementById('modalRegion').textContent = figure.region;
    document.getElementById('modalField').textContent = figure.field;
    document.getElementById('modalSummary').textContent = figure.summary;

    // Use innerHTML with formatted text for lesson and details
    document.getElementById('modalLesson').innerHTML = formatText(figure.lesson);
    document.getElementById('modalDetails').innerHTML = formatText(figure.details);

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModalHandler() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Toggle admin mode
function toggleAdminMode() {
    isAdminMode = !isAdminMode;
    adminToggle.classList.toggle('active', isAdminMode);
    adminToggle.textContent = isAdminMode ? 'Exit Admin' : 'Admin Mode';
    adminControls.style.display = isAdminMode ? 'flex' : 'none';
    displayDailyFigure();
}

// Open admin form for new figure
function openAdminForm() {
    editingFigureId = null;
    figureForm.reset();
    imagePreview.innerHTML = '';
    document.getElementById('adminModalTitle').textContent = 'Add New Historical Figure';
    adminModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Edit figure
function editFigure(id) {
    const figure = figures.find(f => f.id === id);
    if (!figure) return;

    editingFigureId = id;
    document.getElementById('figureName').value = figure.name;
    document.getElementById('figureYears').value = figure.years;
    document.getElementById('figureRegion').value = figure.region;
    document.getElementById('figureField').value = figure.field;
    document.getElementById('figureSummary').value = figure.summary;
    document.getElementById('figureLesson').value = figure.lesson;
    document.getElementById('figureDetails').value = figure.details;

    // Show existing image
    if (figure.image) {
        imagePreview.innerHTML = `<img src="${figure.image}" alt="Preview">`;
    }

    document.getElementById('adminModalTitle').textContent = 'Edit Historical Figure';
    adminModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Delete figure
function deleteFigure(id) {
    if (!confirm('Are you sure you want to delete this historical figure?')) return;

    figures = figures.filter(f => f.id !== id);
    saveFigures();
    displayDailyFigure();
}

// Close admin modal
function closeAdminModalHandler() {
    adminModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    figureForm.reset();
    imagePreview.innerHTML = '';
    editingFigureId = null;
}

// Handle image upload and preview
figureImageInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
        alert('Image is too large. Please choose an image under 5MB.');
        e.target.value = '';
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        imagePreview.innerHTML = `<img src="${event.target.result}" alt="Preview">`;
    };
    reader.readAsDataURL(file);
});

// Handle form submission
figureForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('figureName').value.trim();
    const years = document.getElementById('figureYears').value.trim();
    const region = document.getElementById('figureRegion').value.trim();
    const field = document.getElementById('figureField').value.trim();
    const summary = document.getElementById('figureSummary').value.trim();
    const lesson = document.getElementById('figureLesson').value.trim();
    const details = document.getElementById('figureDetails').value.trim();

    // Get image (either new upload or existing)
    let imageData = '';
    if (figureImageInput.files.length > 0) {
        const file = figureImageInput.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {
            imageData = event.target.result;
            saveFigureData(imageData);
        };
        reader.readAsDataURL(file);
    } else if (editingFigureId) {
        // Keep existing image when editing
        const existingFigure = figures.find(f => f.id === editingFigureId);
        imageData = existingFigure ? existingFigure.image : '';
        saveFigureData(imageData);
    } else {
        // No image is fine for figures
        saveFigureData('');
    }

    function saveFigureData(image) {
        if (editingFigureId) {
            // Update existing figure
            const index = figures.findIndex(f => f.id === editingFigureId);
            if (index !== -1) {
                figures[index] = {
                    id: editingFigureId,
                    name,
                    years,
                    region,
                    field,
                    image,
                    summary,
                    lesson,
                    details
                };
            }
        } else {
            // Add new figure
            const newId = figures.length > 0 ? Math.max(...figures.map(f => f.id)) + 1 : 1;
            figures.push({
                id: newId,
                name,
                years,
                region,
                field,
                image,
                summary,
                lesson,
                details
            });
        }

        saveFigures();
        displayDailyFigure();
        closeAdminModalHandler();
    }
});

// View all figures
function viewAllFigures() {
    if (figures.length === 0) {
        alert('No figures available yet.');
        return;
    }

    allFiguresList.innerHTML = '';

    // Sort figures alphabetically by name
    const sortedFigures = [...figures].sort((a, b) => a.name.localeCompare(b.name));

    sortedFigures.forEach(figure => {
        const item = document.createElement('div');
        item.className = 'all-figures-item';
        item.innerHTML = `
            <div class="all-figures-info" onclick="openFigureModal(${figure.id})">
                <h3>${figure.name}</h3>
                <p class="figure-years">${figure.years}</p>
                <p class="figure-meta">${figure.region} • ${figure.field}</p>
            </div>
            ${isAdminMode ? `
                <div class="all-figures-actions">
                    <button class="btn-edit" onclick="editFigure(${figure.id}); event.stopPropagation();">Edit</button>
                    <button class="btn-danger" onclick="deleteFigure(${figure.id}); event.stopPropagation();">Delete</button>
                </div>
            ` : ''}
        `;
        allFiguresList.appendChild(item);
    });

    allFiguresModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close all figures modal
function closeAllFiguresModal() {
    allFiguresModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Export data
function exportData() {
    const dataStr = JSON.stringify(figures, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `daily-history-figures-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
}

// Import data
function importData() {
    importFileInput.click();
}

importFileInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const importedData = JSON.parse(event.target.result);

            if (!Array.isArray(importedData)) {
                alert('Invalid data format. Please upload a valid JSON file.');
                return;
            }

            if (confirm('This will replace all existing figures. Continue?')) {
                figures = importedData;
                saveFigures();
                displayDailyFigure();
                alert('Data imported successfully!');
            }
        } catch (error) {
            alert('Error importing data. Please check the file format.');
            console.error(error);
        }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset input
});

// Event listeners
closeModalBtn.addEventListener('click', closeModalHandler);
adminToggle.addEventListener('click', toggleAdminMode);
addFigureBtn.addEventListener('click', openAdminForm);
viewAllBtn.addEventListener('click', viewAllFigures);
cancelFormBtn.addEventListener('click', closeAdminModalHandler);
closeAdminModal.addEventListener('click', closeAdminModalHandler);
closeAllFigures.addEventListener('click', closeAllFiguresModal);
exportDataBtn.addEventListener('click', exportData);
importDataBtn.addEventListener('click', importData);

// Close modals when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModalHandler();
    }
    if (event.target === adminModal) {
        closeAdminModalHandler();
    }
    if (event.target === allFiguresModal) {
        closeAllFiguresModal();
    }
});

// Close modals with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (modal.style.display === 'block') {
            closeModalHandler();
        }
        if (adminModal.style.display === 'block') {
            closeAdminModalHandler();
        }
        if (allFiguresModal.style.display === 'block') {
            closeAllFiguresModal();
        }
    }
});

// Make functions global for onclick handlers
window.openFigureModal = openFigureModal;
window.editFigure = editFigure;
window.deleteFigure = deleteFigure;

// Initialize app
loadFigures();
