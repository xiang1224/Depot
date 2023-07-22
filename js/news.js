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
            title: '標題1',
            content: '內容1...',
            image: 'img/ad2.png',
        },
        {
            id: 2,
            title: '標題2',
            content: '內容2...',
            image: 'news2.jpg',
        },
        // 添加更多新聞數據
    ];

    return newsData.find((news) => news.id === newsId);
}
