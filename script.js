// ============================================
// WRC RALLY1 2026 SEASON TRACKER
// Complete Season Data and Application Logic
// ============================================

// Current state
let currentView = 'calendar';
let currentRallyId = 1;
let currentRallySubView = 'overview';
let selectedStageId = null;
let userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// ============================================
// DRIVER DATA WITH FULL BIOS
// ============================================
const drivers = [
    {
        id: 1,
        name: 'Sébastien Ogier',
        number: 1,
        team: 'Toyota',
        teamFull: 'TOYOTA GAZOO Racing WRT',
        nationality: 'French',
        nationalityFlag: '🇫🇷',
        birthDate: '1983-12-17',
        birthPlace: 'Gap, France',
        coDriver: 'Vincent Landais',
        coDriverNationality: '🇫🇷',
        championships: 8,
        rallyWins: 59,
        podiums: 98,
        stageWins: 632,
        points2026: 25,
        bio: `Sébastien Ogier is widely regarded as one of the greatest rally drivers of all time. Born in Gap, in the heart of the French Alps near the iconic Monte Carlo Rally stages, Ogier developed his driving skills on the very roads that would later become his kingdom. He burst onto the WRC scene in 2008 and claimed his first world title in 2013 with Volkswagen, beginning an unprecedented run of six consecutive championships. After moving to M-Sport Ford and then Toyota, he added two more titles to his collection. Known for his incredible car control, mental strength under pressure, and tactical intelligence, Ogier has dominated the Monte Carlo Rally like no other driver of his generation. His smooth driving style and ability to extract maximum performance while preserving his machinery make him particularly formidable on tarmac events. Though now competing in a partial schedule, his speed remains undiminished.`,
        careerHighlights: [
            '8-time World Rally Champion (2013-2020, 2021)',
            'Most Monte Carlo Rally wins in modern era (9)',
            'Over 59 rally victories',
            'Started rallying in 2006',
            'Youngest French WRC champion'
        ],
        image: 'ogier'
    },
    {
        id: 2,
        name: 'Kalle Rovanperä',
        number: 69,
        team: 'Toyota',
        teamFull: 'TOYOTA GAZOO Racing WRT',
        nationality: 'Finnish',
        nationalityFlag: '🇫🇮',
        birthDate: '2000-10-01',
        birthPlace: 'Jyväskylä, Finland',
        coDriver: 'Jonne Halttunen',
        coDriverNationality: '🇫🇮',
        championships: 2,
        rallyWins: 15,
        podiums: 28,
        stageWins: 156,
        points2026: 18,
        bio: `Kalle Rovanperä made history in 2022 by becoming the youngest ever World Rally Champion at just 22 years old, then defended his title in dominant fashion in 2023. The son of former WRC driver Harri Rovanperä, Kalle was literally born into rallying in the spiritual home of Finnish motorsport, Jyväskylä. He began driving at an incredibly young age, with videos of him executing perfect handbrake turns at age 8 going viral. His natural talent and fearless approach to driving quickly marked him as a generational talent. Rovanperä's driving style combines Finnish bravery with remarkable precision - he attacks stages with complete commitment while maintaining exceptional consistency. His ability to manage tire wear and read conditions has made him particularly effective in gravel rallies, though his tarmac pace has improved significantly. Now driving a part-time schedule to pursue other racing interests, he remains the benchmark when he competes.`,
        careerHighlights: [
            '2-time World Rally Champion (2022, 2023)',
            'Youngest WRC Champion in history',
            'Rally Finland specialist',
            'Debuted in WRC at 18 years old',
            'Son of WRC driver Harri Rovanperä'
        ],
        image: 'rovanpera'
    },
    {
        id: 3,
        name: 'Thierry Neuville',
        number: 11,
        team: 'Hyundai',
        teamFull: 'Hyundai Shell Mobis WRT',
        nationality: 'Belgian',
        nationalityFlag: '🇧🇪',
        birthDate: '1988-06-16',
        birthPlace: 'Sankt Vith, Belgium',
        coDriver: 'Martijn Wydaeghe',
        coDriverNationality: '🇧🇪',
        championships: 1,
        rallyWins: 22,
        podiums: 75,
        stageWins: 298,
        points2026: 22,
        bio: `Thierry Neuville has been one of the most consistent and fast drivers in the WRC for over a decade. Born in the German-speaking community of Belgium, he brings a methodical, precise approach to rallying that has earned him numerous victories and multiple runner-up finishes in the championship. After years of near-misses, he finally claimed his first world title in 2024, a testament to his perseverance and continued development. Neuville joined Hyundai at the inception of their WRC program in 2014 and has been instrumental in developing their cars into championship-winning machinery. His driving style is characterized by impressive smoothness on tarmac and aggressive commitment on gravel. Known for his technical feedback and car development skills, Neuville has helped Hyundai secure multiple manufacturers' championships. His determination to succeed after years of heartbreak makes him one of the sport's most respected competitors.`,
        careerHighlights: [
            'World Rally Champion 2024',
            '5-time Championship runner-up',
            'Key to Hyundai\'s WRC program development',
            'Over 22 rally victories',
            'Belgian Rally Champion before WRC'
        ],
        image: 'neuville'
    },
    {
        id: 4,
        name: 'Ott Tänak',
        number: 8,
        team: 'Hyundai',
        teamFull: 'Hyundai Shell Mobis WRT',
        nationality: 'Estonian',
        nationalityFlag: '🇪🇪',
        birthDate: '1987-10-15',
        birthPlace: 'Kärla, Estonia',
        coDriver: 'Martin Järveoja',
        coDriverNationality: '🇪🇪',
        championships: 1,
        rallyWins: 19,
        podiums: 48,
        stageWins: 245,
        points2026: 15,
        bio: `Ott Tänak is Estonia's greatest motorsport export and one of the most naturally gifted drivers of his generation. His 2019 World Championship victory with Toyota marked the culmination of years of promise and established him among the sport's elite. Tänak's driving style is unmistakable - aggressive, committed, and spectacular to watch. He pushes the limits of adhesion like few others, particularly impressive on the fast gravel roads of Northern Europe that he grew up on. After early career setbacks including the closure of the M-Sport junior program, Tänak rebuilt his career with determination, eventually earning his shot at Toyota where he dominated the 2019 season. His move to Hyundai brought both victories and the challenges of developing a competitive package. Known for his direct communication and no-nonsense approach, Tänak remains one of the fastest drivers when everything clicks.`,
        careerHighlights: [
            'World Rally Champion 2019',
            'First Estonian WRC Champion',
            'Rally Estonia specialist',
            'Known for spectacular driving style',
            '19 WRC victories'
        ],
        image: 'tanak'
    },
    {
        id: 5,
        name: 'Elfyn Evans',
        number: 33,
        team: 'Toyota',
        teamFull: 'TOYOTA GAZOO Racing WRT',
        nationality: 'Welsh',
        nationalityFlag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
        birthDate: '1989-12-28',
        birthPlace: 'Dolgellau, Wales',
        coDriver: 'Scott Martin',
        coDriverNationality: '🇬🇧',
        championships: 0,
        rallyWins: 8,
        podiums: 35,
        stageWins: 112,
        points2026: 12,
        bio: `Elfyn Evans carries the hopes of Welsh rallying on his shoulders, following in the footsteps of legends like Colin McRae and Richard Burns. The son of former British Rally Champion Gwyndaf Evans, Elfyn grew up surrounded by rallying in the forests of Wales. His breakthrough came with M-Sport Ford, where he developed into a consistent front-runner, before joining Toyota in 2020 and immediately fighting for the championship. Evans came agonizingly close to the title in 2020, leading the championship heading into the final round before a heartbreaking crash cost him everything. His driving style combines the traditional British commitment with intelligent tire management and tactical awareness. Particularly strong on gravel events, Evans has also shown impressive pace on tarmac. His calm demeanor and analytical approach to driving make him a formidable opponent in any conditions.`,
        careerHighlights: [
            'Championship runner-up 2020 and 2021',
            '8 WRC victories',
            'Rally GB/Wales specialist',
            'Toyota factory driver since 2020',
            'Second generation rally driver'
        ],
        image: 'evans'
    },
    {
        id: 6,
        name: 'Adrien Fourmaux',
        number: 16,
        team: 'M-Sport Ford',
        teamFull: 'M-Sport Ford World Rally Team',
        nationality: 'French',
        nationalityFlag: '🇫🇷',
        birthDate: '1995-05-27',
        birthPlace: 'Le Touquet, France',
        coDriver: 'Alexandre Coria',
        coDriverNationality: '🇫🇷',
        championships: 0,
        rallyWins: 2,
        podiums: 8,
        stageWins: 34,
        points2026: 10,
        bio: `Adrien Fourmaux represents the exciting future of French rallying, bringing speed, flair, and determination to the WRC. Rising through the ranks with M-Sport's young driver program, he has established himself as one of the fastest emerging talents in the championship. His aggressive driving style and willingness to push the limits have earned comparisons to the great French drivers of the past. Fourmaux's development has been carefully managed by M-Sport, with his pace improving consistently each season. He scored his first WRC victory in dramatic fashion, announcing his arrival among the sport's elite. Known for his exuberant celebrations and passionate approach to the sport, he brings energy and excitement to every rally. His ability to extract maximum performance from the Ford Puma Rally1 has been crucial for M-Sport's competitiveness.`,
        careerHighlights: [
            '2 WRC victories',
            'M-Sport development success story',
            'French Rally Championship experience',
            'Rapidly improving tarmac specialist',
            'Rising star of French rallying'
        ],
        image: 'fourmaux'
    },
    {
        id: 7,
        name: 'Takamoto Katsuta',
        number: 18,
        team: 'Toyota',
        teamFull: 'TOYOTA GAZOO Racing WRT',
        nationality: 'Japanese',
        nationalityFlag: '🇯🇵',
        birthDate: '1993-04-25',
        birthPlace: 'Aichi, Japan',
        coDriver: 'Aaron Johnston',
        coDriverNationality: '🇮🇪',
        championships: 0,
        rallyWins: 1,
        podiums: 7,
        stageWins: 18,
        points2026: 8,
        bio: `Takamoto Katsuta is the standard-bearer for Japanese rallying in the WRC, backed by Toyota's long-term commitment to developing a Japanese world champion. Coming from a country without a strong rallying tradition, Katsuta has had to learn the craft largely from scratch, making his progress all the more remarkable. Through Toyota's driver development program in Finland, he has transformed from a promising but raw talent into a genuine podium contender. His driving has become increasingly confident and fast, with breakthrough performances showing he can match the established stars. Katsuta's journey represents Toyota's dedication to nurturing home-grown talent, and he carries the hopes of Japanese rally fans every time he competes. His cultural background brings a unique perspective to the paddock, and his gradual improvement demonstrates the value of patience in driver development.`,
        careerHighlights: [
            'First WRC victory at Rally Japan 2024',
            'Toyota\'s Japanese development project',
            'Trained in Finland',
            'Consistent podium finisher',
            'Growing into championship contender'
        ],
        image: 'katsuta'
    },
    {
        id: 8,
        name: 'Grégoire Munster',
        number: 42,
        team: 'M-Sport Ford',
        teamFull: 'M-Sport Ford World Rally Team',
        nationality: 'Belgian',
        nationalityFlag: '🇱🇺',
        birthDate: '1997-07-25',
        birthPlace: 'Luxembourg',
        coDriver: 'Louis Louka',
        coDriverNationality: '🇧🇪',
        championships: 0,
        rallyWins: 0,
        podiums: 2,
        stageWins: 5,
        points2026: 5,
        bio: `Grégoire Munster brings youthful enthusiasm and growing talent to M-Sport Ford's lineup. Representing Luxembourg in the WRC, he has steadily developed his skills through lower categories before earning his Rally1 opportunity. His progression through WRC2 demonstrated the speed and consistency needed for the top level. Now in his second full season with M-Sport, Munster is focused on building experience and securing strong results. His smooth driving style has shown promise, particularly on tarmac rallies that suit his background. Working alongside the more experienced Fourmaux, Munster is learning from every event and improving his pace and consistency. His potential is clear, and with continued development, he aims to become a regular podium challenger.`,
        careerHighlights: [
            'WRC2 podium finisher',
            'Full Rally1 drive with M-Sport',
            'Luxembourg\'s WRC representative',
            'Strong tarmac pace',
            'Developing talent'
        ],
        image: 'munster'
    }
];

