function updatePercent(slider, displayId) {
    const value = slider.value; // Lấy giá trị thanh trượt
    console.log(`Value: ${value}, Display ID: ${displayId}`); // Debug thông tin
    const displayElement = document.getElementById(displayId);
    if (!displayElement) {
        console.error(`Element with ID ${displayId} not found!`);
        return;
    }
    displayElement.textContent = `${value}%`;
}
