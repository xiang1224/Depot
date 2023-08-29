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

var mainImage = document.getElementById("main-image");

mainImage.addEventListener("click", function () {
    var modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.zIndex = "3";
    modal.style.paddingTop = "10px";
    modal.style.left = "0";
    modal.style.top = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.overflow = "auto";
    modal.style.backgroundColor = "rgba(0,0,0,0.9)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";

    var img = document.createElement("img");
    img.src = mainImage.src;
    img.style.maxWidth = "90%";
    img.style.maxHeight = "90%";
    modal.appendChild(img);

    document.body.appendChild(modal);
    modal.addEventListener("click", function () {
        modal.remove();
    });

});




