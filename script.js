// ===========================================
// 相片資料庫
// ===========================================
const photoData = [
    {
        id: 1,
        src: 'https://jennyphoto.blob.core.windows.net/jennyphoto/0137.jpg',
        category: 'Jenny'
    },
    {
        id: 2,
        src: 'https://jennyphoto.blob.core.windows.net/jennyphoto/0161.jpg',
        category: 'Jenny'
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=face',
        title: '甜美 Emma',
        description: '溫柔可愛的姊妹淘，我們一起度過了許多美好時光。',
        category: 'friends'
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face',
        title: '帥氣 David',
        description: '幽默風趣的大學同學，聚會時總是氣氛製造者。',
        category: 'friends'
    },
    {
        id: 5,
        src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=300&fit=crop&crop=face',
        title: '親愛的媽媽',
        description: '世界上最溫暖的擁抱，永遠是我最堅強的後盾。',
        category: 'family'
    },
    {
        id: 6,
        src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop&crop=face',
        title: '酷爸爸',
        description: '總是很酷很帥的老爸，是我心中的超級英雄！',
        category: 'family'
    },
    {
        id: 7,
        src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=300&fit=crop&crop=face',
        title: '可愛妹妹',
        description: '調皮搗蛋但超級可愛的小妹，是全家的開心果。',
        category: 'family'
    },
    {
        id: 8,
        src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop&crop=face',
        title: '生日派對主角',
        description: '25歲生日派對的壽星，那天真的超級開心！',
        category: 'events'
    },
    {
        id: 9,
        src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop&crop=face',
        title: '畢業典禮',
        description: '大學畢業那天的紀念照，充滿了對未來的期待。',
        category: 'events'
    },
    {
        id: 10,
        src: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=300&fit=crop&crop=face',
        title: '旅行夥伴',
        description: '一起去日本旅行的好姐妹，那趟旅程超級難忘！',
        category: 'events'
    },
    {
        id: 11,
        src: 'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?w=400&h=300&fit=crop&crop=face',
        title: '運動健將 Mike',
        description: '健身房認識的好朋友，總是激勵我要保持運動習慣。',
        category: 'friends'
    },
    {
        id: 12,
        src: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400&h=300&fit=crop&crop=face',
        title: '設計師 Luna',
        description: '超有才華的設計師朋友，她的作品總是讓人驚艷。',
        category: 'friends'
    },
    {
        id: 13,
        src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop&crop=face',
        title: '溫柔奶奶',
        description: '最疼愛我的奶奶，她的拿手菜是全世界最好吃的！',
        category: 'family'
    },
    {
        id: 14,
        src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop&crop=face',
        title: '音樂節狂歡',
        description: '夏日音樂節的瘋狂夜晚，和朋友們一起搖擺到天亮！',
        category: 'events'
    },
    {
        id: 15,
        src: 'https://images.unsplash.com/photo-1484863137639-abc040827918?w=400&h=300&fit=crop&crop=face',
        title: '咖啡廳偶遇',
        description: '在最愛的咖啡廳巧遇的新朋友，聊天聊到忘記時間。',
        category: 'friends'
    }
];

// ===========================================
// DOM 元素
// ===========================================
const photoGrid = document.getElementById('photoGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDescription = document.getElementById('lightboxDescription');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const loading = document.getElementById('loading');

// ===========================================
// 全域變數
// ===========================================
let currentFilter = 'all';
let currentPhotoIndex = 0;
let filteredPhotos = [...photoData];

// ===========================================
// 初始化
// ===========================================
document.addEventListener('DOMContentLoaded', function() {
    // 模擬載入延遲
    setTimeout(() => {
        loading.classList.add('hidden');
        setTimeout(() => {
            loading.style.display = 'none';
        }, 500);
    }, 1500);
    
    renderPhotos();
    initEventListeners();
});

// ===========================================
// 渲染相片
// ===========================================
function renderPhotos() {
    photoGrid.innerHTML = '';
    
    filteredPhotos.forEach((photo, index) => {
        const photoItem = createPhotoElement(photo, index);
        photoGrid.appendChild(photoItem);
    });
    
    // 添加進場動畫
    setTimeout(() => {
        const photoItems = document.querySelectorAll('.photo-item');
        photoItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('fade-in');
            }, index * 100);
        });
    }, 100);
}

// ===========================================
// 創建相片元素
// ===========================================
function createPhotoElement(photo, index) {
    const photoItem = document.createElement('div');
    photoItem.className = 'photo-item';
    photoItem.dataset.category = photo.category;
    photoItem.dataset.index = index;
    
    photoItem.innerHTML = `
        <img src="${photo.src}" alt="${photo.title}" loading="lazy">
        <div class="photo-category ${photo.category}">
            ${getCategoryIcon(photo.category)} ${getCategoryName(photo.category)}
        </div>
        <div class="photo-info">
            <h3>${photo.title}</h3>
            <p>${photo.description}</p>
        </div>
    `;
    
    // 點擊事件
    photoItem.addEventListener('click', () => {
        openLightbox(index);
    });
    
    return photoItem;
}