// ============================================
// COMPLETE RALLY DATA FOR 2026 SEASON
// ============================================
const rallies = [
    {
        id: 1,
        name: 'Rallye Monte-Carlo',
        country: 'Monaco',
        flag: '🇲🇨',
        dates: 'January 23-26, 2026',
        startDate: '2026-01-23',
        endDate: '2026-01-26',
        round: 1,
        surface: 'Tarmac/Snow',
        totalDistance: '312.54 km',
        stages: 18,
        serviceLocation: 'Gap, France',
        status: 'live', // completed, live, upcoming
        currentStage: 5,
        overview: `The legendary Rallye Monte-Carlo opens the 2026 WRC season with its unique combination of unpredictable weather, treacherous mountain roads, and night stages. First run in 1911, it remains the most prestigious event on the calendar. Crews must contend with rapidly changing conditions - ice, snow, dry tarmac, and wet patches can all appear on a single stage, making tire choice the ultimate gamble. The rally is based in Gap, in the French Alps, with stages running through the mountains of southeastern France and the famous cols around Monaco.`,
        history: `The Monte Carlo Rally is the oldest and most prestigious rally in the world, first contested in 1911 when competitors gathered from across Europe to converge on the Mediterranean principality. The rally has evolved dramatically over the decades but has always maintained its reputation as the ultimate test of driver skill and tactical decision-making. The unpredictable winter weather conditions in the French Alps create scenarios where choosing the right tires can make or break a rally. Legends like Sandro Munari, Walter Röhrl, Tommi Mäkinen, Sébastien Loeb, and Sébastien Ogier have all left their mark on this classic event. The narrow, twisting mountain roads, famous hairpins, and iconic cols like Turini have witnessed some of rallying's greatest moments. Night stages add another dimension, with headlights cutting through darkness and fog as cars navigate cliff-edge roads at incredible speeds.`,
        weather: { avgTemp: 2, conditions: 'Variable - Ice/Snow/Dry' },
        stagesList: [
            { id: 1, name: 'Lucéram - Lantosque', distance: 14.17, surface: 'Tarmac', status: 'complete', day: 'Thursday Night', elevation: { start: 680, max: 1150, end: 520 }, description: 'A classic night stage through the Maritime Alps, featuring tight hairpins and sections that can be coated in ice.' },
            { id: 2, name: 'La Bollène-Vésubie - Peïra-Cava', distance: 24.90, surface: 'Tarmac/Ice', status: 'complete', day: 'Thursday Night', elevation: { start: 850, max: 1450, end: 1200 }, description: 'One of the most famous stages in rallying, climbing through forests to the snow line with potentially treacherous conditions.' },
            { id: 3, name: 'Puget-Théniers - Saint-Sauveur', distance: 19.37, surface: 'Tarmac', status: 'complete', day: 'Friday Morning', elevation: { start: 420, max: 1100, end: 680 }, description: 'A technical stage along the Var valley with narrow roads and limited visibility through morning mist.' },
            { id: 4, name: 'Saint-Martin-Vésubie - La Colmiane', distance: 15.48, surface: 'Tarmac/Snow', status: 'complete', day: 'Friday Morning', elevation: { start: 980, max: 1500, end: 1450 }, description: 'High altitude stage where snow and ice are almost guaranteed, testing tire choices to the limit.' },
            { id: 5, name: 'La Cabanette - Col de Braus', distance: 18.32, surface: 'Mixed', status: 'live', day: 'Friday Afternoon', elevation: { start: 620, max: 1002, end: 1002 }, description: 'Featuring the legendary Col de Braus, this stage climbs relentlessly through countless hairpins with spectacular drops.' },
            { id: 6, name: 'Lucéram - Lantosque 2', distance: 14.17, surface: 'Tarmac', status: 'upcoming', day: 'Friday Night', elevation: { start: 680, max: 1150, end: 520 }, description: 'Second pass of the opening night stage, now with different conditions and accumulated experience.' },
            { id: 7, name: 'La Bollène-Vésubie - Peïra-Cava 2', distance: 24.90, surface: 'Tarmac/Ice', status: 'upcoming', day: 'Friday Night', elevation: { start: 850, max: 1450, end: 1200 }, description: 'The second run with potentially changed conditions and different tire wear considerations.' },
            { id: 8, name: 'Avançon - Notre-Dame-du-Laus', distance: 20.79, surface: 'Tarmac', status: 'upcoming', day: 'Saturday Morning', elevation: { start: 900, max: 1300, end: 880 }, description: 'Fast and flowing stage through the Hautes-Alpes with long straights between technical sections.' },
            { id: 9, name: 'Saint-Léger-les-Mélèzes - La Bâtie-Neuve', distance: 16.89, surface: 'Tarmac', status: 'upcoming', day: 'Saturday Morning', elevation: { start: 1250, max: 1420, end: 870 }, description: 'A descending stage through larch forests with fast but technical characteristics.' },
            { id: 10, name: 'La Bréole - Selonnet', distance: 18.43, surface: 'Tarmac/Snow', status: 'upcoming', day: 'Saturday Afternoon', elevation: { start: 880, max: 1350, end: 1060 }, description: 'Mountain stage where altitude brings unpredictable conditions and tire management becomes crucial.' },
            { id: 11, name: 'Avançon - Notre-Dame-du-Laus 2', distance: 20.79, surface: 'Tarmac', status: 'upcoming', day: 'Saturday Afternoon', elevation: { start: 900, max: 1300, end: 880 }, description: 'Second pass with evolved conditions and different strategic considerations.' },
            { id: 12, name: 'Saint-Léger-les-Mélèzes - La Bâtie-Neuve 2', distance: 16.89, surface: 'Tarmac', status: 'upcoming', day: 'Saturday Afternoon', elevation: { start: 1250, max: 1420, end: 870 }, description: 'Afternoon run of this flowing stage as the sun begins to set.' },
            { id: 13, name: 'La Bréole - Selonnet 2', distance: 18.43, surface: 'Tarmac/Snow', status: 'upcoming', day: 'Saturday Afternoon', elevation: { start: 880, max: 1350, end: 1060 }, description: 'Second pass in changing light conditions.' },
            { id: 14, name: 'Digne-les-Bains - Chaudon-Norante', distance: 20.58, surface: 'Tarmac', status: 'upcoming', day: 'Sunday Morning', elevation: { start: 610, max: 1150, end: 920 }, description: 'Fast stage in the foothills with cleaner roads but still technical challenges.' },
            { id: 15, name: 'Bayons - Bréziers', distance: 13.58, surface: 'Tarmac', status: 'upcoming', day: 'Sunday Morning', elevation: { start: 1050, max: 1380, end: 1180 }, description: 'Narrow and technical stage through small mountain villages.' },
            { id: 16, name: 'Digne-les-Bains - Chaudon-Norante 2', distance: 20.58, surface: 'Tarmac', status: 'upcoming', day: 'Sunday Morning', elevation: { start: 610, max: 1150, end: 920 }, description: 'Second run on Sunday morning.' },
            { id: 17, name: 'Bayons - Bréziers 2', distance: 13.58, surface: 'Tarmac', status: 'upcoming', day: 'Sunday Midday', elevation: { start: 1050, max: 1380, end: 1180 }, description: 'Final regular stage before the Power Stage.' },
            { id: 18, name: 'La Bollène-Vésubie - Peïra-Cava [Power Stage]', distance: 24.90, surface: 'Tarmac/Ice', status: 'upcoming', day: 'Sunday Afternoon', elevation: { start: 850, max: 1450, end: 1200 }, isPowerStage: true, description: 'The iconic stage serves as the rally-closing Power Stage, offering bonus points and a dramatic finale.' }
        ],
        videos: [
            { id: 1, title: 'Loeb vs Ogier - Epic Monte Carlo Battle 2022', description: 'Sébastien Loeb makes a sensational return to beat Ogier in a thriller', youtubeId: 'monte_loeb_2022', duration: '15:32' },
            { id: 2, title: 'Röhrl Audi Quattro - Col de Turini 1984', description: 'Walter Röhrl masterclass in the legendary Group B Audi Quattro', youtubeId: 'rohrl_turini_1984', duration: '8:45' },
            { id: 3, title: 'Mäkinen Night Stage - 2000', description: 'Tommi Mäkinen shows incredible night stage pace', youtubeId: 'makinen_night_2000', duration: '12:18' }
        ],
        photos: [
            { id: 1, title: 'Col de Turini Hairpin', description: 'The iconic hairpin at night with spectators' },
            { id: 2, title: 'Snow on La Bollène', description: 'Cars navigating through fresh snow' },
            { id: 3, title: 'Monaco Finish', description: 'Cars arriving at the ceremonial finish in Monaco' },
            { id: 4, title: 'Ice Warning', description: 'Crews reading pace notes before a frozen stage' }
        ],
        pastWinners: [
            { year: 2025, driver: 'Sébastien Ogier', team: 'Toyota' },
            { year: 2024, driver: 'Sébastien Loeb', team: 'Toyota' },
            { year: 2023, driver: 'Sébastien Ogier', team: 'Toyota' },
            { year: 2022, driver: 'Sébastien Loeb', team: 'M-Sport Ford' },
            { year: 2021, driver: 'Sébastien Ogier', team: 'Toyota' }
        ],
        tvSchedule: [
            { day: 'Thursday', date: '2026-01-23', events: [{ time: '18:00', type: 'Shakedown' }, { time: '20:08', type: 'SS1 Start' }] },
            { day: 'Friday', date: '2026-01-24', events: [{ time: '07:38', type: 'SS3 Start' }, { time: '14:08', type: 'SS5 Start' }, { time: '19:00', type: 'Evening Service' }] },
            { day: 'Saturday', date: '2026-01-25', events: [{ time: '07:35', type: 'SS8 Start' }, { time: '14:00', type: 'SS11 Start' }, { time: '19:00', type: 'Evening Service' }] },
            { day: 'Sunday', date: '2026-01-26', events: [{ time: '08:00', type: 'SS14 Start' }, { time: '12:18', type: 'Power Stage' }, { time: '14:00', type: 'Podium Ceremony' }] }
        ],
        results: {
            overall: [
                { position: 1, driverId: 1, time: '3:24:15.6', gap: '' },
                { position: 2, driverId: 3, time: '3:24:38.2', gap: '+22.6' },
                { position: 3, driverId: 2, time: '3:24:51.8', gap: '+36.2' },
                { position: 4, driverId: 4, time: '3:25:12.4', gap: '+56.8' },
                { position: 5, driverId: 5, time: '3:25:45.1', gap: '+1:29.5' },
                { position: 6, driverId: 6, time: '3:26:18.7', gap: '+2:03.1' },
                { position: 7, driverId: 7, time: '3:27:02.3', gap: '+2:46.7' },
                { position: 8, driverId: 8, time: '3:28:15.9', gap: '+4:00.3' }
            ],
            stageWinners: [
                { stageId: 1, driverId: 1, time: '10:42.3' },
                { stageId: 2, driverId: 3, time: '18:15.7' },
                { stageId: 3, driverId: 2, time: '14:28.1' },
                { stageId: 4, driverId: 1, time: '11:52.4' },
                { stageId: 5, driverId: 1, time: '13:45.8' }
            ]
        }
    },
    {
        id: 2,
        name: 'Rally Sweden',
        country: 'Sweden',
        flag: '🇸🇪',
        dates: 'February 13-16, 2026',
        startDate: '2026-02-13',
        endDate: '2026-02-16',
        round: 2,
        surface: 'Snow/Ice',
        totalDistance: '287.45 km',
        stages: 19,
        serviceLocation: 'Umeå, Sweden',
        status: 'upcoming',
        currentStage: 0,
        overview: `Rally Sweden is the only true winter rally on the WRC calendar, transforming the frozen forests of northern Sweden into a high-speed snow paradise. Crews use studded tires to carve through packed snow roads, achieving incredible speeds on surfaces that seem impossibly slippery. The rally moved north to Umeå in recent years to guarantee snow conditions, and the stages now wind through the beautiful Lapland landscapes near the Arctic Circle. Massive snow banks line the roads, providing a safety buffer but also punishing any mistakes severely.`,
        history: `Rally Sweden has been a championship round since 1973, though Swedish rallies have existed since the 1950s. The event showcases a unique form of rallying where studded tires transform ice and snow into a surface offering remarkable grip. Finnish and Scandinavian drivers have traditionally dominated, with names like Björn Waldegård, Stig Blomqvist, and Marcus Grönholm becoming legends here. The famous "snow banks" create a unique hazard - soft enough to stop cars but firm enough to cause significant damage. The event has moved locations several times due to climate concerns, finally settling in the consistently cold north. Night stages in the Arctic darkness, with northern lights occasionally visible, create unforgettable spectacles.`,
        weather: { avgTemp: -15, conditions: 'Snow, Ice, Extreme Cold' },
        stagesList: [
            { id: 1, name: 'Umgransele 1', distance: 13.96, surface: 'Snow', status: 'upcoming', day: 'Thursday', elevation: { start: 320, max: 420, end: 350 }, description: 'Opening stage through frozen forests with snowbanks.' },
            { id: 2, name: 'Norrmjöle 1', distance: 8.57, surface: 'Snow', status: 'upcoming', day: 'Thursday', elevation: { start: 280, max: 350, end: 290 }, description: 'Short but intense sprint stage.' },
            { id: 3, name: 'Sävar 1', distance: 23.83, surface: 'Snow/Ice', status: 'upcoming', day: 'Friday', elevation: { start: 250, max: 380, end: 270 }, description: 'Long flowing stage through Lapland forests.' },
            { id: 4, name: 'Hörnsjö 1', distance: 18.36, surface: 'Snow', status: 'upcoming', day: 'Friday', elevation: { start: 290, max: 420, end: 310 }, description: 'Technical stage with many crests and jumps.' },
            { id: 5, name: 'Vindeln 1', distance: 17.62, surface: 'Snow/Ice', status: 'upcoming', day: 'Friday', elevation: { start: 260, max: 380, end: 280 }, description: 'Fast stage following the river valley.' },
            { id: 6, name: 'Sävar 2', distance: 23.83, surface: 'Snow/Ice', status: 'upcoming', day: 'Friday', elevation: { start: 250, max: 380, end: 270 }, description: 'Second pass with evolving snow conditions.' },
            { id: 7, name: 'Hörnsjö 2', distance: 18.36, surface: 'Snow', status: 'upcoming', day: 'Friday', elevation: { start: 290, max: 420, end: 310 }, description: 'Late afternoon run as temperatures drop.' },
            { id: 8, name: 'Vindeln 2', distance: 17.62, surface: 'Snow/Ice', status: 'upcoming', day: 'Friday', elevation: { start: 260, max: 380, end: 280 }, description: 'Evening pass as darkness approaches.' },
            { id: 9, name: 'Brattby 1', distance: 19.98, surface: 'Snow', status: 'upcoming', day: 'Saturday', elevation: { start: 310, max: 450, end: 340 }, description: 'New stage for 2026 with spectacular jumps.' },
            { id: 10, name: 'Åmsele 1', distance: 24.31, surface: 'Snow/Ice', status: 'upcoming', day: 'Saturday', elevation: { start: 280, max: 400, end: 300 }, description: 'Long stage testing consistency and tire wear.' },
            { id: 11, name: 'Kalvmyren 1', distance: 16.22, surface: 'Snow', status: 'upcoming', day: 'Saturday', elevation: { start: 300, max: 420, end: 320 }, description: 'Technical stage with narrow sections.' },
            { id: 12, name: 'Brattby 2', distance: 19.98, surface: 'Snow', status: 'upcoming', day: 'Saturday', elevation: { start: 310, max: 450, end: 340 }, description: 'Second pass with different light conditions.' },
            { id: 13, name: 'Åmsele 2', distance: 24.31, surface: 'Snow/Ice', status: 'upcoming', day: 'Saturday', elevation: { start: 280, max: 400, end: 300 }, description: 'Afternoon run with tired crews and cars.' },
            { id: 14, name: 'Kalvmyren 2', distance: 16.22, surface: 'Snow', status: 'upcoming', day: 'Saturday', elevation: { start: 300, max: 420, end: 320 }, description: 'Final stage of Saturday in fading light.' },
            { id: 15, name: 'Umeå Super Special', distance: 2.31, surface: 'Snow', status: 'upcoming', day: 'Saturday Night', elevation: { start: 20, max: 35, end: 20 }, description: 'Spectator-friendly super special in Umeå.' },
            { id: 16, name: 'Sarsjö 1', distance: 15.92, surface: 'Snow', status: 'upcoming', day: 'Sunday', elevation: { start: 290, max: 380, end: 310 }, description: 'Sunday opener through pristine snow.' },
            { id: 17, name: 'Bureå 1', distance: 9.88, surface: 'Snow', status: 'upcoming', day: 'Sunday', elevation: { start: 250, max: 320, end: 270 }, description: 'Coastal stage with sea-effect snow.' },
            { id: 18, name: 'Sarsjö 2', distance: 15.92, surface: 'Snow', status: 'upcoming', day: 'Sunday', elevation: { start: 290, max: 380, end: 310 }, description: 'Final regular stage of the rally.' },
            { id: 19, name: 'Bureå 2 [Power Stage]', distance: 9.88, surface: 'Snow', status: 'upcoming', day: 'Sunday', elevation: { start: 250, max: 320, end: 270 }, isPowerStage: true, description: 'Rally-ending Power Stage with bonus points.' }
        ],
        videos: [
            { id: 1, title: 'Rovanperä Flying Finland - 2022', description: 'Kalle Rovanperä demonstrates incredible car control on snow', youtubeId: 'rovanpera_sweden_2022', duration: '12:45' },
            { id: 2, title: 'Colin\'s Crest Record Jump', description: 'Massive jumps at the famous Colin\'s Crest', youtubeId: 'colins_crest', duration: '6:30' }
        ],
        photos: [
            { id: 1, title: 'Arctic Sunrise', description: 'Rally cars against the Arctic dawn' },
            { id: 2, title: 'Snow Banks', description: 'Cars carving through the famous snow banks' },
            { id: 3, title: 'Big Air', description: 'Rally1 car catching massive air' }
        ],
        pastWinners: [
            { year: 2025, driver: 'Kalle Rovanperä', team: 'Toyota' },
            { year: 2024, driver: 'Elfyn Evans', team: 'Toyota' },
            { year: 2023, driver: 'Kalle Rovanperä', team: 'Toyota' },
            { year: 2022, driver: 'Kalle Rovanperä', team: 'Toyota' }
        ],
        tvSchedule: [
            { day: 'Thursday', date: '2026-02-13', events: [{ time: '08:00', type: 'Shakedown' }, { time: '15:00', type: 'SS1 Start' }] },
            { day: 'Friday', date: '2026-02-14', events: [{ time: '07:00', type: 'SS3 Start' }, { time: '18:00', type: 'Evening Service' }] },
            { day: 'Saturday', date: '2026-02-15', events: [{ time: '06:30', type: 'SS9 Start' }, { time: '19:30', type: 'Super Special' }] },
            { day: 'Sunday', date: '2026-02-16', events: [{ time: '07:30', type: 'SS16 Start' }, { time: '12:00', type: 'Power Stage' }] }
        ],
        results: null
    },
    {
        id: 3,
        name: 'Safari Rally Kenya',
        country: 'Kenya',
        flag: '🇰🇪',
        dates: 'March 20-23, 2026',
        startDate: '2026-03-20',
        endDate: '2026-03-23',
        round: 3,
        surface: 'Gravel',
        totalDistance: '348.92 km',
        stages: 19,
        serviceLocation: 'Naivasha, Kenya',
        status: 'upcoming',
        currentStage: 0,
        overview: `The Safari Rally is the ultimate test of man and machine, returning to the WRC calendar in 2021 after a 19-year absence. Held in the stunning landscape of Kenya's Great Rift Valley, it challenges crews with soft fesh-fesh sand, rocky tracks, river crossings, and the ever-present threat of African wildlife on stage. The rally is notoriously punishing on cars, with reliability being as important as outright speed. Teams must prepare for conditions unlike anywhere else in the championship.`,
        history: `The Safari Rally has legendary status in motorsport, known as the world's toughest rally. Originally established in 1953 as the East African Coronation Safari, it became a World Championship round in 1973 and quickly gained a reputation for brutal attrition. In its classic format, the rally covered thousands of kilometers over several days, with crews driving through the night and encountering wild animals, flash floods, and mechanical failures. The event was dropped from the WRC in 2002 due to financial and logistical challenges but made a triumphant return in 2021 with a modern format that preserves its legendary difficulty. Shekhar Mehta, Björn Waldegård, and Carlos Sainz are among the legends who conquered the African challenge.`,
        weather: { avgTemp: 25, conditions: 'Hot, Dry, Possible Rain' },
        stagesList: [
            { id: 1, name: 'Super Special Kasarani', distance: 4.84, surface: 'Mixed', status: 'upcoming', day: 'Thursday', elevation: { start: 1620, max: 1650, end: 1620 }, description: 'Opening spectator stage at the famous Kasarani stadium.' },
            { id: 2, name: 'Loldia 1', distance: 32.68, surface: 'Gravel', status: 'upcoming', day: 'Friday', elevation: { start: 1890, max: 2100, end: 1920 }, description: 'Long opening stage through Lake Naivasha wildlife conservancy.' },
            { id: 3, name: 'Geothermal 1', distance: 18.33, surface: 'Gravel/Rock', status: 'upcoming', day: 'Friday', elevation: { start: 2050, max: 2250, end: 2100 }, description: 'Stage near Hell\'s Gate National Park with volcanic terrain.' },
            { id: 4, name: 'Kedong 1', distance: 23.05, surface: 'Gravel', status: 'upcoming', day: 'Friday', elevation: { start: 1750, max: 1950, end: 1800 }, description: 'Technical stage with fesh-fesh sections.' },
            { id: 5, name: 'Loldia 2', distance: 32.68, surface: 'Gravel', status: 'upcoming', day: 'Friday', elevation: { start: 1890, max: 2100, end: 1920 }, description: 'Afternoon pass with rougher conditions.' },
            { id: 6, name: 'Geothermal 2', distance: 18.33, surface: 'Gravel/Rock', status: 'upcoming', day: 'Friday', elevation: { start: 2050, max: 2250, end: 2100 }, description: 'Second run in the heat of the afternoon.' },
            { id: 7, name: 'Soysambu 1', distance: 27.16, surface: 'Gravel', status: 'upcoming', day: 'Saturday', elevation: { start: 1850, max: 2000, end: 1880 }, description: 'Fast stage through Soysambu conservancy.' },
            { id: 8, name: 'Elmenteita 1', distance: 15.08, surface: 'Gravel/Sand', status: 'upcoming', day: 'Saturday', elevation: { start: 1780, max: 1900, end: 1800 }, description: 'Dusty stage near Lake Elmenteita with wildlife crossings possible.' },
            { id: 9, name: 'Sleeping Warrior 1', distance: 24.48, surface: 'Gravel/Rock', status: 'upcoming', day: 'Saturday', elevation: { start: 1920, max: 2200, end: 2050 }, description: 'Named after the mountain formation, this is one of the most challenging stages.' },
            { id: 10, name: 'Soysambu 2', distance: 27.16, surface: 'Gravel', status: 'upcoming', day: 'Saturday', elevation: { start: 1850, max: 2000, end: 1880 }, description: 'Second pass on increasingly rough roads.' },
            { id: 11, name: 'Elmenteita 2', distance: 15.08, surface: 'Gravel/Sand', status: 'upcoming', day: 'Saturday', elevation: { start: 1780, max: 1900, end: 1800 }, description: 'Afternoon run in punishing heat.' },
            { id: 12, name: 'Sleeping Warrior 2', distance: 24.48, surface: 'Gravel/Rock', status: 'upcoming', day: 'Saturday', elevation: { start: 1920, max: 2200, end: 2050 }, description: 'Second pass on the toughest stage.' },
            { id: 13, name: 'Oserian 1', distance: 17.34, surface: 'Gravel', status: 'upcoming', day: 'Sunday', elevation: { start: 1850, max: 2000, end: 1880 }, description: 'Sunday opener through flower farms.' },
            { id: 14, name: 'Narasha 1', distance: 12.28, surface: 'Gravel', status: 'upcoming', day: 'Sunday', elevation: { start: 1820, max: 1950, end: 1850 }, description: 'Technical stage near Lake Naivasha.' },
            { id: 15, name: 'Hell\'s Gate 1', distance: 10.53, surface: 'Gravel/Rock', status: 'upcoming', day: 'Sunday', elevation: { start: 1950, max: 2100, end: 2000 }, description: 'Spectacular stage through volcanic scenery.' },
            { id: 16, name: 'Oserian 2', distance: 17.34, surface: 'Gravel', status: 'upcoming', day: 'Sunday', elevation: { start: 1850, max: 2000, end: 1880 }, description: 'Final regular stage loop begins.' },
            { id: 17, name: 'Narasha 2', distance: 12.28, surface: 'Gravel', status: 'upcoming', day: 'Sunday', elevation: { start: 1820, max: 1950, end: 1850 }, description: 'Penultimate stage of the rally.' },
            { id: 18, name: 'Hell\'s Gate 2 [Power Stage]', distance: 10.53, surface: 'Gravel/Rock', status: 'upcoming', day: 'Sunday', elevation: { start: 1950, max: 2100, end: 2000 }, isPowerStage: true, description: 'Rally-deciding Power Stage in stunning volcanic terrain.' },
            { id: 19, name: 'Naivasha Super Special', distance: 4.68, surface: 'Mixed', status: 'upcoming', day: 'Sunday', elevation: { start: 1890, max: 1920, end: 1890 }, description: 'Closing spectator stage to celebrate the finish.' }
        ],
        videos: [
            { id: 1, title: 'Safari Rally - Return of the Legend 2021', description: 'Highlights from the triumphant return of Safari Rally', youtubeId: 'safari_2021', duration: '18:45' },
            { id: 2, title: 'Wildlife Encounters', description: 'Amazing wildlife moments during the rally', youtubeId: 'safari_wildlife', duration: '8:30' }
        ],
        photos: [
            { id: 1, title: 'African Dust', description: 'Rally car trailing massive dust cloud' },
            { id: 2, title: 'Wildlife Warning', description: 'Zebras crossing near stage route' },
            { id: 3, title: 'Fesh-Fesh', description: 'Car navigating through soft powder sand' }
        ],
        pastWinners: [
            { year: 2025, driver: 'Sébastien Ogier', team: 'Toyota' },
            { year: 2024, driver: 'Kalle Rovanperä', team: 'Toyota' },
            { year: 2023, driver: 'Kalle Rovanperä', team: 'Toyota' },
            { year: 2022, driver: 'Kalle Rovanperä', team: 'Toyota' }
        ],
        tvSchedule: [
            { day: 'Thursday', date: '2026-03-20', events: [{ time: '14:00', type: 'Shakedown' }, { time: '18:00', type: 'Super Special' }] },
            { day: 'Friday', date: '2026-03-21', events: [{ time: '06:00', type: 'SS2 Start' }, { time: '18:00', type: 'Evening Service' }] },
            { day: 'Saturday', date: '2026-03-22', events: [{ time: '06:00', type: 'SS7 Start' }, { time: '17:00', type: 'Evening Service' }] },
            { day: 'Sunday', date: '2026-03-23', events: [{ time: '06:00', type: 'SS13 Start' }, { time: '15:30', type: 'Power Stage' }] }
        ],
        results: null
    },
    {
        id: 4,
        name: 'Croatia Rally',
        country: 'Croatia',
        flag: '🇭🇷',
        dates: 'April 17-20, 2026',
        startDate: '2026-04-17',
        endDate: '2026-04-20',
        round: 4,
        surface: 'Tarmac',
        totalDistance: '298.36 km',
        stages: 20,
        serviceLocation: 'Zagreb, Croatia',
        status: 'upcoming',
        currentStage: 0,
        overview: `Croatia Rally has quickly established itself as one of the most demanding tarmac events on the WRC calendar since its debut in 2021. Based in the capital Zagreb, the rally uses the winding mountain roads of the Croatian countryside, featuring fast, flowing sections mixed with tight, technical passages. The roads are notorious for being slippery and abrasive, testing tire management skills to the limit. Spring weather can bring anything from sunshine to rain, adding another variable to this challenging asphalt encounter.`,
        history: `Croatia Rally joined the WRC calendar in 2021 and immediately impressed with its challenging stages and enthusiastic fans. The country has a strong rallying culture, having hosted WRC events in the past as part of the former Yugoslav Rally. The new event is based around Zagreb and uses roads in the hilly regions to the south and east of the capital. The asphalt stages are known for their changing grip levels - smooth in places, rough and abrasive in others - making tire wear a constant concern. The rally has produced some thrilling finishes and has become a firm favorite among drivers for its pure driving challenge.`,
        weather: { avgTemp: 15, conditions: 'Variable - Sun/Rain' },
        stagesList: [
            { id: 1, name: 'Zagreb Show Stage', distance: 1.80, surface: 'Tarmac', status: 'upcoming', day: 'Thursday', elevation: { start: 125, max: 140, end: 125 }, description: 'Opening spectator stage in the heart of Zagreb.' },
            { id: 2, name: 'Stojdraga - Gornja Vas 1', distance: 13.15, surface: 'Tarmac', status: 'upcoming', day: 'Friday', elevation: { start: 320, max: 650, end: 420 }, description: 'Technical opener through forested hills.' },
            { id: 3, name: 'Trakošćan - Vrbno 1', distance: 20.77, surface: 'Tarmac', status: 'upcoming', day: 'Friday', elevation: { start: 280, max: 580, end: 350 }, description: 'Long stage near the famous Trakošćan Castle.' },
            { id: 4, name: 'Zagorska Sela - Kumrovec 1', distance: 11.78, surface: 'Tarmac', status: 'upcoming', day: 'Friday', elevation: { start: 220, max: 420, end: 280 }, description: 'Flowing stage through wine country.' },
            { id: 5, name: 'Mali Lipovec - Grdanjci 1', distance: 15.61, surface: 'Tarmac', status: 'upcoming', day: 'Friday', elevation: { start: 350, max: 620, end: 380 }, description: 'Technical stage with many crests.' },
            { id: 6, name: 'Stojdraga - Gornja Vas 2', distance: 13.15, surface: 'Tarmac', status: 'upcoming', day: 'Friday', elevation: { start: 320, max: 650, end: 420 }, description: 'Second pass in afternoon conditions.' },
            { id: 7, name: 'Trakošćan - Vrbno 2', distance: 20.77, surface: 'Tarmac', status: 'upcoming', day: 'Friday', elevation: { start: 280, max: 580, end: 350 }, description: 'Afternoon run with evolved surface.' },
            { id: 8, name: 'Zagorska Sela - Kumrovec 2', distance: 11.78, surface: 'Tarmac', status: 'upcoming', day: 'Friday', elevation: { start: 220, max: 420, end: 280 }, description: 'Evening pass as light fades.' },
            { id: 9, name: 'Platak 1', distance: 23.76, surface: 'Tarmac', status: 'upcoming', day: 'Saturday', elevation: { start: 450, max: 1110, end: 850 }, description: 'Mountain stage climbing to the ski resort.' },
            { id: 10, name: 'Vršič - Brod Moravice 1', distance: 16.35, surface: 'Tarmac', status: 'upcoming', day: 'Saturday', elevation: { start: 650, max: 920, end: 580 }, description: 'Fast and flowing stage.' },
            { id: 11, name: 'Oštrc - Gerovo 1', distance: 14.16, surface: 'Tarmac', status: 'upcoming', day: 'Saturday', elevation: { start: 480, max: 780, end: 520 }, description: 'Technical stage with tight hairpins.' },
            { id: 12, name: 'Platak 2', distance: 23.76, surface: 'Tarmac', status: 'upcoming', day: 'Saturday', elevation: { start: 450, max: 1110, end: 850 }, description: 'Second mountain climb.' },
            { id: 13, name: 'Vršič - Brod Moravice 2', distance: 16.35, surface: 'Tarmac', status: 'upcoming', day: 'Saturday', elevation: { start: 650, max: 920, end: 580 }, description: 'Afternoon run with tired tires.' },
            { id: 14, name: 'Oštrc - Gerovo 2', distance: 14.16, surface: 'Tarmac', status: 'upcoming', day: 'Saturday', elevation: { start: 480, max: 780, end: 520 }, description: 'Final stage of Saturday.' },
            { id: 15, name: 'Pećurkovo Brdo - Mrkopalj 1', distance: 9.92, surface: 'Tarmac', status: 'upcoming', day: 'Sunday', elevation: { start: 720, max: 890, end: 810 }, description: 'Sunday opener in mountain terrain.' },
            { id: 16, name: 'Brod na Kupi - Bosiljevo 1', distance: 18.27, surface: 'Tarmac', status: 'upcoming', day: 'Sunday', elevation: { start: 420, max: 680, end: 350 }, description: 'Long stage along the Kupa River valley.' },
            { id: 17, name: 'Skrad - Ravna Gora 1', distance: 12.17, surface: 'Tarmac', status: 'upcoming', day: 'Sunday', elevation: { start: 580, max: 850, end: 720 }, description: 'Technical pre-Power Stage challenge.' },
            { id: 18, name: 'Pećurkovo Brdo - Mrkopalj 2', distance: 9.92, surface: 'Tarmac', status: 'upcoming', day: 'Sunday', elevation: { start: 720, max: 890, end: 810 }, description: 'Second pass for final loop.' },
            { id: 19, name: 'Brod na Kupi - Bosiljevo 2', distance: 18.27, surface: 'Tarmac', status: 'upcoming', day: 'Sunday', elevation: { start: 420, max: 680, end: 350 }, description: 'Penultimate stage.' },
            { id: 20, name: 'Skrad - Ravna Gora 2 [Power Stage]', distance: 12.17, surface: 'Tarmac', status: 'upcoming', day: 'Sunday', elevation: { start: 580, max: 850, end: 720 }, isPowerStage: true, description: 'Rally-deciding Power Stage.' }
        ],
        videos: [
            { id: 1, title: 'Croatia Rally 2023 - Rovanperä Dominates', description: 'Kalle Rovanperä shows incredible tarmac pace', youtubeId: 'croatia_2023', duration: '14:20' }
        ],
        photos: [
            { id: 1, title: 'Zagreb Start', description: 'Cars lined up in central Zagreb' },
            { id: 2, title: 'Mountain Roads', description: 'Twisting asphalt through Croatian hills' }
        ],
        pastWinners: [
            { year: 2025, driver: 'Thierry Neuville', team: 'Hyundai' },
            { year: 2024, driver: 'Sébastien Ogier', team: 'Toyota' },
            { year: 2023, driver: 'Kalle Rovanperä', team: 'Toyota' },
            { year: 2022, driver: 'Kalle Rovanperä', team: 'Toyota' }
        ],
        tvSchedule: [
            { day: 'Thursday', date: '2026-04-17', events: [{ time: '18:00', type: 'Show Stage' }] },
            { day: 'Friday', date: '2026-04-18', events: [{ time: '08:00', type: 'SS2 Start' }] },
            { day: 'Saturday', date: '2026-04-19', events: [{ time: '07:30', type: 'SS9 Start' }] },
            { day: 'Sunday', date: '2026-04-20', events: [{ time: '08:00', type: 'SS15 Start' }, { time: '13:00', type: 'Power Stage' }] }
        ],
        results: null
    },
    {
        id: 5,
        name: 'Rally de Portugal',
        country: 'Portugal',
        flag: '🇵🇹',
        dates: 'May 15-18, 2026',
        startDate: '2026-05-15',
        endDate: '2026-05-18',
        round: 5,
        surface: 'Gravel',
        totalDistance: '324.18 km',
        stages: 20,
        serviceLocation: 'Matosinhos, Portugal',
        status: 'upcoming',
        currentStage: 0,
        overview: `Rally de Portugal is one of the great classic events of the WRC, known for its soft sandy gravel roads that cut deep ruts as the rally progresses. Based near Porto in northern Portugal, the rally visits iconic stages like Fafe with its famous jumps and passionate fans. The Portuguese love of rallying creates an incredible atmosphere, with thousands of spectators lining the stages. The soft gravel demands a delicate balance between aggression and preservation.`,
        history: `Rally de Portugal has been a fixture in international rallying since the 1960s and has been a WRC round since 1973. The rally has been based in various locations over the years, from the Algarve in the south to its current home near Porto in the north. Portuguese fans are among the most passionate in rallying, creating unforgettable atmospheres at spectator points like Fafe. The soft, sandy gravel creates deep ruts that significantly affect road position, giving early runners a disadvantage. The event has seen many dramatic moments and has always been a favorite among drivers and fans alike for its spectacular jumps and challenging conditions.`,
        weather: { avgTemp: 18, conditions: 'Warm, Dry' },
        stagesList: [
            { id: 1, name: 'Coimbra Show Stage', distance: 3.30, surface: 'Mixed', status: 'upcoming', day: 'Thursday', description: 'Urban super special in historic Coimbra.' },
            { id: 2, name: 'Lousã 1', distance: 13.88, surface: 'Gravel', status: 'upcoming', day: 'Friday', description: 'Opening gravel stage through Lousã mountains.' },
            { id: 3, name: 'Góis 1', distance: 17.47, surface: 'Gravel', status: 'upcoming', day: 'Friday', description: 'Technical stage with many water splashes.' },
            { id: 4, name: 'Arganil 1', distance: 20.73, surface: 'Gravel', status: 'upcoming', day: 'Friday', description: 'Classic Portuguese gravel with deep ruts forming.' },
            { id: 5, name: 'Lousã 2', distance: 13.88, surface: 'Gravel', status: 'upcoming', day: 'Friday', description: 'Second pass with evolved conditions.' },
            { id: 6, name: 'Góis 2', distance: 17.47, surface: 'Gravel', status: 'upcoming', day: 'Friday', description: 'Afternoon run on rougher roads.' },
            { id: 7, name: 'Arganil 2', distance: 20.73, surface: 'Gravel', status: 'upcoming', day: 'Friday', description: 'Deep ruts challenge all crews.' },
            { id: 8, name: 'Mortágua 1', distance: 18.15, surface: 'Gravel', status: 'upcoming', day: 'Saturday', description: 'Saturday opener in central Portugal.' },
            { id: 9, name: 'Vieira do Minho 1', distance: 21.56, surface: 'Gravel', status: 'upcoming', day: 'Saturday', description: 'Long stage in the Minho region.' },
            { id: 10, name: 'Cabeceiras de Basto 1', distance: 19.67, surface: 'Gravel', status: 'upcoming', day: 'Saturday', description: 'Fast stage with spectacular jumps.' },
            { id: 11, name: 'Mortágua 2', distance: 18.15, surface: 'Gravel', status: 'upcoming', day: 'Saturday', description: 'Second pass with fans creating atmosphere.' },
            { id: 12, name: 'Vieira do Minho 2', distance: 21.56, surface: 'Gravel', status: 'upcoming', day: 'Saturday', description: 'Afternoon challenge in the hills.' },
            { id: 13, name: 'Cabeceiras de Basto 2', distance: 19.67, surface: 'Gravel', status: 'upcoming', day: 'Saturday', description: 'Second run with tired cars.' },
            { id: 14, name: 'Amarante 1', distance: 16.89, surface: 'Gravel', status: 'upcoming', day: 'Sunday', description: 'Sunday opener near beautiful Amarante.' },
            { id: 15, name: 'Felgueiras 1', distance: 15.24, surface: 'Gravel', status: 'upcoming', day: 'Sunday', description: 'Penultimate loop stage.' },
            { id: 16, name: 'Fafe 1', distance: 11.18, surface: 'Gravel', status: 'upcoming', day: 'Sunday', description: 'Legendary Fafe stage with famous jump.' },
            { id: 17, name: 'Amarante 2', distance: 16.89, surface: 'Gravel', status: 'upcoming', day: 'Sunday', description: 'Final loop begins.' },
            { id: 18, name: 'Felgueiras 2', distance: 15.24, surface: 'Gravel', status: 'upcoming', day: 'Sunday', description: 'Building to the finale.' },
            { id: 19, name: 'Fafe 2 [Power Stage]', distance: 11.18, surface: 'Gravel', status: 'upcoming', day: 'Sunday', isPowerStage: true, description: 'Iconic Fafe jump serves as rally finale.' },
            { id: 20, name: 'Porto Street Stage', distance: 3.36, surface: 'Tarmac', status: 'upcoming', day: 'Sunday', description: 'Ceremonial finish in Porto.' }
        ],
        videos: [
            { id: 1, title: 'Fafe Jump Compilation', description: 'Greatest jumps at the legendary Fafe stage', youtubeId: 'fafe_jumps', duration: '10:15' }
        ],
        photos: [
            { id: 1, title: 'Fafe Jump', description: 'Rally car airborne at Fafe' },
            { id: 2, title: 'Portuguese Fans', description: 'Huge crowds lining the stages' }
        ],
        pastWinners: [
            { year: 2025, driver: 'Elfyn Evans', team: 'Toyota' },
            { year: 2024, driver: 'Ott Tänak', team: 'Hyundai' },
            { year: 2023, driver: 'Kalle Rovanperä', team: 'Toyota' }
        ],
        tvSchedule: [
            { day: 'Thursday', date: '2026-05-15', events: [{ time: '18:00', type: 'Show Stage' }] },
            { day: 'Friday', date: '2026-05-16', events: [{ time: '08:00', type: 'SS2 Start' }] },
            { day: 'Saturday', date: '2026-05-17', events: [{ time: '07:00', type: 'SS8 Start' }] },
            { day: 'Sunday', date: '2026-05-18', events: [{ time: '07:30', type: 'SS14 Start' }, { time: '13:15', type: 'Power Stage' }] }
        ],
        results: null
    }
];

