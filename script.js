// Rally Data
const rallyData = {
    drivers: [
        { id: 1, name: 'Sébastien Ogier', number: 1, team: 'Toyota', points: 0, rallyTime: '2:45:32.1', gap: '', stageWins: 2 },
        { id: 2, name: 'Kalle Rovanperä', number: 17, team: 'Toyota', points: 0, rallyTime: '2:45:48.7', gap: '+16.6', stageWins: 1 },
        { id: 3, name: 'Thierry Neuville', number: 11, team: 'Hyundai', points: 0, rallyTime: '2:46:01.2', gap: '+29.1', stageWins: 1 },
        { id: 4, name: 'Esapekka Lappi', number: 4, team: 'Hyundai', points: 0, rallyTime: '2:46:15.8', gap: '+43.7', stageWins: 0 },
        { id: 5, name: 'Adrien Fourmaux', number: 16, team: 'M-Sport Ford', points: 0, rallyTime: '2:46:28.3', gap: '+56.2', stageWins: 1 },
        { id: 6, name: 'Grégoire Munster', number: 42, team: 'M-Sport Ford', points: 0, rallyTime: '2:47:12.5', gap: '+1:40.4', stageWins: 0 }
    ],

    manufacturers: [
        { name: 'Toyota GAZOO Racing WRT', points: 0, wins: 0 },
        { name: 'Hyundai Shell Mobis WRT', points: 0, wins: 0 },
        { name: 'M-Sport Ford WRT', points: 0, wins: 0 }
    ],

    stages: [
        {
            id: 1,
            name: 'Thoard - Sisteron',
            distance: '36.85 km',
            surface: 'Tarmac',
            status: 'complete',
            elevation: { min: 480, max: 1250 },
            weather: { temp: 4, condition: 'Clear', road: 'Dry', wind: '15 km/h' },
            results: [
                { driverId: 1, time: '23:45.2', gap: '', position: 1 },
                { driverId: 2, time: '23:48.7', gap: '+3.5', position: 2 },
                { driverId: 3, time: '23:52.1', gap: '+6.9', position: 3 },
                { driverId: 5, time: '23:54.8', gap: '+9.6', position: 4 },
                { driverId: 4, time: '23:59.2', gap: '+14.0', position: 5 },
                { driverId: 6, time: '24:12.5', gap: '+27.3', position: 6 }
            ],
            splits: {
                1: { 1: '7:52.1', 2: '7:54.3', 3: '7:56.8' },
                2: { 1: '7:51.2', 2: '7:52.9', 3: '7:53.7' },
                3: { 1: '8:01.9', 2: '8:01.5', 3: '8:01.6' }
            }
        },
        {
            id: 2,
            name: 'Bayons - Bréziers',
            distance: '25.49 km',
            surface: 'Mixed',
            status: 'complete',
            elevation: { min: 710, max: 1380 },
            weather: { temp: 2, condition: 'Cloudy', road: 'Damp', wind: '20 km/h' },
            results: [
                { driverId: 3, time: '18:32.4', gap: '', position: 1 },
                { driverId: 1, time: '18:35.1', gap: '+2.7', position: 2 },
                { driverId: 2, time: '18:37.8', gap: '+5.4', position: 3 },
                { driverId: 5, time: '18:41.2', gap: '+8.8', position: 4 },
                { driverId: 4, time: '18:43.9', gap: '+11.5', position: 5 },
                { driverId: 6, time: '18:58.7', gap: '+26.3', position: 6 }
            ],
            splits: {
                1: { 1: '6:12.3', 2: '6:11.8', 3: '6:13.5' },
                2: { 1: '6:11.4', 2: '6:12.1', 3: '6:09.2' },
                3: { 1: '6:11.4', 2: '6:11.2', 3: '6:09.7' }
            }
        },
        {
            id: 3,
            name: 'Curbans - Valserre',
            distance: '20.02 km',
            surface: 'Ice/Snow',
            status: 'complete',
            elevation: { min: 850, max: 1520 },
            weather: { temp: -2, condition: 'Snow', road: 'Ice & Snow', wind: '25 km/h' },
            results: [
                { driverId: 2, time: '16:28.3', gap: '', position: 1 },
                { driverId: 1, time: '16:31.8', gap: '+3.5', position: 2 },
                { driverId: 3, time: '16:35.2', gap: '+6.9', position: 3 },
                { driverId: 4, time: '16:38.7', gap: '+10.4', position: 4 },
                { driverId: 5, time: '16:42.1', gap: '+13.8', position: 5 },
                { driverId: 6, time: '16:55.4', gap: '+27.1', position: 6 }
            ],
            splits: {
                1: { 1: '5:31.2', 2: '5:29.8', 3: '5:32.5' },
                2: { 1: '5:30.1', 2: '5:28.9', 3: '5:31.8' },
                3: { 1: '5:30.5', 2: '5:29.6', 3: '5:30.9' }
            }
        },
        {
            id: 4,
            name: 'Avançon - Notre-Dame',
            distance: '20.59 km',
            surface: 'Tarmac',
            status: 'complete',
            elevation: { min: 620, max: 1150 },
            weather: { temp: 3, condition: 'Cloudy', road: 'Dry', wind: '18 km/h' },
            results: [
                { driverId: 5, time: '15:42.8', gap: '', position: 1 },
                { driverId: 1, time: '15:44.2', gap: '+1.4', position: 2 },
                { driverId: 2, time: '15:46.1', gap: '+3.3', position: 3 },
                { driverId: 3, time: '15:47.9', gap: '+5.1', position: 4 },
                { driverId: 4, time: '15:51.3', gap: '+8.5', position: 5 },
                { driverId: 6, time: '16:03.2', gap: '+20.4', position: 6 }
            ],
            splits: {
                1: { 1: '5:15.8', 2: '5:14.6', 3: '5:16.2' },
                2: { 1: '5:14.2', 2: '5:15.1', 3: '5:15.8' },
                3: { 1: '5:13.2', 2: '5:14.5', 3: '5:15.9' }
            }
        },
        {
            id: 5,
            name: 'Saint-Léger - Saint-Geniez',
            distance: '23.07 km',
            surface: 'Mixed',
            status: 'live',
            elevation: { min: 780, max: 1420 },
            weather: { temp: 1, condition: 'Fog', road: 'Wet', wind: '22 km/h' },
            results: [
                { driverId: 1, time: '17:28.8', gap: '', position: 1 },
                { driverId: 2, time: '17:35.8', gap: '+7.0', position: 2 },
                { driverId: 3, time: '17:45.6', gap: '+16.8', position: 3 },
                { driverId: 5, time: '17:47.4', gap: '+18.6', position: 4 },
                { driverId: 4, time: '17:52.7', gap: '+23.9', position: 5 },
                { driverId: 6, time: '18:02.7', gap: '+33.9', position: 6 }
            ],
            splits: {
                1: { 1: '5:49.5', 2: '5:51.2', 3: '5:55.1' },
                2: { 1: '5:50.2', 2: '5:53.8', 3: '5:56.3' },
                3: { 1: '5:49.1', 2: '5:50.8', 3: '5:54.2' }
            }
        }
    ]
};

