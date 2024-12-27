function updatePercent(rangeInput, percentDisplayId) {
    const percentDisplay = document.getElementById(percentDisplayId);
    percentDisplay.textContent = rangeInput.value + '%';
}
