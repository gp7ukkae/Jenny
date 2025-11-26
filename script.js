// ===========================================
// 相片資料庫
// ===========================================
const photoData = [
    {
        id: 1,
        src: 'https://jennyphoto.blob.core.windows.net/jennyphoto/510624431_30678378471753521_8897541286298343636_n.jpg',
        title: '✨ 清純微笑的回憶 ✨',
        description: '甜美特寫，純真笑容。',
        category: 'young'
    },
    {
        id: 2,
        src: 'https://jennyphoto.blob.core.windows.net/jennyphoto/508825931_10065788290166897_3362398011683427178_n.jpg',
        title: '☕ 咖啡午後的驚喜相遇 ☕',
        description: '咖啡廳內，與朋友親密合影。',
        category: 'young'
    },
    {
        id: 3,
        src: 'https://jennyphoto.blob.core.windows.net/jennyphoto/503887846_9959232340822493_4074562640052631037_n.jpg',
        title: '🎶 時尚的街頭照片 🎶',
        description: '你在看我嗎? 可以再靠近一點！',
        category: 'young'
    },
    {
        id: 4,
        src: 'https://jennyphoto.blob.core.windows.net/jennyphoto/499931815_9907887185957009_8108679938280847879_n.jpg',
        title: '👠 街角時尚的閨蜜時光 👗',
        description: '四位朋友，街上團體時尚照。',
        category: 'young'
    },
    {
        id: 5,
        src: 'https://jennyphoto.blob.core.windows.net/jennyphoto/498194075_9833638613381867_3359413295963216359_n.jpg',
        title: '👭 陽光下的姐妹情深 💖',
        description: '兩人親密自拍，笑容明亮。',
        category: 'young'
    },
    {
        id: 6,
        src: 'https://jennyphoto.blob.core.windows.net/jennyphoto/496327316_9765982713480791_7435332601320283689_n.jpg',
        title: '💃 甜美少女的運動瞬間 💫',
        description: '穿禮服玩呼拉圈，俏皮活潑。',
        category: 'young'
    },
    {
        id: 7,
        src: 'https://jennyphoto.blob.core.windows.net/jennyphoto/496180996_9781787711900291_8314187817556283348_n.jpg',
        title: '📚 專注的學習者 ✍️',
        description: '課堂或自習，低頭專注筆記。',
        category: 'young'
    },
    {
        id: 8,
        src: 'https://jennyphoto.blob.core.windows.net/jennyphoto/495136229_9768543579891371_5686415163450705103_n.jpg',
        title: '🤓 畢業季的青澀回眸 🎓',
        description: '戴眼鏡獨照，青澀又認真。',
        category: 'young'
    },
    {
        id: 9,
        src: 'https://jennyphoto.blob.core.windows.net/jennyphoto/467302065_9609897939026660_422389000193906103_n.jpg',
        title: '🧘‍♀️ 平衡的藝術 🌳',
        description: '戶外瑜伽，穩定的樹式平衡動作。',
        category: 'yo'
    },
    {
        id: 10,
        src: 'https://jennyphoto.blob.core.windows.net/jennyphoto/467048291_9609955855687535_2282802637738373654_n.jpg',
        title: '💪 力量與伸展的協奏曲 🌿',
        description: '戶外瑜伽，弓箭步姿勢展現力量。',
        category: 'yo'
    },
    {
        id: 11,
        src: 'https://jennyphoto.blob.core.windows.net/jennyphoto/466988547_9609996045683516_1769953543732805317_n.jpg',
        title: '✨ 寧靜中的優雅扭轉 🍃',
        description: '草地坐姿瑜伽，專注於身體扭轉。',
        category: 'yo'
    },
    {
        id: 12,
        src: 'https://jennyphoto.blob.core.windows.net/jennyphoto/466973088_9610244512325336_7526970469651928702_n.jpg',
        title: '🏞️ 城市天際線上的舞者 🌄',
        description: '高處瑜伽，舞者式姿勢與城市背景。',
        category: 'yo'
    },
    {
        id: 13,
        src: 'https://jennyphoto.blob.core.windows.net/jennyphoto/466095794_9581565525193235_4187825850468920599_n.jpg',
        title: '🔬 專業與學術的展現 📜',
        description: '正式服裝，在學術海報前展示成果。',
        category: 'young'
    },
    {
        id: 14,
        src: 'https://jennyphoto.blob.core.windows.net/jennyphoto/0527.jpg',
        title: '💙 伴娘的甜蜜任務 💐',
        description: '穿著藍色伴娘禮服，開心執行任務的獨照。',
        category: 'by'
    },
    {
        id: 15,
        src: 'https://jennyphoto.blob.core.windows.net/jennyphoto/0176.jpg',
        title: '😂 姐妹們的爆笑側拍 👰‍♀️',
        description: '伴娘團與朋友在婚禮中，開懷大笑的真摯瞬間。',
        category: 'by'
    },
    {
        id: 16,
        src: 'https://jennyphoto.blob.core.windows.net/jennyphoto/0161.jpg',
        title: '🥂 舞台上的溫暖祝福 🎤',
        description: '換上正式套裝，主持儀式。',
        category: 'by'
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
        young: '<i class="fas fa-users"></i>',
        yo: '<i class="fas fa-home"></i>',
        by: '<i class="fas fa-calendar-star"></i>'
    };
    return icons[category] || '';
}

function getCategoryName(category) {
    const names = {
        young: '青澀時光',
        yo: '陽光瑜伽',
        by: '我是伴娘'
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
