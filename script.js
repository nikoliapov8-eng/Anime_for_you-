// ===== بيانات الأنمي =====
const animeDatabase = [
    {
        id: 1,
        title: "ناروتو شيبودن",
        description: "تابع مغامرات ناروتو أوزوماكي في رحلته ليصبح الهوكاجي السابع لقرية الورق. أنمي مليء بالأكشن والعواطف والصداقة.",
        fullDescription: "ناروتو شيبودن هو الجزء الثاني من سلسلة ناروتو، يتناول رحلة ناروتو من مراهق متهور إلى نينجا ناضج. بعد عامين ونصف من التدريب مع جيرايا، يعود ناروتو إلى قريته ليجدها تغيرت كثيرًا. يواجه أعداء أقوياء مثل منظمة أكاتسكي ويكتشف المزيد عن مصير الكيوبي داخل جسده. القصة مليئة بالمعارك المذهلة والتطور الشخصي للشخصيات.",
        category: ["action", "adventure", "fantasy"],
        rating: 4.8,
        episodes: 500,
        year: 2007,
        status: "مكتمل",
        duration: "24 دقيقة",
        studio: "Studio Pierrot",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        trending: true,
        featured: true,
        favorite: false
    },
    {
        id: 2,
        title: "هجوم العمالقة",
        description: "في عالم حيث البشرية على حافة الانقراض بسبب كائنات عملاقة تسمى العمالقة. إرين وميكاسا وأرمن ينضمون للجيش للقتال.",
        fullDescription: "قبل قرون، ظهرت كائنات عملاقة تدعى العمالقة وقضت على معظم البشرية. الناجون عاشوا داخل ثلاث أسوار ضخمة. إرين ييجر، فتى يحلم باستكشاف العالم الخارجي، تنقلب حياته رأسًا على عقب عندما يظهر عملاق هائل ويحطم السور الخارجي. بعد فقدان أمه، يقسم إرين على القضاء على جميع العمالقة. ينضم هو وأصدقاؤه إلى فصيلة الاستطلاع لمواجهة هذا التهديد.",
        category: ["action", "drama", "fantasy", "sci-fi"],
        rating: 4.9,
        episodes: 75,
        year: 2013,
        status: "مكتمل",
        duration: "24 دقيقة",
        studio: "Wit Studio / MAPPA",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        trending: true,
        featured: true,
        favorite: false
    },
    {
        id: 3,
        title: "ون بيس",
        description: "مونكي دي لوفي وأصدقاؤه في رحلة للعثور على الكنز الأسطوري ون بيس ليصبح ملك القراصنة.",
        fullDescription: "قبل 22 عامًا، أعلن ملك القراصنة غول دي روجر قبل إعدامه أن كنزه الأسطوري، ون بيس، مخبأ في مكان ما في البحر الكبير. هذا الإعلان أطلق العصر الذهبي للقراصنة. مونكي دي لوفي، فتى مرن مطاطي، يبدأ رحلته ليصبح ملك القراصنة الجديد. خلال رحلته، يجمع طاقمًا متنوعًا وواجه أعداء أقوياء.",
        category: ["action", "adventure", "comedy", "fantasy"],
        rating: 4.7,
        episodes: 1000,
        year: 1999,
        status: "مستمر",
        duration: "24 دقيقة",
        studio: "Toei Animation",
        image: "https://images.unsplash.com/photo-1541562232579-512a21360020?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        trending: true,
        featured: true,
        favorite: false
    },
    {
        id: 4,
        title: "المحقق كونان",
        description: "المحقق الشاب المتحول إلى طفل يحل القضايا الغامضة بذكاء حاد بينما يبحث عن عصابة الرجال بالأسود.",
        fullDescription: "شينتشي كودو، محقق في المرحلة الثانوية مشهور بحله للقضايا المعقدة، يشهد عملية غامضة لرجال يرتدون ملابس سوداء. يجبرونه على تناول دواء تجريبي يتحول بسببه إلى طفل في الصف الأول الابتدائي. تحت اسم كونان إيدوجاوا، يعيش مع صديقته ران موري ووالدها المحقق كوغورو موري، ويحل القضايا سرًا بينما يبحث عن طريقة للعودة إلى طبيعته.",
        category: ["drama", "mystery"],
        rating: 4.5,
        episodes: 1000,
        year: 1996,
        status: "مستمر",
        duration: "25 دقيقة",
        studio: "TMS Entertainment",
        image: "https://images.unsplash.com/photo-1569701813229-33284b643e3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        trending: false,
        featured: false,
        favorite: false
    },
    {
        id: 5,
        title: "ديمون سلاير",
        description: "تانجيرو كامادو في رحلته للقضاء على الشياطين وإنقاذ أخته التي تحولت إلى شيطان.",
        fullDescription: "في اليابان خلال فترة تايشو، تانجيرو كامادو يعود إلى منزله ليجد عائلته قد قتلت على يد شياطين، باستثناء أخته نيزوكو التي تحولت إلى شيطان. يقرر تانجيرو أن يصبح قاتل شياطين للقضاء على الشياطين وإيجاد طريقة لإعادة أخته إلى طبيعتها البشرية. ينضم إلى فيلق قتالي للشياطين ويتدرب ليصبح واحدًا من أقوى أفراده.",
        category: ["action", "adventure", "fantasy"],
        rating: 4.8,
        episodes: 55,
        year: 2019,
        status: "مكتمل",
        duration: "24 دقيقة",
        studio: "ufotable",
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        trending: true,
        featured: true,
        favorite: false
    },
    {
        id: 6,
        title: "سباير فاميلي",
        description: "عائلة تجسس تحاول العيش حياة طبيعية بينما تحمي العالم من الأخطار.",
        fullDescription: "للدكتور ويستفاليا مهمة: تشكيل عائلة تجسس مزيفة مهمتها الحفاظ على السلام العالمي. لويد فورجر، الجاسوس الشهير، يتزوج آسا يور، القاتلة المأجورة، ويتبنى آنا، قارئة الأفكار. معًا، يشكلون عائلة فورجر التي يجب أن تعيش حياة عادية بينما تنجز مهام خطيرة. المشكلة: لا يعلم أحدهم مهنة الآخر الحقيقية!",
        category: ["action", "comedy"],
        rating: 4.6,
        episodes: 25,
        year: 2022,
        status: "مستمر",
        duration: "24 دقيقة",
        studio: "Wit Studio / CloverWorks",
        image: "https://images.unsplash.com/photo-1511984804822-e16ba72f5840?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        trending: true,
        featured: false,
        favorite: false
    },
    {
        id: 7,
        title: "بليتش",
        description: "إيتشيغو كوروساكي يكتشف قواه كـ"شينيغامي" ويحمي البشر من الأرواح الشريرة.",
        fullDescription: "إيتشيغو كوروساكي مراهق يمكنه رؤية الأشباح. تلتقي حياته بالتغيير عندما يلتقي روكيا كوتشيكي، شينيغامي (إله الموت) تبحث عن روح شريرة. أثناء المعركة، تنتقل قوى روكيا إلى إيتشيغو، مما يجعله شينيغامي مؤقتًا. يبدأ إيتشيغو رحلته لتعلم استخدام قواه الجديدة، وحماية أحبائه من الأخطار الخارقة للطبيعة.",
        category: ["action", "adventure", "fantasy"],
        rating: 4.4,
        episodes: 366,
        year: 2004,
        status: "مستمر",
        duration: "24 دقيقة",
        studio: "Studio Pierrot",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        trending: false,
        featured: false,
        favorite: false
    },
    {
        id: 8,
        title: "ميسوبيشي في ذا إنكلوزر",
        description: "مؤسسة تمنع كوارث خارقة للطبيعة من خلال طلاب موهوبين في مدرسة داخلية خاصة.",
        fullDescription: "في أكاديمية كامومي، طلاب موهوبون يدرسون في برنامج خاص للموهوبين. هؤلاء الطلاب لديهم قوى خارقة للطبيعة ويستخدمونها لمنع الكوارث التي تهدد العالم. القصة تتبع مجموعة من الطلاب الذين يجب أن يتعلموا العمل معًا واستخدام قواهم لحماية البشرية من التهديدات الخارقة للطبيعة.",
        category: ["action", "comedy", "supernatural"],
        rating: 4.3,
        episodes: 24,
        year: 2024,
        status: "مستمر",
        duration: "24 دقيقة",
        studio: "Lerche",
        image: "https://images.unsplash.com/photo-1638913662252-70efce1e60a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        trending: true,
        featured: false,
        favorite: false
    },
    {
        id: 9,
        title: "جوموو كوينين",
        description: "شاب يصبح مدرسًا في مدرسة ابتدائية مليئة بالطلاب الأقوياء ذوي القوى الخارقة.",
        fullDescription: "تاتسوما كاغورازاكا، مدرس مثالي، يحصل على وظيفة في مدرسة ابتدائية خاصة. لكنه يكتشف أن جميع طلابه لديهم قوى خارقة للطبيعة! يجب عليه الآن أن يتعلم كيفية التعامل مع هؤلاء الأطفال المميزين بينما يحافظ على سلامته. القصة مليئة بالمواقف الكوميدية والحركية.",
        category: ["comedy", "action"],
        rating: 4.2,
        episodes: 12,
        year: 2023,
        status: "مكتمل",
        duration: "24 دقيقة",
        studio: "Bones",
        image: "https://images.unsplash.com/photo-1638913662252-70efce1e60a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        trending: false,
        featured: false,
        favorite: false
    },
    {
        id: 10,
        title: "فايت/ستاي نايت",
        description: "معركة بين 7 سحرة وخدمهم الأبطال التاريخيين على كأس يمنح أمنية واحدة.",
        fullDescription: "حرب الكأس المقدسة هي معركة سرية بين سبعة سحرة يدعون أبطالًا تاريخيين كخدم. الفائز يحصل على الكأس المقدسة التي يمكنها تحقيق أي أمنية واحدة. إيمييا شيرو، ساحر مبتدئ، يجد نفسه منخرطًا في الحرب عندما يدعو بطلة غير متوقعة. يجب عليه أن يتعلم فن السحر بسرعة للبقاء على قيد الحياة.",
        category: ["action", "fantasy", "supernatural"],
        rating: 4.5,
        episodes: 25,
        year: 2006,
        status: "مكتمل",
        duration: "24 دقيقة",
        studio: "Studio Deen",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        trending: false,
        featured: false,
        favorite: false
    }
];

