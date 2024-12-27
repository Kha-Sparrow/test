function updatePercent(slider, displayId) {
    const value = slider.value; // Lấy giá trị hiện tại của thanh trượt
    const displayElement = document.getElementById(displayId); // Tìm phần tử hiển thị
    displayElement.textContent = `${value}%`; // Cập nhật nội dung hiển thị
}
