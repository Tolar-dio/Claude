// Global variables
let paintings = [];
let filteredPaintings = [];
let isAdminMode = false;
let editingPaintingId = null;
const STORAGE_KEY = 'dam_paintings';

// DOM elements
const gallery = document.getElementById('gallery');
const sortBy = document.getElementById('sortBy');
const filterCollection = document.getElementById('filterCollection');
const searchBox = document.getElementById('searchBox');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');
const adminToggle = document.getElementById('adminToggle');
const adminControls = document.getElementById('adminControls');
const adminModal = document.getElementById('adminModal');
const closeAdminModal = document.querySelector('.close-admin');
const paintingForm = document.getElementById('paintingForm');
const addPaintingBtn = document.getElementById('addPaintingBtn');
const cancelFormBtn = document.getElementById('cancelFormBtn');
const exportDataBtn = document.getElementById('exportDataBtn');
const importDataBtn = document.getElementById('importDataBtn');
const importFileInput = document.getElementById('importFileInput');
const paintingImageInput = document.getElementById('paintingImage');
const imagePreview = document.getElementById('imagePreview');

// Load paintings from localStorage or JSON file
async function loadPaintings() {
    try {
        // First check localStorage
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            paintings = JSON.parse(stored);
            filteredPaintings = [...paintings];
            populateCollectionFilter();
            displayPaintings();
            return;
        }

        // If no localStorage, try loading from JSON
        const response = await fetch('data/paintings.json');
        paintings = await response.json();

        // Save to localStorage for future use
        savePaintings();

        filteredPaintings = [...paintings];
        populateCollectionFilter();
        displayPaintings();
    } catch (error) {
        console.error('Error loading paintings:', error);
        paintings = [];
        filteredPaintings = [];
        gallery.innerHTML = `
            <div class="empty-state">
                <h3>Welcome!</h3>
                <p>No paintings yet. Enable Admin Mode to add your first painting.</p>
            </div>
        `;
    }
}

// Save paintings to localStorage
function savePaintings() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(paintings));
}

// Populate collection filter dropdown
function populateCollectionFilter() {
    const collections = [...new Set(paintings.map(p => p.collection))].sort();
    filterCollection.innerHTML = '<option value="all">All Collections</option>';

    collections.forEach(collection => {
        const option = document.createElement('option');
        option.value = collection;
        option.textContent = collection;
        filterCollection.appendChild(option);
    });
}

// Display paintings in gallery
function displayPaintings() {
    if (filteredPaintings.length === 0) {
        gallery.innerHTML = `
            <div class="empty-state">
                <h3>No paintings found</h3>
                <p>${isAdminMode ? 'Click "Add New Painting" to get started!' : 'Try adjusting your filters or search terms.'}</p>
            </div>
        `;
        return;
    }

    gallery.innerHTML = '';

    filteredPaintings.forEach(painting => {
        const card = createPaintingCard(painting);
        gallery.appendChild(card);
    });
}

