document.addEventListener("DOMContentLoaded", function () {
    var popup = document.getElementById("popup");
    var confirmBtn = document.getElementById("confirm-btn");

    // 當頁面加載完畢時，顯示彈跳視窗
    popup.style.display = "flex";

    // 當點擊確認按鈕時，隱藏彈跳視窗
    confirmBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });
});