// Add remaining rallies (6-13)
rallies.push(
    {
        id: 6,
        name: 'Rally Italia Sardegna',
        country: 'Italy',
        flag: '🇮🇹',
        dates: 'June 5-8, 2026',
        startDate: '2026-06-05',
        endDate: '2026-06-08',
        round: 6,
        surface: 'Gravel',
        totalDistance: '305.72 km',
        stages: 19,
        serviceLocation: 'Alghero, Sardinia',
        status: 'upcoming',
        overview: 'Rally Italia Sardegna takes place on the Mediterranean island of Sardinia, offering some of the roughest and most demanding gravel stages in the championship. The narrow, twisting roads cut through dense vegetation and feature countless rocks waiting to damage suspension and puncture tires. Summer heat adds to the challenge, with temperatures regularly exceeding 30°C.',
        history: 'The rally moved to Sardinia in 2004 and has become known for its brutal, rocky stages that punish cars mercilessly. The technical demands and beautiful coastal setting make it a unique event on the calendar.',
        weather: { avgTemp: 28, conditions: 'Hot, Dry' },
        stagesList: [
            { id: 1, name: 'Ittiri Arena 1', distance: 2.08, surface: 'Mixed', status: 'upcoming', day: 'Thursday', description: 'Super special in Ittiri.' },
            { id: 2, name: 'Terranova 1', distance: 14.88, surface: 'Gravel', status: 'upcoming', day: 'Friday', description: 'Rocky opening stage.' },
            { id: 3, name: 'Tempio 1', distance: 22.70, surface: 'Gravel', status: 'upcoming', day: 'Friday', description: 'Long stage through cork forests.' },
            { id: 4, name: 'Erula - Tula 1', distance: 16.94, surface: 'Gravel', status: 'upcoming', day: 'Friday', description: 'Technical mountain stage.' },
            { id: 5, name: 'Monte Lerno 1', distance: 28.02, surface: 'Gravel', status: 'upcoming', day: 'Saturday', description: 'Longest stage of the rally.' },
            { id: 6, name: 'Coiluna - Loelle [Power Stage]', distance: 14.69, surface: 'Gravel', status: 'upcoming', day: 'Sunday', isPowerStage: true, description: 'Rally-closing Power Stage.' }
        ],
        pastWinners: [
            { year: 2025, driver: 'Ott Tänak', team: 'Hyundai' },
            { year: 2024, driver: 'Thierry Neuville', team: 'Hyundai' }
        ],
        videos: [],
        photos: [],
        tvSchedule: [],
        results: null
    },
    {
        id: 7,
        name: 'Rally Poland',
        country: 'Poland',
        flag: '🇵🇱',
        dates: 'June 26-29, 2026',
        startDate: '2026-06-26',
        endDate: '2026-06-29',
        round: 7,
        surface: 'Gravel',
        totalDistance: '298.44 km',
        stages: 21,
        serviceLocation: 'Mikołajki, Poland',
        status: 'upcoming',
        overview: 'Rally Poland is one of the fastest events on the WRC calendar, featuring wide, flowing gravel roads through the Masurian Lake District. The sandy stages reward brave drivers and can see average speeds exceeding 130 km/h on some stages.',
        history: 'Poland has a rich rallying history and the event has been a WRC round on and off since 2009. The stages in the lake district are known for their extreme speed and spectacular jumps.',
        weather: { avgTemp: 22, conditions: 'Warm, Possible Rain' },
        stagesList: [
            { id: 1, name: 'Mikołajki Arena', distance: 2.00, surface: 'Mixed', status: 'upcoming', day: 'Thursday', description: 'Spectator super special.' },
            { id: 2, name: 'Świętajno 1', distance: 14.16, surface: 'Gravel', status: 'upcoming', day: 'Friday', description: 'Fast opening stage.' },
            { id: 3, name: 'Stare Juchy 1', distance: 17.23, surface: 'Gravel', status: 'upcoming', day: 'Friday', description: 'Long flowing stage.' },
            { id: 4, name: 'Mikołajki [Power Stage]', distance: 10.22, surface: 'Gravel', status: 'upcoming', day: 'Sunday', isPowerStage: true, description: 'Final Power Stage.' }
        ],
        pastWinners: [
            { year: 2025, driver: 'Kalle Rovanperä', team: 'Toyota' }
        ],
        videos: [],
        photos: [],
        tvSchedule: [],
        results: null
    },
    {
        id: 8,
        name: 'Rally Estonia',
        country: 'Estonia',
        flag: '🇪🇪',
        dates: 'July 17-20, 2026',
        startDate: '2026-07-17',
        endDate: '2026-07-20',
        round: 8,
        surface: 'Gravel',
        totalDistance: '312.85 km',
        stages: 22,
        serviceLocation: 'Tartu, Estonia',
        status: 'upcoming',
        overview: 'Rally Estonia brings the WRC to the home of Ott Tänak, featuring high-speed gravel roads through Estonian forests. The stages are fast and feature many crests that send cars flying.',
        history: 'Estonia joined the WRC calendar in 2020 and immediately impressed with its commitment to rallying and challenging stages.',
        weather: { avgTemp: 20, conditions: 'Mild, Variable' },
        stagesList: [
            { id: 1, name: 'Tartu Super Special', distance: 1.66, surface: 'Mixed', status: 'upcoming', day: 'Thursday', description: 'Opening stage in Tartu.' },
            { id: 2, name: 'Otepää 1', distance: 18.34, surface: 'Gravel', status: 'upcoming', day: 'Friday', description: 'Famous Estonian stage.' },
            { id: 3, name: 'Elva [Power Stage]', distance: 13.45, surface: 'Gravel', status: 'upcoming', day: 'Sunday', isPowerStage: true, description: 'Power Stage finale.' }
        ],
        pastWinners: [
            { year: 2025, driver: 'Ott Tänak', team: 'Hyundai' },
            { year: 2024, driver: 'Kalle Rovanperä', team: 'Toyota' }
        ],
        videos: [],
        photos: [],
        tvSchedule: [],
        results: null
    },
    {
        id: 9,
        name: 'Rally Finland',
        country: 'Finland',
        flag: '🇫🇮',
        dates: 'July 31 - August 3, 2026',
        startDate: '2026-07-31',
        endDate: '2026-08-03',
        round: 9,
        surface: 'Gravel',
        totalDistance: '320.18 km',
        stages: 22,
        serviceLocation: 'Jyväskylä, Finland',
        status: 'upcoming',
        overview: 'Rally Finland is known as the "Grand Prix of Rallying" for its incredible speeds. The smooth, fast gravel roads through Finnish forests demand commitment, precision, and absolute bravery. This is where rally legends are made.',
        history: 'Rally Finland is the spiritual home of rallying, held since 1951 around Jyväskylä in the Finnish Lake District. Finnish drivers have dominated here, and the event consistently produces the highest average speeds in the championship.',
        weather: { avgTemp: 18, conditions: 'Mild, Some Rain Possible' },
        stagesList: [
            { id: 1, name: 'Harju 1', distance: 3.48, surface: 'Mixed', status: 'upcoming', day: 'Thursday', description: 'Famous spectator stage in Jyväskylä.' },
            { id: 2, name: 'Laukaa 1', distance: 15.83, surface: 'Gravel', status: 'upcoming', day: 'Friday', description: 'High-speed opener.' },
            { id: 3, name: 'Ouninpohja 1', distance: 32.42, surface: 'Gravel', status: 'upcoming', day: 'Saturday', description: 'The legendary Ouninpohja stage.' },
            { id: 4, name: 'Ruuhimäki [Power Stage]', distance: 11.12, surface: 'Gravel', status: 'upcoming', day: 'Sunday', isPowerStage: true, description: 'Power Stage at jump-filled Ruuhimäki.' }
        ],
        pastWinners: [
            { year: 2025, driver: 'Kalle Rovanperä', team: 'Toyota' },
            { year: 2024, driver: 'Sébastien Ogier', team: 'Toyota' },
            { year: 2023, driver: 'Kalle Rovanperä', team: 'Toyota' }
        ],
        videos: [],
        photos: [],
        tvSchedule: [],
        results: null
    },
    {
        id: 10,
        name: 'Acropolis Rally Greece',
        country: 'Greece',
        flag: '🇬🇷',
        dates: 'September 3-6, 2026',
        startDate: '2026-09-03',
        endDate: '2026-09-06',
        round: 10,
        surface: 'Gravel',
        totalDistance: '298.66 km',
        stages: 17,
        serviceLocation: 'Lamia, Greece',
        status: 'upcoming',
        overview: 'The Acropolis Rally is known as the "Rally of Gods" for its brutal rocky terrain that destroys cars. The Greek mountains provide a stunning backdrop but the stages are punishing, with rocks, dust, and extreme heat testing every component.',
        history: 'The Acropolis Rally has been a championship round since 1973 and has always been known for its extreme difficulty. Many great drivers have failed to conquer the Greek mountains.',
        weather: { avgTemp: 32, conditions: 'Hot, Very Dry' },
        stagesList: [
            { id: 1, name: 'Athens Super Special', distance: 1.95, surface: 'Mixed', status: 'upcoming', day: 'Thursday', description: 'Opening stage near Athens.' },
            { id: 2, name: 'Pavliani 1', distance: 25.87, surface: 'Gravel', status: 'upcoming', day: 'Friday', description: 'Rocky mountain stage.' },
            { id: 3, name: 'Tarzan [Power Stage]', distance: 12.93, surface: 'Gravel', status: 'upcoming', day: 'Sunday', isPowerStage: true, description: 'The famous Tarzan Power Stage.' }
        ],
        pastWinners: [
            { year: 2025, driver: 'Thierry Neuville', team: 'Hyundai' },
            { year: 2024, driver: 'Ott Tänak', team: 'Hyundai' }
        ],
        videos: [],
        photos: [],
        tvSchedule: [],
        results: null
    },
    {
        id: 11,
        name: 'Rally Chile',
        country: 'Chile',
        flag: '🇨🇱',
        dates: 'September 17-20, 2026',
        startDate: '2026-09-17',
        endDate: '2026-09-20',
        round: 11,
        surface: 'Gravel',
        totalDistance: '306.45 km',
        stages: 18,
        serviceLocation: 'Concepción, Chile',
        status: 'upcoming',
        overview: 'Rally Chile brings the WRC to South America, based in the Biobío region around Concepción. The stages feature diverse conditions from fast forest roads to technical mountain passes.',
        history: 'Chile joined the WRC calendar in 2019, bringing the championship back to South America after the departure of Argentina. Chilean fans have embraced the event enthusiastically.',
        weather: { avgTemp: 14, conditions: 'Spring, Possible Rain' },
        stagesList: [
            { id: 1, name: 'Concepción Super Special', distance: 2.14, surface: 'Mixed', status: 'upcoming', day: 'Thursday', description: 'Opening spectator stage.' },
            { id: 2, name: 'María Las Cruces 1', distance: 18.34, surface: 'Gravel', status: 'upcoming', day: 'Friday', description: 'Forest stage opener.' },
            { id: 3, name: 'Biobío [Power Stage]', distance: 16.82, surface: 'Gravel', status: 'upcoming', day: 'Sunday', isPowerStage: true, description: 'Rally-closing Power Stage.' }
        ],
        pastWinners: [
            { year: 2025, driver: 'Sébastien Ogier', team: 'Toyota' }
        ],
        videos: [],
        photos: [],
        tvSchedule: [],
        results: null
    },
    {
        id: 12,
        name: 'Central European Rally',
        country: 'Czech Republic/Germany/Austria',
        flag: '🇪🇺',
        dates: 'October 15-18, 2026',
        startDate: '2026-10-15',
        endDate: '2026-10-18',
        round: 12,
        surface: 'Tarmac',
        totalDistance: '312.78 km',
        stages: 19,
        serviceLocation: 'Passau, Germany',
        status: 'upcoming',
        overview: 'The Central European Rally is a unique tri-nation event crossing Czech Republic, Germany, and Austria. The tarmac stages in the mountains offer a variety of challenges from flowing roads to tight technical sections.',
        history: 'Introduced in 2023, this rally replaced Rally Germany and combines stages from three countries for a unique cross-border experience.',
        weather: { avgTemp: 10, conditions: 'Autumn, Wet/Dry' },
        stagesList: [
            { id: 1, name: 'Prague Super Special', distance: 2.20, surface: 'Tarmac', status: 'upcoming', day: 'Thursday', description: 'Opening in the Czech capital.' },
            { id: 2, name: 'Klatovy 1', distance: 20.17, surface: 'Tarmac', status: 'upcoming', day: 'Friday', description: 'Czech forest roads.' },
            { id: 3, name: 'Passau Arena', distance: 1.61, surface: 'Tarmac', status: 'upcoming', day: 'Saturday', description: 'Super special in Passau.' },
            { id: 4, name: 'Schärdinger Land [Power Stage]', distance: 17.79, surface: 'Tarmac', status: 'upcoming', day: 'Sunday', isPowerStage: true, description: 'Austrian Power Stage finale.' }
        ],
        pastWinners: [
            { year: 2025, driver: 'Elfyn Evans', team: 'Toyota' },
            { year: 2024, driver: 'Sébastien Ogier', team: 'Toyota' }
        ],
        videos: [],
        photos: [],
        tvSchedule: [],
        results: null
    },
    {
        id: 13,
        name: 'Rally Japan',
        country: 'Japan',
        flag: '🇯🇵',
        dates: 'November 19-22, 2026',
        startDate: '2026-11-19',
        endDate: '2026-11-22',
        round: 13,
        surface: 'Tarmac',
        totalDistance: '305.32 km',
        stages: 19,
        serviceLocation: 'Toyota City, Japan',
        status: 'upcoming',
        overview: 'Rally Japan is the season finale, held in the mountains around Aichi Prefecture and Toyota City. The narrow, technical tarmac stages wind through forests and past traditional Japanese villages, creating a unique atmosphere.',
        history: 'Rally Japan returned to the WRC in 2022 after a 12-year absence. The event is Toyota\'s home rally and generates massive support for the Japanese manufacturer.',
        weather: { avgTemp: 12, conditions: 'Late Autumn, Possible Rain' },
        stagesList: [
            { id: 1, name: 'Toyota Stadium', distance: 2.15, surface: 'Mixed', status: 'upcoming', day: 'Thursday', description: 'Opening at Toyota\'s home.' },
            { id: 2, name: 'Nukata 1', distance: 21.95, surface: 'Tarmac', status: 'upcoming', day: 'Friday', description: 'Technical mountain stage.' },
            { id: 3, name: 'Mikawa Dam 1', distance: 17.12, surface: 'Tarmac', status: 'upcoming', day: 'Saturday', description: 'Stage around the scenic dam.' },
            { id: 4, name: 'Asuke Castle 1', distance: 12.40, surface: 'Tarmac', status: 'upcoming', day: 'Saturday', description: 'Near historic Asuke Castle.' },
            { id: 5, name: 'Ena [Power Stage]', distance: 18.02, surface: 'Tarmac', status: 'upcoming', day: 'Sunday', isPowerStage: true, description: 'Championship-deciding Power Stage.' }
        ],
        pastWinners: [
            { year: 2025, driver: 'Takamoto Katsuta', team: 'Toyota' },
            { year: 2024, driver: 'Thierry Neuville', team: 'Hyundai' },
            { year: 2023, driver: 'Elfyn Evans', team: 'Toyota' }
        ],
        videos: [],
        photos: [],
        tvSchedule: [],
        results: null
    }
);

