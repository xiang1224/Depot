function calculateTotal() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let total = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const price = parseInt(checkbox.dataset.price);
            total += price;
        }
    });

    const engineSelect = document.getElementById('engineSelect');
    const brakeSelect = document.getElementById('brakeSelect');
    const suspensionSelect = document.getElementById('suspensionSelect');
    const turboSelect = document.getElementById('turboSelect');
    const bodySelect = document.getElementById('bodySelect');
    const transmissionSelect = document.getElementById('transmissionSelect');

    // 獲取引擎、剎車、懸吊、渦輪、板金和變速箱的價格
    const enginePrice = parseInt(engineSelect.value);
    const brakePrice = parseInt(brakeSelect.value);
    const suspensionPrice = parseInt(suspensionSelect.value);
    const turboPrice = parseInt(turboSelect.value);
    const bodyPrice = parseInt(bodySelect.value);
    const transmissionPrice = parseInt(transmissionSelect.value);

    // 將選擇的價格加入總金額
    total += enginePrice + brakePrice + suspensionPrice + turboPrice + bodyPrice + transmissionPrice;

    document.getElementById('total').innerText = total;
}