// ===== حالة التطبيق =====
let currentPage = 'home';
let currentFilter = 'all';
let currentSort = 'newest';
let currentPageNumber = 1;
const itemsPerPage = 6;
let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
let currentAnimeDetail = null;

// ===== تهيئة التطبيق =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // تحميل القائمة المفضلة
    loadWatchlist();
    
    // عرض الصفحة الرئيسية
    showPage('home');
    
    // إعداد مستمعي الأحداث
    setupEventListeners();
    
    // عرض الأنمي الشائع
    renderTrendingAnime();
    
    // عرض جميع الأنمي
    renderAllAnime();
    
    // إعداد التنبيهات
    setupNotifications();
    
    // إخفاء مشغل الفيديو
    hideVideoModal();
}

// ===== إدارة الصفحات =====
function showPage(pageName) {
    // إخفاء جميع الصفحات
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // إزالة النشاط من جميع روابط التنقل
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // إظهار الصفحة المطلوبة
    document.getElementById(`${pageName}-page`).classList.add('active');
    
    // تحديث رابط التنقل النشط
    document.querySelector(`.nav-link[data-page="${pageName}"]`).classList.add('active');
    
    // تحديث الصفحة الحالية
    currentPage = pageName;
    
    // إعادة تعيين التمرير
    window.scrollTo(0, 0);
}