// ============================================
// APPLICATION INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    initializeNavigation();
    initializeTimezone();
    updateRaceWeekBanner();
    renderSeasonCalendar();
    renderPointsProgression();
    loadCurrentRally();
}

// ============================================
// NAVIGATION
// ============================================

function initializeNavigation() {
    // Main navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            switchView(btn.dataset.view);
        });
    });

    // Rally sub-navigation
    document.querySelectorAll('.subnav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.subnav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            switchRallySubView(btn.dataset.rallyView);
        });
    });

    // Modal close buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => closeAllModals());
    });

    // Close modals on background click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeAllModals();
        });
    });

    // Team filter buttons
    document.querySelectorAll('.team-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.team-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderDriversGrid(btn.dataset.team);
        });
    });
}

function switchView(view) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(`${view}-view`).classList.add('active');
    currentView = view;

    if (view === 'rally') loadCurrentRally();
    if (view === 'drivers') renderDriversGrid('all');
    if (view === 'standings') renderStandings();
    if (view === 'tv') renderTVSchedule();
}

function switchRallySubView(subView) {
    document.querySelectorAll('.rally-section').forEach(s => s.classList.remove('active'));
    document.getElementById(`rally-${subView}`).classList.add('active');
    currentRallySubView = subView;
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
}

