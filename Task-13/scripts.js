document.addEventListener("DOMContentLoaded", function() {
    showSection(0);
});

function showSection(index) {
    let sections = document.querySelectorAll('.section');
    sections.forEach((section, i) => {
        section.style.display = (i === index) ? 'block' : 'none';
    });
}

function saveAndNext(currentSection) {
    let sections = document.querySelectorAll('.section');
    if (currentSection < sections.length) {
        showSection(currentSection);
    }
}

function submitTest() {
    let form = document.getElementById('testForm');
    let formData = new FormData(form);
    let results = {};
    
    formData.forEach((value, key) => {
        results[key] = value;
    });

    alert("Test submitted! Check console for results.");
    console.log("Test Results:", results);
}