// View Management
let currentView = 'standings';
let currentStage = 5;
let currentFilter = 'overall';

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeStandings();
    initializeStages();
    loadCurrentView();
});

// Navigation
function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const view = btn.getAttribute('data-view');
            switchView(view);
        });
    });
}

function switchView(view) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(`${view}-view`).classList.add('active');
    currentView = view;

    if (view === 'stages') {
        loadStageView();
    }
}

// Standings View
function initializeStandings() {
    renderDriverStandings();
    renderManufacturerStandings();
    renderRallyLeaderboard();
    initializeFilters();
}

function renderDriverStandings() {
    const container = document.getElementById('driverStandings');
    const sortedDrivers = [...rallyData.drivers].sort((a, b) => {
        const timeA = parseTime(a.rallyTime);
        const timeB = parseTime(b.rallyTime);
        return timeA - timeB;
    });

    container.innerHTML = sortedDrivers.map((driver, index) => {
        const position = index + 1;
        const positionClass = position <= 3 ? `position-${position}` : '';
        return `
            <div class="standings-item ${positionClass}">
                <div class="position">${position}</div>
                <div class="driver-info">
                    <div class="driver-name">#${driver.number} ${driver.name}</div>
                    <div class="driver-team">${driver.team}</div>
                </div>
                <div class="points">${driver.rallyTime}</div>
            </div>
        `;
    }).join('');
}

function renderManufacturerStandings() {
    const container = document.getElementById('manufacturerStandings');
    container.innerHTML = rallyData.manufacturers.map((team, index) => {
        const position = index + 1;
        const positionClass = position <= 3 ? `position-${position}` : '';
        return `
            <div class="standings-item ${positionClass}">
                <div class="position">${position}</div>
                <div class="driver-info">
                    <div class="driver-name">${team.name}</div>
                </div>
                <div class="points">${team.points} pts</div>
            </div>
        `;
    }).join('');
}

