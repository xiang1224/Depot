// script.js
function showNewsDetail(newsId) {
    const modal = document.getElementById('newsDetailModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');

    // 假設有一個新聞數據源，根據newsId獲取相應的內容
    const newsData = getNewsData(newsId);

    modalImage.src = newsData.image;
    modalTitle.textContent = newsData.title;
    modalContent.textContent = newsData.content;

    modal.style.display = 'flex';
}


function closeNewsDetail() {
    const modal = document.getElementById('newsDetailModal');
    modal.style.display = 'none';
}

// 假設有一個新聞數據源，根據newsId獲取相應的內容
function getNewsData(newsId) {
    const newsData = [
        {
            id: 1,
            title: '7/22東方改裝場盛大開幕',
            content: '2023.07.21',
            image: 'img/ad1.png',
        },
        {
            id: 2,
            title: '東方改裝廠服務介紹',
            content: '2023.07.21',
            image: 'img/ad2.png',
        },
        {
            id: 3,
            title: '標題2',
            content: '內容2...',
            image: 'img/ad-simple.png',
        },
        {
            id: 4,
            title: '標題2',
            content: '內容2...',
            image: 'img/ad2.png',
        },
        {
            id: 5,
            title: '標題2',
            content: '內容2...',
            image: 'img/ad2.png',
        },
        {
            id: 6,
            title: '標題2',
            content: '內容2...',
            image: 'img/ad2.png',
        },
        {
            id: 7,
            title: '標題2',
            content: '內容2...',
            image: 'img/ad2.png',
        },
        {
            id: 8,
            title: '標題2',
            content: '內容2...',
            image: 'img/ad2.png',
        },
        {
            id: 9,
            title: '標題2',
            content: '內容2...',
            image: 'img/ad2.png',
        },
        {
            id: 10,
            title: '標題2',
            content: '內容2...',
            image: 'img/ad2.png',
        },
        // 添加更多新聞數據
    ];

    return newsData.find((news) => news.id === newsId);
}