// ===========================================
// 類別相關函數
// ===========================================
function getCategoryIcon(category) {
    const icons = {
        friends: '<i class="fas fa-users"></i>',
        family: '<i class="fas fa-home"></i>',
        events: '<i class="fas fa-calendar-star"></i>'
    };
    return icons[category] || '';
}

function getCategoryName(category) {
    const names = {
        friends: '朋友',
        family: '家人',
        events: '活動'
    };
    return names[category] || '';
}

// ===========================================
// 篩選功能
// ===========================================
function filterPhotos(category) {
    currentFilter = category;
    
    if (category === 'all') {
        filteredPhotos = [...photoData];
    } else {
        filteredPhotos = photoData.filter(photo => photo.category === category);
    }
    
    // 更新按鈕狀態
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = document.querySelector(`[data-filter="${category}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    // 添加過濾動畫
    const photoItems = document.querySelectorAll('.photo-item');
    photoItems.forEach(item => {
        item.classList.add('filtered-out');
    });
    
    setTimeout(() => {
        renderPhotos();
    }, 300);
}

// ===========================================
// 燈箱功能
// ===========================================
function openLightbox(index) {
    currentPhotoIndex = index;
    const photo = filteredPhotos[index];
    
    lightboxImg.src = photo.src;
    lightboxImg.alt = photo.title;
    lightboxTitle.textContent = photo.title;
    lightboxDescription.textContent = photo.description;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // 鍵盤事件
    document.addEventListener('keydown', handleKeyboard);
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
    document.removeEventListener('keydown', handleKeyboard);
}

function showNextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % filteredPhotos.length;
    updateLightboxPhoto();
}

function showPrevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    updateLightboxPhoto();
}

function updateLightboxPhoto() {
    const photo = filteredPhotos[currentPhotoIndex];
    
    // 添加過渡效果
    lightboxImg.style.opacity = '0';
    
    setTimeout(() => {
        lightboxImg.src = photo.src;
        lightboxImg.alt = photo.title;
        lightboxTitle.textContent = photo.title;
        lightboxDescription.textContent = photo.description;
        lightboxImg.style.opacity = '1';
    }, 150);
}

// ===========================================
// 鍵盤控制
// ===========================================
function handleKeyboard(e) {
    switch(e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowLeft':
            showPrevPhoto();
            break;
        case 'ArrowRight':
            showNextPhoto();
            break;
    }
}

// ===========================================
// 事件監聽器
// ===========================================
function initEventListeners() {
    // 篩選按鈕
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            filterPhotos(filter);
        });
    });
    
    // 燈箱控制
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrevPhoto);
    nextBtn.addEventListener('click', showNextPhoto);
    
    // 點擊背景關閉燈箱
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // 滾動動畫
    window.addEventListener('scroll', handleScrollAnimations);
    
    // 圖片載入錯誤處理
    document.addEventListener('error', (e) => {
        if (e.target.tagName === 'IMG') {
            e.target.src = 'https://via.placeholder.com/400x300/ff6b6b/ffffff?text=圖片載入失敗';
        }
    }, true);
}

// ===========================================
// 滾動動畫
// ===========================================
function handleScrollAnimations() {
    const photoItems = document.querySelectorAll('.photo-item');
    
    photoItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && !item.classList.contains('fade-in')) {
            item.classList.add('fade-in');
        }
    });
}

// ===========================================
// 圖片預載入
// ===========================================
function preloadImages() {
    photoData.forEach(photo => {
        const img = new Image();
        img.src = photo.src;
    });
}

// ===========================================
// 響應式圖片載入
// ===========================================
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ===========================================
// 搜尋功能 (可選)
// ===========================================
function searchPhotos(query) {
    const searchResults = photoData.filter(photo => 
        photo.title.toLowerCase().includes(query.toLowerCase()) ||
        photo.description.toLowerCase().includes(query.toLowerCase())
    );
    
    filteredPhotos = searchResults;
    renderPhotos();
}

// ===========================================
// 隨機排序功能
// ===========================================
function shufflePhotos() {
    for (let i = filteredPhotos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredPhotos[i], filteredPhotos[j]] = [filteredPhotos[j], filteredPhotos[i]];
    }
    renderPhotos();
}

// ===========================================
// 效能優化
// ===========================================
// 防抖函數
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 節流函數
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// 優化滾動事件
const optimizedScrollHandler = throttle(handleScrollAnimations, 100);
window.addEventListener('scroll', optimizedScrollHandler);

// ===========================================
// 錯誤處理
// ===========================================
window.addEventListener('error', (e) => {
    console.error('發生錯誤:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('未處理的 Promise 拒絕:', e.reason);
});

// ===========================================
// 啟動預載入
// ===========================================
document.addEventListener('DOMContentLoaded', preloadImages);