function renderRallyLeaderboard() {
    const container = document.getElementById('rallyLeaderboard');
    const sortedDrivers = [...rallyData.drivers].sort((a, b) => {
        const timeA = parseTime(a.rallyTime);
        const timeB = parseTime(b.rallyTime);
        return timeA - timeB;
    });

    container.innerHTML = `
        <div class="leaderboard-row header">
            <span>Pos</span>
            <span>Driver</span>
            <span>Time</span>
            <span>Gap</span>
            <span>Stages Won</span>
        </div>
        ${sortedDrivers.map((driver, index) => {
            const position = index + 1;
            const leaderClass = position === 1 ? 'leader' : '';
            return `
                <div class="leaderboard-row ${leaderClass}">
                    <span>${position}</span>
                    <span><strong>#${driver.number}</strong> ${driver.name} <small>(${driver.team})</small></span>
                    <span style="font-family: 'Courier New', monospace;">${driver.rallyTime}</span>
                    <span style="color: ${driver.gap ? '#ff1744' : '#00e676'};">${driver.gap || 'Leader'}</span>
                    <span>${driver.stageWins}</span>
                </div>
            `;
        }).join('')}
    `;
}

function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            renderRallyLeaderboard();
        });
    });
}

// Stages View
function initializeStages() {
    const stageButtons = document.querySelectorAll('.stage-btn');
    stageButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            stageButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentStage = parseInt(btn.getAttribute('data-stage'));
            loadStageView();
        });
    });

    initializeComparison();
}

function loadStageView() {
    const stage = rallyData.stages[currentStage - 1];
    if (!stage) return;

    renderStageInfo(stage);
    renderStageProfile(stage);
    renderWeatherInfo(stage);
    renderStageResults(stage);
}

function renderStageInfo(stage) {
    const container = document.getElementById('stageInfo');
    container.innerHTML = `
        <div class="stage-title">SS${stage.id}: ${stage.name}</div>
        <div class="stage-details">
            <div class="stage-detail">
                <span class="stage-detail-label">Distance</span>
                <span class="stage-detail-value">${stage.distance}</span>
            </div>
            <div class="stage-detail">
                <span class="stage-detail-label">Surface</span>
                <span class="stage-detail-value">${stage.surface}</span>
            </div>
            <div class="stage-detail">
                <span class="stage-detail-label">Status</span>
                <span class="stage-detail-value" style="color: ${stage.status === 'live' ? '#ff1744' : '#00e676'};">
                    ${stage.status.toUpperCase()}
                </span>
            </div>
            <div class="stage-detail">
                <span class="stage-detail-label">Elevation</span>
                <span class="stage-detail-value">${stage.elevation.min}m - ${stage.elevation.max}m</span>
            </div>
        </div>
    `;
}

function renderStageProfile(stage) {
    const container = document.getElementById('stageProfile');
    container.innerHTML = `
        <div class="stage-profile-viz">
            <div class="elevation-line"></div>
        </div>
        <div style="margin-top: 15px; color: var(--text-secondary); text-align: center;">
            <p><strong>Elevation Gain:</strong> ${stage.elevation.max - stage.elevation.min}m |
            <strong>Avg Grade:</strong> ${((stage.elevation.max - stage.elevation.min) / parseFloat(stage.distance) * 100).toFixed(1)}%</p>
        </div>
    `;
}

function renderWeatherInfo(stage) {
    const container = document.getElementById('weatherInfo');
    const weatherIcons = {
        'Clear': '☀️',
        'Cloudy': '☁️',
        'Snow': '❄️',
        'Fog': '🌫️',
        'Rain': '🌧️'
    };

    container.innerHTML = `
        <div class="weather-grid">
            <div class="weather-item">
                <div class="weather-icon">${weatherIcons[stage.weather.condition] || '🌡️'}</div>
                <div class="weather-label">Temperature</div>
                <div class="weather-value">${stage.weather.temp}°C</div>
            </div>
            <div class="weather-item">
                <div class="weather-icon">🌤️</div>
                <div class="weather-label">Conditions</div>
                <div class="weather-value">${stage.weather.condition}</div>
            </div>
            <div class="weather-item">
                <div class="weather-icon">🛣️</div>
                <div class="weather-label">Road Surface</div>
                <div class="weather-value">${stage.weather.road}</div>
            </div>
            <div class="weather-item">
                <div class="weather-icon">💨</div>
                <div class="weather-label">Wind Speed</div>
                <div class="weather-value">${stage.weather.wind}</div>
            </div>
        </div>
    `;
}