// ============================================
// RACE WEEK BANNER
// ============================================

function updateRaceWeekBanner() {
    const liveRally = rallies.find(r => r.status === 'live') || rallies[0];
    document.getElementById('currentRallyName').textContent = liveRally.name;
    document.getElementById('currentRallyDates').textContent = liveRally.dates;
    document.getElementById('currentRallyRound').textContent = `Round ${liveRally.round} of 13`;

    const banner = document.getElementById('raceWeekBanner');
    if (liveRally.status === 'live') {
        banner.classList.add('live');
    }
}

// ============================================
// SEASON CALENDAR
// ============================================

function renderSeasonCalendar() {
    const container = document.getElementById('seasonCalendar');
    container.innerHTML = rallies.map(rally => {
        const statusClass = rally.status === 'live' ? 'live' :
                           rally.status === 'completed' ? 'completed' : 'upcoming';
        const statusText = rally.status === 'live' ? 'LIVE NOW' :
                          rally.status === 'completed' ? 'Completed' : 'Upcoming';

        return `
            <div class="calendar-card ${statusClass}" onclick="selectRally(${rally.id})">
                <div class="calendar-card-header">
                    <span class="round-badge">R${rally.round}</span>
                    <span class="rally-flag-large">${rally.flag}</span>
                </div>
                <h3>${rally.name}</h3>
                <p class="calendar-country">${rally.country}</p>
                <p class="calendar-dates">${rally.dates}</p>
                <div class="calendar-meta">
                    <span class="surface-tag ${getSurfaceClass(rally.surface)}">${rally.surface}</span>
                    <span class="status-tag ${statusClass}">${statusText}</span>
                </div>
                ${rally.status === 'live' ? `<div class="live-stage-indicator">Stage ${rally.currentStage} in progress</div>` : ''}
            </div>
        `;
    }).join('');
}

