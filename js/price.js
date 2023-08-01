function toggleSubItems(subItemsId) {
    const subItems = document.getElementById(subItemsId);
    if (subItems.style.display === 'block') {
        subItems.style.display = 'none';
    } else {
        subItems.style.display = 'block';
    }
}

/*function calculateTotal() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const radios = document.querySelectorAll('input[type="radio"]');
    let total = 0;
    let tirePrice = 0; // 輪胎價格

    checkboxes.forEach(checkbox => {
        if (checkbox.checked && checkbox.id !== 'item12') {
            const price = parseInt(checkbox.dataset.price);
            total += price;
        }
    });

    radios.forEach(radio => {
        if (radio.checked && radio.name === 'tireType') {
            tirePrice = parseInt(radio.dataset.price);
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

    // 將選擇的價格加入總金額，包括輪胎價格，除非取消輪胎選項
    total += enginePrice + brakePrice + suspensionPrice + turboPrice + bodyPrice + transmissionPrice + tirePrice;

    document.getElementById('total').innerText = total;
}

function toggleSubItems(subItemsId) {
    const subItems = document.getElementById(subItemsId);
    subItems.style.display = !subItems.style.display || subItems.style.display === 'none' ? 'block' : 'none';

    // 取消輪胎選項後，重設賽車型和休旅車型的 radio 選項
    if (subItemsId === 'subItems1' && subItems.style.display === 'none') {
        const radios = document.querySelectorAll('input[name="tireType"]');
        radios.forEach(radio => {
            radio.checked = false;
        });
        calculateTotal(); // 更新價格
    }
}*/