function renderStageResults(stage) {
    const container = document.getElementById('stageResults');
    const sortedResults = [...stage.results].sort((a, b) => a.position - b.position);

    container.innerHTML = `
        <div class="stage-results-list">
            ${sortedResults.map((result, index) => {
                const driver = rallyData.drivers.find(d => d.id === result.driverId);
                const fastestClass = index === 0 ? 'fastest' : '';
                return `
                    <div class="stage-result-item ${fastestClass}">
                        <div class="result-position">${result.position}</div>
                        <div><strong>#${driver.number}</strong> ${driver.name}</div>
                        <div class="result-time">${result.time}</div>
                        <div class="result-gap ${result.gap ? 'slower' : ''}">${result.gap || 'Fastest'}</div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function initializeComparison() {
    const driver1Select = document.getElementById('driver1Select');
    const driver2Select = document.getElementById('driver2Select');

    rallyData.drivers.forEach(driver => {
        driver1Select.innerHTML += `<option value="${driver.id}">${driver.name}</option>`;
        driver2Select.innerHTML += `<option value="${driver.id}">${driver.name}</option>`;
    });

    driver1Select.value = 1;
    driver2Select.value = 2;

    driver1Select.addEventListener('change', renderSplitComparison);
    driver2Select.addEventListener('change', renderSplitComparison);

    renderSplitComparison();
}

function renderSplitComparison() {
    const driver1Id = parseInt(document.getElementById('driver1Select').value);
    const driver2Id = parseInt(document.getElementById('driver2Select').value);
    const container = document.getElementById('splitComparison');

    const driver1 = rallyData.drivers.find(d => d.id === driver1Id);
    const driver2 = rallyData.drivers.find(d => d.id === driver2Id);

    const stage = rallyData.stages[currentStage - 1];
    if (!stage || !stage.splits) {
        container.innerHTML = '<p style="color: var(--text-secondary);">Split time data not available for this stage.</p>';
        return;
    }

    container.innerHTML = `
        <div class="split-comparison-grid">
            <div class="split-row" style="background: var(--card-bg); font-weight: 700;">
                <span>Split</span>
                <span style="text-align: center;">${driver1.name}</span>
                <span style="text-align: center;">${driver2.name}</span>
                <span>Difference</span>
            </div>
            ${Object.entries(stage.splits).map(([split, times]) => {
                const time1 = times[driver1Id];
                const time2 = times[driver2Id];

                if (!time1 || !time2) return '';

                const diff = parseTime(time1) - parseTime(time2);
                const diffStr = Math.abs(diff).toFixed(1) + 's';

                const class1 = diff < 0 ? 'faster' : diff > 0 ? 'slower' : '';
                const class2 = diff > 0 ? 'faster' : diff < 0 ? 'slower' : '';

                return `
                    <div class="split-row">
                        <span class="split-label">Split ${split}</span>
                        <span class="split-time ${class1}">${time1}</span>
                        <span class="split-time ${class2}">${time2}</span>
                        <span class="split-diff" style="color: ${diff === 0 ? 'var(--text-secondary)' : (diff < 0 ? 'var(--accent-green)' : 'var(--accent-red)')};">
                            ${diff === 0 ? 'Equal' : (diff < 0 ? driver1.name.split(' ')[1] : driver2.name.split(' ')[1]) + ' +' + diffStr}
                        </span>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

// Helper Functions
function parseTime(timeStr) {
    // Parse time format "2:45:32.1" or "23:45.2" to seconds
    const parts = timeStr.split(':');
    let seconds = 0;

    if (parts.length === 3) {
        // Hours:Minutes:Seconds.Milliseconds
        seconds = parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseFloat(parts[2]);
    } else if (parts.length === 2) {
        // Minutes:Seconds.Milliseconds
        seconds = parseInt(parts[0]) * 60 + parseFloat(parts[1]);
    }

    return seconds;
}

function loadCurrentView() {
    switchView(currentView);
}

// Simulate live updates (optional - for demo purposes)
function simulateLiveUpdates() {
    setInterval(() => {
        const liveStage = rallyData.stages.find(s => s.status === 'live');
        if (liveStage && currentView === 'stages' && currentStage === liveStage.id) {
            // Simulate time updates
            loadStageView();
        }
    }, 30000); // Update every 30 seconds
}

// Start live updates
simulateLiveUpdates();