function getSurfaceClass(surface) {
    if (surface.includes('Snow') || surface.includes('Ice')) return 'snow';
    if (surface.includes('Gravel')) return 'gravel';
    return 'tarmac';
}

function selectRally(rallyId) {
    currentRallyId = rallyId;
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('[data-view="rally"]').classList.add('active');
    switchView('rally');
}

// ============================================
// RALLY DETAIL VIEW
// ============================================

function loadCurrentRally() {
    const rally = rallies.find(r => r.id === currentRallyId);
    if (!rally) return;

    renderRallyHeader(rally);
    renderRallyOverview(rally);
    renderRallyStandings(rally);
    renderRallyMap(rally);
    renderStagesGrid(rally);
    renderRallyResults(rally);
    renderMediaGallery(rally);
    renderRallyHistory(rally);
}

function renderRallyHeader(rally) {
    document.getElementById('rallyFlag').textContent = rally.flag;
    document.getElementById('rallyTitle').textContent = rally.name;
    document.getElementById('rallyDates').textContent = rally.dates;
    document.getElementById('rallyRound').textContent = `Round ${rally.round}/13`;
    document.getElementById('rallySurface').textContent = rally.surface;
    document.getElementById('rallyDistance').textContent = rally.totalDistance;

    const section = document.getElementById('rallyHeaderSection');
    section.className = `rally-header-section ${getSurfaceClass(rally.surface)}`;
}

function renderRallyOverview(rally) {
    const container = document.getElementById('rallyOverviewContent');
    container.innerHTML = `
        <div class="rally-overview-text">
            <p>${rally.overview}</p>
        </div>
        <div class="rally-stats-grid">
            <div class="stat-item">
                <span class="stat-label">Total Distance</span>
                <span class="stat-value">${rally.totalDistance}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Stages</span>
                <span class="stat-value">${rally.stages}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Service Park</span>
                <span class="stat-value">${rally.serviceLocation}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Avg Temperature</span>
                <span class="stat-value">${rally.weather.avgTemp}°C</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Conditions</span>
                <span class="stat-value">${rally.weather.conditions}</span>
            </div>
        </div>
    `;
}