// ===== عرض الأنمي الشائع =====
function renderTrendingAnime() {
    const container = document.getElementById('trending-container');
    const listContainer = document.getElementById('trending-list');
    
    if (!container && !listContainer) return;
    
    const trendingAnime = animeDatabase.filter(anime => anime.trending);
    
    const renderToContainer = (container, animeList) => {
        container.innerHTML = '';
        
        if (animeList.length === 0) {
            container.innerHTML = '<p class="empty-state">لا يوجد أنمي شائع حالياً</p>';
            return;
        }
        
        animeList.forEach(anime => {
            const animeCard = createAnimeCard(anime);
            container.appendChild(animeCard);
        });
    };
    
    if (container) renderToContainer(container, trendingAnime.slice(0, 4));
    if (listContainer) renderToContainer(listContainer, trendingAnime);
}

// ===== عرض جميع الأنمي =====
function renderAllAnime() {
    const container = document.getElementById('all-anime-container');
    if (!container) return;
    
    // تصفية الأنمي
    let filteredAnime = animeDatabase;
    
    if (currentFilter !== 'all') {
        filteredAnime = animeDatabase.filter(anime => 
            anime.category.includes(currentFilter)
        );
    }
    
    // ترتيب الأنمي
    filteredAnime.sort((a, b) => {
        switch (currentSort) {
            case 'newest':
                return b.year - a.year;
            case 'oldest':
                return a.year - b.year;
            case 'rating':
                return b.rating - a.rating;
            case 'popular':
                return (b.trending ? 1 : 0) - (a.trending ? 1 : 0);
            default:
                return 0;
        }
    });
    
    // التقسيم إلى صفحات
    const totalPages = Math.ceil(filteredAnime.length / itemsPerPage);
    const startIndex = (currentPageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedAnime = filteredAnime.slice(startIndex, endIndex);
    
    // عرض الأنمي
    container.innerHTML = '';
    
    if (paginatedAnime.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>لا توجد نتائج</h3>
                <p>لم يتم العثور على أنمي مطابق للبحث</p>
                <button class="btn-primary" onclick="resetFilters()">إعادة تعيين الفلاتر</button>
            </div>
        `;
    } else {
        paginatedAnime.forEach(anime => {
            const animeCard = createAnimeCard(anime);
            container.appendChild(animeCard);
        });
    }
    
    // تحديث الترقيم
    updatePagination(filteredAnime.length, totalPages);
}

// ===== إنشاء بطاقة الأنمي =====
function createAnimeCard(anime) {
    const card = document.createElement('div');
    card.className = 'anime-card';
    card.dataset.id = anime.id;
    
    const isFavorite = watchlist.includes(anime.id);
    const favoriteIcon = isFavorite ? 'fas' : 'far';
    const favoriteText = isFavorite ? 'مفضل' : 'أضف للمفضلة';
    
    card.innerHTML = `
        ${anime.trending ? '<span class="anime-badge">شائع</span>' : ''}
        <img src="${anime.image}" alt="${anime.title}" loading="lazy">
        <div class="anime-info">
            <h3 class="anime-title">${anime.title}</h3>
            <p class="anime-description">${anime.description}</p>
            <div class="anime-meta">
                <span class="anime-rating">
                    <i class="fas fa-star"></i> ${anime.rating}
                </span>
                <span class="anime-episodes">
                    <i class="fas fa-play-circle"></i> ${anime.episodes} حلقة
                </span>
            </div>
            <div class="anime-actions">
                <button class="action-btn watch-btn" data-id="${anime.id}">
                    <i class="fas fa-play"></i> مشاهدة
                </button>
                <button class="action-btn favorite-btn ${isFavorite ? 'active' : ''}" data-id="${anime.id}">
                    <i class="${favoriteIcon} fa-bookmark"></i> ${favoriteText}
                </button>
                <button class="action-btn detail-btn" data-id="${anime.id}">
                    <i class="fas fa-info-circle"></i> تفاصيل
                </button>
            </div>
        </div>
    `;
    
    // إضافة أحداث النقر
    const watchBtn = card.querySelector('.watch-btn');
    const favoriteBtn = card.querySelector('.favorite-btn');
    const detailBtn = card.querySelector('.detail-btn');
    
    watchBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openAnimePlayer(anime.id);
    });
    
    favoriteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(anime.id);
    });
    
    detailBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showAnimeDetail(anime.id);
    });
    
    // النقر على البطاقة لعرض التفاصيل
    card.addEventListener('click', () => {
        showAnimeDetail(anime.id);
    });
    
    return card;
}

// ===== إدارة المفضلة =====
function toggleFavorite(animeId) {
    const index = watchlist.indexOf(animeId);
    
    if (index === -1) {
        // إضافة إلى المفضلة
        watchlist.push(animeId);
        showNotification('تمت إضافة الأنمي إلى المفضلة');
    } else {
        // إزالة من المفضلة
        watchlist.splice(index, 1);
        showNotification('تمت إزالة الأنمي من المفضلة');
    }
    
    // حفظ في localStorage
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    
    // تحديث العرض
    loadWatchlist();
    renderAllAnime();
    renderTrendingAnime();
}

function loadWatchlist() {
    const container = document.getElementById('watchlist-container');
    const emptyState = document.getElementById('watchlist-empty');
    
    if (!container) return;
    
    const favoriteAnime = animeDatabase.filter(anime => watchlist.includes(anime.id));
    
    if (favoriteAnime.length === 0) {
        container.style.display = 'none';
        if (emptyState) emptyState.style.display = 'block';
    } else {
        if (emptyState) emptyState.style.display = 'none';
        container.style.display = 'grid';
        container.innerHTML = '';
        
        favoriteAnime.forEach(anime => {
            const animeCard = createAnimeCard(anime);
            container.appendChild(animeCard);
        });
    }
}

// ===== عرض تفاصيل الأنمي =====
function showAnimeDetail(animeId) {
    const anime = animeDatabase.find(a => a.id === animeId);
    if (!anime) return;
    
    currentAnimeDetail = anime;
    
    const container = document.getElementById('anime-detail-container');
    if (!container) return;
    
    const isFavorite = watchlist.includes(anime.id);
    const favoriteIcon = isFavorite ? 'fas' : 'far';
    const favoriteText = isFavorite ? 'مفضل' : 'أضف للمفضلة';
    
    container.innerHTML = `
        <div class="detail-header" style="--anime-bg: url('${anime.image}')">
            <div class="detail-overlay"></div>
            <div class="detail-content">
                <div class="detail-poster">
                    <img src="${anime.image}" alt="${anime.title}">
                </div>
                <div class="detail-info">
                    <h1>${anime.title}</h1>
                    <div class="detail-meta">
                        <span class="meta-item">
                            <i class="fas fa-star"></i> ${anime.rating}/5
                        </span>
                        <span class="meta-item">
                            <i class="fas fa-calendar"></i> ${anime.year}
                        </span>
                        <span class="meta-item">
                            <i class="fas fa-play-circle"></i> ${anime.episodes} حلقة
                        </span>
                        <span class="meta-item">
                            <i class="fas fa-clock"></i> ${anime.duration}
                        </span>
                        <span class="meta-item">
                            <i class="fas fa-film"></i> ${anime.studio}
                        </span>
                    </div>
                    <p class="detail-description">${anime.fullDescription}</p>
                    <div class="detail-actions">
                        <button class="btn-primary watch-now-btn" data-id="${anime.id}">
                            <i class="fas fa-play"></i> مشاهدة الآن
                        </button>
                        <button class="btn-secondary favorite-detail-btn" data-id="${anime.id}">
                            <i class="${favoriteIcon} fa-bookmark"></i> ${favoriteText}
                        </button>
                        <button class="btn-secondary back-btn">
                            <i class="fas fa-arrow-right"></i> رجوع
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="episodes-section">
            <h2><i class="fas fa-list-ol"></i> الحلقات</h2>
            <div class="episodes-grid" id="episodes-grid">
                <!-- سيتم تعبئته بالجافاسكريبت -->
            </div>
        </div>
    `;
    
    // إضافة أحداث النقر
    const watchBtn = container.querySelector('.watch-now-btn');
    const favoriteBtn = container.querySelector('.favorite-detail-btn');
    const backBtn = container.querySelector('.back-btn');
    
    watchBtn.addEventListener('click', () => openAnimePlayer(anime.id));
    favoriteBtn.addEventListener('click', () => {
        toggleFavorite(anime.id);
        showAnimeDetail(anime.id); // إعادة تحميل الصفحة
    });
    backBtn.addEventListener('click', () => showPage('all'));
    
    // عرض الحلقات
    renderEpisodes(anime.id);
    
    // الانتقال إلى صفحة التفاصيل
    showPage('detail');
}

function renderEpisodes(animeId) {
    const container = document.getElementById('episodes-grid');
    if (!container) return;
    
    const anime = animeDatabase.find(a => a.id === animeId);
    if (!anime) return;
    
    container.innerHTML = '';
    
    // إنشاء 10 حلقات افتراضية
    for (let i = 1; i <= Math.min(anime.episodes, 10); i++) {
        const episode = document.createElement('div');
        episode.className = 'episode-card';
        episode.innerHTML = `
            <div class="episode-number">الحلقة ${i}</div>
            <div class="episode-title">${anime.title} - الحلقة ${i}</div>
            <button class="btn-secondary watch-episode-btn" data-episode="${i}">
                <i class="fas fa-play"></i> مشاهدة
            </button>
        `;
        
        episode.querySelector('.watch-episode-btn').addEventListener('click', () => {
            openAnimePlayer(animeId, i);
        });
        
        container.appendChild(episode);
    }
}

// ===== مشغل الفيديو =====
function openAnimePlayer(animeId, episode = 1) {
    const anime = animeDatabase.find(a => a.id === animeId);
    if (!anime) return;
    
    // تحديث واجهة المشغل
    document.getElementById('video-title').textContent = `${anime.title} - الحلقة ${episode}`;
    document.getElementById('video-description').textContent = anime.description;
    
    // تحديد الحلقة الحالية
    const episodeSelect = document.getElementById('episode-select');
    episodeSelect.value = episode;
    
    // فتح المشغل
    document.getElementById('video-modal').classList.add('active');
    
    // إيقاف تمرير الصفحة
    document.body.style.overflow = 'hidden';
    
    // تحديث قائمة الحلقات
    updateEpisodesList(animeId);
}

function hideVideoModal() {
    document.getElementById('video-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // إيقاف الفيديو
    const video = document.getElementById('anime-video');
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
}

function updateEpisodesList(animeId) {
    const container = document.getElementById('episodes-list');
    if (!container) return;
    
    const anime = animeDatabase.find(a => a.id === animeId);
    if (!anime) return;
    
    container.innerHTML = '';
    
    for (let i = 1; i <= Math.min(anime.episodes, 20); i++) {
        const episode = document.createElement('div');
        episode.className = 'episode-item';
        episode.innerHTML = `
            <span>الحلقة ${i}</span>
            <button class="btn-secondary watch-episode-list-btn" data-episode="${i}">
                <i class="fas fa-play"></i> مشاهدة
            </button>
        `;
        
        episode.querySelector('.watch-episode-list-btn').addEventListener('click', () => {
            openAnimePlayer(animeId, i);
        });
        
        container.appendChild(episode);
    }
}

// ===== الترقيم =====
function updatePagination(totalItems, totalPages) {
    const pageNumbers = document.getElementById('page-numbers');
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');
    
    if (!pageNumbers || !prevBtn || !nextBtn) return;
    
    pageNumbers.textContent = `الصفحة ${currentPageNumber} من ${totalPages}`;
    
    prevBtn.disabled = currentPageNumber === 1;
    nextBtn.disabled = currentPageNumber === totalPages;
}

function goToPage(page) {
    if (page < 1) return;
    
    const totalItems = animeDatabase.filter(anime => 
        currentFilter === 'all' || anime.category.includes(currentFilter)
    ).length;
    
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    if (page > totalPages) return;
    
    currentPageNumber = page;
    renderAllAnime();
}

// ===== الفلاتر والبحث =====
function applyFilter(filter) {
    currentFilter = filter;
    currentPageNumber = 1;
    renderAllAnime();
    
    // تحديد الزر النشط
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.classList.remove('active');
    });
    document.querySelector(`.filter-tag[data-filter="${filter}"]`).classList.add('active');
}

function applySort(sortType) {
    currentSort = sortType;
    renderAllAnime();
}

function searchAnime(query) {
    if (!query.trim()) {
        renderAllAnime();
        return;
    }
    
    const container = document.getElementById('all-anime-container');
    if (!container) return;
    
    const results = animeDatabase.filter(anime => 
        anime.title.includes(query) || 
        anime.description.includes(query) ||
        anime.category.includes(query)
    );
    
    container.innerHTML = '';
    
    if (results.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>لا توجد نتائج</h3>
                <p>لم يتم العثور على أنمي مطابق للبحث: "${query}"</p>
            </div>
        `;
    } else {
        results.forEach(anime => {
            const animeCard = createAnimeCard(anime);
            container.appendChild(animeCard);
        });
    }
}

function resetFilters() {
    currentFilter = 'all';
    currentSort = 'newest';
    currentPageNumber = 1;
    
    document.getElementById('sort-select').value = 'newest';
    
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.classList.remove('active');
    });
    document.querySelector('.filter-tag[data-filter="all"]').classList.add('active');
    
    renderAllAnime();
}

