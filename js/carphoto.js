// 取得所有縮圖元素
var thumbnails = document.querySelectorAll('.thumbnail-image');

// 綁定點擊事件
thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener('click', function () {
        // 取得點擊的圖片的 src
        var newSrc = this.src;

        // 取得主圖片元素
        var mainImage = document.getElementById('main-image');

        // 變更主圖片的 src
        mainImage.src = newSrc;
    });
});

