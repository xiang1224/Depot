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

    // 獲取引擎、剎車和懸吊的價格
    const enginePrice = parseInt(engineSelect.value);
    const brakePrice = parseInt(brakeSelect.value);
    const suspensionPrice = parseInt(suspensionSelect.value);

    // 將選擇的價格加入總金額
    total += enginePrice + brakePrice + suspensionPrice;

    document.getElementById('total').innerText = total;
}