// ===== التنبيهات =====
function setupNotifications() {
    const notification = document.getElementById('notification');
    if (!notification) return;
    
    // إخفاء التنبيه بعد 3 ثوانٍ
    setInterval(() => {
        notification.classList.remove('show');
    }, 3000);
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    const text = document.getElementById('notification-text');
    
    if (!notification || !text) return;
    
    text.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// ===== إعداد مستمعي الأحداث =====
function setupEventListeners() {
    // التنقل بين الصفحات
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            showPage(page);
        });
    });
    
    // القائمة المتنقلة
    document.querySelector('.menu-toggle').addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
    });
    
    // البحث
    document.getElementById('search-btn').addEventListener('click', () => {
        const query = document.getElementById('search-input').value;
        showPage('all');
        searchAnime(query);
    });
    
    document.getElementById('search-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = e.target.value;
            showPage('all');
            searchAnime(query);
        }
    });
    
    // الفلاتر
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            const filter = tag.dataset.filter;
            applyFilter(filter);
        });
    });
    
    // الترتيب
    document.getElementById('sort-select').addEventListener('change', (e) => {
        applySort(e.target.value);
    });
    
    // الترقيم
    document.getElementById('prev-page').addEventListener('click', () => {
        goToPage(currentPageNumber - 1);
    });
    
    document.getElementById('next-page').addEventListener('click', () => {
        goToPage(currentPageNumber + 1);
    });
    
    // أزرار الهيرو
    document.getElementById('start-watching')?.addEventListener('click', () => {
        const firstAnime = animeDatabase.find(anime => anime.featured);
        if (firstAnime) {
            openAnimePlayer(firstAnime.id);
        }
    });
    
    document.getElementById('explore-anime')?.addEventListener('click', () => {
        showPage('all');
    });
    
    // عرض الكل
    document.querySelectorAll('.view-all').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('trending');
        });
    });
    
    // الروابط السريعة في الفوتر
    document.querySelectorAll('footer a[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            showPage(page);
        });
    });
    
    // الفلاتر في الفوتر
    document.querySelectorAll('footer a[data-filter]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = link.dataset.filter;
            showPage('all');
            applyFilter(filter);
        });
    });
    
    // مشغل الفيديو
    document.getElementById('close-player')?.addEventListener('click', hideVideoModal);
    document.querySelector('.close-modal')?.addEventListener('click', hideVideoModal);
    
    // إغلاق المشغل عند النقر خارج المحتوى
    document.getElementById('video-modal')?.addEventListener('click', (e) => {
        if (e.target === document.getElementById('video-modal')) {
            hideVideoModal();
        }
    });
    
    // تغيير الحلقات
    document.getElementById('episode-select')?.addEventListener('change', (e) => {
        if (currentAnimeDetail) {
            openAnimePlayer(currentAnimeDetail.id, parseInt(e.target.value));
        }
    });
    
    // التحكم في الجودة
    document.querySelectorAll('.quality-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.quality-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            showNotification(`تم تغيير الجودة إلى ${this.dataset.quality}p`);
        });
    });
    
    // التبويبات
    document.querySelectorAll('.info-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            document.querySelectorAll('.info-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // الحلقات السابقة والتالية
    document.getElementById('prev-episode')?.addEventListener('click', () => {
        const select = document.getElementById('episode-select');
        const currentEpisode = parseInt(select.value);
        if (currentEpisode > 1) {
            select.value = currentEpisode - 1;
            select.dispatchEvent(new Event('change'));
        }
    });
    
    document.getElementById('next-episode')?.addEventListener('click', () => {
        const select = document.getElementById('episode-select');
        const currentEpisode = parseInt(select.value);
        if (currentEpisode < select.options.length) {
            select.value = currentEpisode + 1;
            select.dispatchEvent(new Event('change'));
        }
    });
}