// Create painting card element
function createPaintingCard(painting) {
    const card = document.createElement('div');
    card.className = 'painting-card';

    const imageUrl = painting.image || 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'280\' height=\'250\' viewBox=\'0 0 280 250\'%3E%3Crect fill=\'%23f0f0f0\' width=\'280\' height=\'250\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-family=\'sans-serif\' font-size=\'16\' fill=\'%23999\'%3ENo Image%3C/text%3E%3C/svg%3E';

    card.innerHTML = `
        <img src="${imageUrl}" alt="${painting.title}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'280\' height=\'250\' viewBox=\'0 0 280 250\'%3E%3Crect fill=\'%23f0f0f0\' width=\'280\' height=\'250\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-family=\'sans-serif\' font-size=\'16\' fill=\'%23999\'%3ENo Image%3C/text%3E%3C/svg%3E'">
        <div class="painting-info">
            <h3>${painting.title}</h3>
            <p class="artist">${painting.artist}</p>
            <p class="year">${painting.year}</p>
            <p class="collection">${painting.collection}</p>
        </div>
        ${isAdminMode ? `
            <div class="card-actions">
                <button class="btn-edit" onclick="editPainting(${painting.id}); event.stopPropagation();">Edit</button>
                <button class="btn-danger" onclick="deletePainting(${painting.id}); event.stopPropagation();">Delete</button>
            </div>
        ` : ''}
    `;

    // Only add click handler to the card, not the buttons
    if (!isAdminMode) {
        card.onclick = () => openModal(painting);
    } else {
        // In admin mode, only open modal when clicking on the image or info area
        const img = card.querySelector('img');
        const info = card.querySelector('.painting-info');
        img.onclick = () => openModal(painting);
        info.onclick = () => openModal(painting);
    }

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

// Open modal with painting details
function openModal(painting) {
    document.getElementById('modalImage').src = painting.image;
    document.getElementById('modalTitle').textContent = painting.title;
    document.getElementById('modalArtist').textContent = painting.artist;
    document.getElementById('modalYear').textContent = painting.year;
    document.getElementById('modalCollection').textContent = painting.collection;

    // Use innerHTML with formatted text for description and details
    document.getElementById('modalDescription').innerHTML = formatText(painting.description);
    document.getElementById('modalDetails').innerHTML = formatText(painting.details);

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
    displayPaintings();
}

// Open admin form for new painting
function openAdminForm() {
    editingPaintingId = null;
    paintingForm.reset();
    imagePreview.innerHTML = '';
    document.getElementById('adminModalTitle').textContent = 'Add New Painting';
    adminModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Edit painting
function editPainting(id) {
    const painting = paintings.find(p => p.id === id);
    if (!painting) return;

    editingPaintingId = id;
    document.getElementById('paintingTitle').value = painting.title;
    document.getElementById('paintingArtist').value = painting.artist;
    document.getElementById('paintingYear').value = painting.year;
    document.getElementById('paintingCollection').value = painting.collection;
    document.getElementById('paintingDescription').value = painting.description;
    document.getElementById('paintingDetails').value = painting.details;

    // Show existing image
    if (painting.image) {
        imagePreview.innerHTML = `<img src="${painting.image}" alt="Preview">`;
    }

    document.getElementById('adminModalTitle').textContent = 'Edit Painting';
    adminModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Delete painting
function deletePainting(id) {
    if (!confirm('Are you sure you want to delete this painting?')) return;

    paintings = paintings.filter(p => p.id !== id);
    savePaintings();
    filterPaintings();
}

// Close admin modal
function closeAdminModalHandler() {
    adminModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    paintingForm.reset();
    imagePreview.innerHTML = '';
    editingPaintingId = null;
}

// Handle image upload and preview
paintingImageInput.addEventListener('change', function(e) {
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
paintingForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const title = document.getElementById('paintingTitle').value.trim();
    const artist = document.getElementById('paintingArtist').value.trim();
    const year = parseInt(document.getElementById('paintingYear').value);
    const collection = document.getElementById('paintingCollection').value.trim();
    const description = document.getElementById('paintingDescription').value.trim();
    const details = document.getElementById('paintingDetails').value.trim();

    // Get image (either new upload or existing)
    let imageData = '';
    if (paintingImageInput.files.length > 0) {
        const file = paintingImageInput.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {
            imageData = event.target.result;
            savePaintingData(imageData);
        };
        reader.readAsDataURL(file);
    } else if (editingPaintingId) {
        // Keep existing image when editing
        const existingPainting = paintings.find(p => p.id === editingPaintingId);
        imageData = existingPainting ? existingPainting.image : '';
        savePaintingData(imageData);
    } else {
        alert('Please upload an image for the painting.');
        return;
    }

    function savePaintingData(image) {
        if (editingPaintingId) {
            // Update existing painting
            const index = paintings.findIndex(p => p.id === editingPaintingId);
            if (index !== -1) {
                paintings[index] = {
                    id: editingPaintingId,
                    title,
                    artist,
                    year,
                    collection,
                    image,
                    description,
                    details
                };
            }
        } else {
            // Add new painting
            const newId = paintings.length > 0 ? Math.max(...paintings.map(p => p.id)) + 1 : 1;
            paintings.push({
                id: newId,
                title,
                artist,
                year,
                collection,
                image,
                description,
                details
            });
        }

        savePaintings();
        populateCollectionFilter();
        filterPaintings();
        closeAdminModalHandler();
    }
});

// Export data
function exportData() {
    const dataStr = JSON.stringify(paintings, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `museum-paintings-${new Date().toISOString().split('T')[0]}.json`;
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

            if (confirm('This will replace all existing paintings. Continue?')) {
                paintings = importedData;
                savePaintings();
                populateCollectionFilter();
                filterPaintings();
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

// Sort paintings
function sortPaintings() {
    const sortValue = sortBy.value;

    filteredPaintings.sort((a, b) => {
        switch (sortValue) {
            case 'title':
                return a.title.localeCompare(b.title);
            case 'artist':
                return a.artist.localeCompare(b.artist);
            case 'year':
                return a.year - b.year;
            case 'collection':
                return a.collection.localeCompare(b.collection);
            default:
                return 0;
        }
    });

    displayPaintings();
}

// Filter paintings
function filterPaintings() {
    const collectionFilter = filterCollection.value;
    const searchTerm = searchBox.value.toLowerCase();

    filteredPaintings = paintings.filter(painting => {
        const matchesCollection = collectionFilter === 'all' || painting.collection === collectionFilter;
        const matchesSearch = searchTerm === '' ||
            painting.title.toLowerCase().includes(searchTerm) ||
            painting.artist.toLowerCase().includes(searchTerm) ||
            painting.collection.toLowerCase().includes(searchTerm) ||
            painting.year.toString().includes(searchTerm);

        return matchesCollection && matchesSearch;
    });

    sortPaintings();
}

// Event listeners
sortBy.addEventListener('change', sortPaintings);
filterCollection.addEventListener('change', filterPaintings);
searchBox.addEventListener('input', filterPaintings);
closeModal.addEventListener('click', closeModalHandler);
adminToggle.addEventListener('click', toggleAdminMode);
addPaintingBtn.addEventListener('click', openAdminForm);
cancelFormBtn.addEventListener('click', closeAdminModalHandler);
closeAdminModal.addEventListener('click', closeAdminModalHandler);
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
    }
});

// Make functions global for onclick handlers
window.editPainting = editPainting;
window.deletePainting = deletePainting;

// Initialize app
loadPaintings();