function renderRallyStandings(rally) {
    const container = document.getElementById('rallyCurrentStandings');
    if (!rally.results) {
        container.innerHTML = `<p class="no-data">Results will be available once the rally begins.</p>`;
        return;
    }

    container.innerHTML = `
        <div class="standings-list">
            ${rally.results.overall.slice(0, 6).map((result, idx) => {
                const driver = drivers.find(d => d.id === result.driverId);
                return `
                    <div class="standing-row ${idx === 0 ? 'leader' : ''}">
                        <span class="position">${result.position}</span>
                        <span class="driver-flag">${driver.nationalityFlag}</span>
                        <span class="driver-name">${driver.name}</span>
                        <span class="team-badge ${driver.team.toLowerCase()}">${driver.team}</span>
                        <span class="time">${result.time}</span>
                        <span class="gap ${result.gap ? 'behind' : ''}">${result.gap || 'Leader'}</span>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function renderRallyMap(rally) {
    const container = document.getElementById('rallyMapOverview');
    const completedStages = rally.stagesList.filter(s => s.status === 'complete').length;
    const liveStage = rally.stagesList.find(s => s.status === 'live');

    container.innerHTML = `
        <div class="map-visualization">
            <div class="map-header">
                <h4>${rally.name} Stage Map</h4>
                <p>Service: ${rally.serviceLocation}</p>
            </div>
            <div class="stages-route-map">
                ${rally.stagesList.map((stage, idx) => `
                    <div class="route-stage ${stage.status} ${stage.isPowerStage ? 'power-stage' : ''}"
                         onclick="showStageDetail(${rally.id}, ${stage.id})"
                         title="${stage.name}">
                        <div class="stage-marker">
                            <span class="stage-number">SS${stage.id}</span>
                            ${stage.status === 'live' ? '<span class="live-dot"></span>' : ''}
                        </div>
                        <div class="stage-info-mini">
                            <span class="stage-name-mini">${stage.name.substring(0, 20)}${stage.name.length > 20 ? '...' : ''}</span>
                            <span class="stage-distance-mini">${stage.distance} km</span>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="map-legend">
                <span class="legend-item complete">Completed (${completedStages})</span>
                <span class="legend-item live">${liveStage ? 'Live: SS' + liveStage.id : ''}</span>
                <span class="legend-item upcoming">Upcoming (${rally.stagesList.length - completedStages - (liveStage ? 1 : 0)})</span>
            </div>
        </div>
    `;
}

// ============================================
// STAGES
// ============================================

function renderStagesGrid(rally) {
    const container = document.getElementById('stagesGrid');
    container.innerHTML = rally.stagesList.map(stage => `
        <div class="stage-card ${stage.status} ${stage.isPowerStage ? 'power-stage' : ''}"
             onclick="showStageDetail(${rally.id}, ${stage.id})">
            <div class="stage-card-header">
                <span class="stage-ss">SS${stage.id}</span>
                <span class="stage-status-badge ${stage.status}">${getStageStatusText(stage)}</span>
            </div>
            <h4 class="stage-name">${stage.name}</h4>
            <div class="stage-meta">
                <span>${stage.distance} km</span>
                <span class="stage-surface">${stage.surface}</span>
            </div>
            <p class="stage-day">${stage.day}</p>
            ${stage.isPowerStage ? '<div class="power-stage-badge">POWER STAGE</div>' : ''}
        </div>
    `).join('');
}

function getStageStatusText(stage) {
    if (stage.status === 'complete') return '✓ Complete';
    if (stage.status === 'live') return '● LIVE';
    return 'Upcoming';
}

function showStageDetail(rallyId, stageId) {
    const rally = rallies.find(r => r.id === rallyId);
    const stage = rally.stagesList.find(s => s.id === stageId);
    selectedStageId = stageId;

    const container = document.getElementById('stageDetail');
    container.style.display = 'block';
    container.scrollIntoView({ behavior: 'smooth' });

    // Render stage header
    document.getElementById('stageDetailHeader').innerHTML = `
        <div class="stage-detail-title">
            <span class="ss-badge">SS${stage.id}</span>
            <h2>${stage.name}</h2>
            ${stage.isPowerStage ? '<span class="power-badge">POWER STAGE</span>' : ''}
        </div>
        <div class="stage-detail-meta">
            <span class="detail-chip"><strong>Distance:</strong> ${stage.distance} km</span>
            <span class="detail-chip"><strong>Surface:</strong> ${stage.surface}</span>
            <span class="detail-chip"><strong>Day:</strong> ${stage.day}</span>
            <span class="detail-chip status-${stage.status}"><strong>Status:</strong> ${getStageStatusText(stage)}</span>
        </div>
    `;

    // Render stage map
    renderStageMap(stage);

    // Render stage profile
    renderStageProfile(stage);

    // Render stage info
    renderStageInfo(stage, rally);

    // Render stage results
    renderStageResults(rally, stage);
}

function renderStageMap(stage) {
    const container = document.getElementById('stageMapContainer');
    const elevation = stage.elevation || { start: 500, max: 1000, end: 600 };

    container.innerHTML = `
        <div class="interactive-stage-map">
            <svg viewBox="0 0 400 200" class="stage-route-svg">
                <!-- Background -->
                <rect fill="#1a1a24" width="400" height="200"/>

                <!-- Grid lines -->
                <g stroke="#2a2a3a" stroke-width="0.5">
                    <line x1="0" y1="50" x2="400" y2="50"/>
                    <line x1="0" y1="100" x2="400" y2="100"/>
                    <line x1="0" y1="150" x2="400" y2="150"/>
                </g>

                <!-- Route path -->
                <path d="M 20,${180 - elevation.start/10}
                         C 100,${180 - elevation.start/10}
                           150,${180 - elevation.max/10}
                           200,${180 - elevation.max/10}
                         C 250,${180 - elevation.max/10}
                           300,${180 - elevation.end/10}
                           380,${180 - elevation.end/10}"
                      fill="none"
                      stroke="#ff1744"
                      stroke-width="3"
                      stroke-linecap="round"/>

                <!-- Start marker -->
                <circle cx="20" cy="${180 - elevation.start/10}" r="6" fill="#00e676"/>
                <text x="20" y="${195 - elevation.start/10}" fill="#00e676" font-size="10" text-anchor="middle">START</text>

                <!-- Finish marker -->
                <circle cx="380" cy="${180 - elevation.end/10}" r="6" fill="#ff1744"/>
                <text x="380" y="${195 - elevation.end/10}" fill="#ff1744" font-size="10" text-anchor="middle">FINISH</text>

                <!-- Peak marker -->
                <circle cx="200" cy="${180 - elevation.max/10}" r="4" fill="#00b0ff"/>
                <text x="200" y="${165 - elevation.max/10}" fill="#00b0ff" font-size="9" text-anchor="middle">${elevation.max}m</text>
            </svg>
            <div class="map-controls">
                <span class="elevation-label">Start: ${elevation.start}m</span>
                <span class="elevation-label">Peak: ${elevation.max}m</span>
                <span class="elevation-label">End: ${elevation.end}m</span>
            </div>
        </div>
    `;
}

function renderStageProfile(stage) {
    const container = document.getElementById('stageProfileContainer');
    const elevation = stage.elevation || { start: 500, max: 1000, end: 600 };
    const elevGain = elevation.max - Math.min(elevation.start, elevation.end);

    container.innerHTML = `
        <div class="elevation-profile">
            <div class="profile-chart">
                <div class="elevation-bar" style="--height: ${(elevation.start / elevation.max) * 100}%">
                    <span class="elev-value">${elevation.start}m</span>
                    <span class="elev-label">Start</span>
                </div>
                <div class="elevation-bar peak" style="--height: 100%">
                    <span class="elev-value">${elevation.max}m</span>
                    <span class="elev-label">Peak</span>
                </div>
                <div class="elevation-bar" style="--height: ${(elevation.end / elevation.max) * 100}%">
                    <span class="elev-value">${elevation.end}m</span>
                    <span class="elev-label">Finish</span>
                </div>
            </div>
            <div class="profile-stats">
                <div class="profile-stat">
                    <span class="stat-label">Elevation Gain</span>
                    <span class="stat-value">${elevGain}m</span>
                </div>
                <div class="profile-stat">
                    <span class="stat-label">Avg Gradient</span>
                    <span class="stat-value">${(elevGain / (stage.distance * 10)).toFixed(1)}%</span>
                </div>
            </div>
        </div>
    `;
}

function renderStageInfo(stage, rally) {
    const container = document.getElementById('stageInfoContainer');
    container.innerHTML = `
        <div class="stage-description">
            <h4>Stage Description</h4>
            <p>${stage.description || 'Stage information coming soon.'}</p>
        </div>
        <div class="stage-characteristics">
            <div class="char-item">
                <span class="char-icon">🛣️</span>
                <span class="char-label">Surface</span>
                <span class="char-value">${stage.surface}</span>
            </div>
            <div class="char-item">
                <span class="char-icon">📏</span>
                <span class="char-label">Distance</span>
                <span class="char-value">${stage.distance} km</span>
            </div>
            <div class="char-item">
                <span class="char-icon">📅</span>
                <span class="char-label">Schedule</span>
                <span class="char-value">${stage.day}</span>
            </div>
            <div class="char-item">
                <span class="char-icon">🌡️</span>
                <span class="char-label">Conditions</span>
                <span class="char-value">${rally.weather.conditions}</span>
            </div>
        </div>
    `;
}

function renderStageResults(rally, stage) {
    const container = document.getElementById('stageResultsContainer');

    if (stage.status === 'upcoming') {
        container.innerHTML = `<p class="no-data">Results will be available after the stage is completed.</p>`;
        return;
    }

    // Generate sample stage results based on overall standings
    const stageResults = rally.results?.overall.map((result, idx) => {
        const baseTime = 10 + (stage.distance * 0.5);
        const time = (baseTime + (idx * 2.5) + Math.random() * 3).toFixed(1);
        return {
            position: idx + 1,
            driverId: result.driverId,
            time: formatStageTime(time * 60),
            gap: idx === 0 ? '' : `+${(idx * 2.5 + Math.random() * 3).toFixed(1)}`
        };
    }) || [];

    container.innerHTML = `
        <div class="stage-results-table">
            <div class="results-header">
                <span>Pos</span>
                <span>Driver</span>
                <span>Team</span>
                <span>Time</span>
                <span>Gap</span>
            </div>
            ${stageResults.map((result, idx) => {
                const driver = drivers.find(d => d.id === result.driverId);
                return `
                    <div class="results-row ${idx === 0 ? 'fastest' : ''}">
                        <span class="pos">${result.position}</span>
                        <span class="driver">${driver.nationalityFlag} ${driver.name}</span>
                        <span class="team ${driver.team.toLowerCase()}">${driver.team}</span>
                        <span class="time">${result.time}</span>
                        <span class="gap">${result.gap || 'Fastest'}</span>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function formatStageTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = (seconds % 60).toFixed(1);
    return `${mins}:${secs.padStart(4, '0')}`;
}

// ============================================
// RALLY RESULTS
// ============================================

function renderRallyResults(rally) {
    const overallContainer = document.getElementById('overallResults');
    const stageWinnersContainer = document.getElementById('stageWinners');
    const powerStageContainer = document.getElementById('powerStageResults');

    if (!rally.results) {
        overallContainer.innerHTML = `<p class="no-data">Results will be available once the rally begins.</p>`;
        stageWinnersContainer.innerHTML = `<p class="no-data">Stage winners will be shown as stages complete.</p>`;
        powerStageContainer.innerHTML = `<p class="no-data">Power Stage results will be available on Sunday.</p>`;
        return;
    }

    // Overall results
    overallContainer.innerHTML = `
        <div class="overall-results-table">
            <div class="results-header">
                <span>Pos</span>
                <span>Driver</span>
                <span>Co-Driver</span>
                <span>Team</span>
                <span>Time</span>
                <span>Gap</span>
            </div>
            ${rally.results.overall.map((result, idx) => {
                const driver = drivers.find(d => d.id === result.driverId);
                return `
                    <div class="results-row ${idx < 3 ? 'podium-' + (idx + 1) : ''}">
                        <span class="pos">${result.position}</span>
                        <span class="driver">${driver.nationalityFlag} ${driver.name}</span>
                        <span class="codriver">${driver.coDriver}</span>
                        <span class="team ${driver.team.toLowerCase()}">${driver.team}</span>
                        <span class="time">${result.time}</span>
                        <span class="gap ${result.gap ? 'behind' : 'leader'}">${result.gap || 'LEADER'}</span>
                    </div>
                `;
            }).join('')}
        </div>
    `;

    // Stage winners
    stageWinnersContainer.innerHTML = `
        <div class="stage-winners-list">
            ${rally.results.stageWinners.map(sw => {
                const driver = drivers.find(d => d.id === sw.driverId);
                const stage = rally.stagesList.find(s => s.id === sw.stageId);
                return `
                    <div class="stage-winner-item">
                        <span class="ss">SS${sw.stageId}</span>
                        <span class="stage-name">${stage?.name || 'Stage ' + sw.stageId}</span>
                        <span class="winner">${driver.nationalityFlag} ${driver.name}</span>
                        <span class="time">${sw.time}</span>
                    </div>
                `;
            }).join('')}
        </div>
    `;

    // Power stage
    const powerStage = rally.stagesList.find(s => s.isPowerStage);
    powerStageContainer.innerHTML = `
        <div class="power-stage-info">
            <h4>${powerStage?.name || 'Power Stage'}</h4>
            <p class="power-stage-desc">Top 5 finishers earn bonus championship points (5-4-3-2-1)</p>
            <div class="power-stage-points">
                <div class="point-row">1st Place: 5 points</div>
                <div class="point-row">2nd Place: 4 points</div>
                <div class="point-row">3rd Place: 3 points</div>
                <div class="point-row">4th Place: 2 points</div>
                <div class="point-row">5th Place: 1 point</div>
            </div>
        </div>
    `;
}

// ============================================
// MEDIA GALLERY
// ============================================

function renderMediaGallery(rally) {
    const videoContainer = document.getElementById('videoGallery');
    const photoContainer = document.getElementById('photoGallery');

    // Videos
    if (rally.videos && rally.videos.length > 0) {
        videoContainer.innerHTML = rally.videos.map(video => `
            <div class="video-card" onclick="openVideoModal('${video.youtubeId}', '${video.title}')">
                <div class="video-thumbnail">
                    <div class="play-icon">▶</div>
                    <span class="video-duration">${video.duration}</span>
                </div>
                <div class="video-info">
                    <h4>${video.title}</h4>
                    <p>${video.description}</p>
                </div>
            </div>
        `).join('');
    } else {
        videoContainer.innerHTML = `<p class="no-data">Video highlights will be added as the season progresses.</p>`;
    }

    // Photos
    if (rally.photos && rally.photos.length > 0) {
        photoContainer.innerHTML = rally.photos.map((photo, idx) => `
            <div class="photo-card" onclick="openPhotoModal(${rally.id}, ${idx})">
                <div class="photo-placeholder">📷</div>
                <div class="photo-info">
                    <h4>${photo.title}</h4>
                    <p>${photo.description}</p>
                </div>
            </div>
        `).join('');
    } else {
        photoContainer.innerHTML = `<p class="no-data">Photos will be added during and after the rally.</p>`;
    }
}

function openVideoModal(youtubeId, title) {
    const modal = document.getElementById('videoModal');
    const container = document.getElementById('videoPlayerContainer');

    container.innerHTML = `
        <h3>${title}</h3>
        <div class="video-player-placeholder">
            <p>Video: ${youtubeId}</p>
            <p class="video-note">In a production environment, this would embed the actual YouTube video.</p>
            <div class="mock-player">
                <div class="mock-play-btn">▶</div>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

function openPhotoModal(rallyId, photoIndex) {
    const rally = rallies.find(r => r.id === rallyId);
    const photo = rally.photos[photoIndex];
    const modal = document.getElementById('photoModal');
    const container = document.getElementById('photoViewerContainer');

    container.innerHTML = `
        <div class="photo-viewer-placeholder">
            <div class="photo-icon">📷</div>
            <h3>${photo.title}</h3>
            <p>${photo.description}</p>
        </div>
    `;

    document.getElementById('photoCounter').textContent = `${photoIndex + 1} / ${rally.photos.length}`;
    modal.classList.add('active');
}

// ============================================
// RALLY HISTORY
// ============================================

function renderRallyHistory(rally) {
    const historyContainer = document.getElementById('rallyHistoryContent');
    const winnersContainer = document.getElementById('pastWinners');
    const recordsContainer = document.getElementById('stageRecords');

    historyContainer.innerHTML = `
        <div class="history-text">
            <p>${rally.history || rally.overview}</p>
        </div>
    `;

    winnersContainer.innerHTML = `
        <div class="past-winners-list">
            ${(rally.pastWinners || []).map(winner => `
                <div class="winner-row">
                    <span class="year">${winner.year}</span>
                    <span class="driver-name">${winner.driver}</span>
                    <span class="team">${winner.team}</span>
                </div>
            `).join('')}
        </div>
    `;

    recordsContainer.innerHTML = `
        <div class="records-note">
            <p>Stage records are tracked throughout each event. Check back during the rally for updated records.</p>
        </div>
    `;
}

// ============================================
// DRIVERS VIEW
// ============================================

function renderDriversGrid(teamFilter) {
    const container = document.getElementById('driversGrid');
    const filteredDrivers = teamFilter === 'all'
        ? drivers
        : drivers.filter(d => d.team === teamFilter);

    container.innerHTML = filteredDrivers.map(driver => `
        <div class="driver-card ${driver.team.toLowerCase().replace(' ', '-')}" onclick="openDriverModal(${driver.id})">
            <div class="driver-card-header ${driver.team.toLowerCase()}">
                <span class="driver-number">#${driver.number}</span>
                <span class="driver-flag-large">${driver.nationalityFlag}</span>
            </div>
            <div class="driver-photo-placeholder">👤</div>
            <h3 class="driver-card-name">${driver.name}</h3>
            <p class="driver-card-team">${driver.teamFull}</p>
            <div class="driver-quick-stats">
                <div class="quick-stat">
                    <span class="stat-num">${driver.championships}</span>
                    <span class="stat-label">Titles</span>
                </div>
                <div class="quick-stat">
                    <span class="stat-num">${driver.rallyWins}</span>
                    <span class="stat-label">Wins</span>
                </div>
                <div class="quick-stat">
                    <span class="stat-num">${driver.points2026}</span>
                    <span class="stat-label">2026 Pts</span>
                </div>
            </div>
        </div>
    `).join('');
}

function openDriverModal(driverId) {
    const driver = drivers.find(d => d.id === driverId);
    const modal = document.getElementById('driverModal');
    const container = document.getElementById('driverDetailContent');

    container.innerHTML = `
        <div class="driver-detail-header ${driver.team.toLowerCase()}">
            <div class="driver-detail-number">#${driver.number}</div>
            <div class="driver-detail-info">
                <h2>${driver.name}</h2>
                <p class="driver-detail-team">${driver.teamFull}</p>
            </div>
            <div class="driver-detail-flag">${driver.nationalityFlag}</div>
        </div>

        <div class="driver-detail-body">
            <div class="driver-photo-large">👤</div>

            <div class="driver-personal-info">
                <h3>Personal Information</h3>
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">Nationality</span>
                        <span class="info-value">${driver.nationality}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Date of Birth</span>
                        <span class="info-value">${driver.birthDate}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Birthplace</span>
                        <span class="info-value">${driver.birthPlace}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Co-Driver</span>
                        <span class="info-value">${driver.coDriver} ${driver.coDriverNationality}</span>
                    </div>
                </div>
            </div>

            <div class="driver-career-stats">
                <h3>Career Statistics</h3>
                <div class="stats-grid">
                    <div class="stat-box">
                        <span class="stat-number">${driver.championships}</span>
                        <span class="stat-title">World Championships</span>
                    </div>
                    <div class="stat-box">
                        <span class="stat-number">${driver.rallyWins}</span>
                        <span class="stat-title">Rally Victories</span>
                    </div>
                    <div class="stat-box">
                        <span class="stat-number">${driver.podiums}</span>
                        <span class="stat-title">Podium Finishes</span>
                    </div>
                    <div class="stat-box">
                        <span class="stat-number">${driver.stageWins}</span>
                        <span class="stat-title">Stage Wins</span>
                    </div>
                </div>
            </div>

            <div class="driver-bio">
                <h3>Biography</h3>
                <p>${driver.bio}</p>
            </div>

            <div class="driver-highlights">
                <h3>Career Highlights</h3>
                <ul>
                    ${driver.careerHighlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

// ============================================
// STANDINGS VIEW
// ============================================

function renderStandings() {
    renderDriverChampionship();
    renderManufacturerChampionship();
    renderPointsBreakdown();
}

function renderDriverChampionship() {
    const container = document.getElementById('driverChampionship');
    const sortedDrivers = [...drivers].sort((a, b) => b.points2026 - a.points2026);

    container.innerHTML = `
        <div class="championship-table">
            ${sortedDrivers.map((driver, idx) => `
                <div class="championship-row ${idx < 3 ? 'top-' + (idx + 1) : ''}">
                    <span class="position">${idx + 1}</span>
                    <span class="driver">
                        ${driver.nationalityFlag}
                        <strong>#${driver.number}</strong>
                        ${driver.name}
                    </span>
                    <span class="team ${driver.team.toLowerCase()}">${driver.team}</span>
                    <span class="points">${driver.points2026} pts</span>
                </div>
            `).join('')}
        </div>
    `;
}

function renderManufacturerChampionship() {
    const container = document.getElementById('manufacturerChampionship');
    const manufacturers = [
        { name: 'Toyota GAZOO Racing WRT', points: 43, color: 'toyota' },
        { name: 'Hyundai Shell Mobis WRT', points: 37, color: 'hyundai' },
        { name: 'M-Sport Ford WRT', points: 15, color: 'ford' }
    ];

    container.innerHTML = `
        <div class="manufacturer-standings">
            ${manufacturers.map((mfr, idx) => `
                <div class="manufacturer-row ${mfr.color}">
                    <span class="position">${idx + 1}</span>
                    <span class="manufacturer-name">${mfr.name}</span>
                    <span class="points">${mfr.points} pts</span>
                </div>
            `).join('')}
        </div>
    `;
}

function renderPointsBreakdown() {
    const container = document.getElementById('pointsBreakdown');
    container.innerHTML = `
        <div class="points-note">
            <p>Points breakdown by rally will be displayed as the season progresses.</p>
            <div class="points-system">
                <h4>Points System</h4>
                <p><strong>Rally Finish:</strong> 25-18-15-12-10-8-6-4-2-1 (positions 1-10)</p>
                <p><strong>Power Stage:</strong> 5-4-3-2-1 (positions 1-5)</p>
            </div>
        </div>
    `;
}

function renderPointsProgression() {
    const container = document.getElementById('pointsProgression');
    container.innerHTML = `
        <div class="progression-note">
            <p>Championship points progression chart will be displayed as the season develops.</p>
        </div>
    `;
}

// ============================================
// TV SCHEDULE
// ============================================

function initializeTimezone() {
    const select = document.getElementById('timezoneSelect');
    const timezones = [
        'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
        'America/Toronto', 'Europe/London', 'Europe/Paris', 'Europe/Berlin',
        'Europe/Helsinki', 'Asia/Tokyo', 'Australia/Sydney', 'Pacific/Auckland'
    ];

    select.innerHTML = timezones.map(tz => `
        <option value="${tz}" ${tz === userTimezone ? 'selected' : ''}>${tz.replace('_', ' ')}</option>
    `).join('');

    select.addEventListener('change', (e) => {
        userTimezone = e.target.value;
        renderTVSchedule();
    });

    document.getElementById('detectedTz').textContent = `(Detected: ${userTimezone})`;
}

function renderTVSchedule() {
    const container = document.getElementById('tvScheduleContent');
    const liveRally = rallies.find(r => r.status === 'live') || rallies.find(r => r.status === 'upcoming') || rallies[0];

    if (!liveRally.tvSchedule || liveRally.tvSchedule.length === 0) {
        container.innerHTML = `<p class="no-data">TV schedule will be available closer to the event.</p>`;
        renderBroadcastInfo();
        return;
    }

    container.innerHTML = `
        <h3>${liveRally.name} - TV Schedule</h3>
        <p class="schedule-note">All times shown in ${userTimezone.replace('_', ' ')}</p>
        <div class="tv-schedule-grid">
            ${liveRally.tvSchedule.map(day => `
                <div class="schedule-day">
                    <h4>${day.day} - ${day.date}</h4>
                    <div class="day-events">
                        ${day.events.map(event => {
                            const localTime = convertToTimezone(day.date, event.time, userTimezone);
                            return `
                                <div class="schedule-event">
                                    <span class="event-time">${localTime}</span>
                                    <span class="event-type">${event.type}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    renderBroadcastInfo();
}

function convertToTimezone(date, time, timezone) {
    try {
        const dateTime = new Date(`${date}T${time}:00`);
        return dateTime.toLocaleTimeString('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    } catch (e) {
        return time;
    }
}

function renderBroadcastInfo() {
    const container = document.getElementById('broadcastInfo');
    container.innerHTML = `
        <div class="broadcast-list">
            <div class="broadcast-item">
                <h4>WRC+ All Live</h4>
                <p>Official streaming platform with all stages live</p>
                <span class="broadcast-link">rally.tv/wrc</span>
            </div>
            <div class="broadcast-item">
                <h4>Red Bull TV</h4>
                <p>Free highlights and selected live coverage</p>
                <span class="broadcast-link">redbull.com</span>
            </div>
            <div class="broadcast-item">
                <h4>Eurosport / Discovery+</h4>
                <p>Coverage in Europe</p>
            </div>
            <div class="broadcast-item">
                <h4>Motorsport.tv</h4>
                <p>Additional streaming options</p>
            </div>
        </div>
    `;
}
