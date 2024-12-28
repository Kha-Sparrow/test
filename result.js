// Hàm cập nhật giá trị phần trăm khi thay đổi thanh trượt
function updatePercent(slider, displayId) {
    const value = slider.value;
    const displayElement = document.getElementById(displayId);
    displayElement.textContent = `${value}%`;
}

// Hàm lưu thông tin vào localStorage
function saveInfo(memberNumber) {
    const mssv = document.getElementById(`mssv${memberNumber}`).value;
    const name = document.getElementById(`name${memberNumber}`).value;
    const job = document.getElementById(`job${memberNumber}`).value;
    const contribution = document.getElementById(`contribution${memberNumber}`).value;

    // Lưu thông tin vào localStorage
    localStorage.setItem(`mssv${memberNumber}`, mssv);
    localStorage.setItem(`name${memberNumber}`, name);
    localStorage.setItem(`job${memberNumber}`, job);
    localStorage.setItem(`contribution${memberNumber}`, contribution);
}

// Hàm tải thông tin từ localStorage khi trang được tải lại
function loadInfo(memberNumber) {
    const mssv = localStorage.getItem(`mssv${memberNumber}`);
    const name = localStorage.getItem(`name${memberNumber}`);
    const job = localStorage.getItem(`job${memberNumber}`);
    const contribution = localStorage.getItem(`contribution${memberNumber}`);

    if (mssv) {
        document.getElementById(`mssv${memberNumber}`).value = mssv;
    }
    if (name) {
        document.getElementById(`name${memberNumber}`).value = name;
    }
    if (job) {
        document.getElementById(`job${memberNumber}`).value = job;
    }
    if (contribution) {
        document.getElementById(`contribution${memberNumber}`).value = contribution;
        updatePercent(document.getElementById(`contribution${memberNumber}`), `percent${memberNumber}`);
    }
}

// Tải lại thông tin khi trang được tải
window.onload = function() {
    for (let i = 1; i <= 5; i++) {
        loadInfo(i);
    }
}

// Gán sự kiện "Lưu thông tin" cho mỗi nút
document.querySelectorAll('.card button').forEach((button, index) => {
    button.addEventListener('click', function() {
        saveInfo(index + 1);
    });
});
