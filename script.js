// Global variables
let paintings = [];
let filteredPaintings = [];

// DOM elements
const gallery = document.getElementById('gallery');
const sortBy = document.getElementById('sortBy');
const filterCollection = document.getElementById('filterCollection');
const searchBox = document.getElementById('searchBox');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');

// Load paintings data
async function loadPaintings() {
    try {
        const response = await fetch('data/paintings.json');
        paintings = await response.json();
        filteredPaintings = [...paintings];

        // Populate collection filter
        populateCollectionFilter();

        // Display paintings
        displayPaintings();
    } catch (error) {
        console.error('Error loading paintings:', error);
        gallery.innerHTML = `
            <div class="empty-state">
                <h3>Error loading paintings</h3>
                <p>Please check that data/paintings.json exists and is properly formatted.</p>
            </div>
        `;
    }
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
                <p>Try adjusting your filters or search terms.</p>
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
    card.onclick = () => openModal(painting);

    card.innerHTML = `
        <img src="${painting.image}" alt="${painting.title}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'280\' height=\'250\' viewBox=\'0 0 280 250\'%3E%3Crect fill=\'%23f0f0f0\' width=\'280\' height=\'250\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-family=\'sans-serif\' font-size=\'16\' fill=\'%23999\'%3ENo Image%3C/text%3E%3C/svg%3E'">
        <div class="painting-info">
            <h3>${painting.title}</h3>
            <p class="artist">${painting.artist}</p>
            <p class="year">${painting.year}</p>
            <p class="collection">${painting.collection}</p>
        </div>
    `;

    return card;
}

// Open modal with painting details
function openModal(painting) {
    document.getElementById('modalImage').src = painting.image;
    document.getElementById('modalTitle').textContent = painting.title;
    document.getElementById('modalArtist').textContent = painting.artist;
    document.getElementById('modalYear').textContent = painting.year;
    document.getElementById('modalCollection').textContent = painting.collection;
    document.getElementById('modalDescription').textContent = painting.description;
    document.getElementById('modalDetails').textContent = painting.details;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModalHandler() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

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

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModalHandler();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModalHandler();
    }
});

// Initialize app
loadPaintings();
