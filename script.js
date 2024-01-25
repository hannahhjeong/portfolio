
document.addEventListener('DOMContentLoaded', function () {
    var aboutLink = document.getElementById('nav-2');
    var dropdownContent1 = document.querySelector('.dropdown-content-1');
    var dropdownContent2 = document.querySelector('.dropdown-content-2');

    aboutLink.addEventListener('click', function (event) {
        event.preventDefault();
        if (dropdownContent1.classList.contains('active') || dropdownContent2.classList.contains('active')) {
            dropdownContent1.classList.remove('active');
            dropdownContent2.classList.remove('active');
            aboutLink.innerHTML = 'about +';
        } else {
            dropdownContent1.classList.add('active');
            dropdownContent2.classList.add('active');
            aboutLink.innerHTML = 'about -';
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var projectTitle = document.getElementById("project-title");
    var projectNumber = document.getElementById("project-number");
    var originalProjectNumberText = projectNumber.textContent;

    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY || window.pageYOffset;
        if (scrollPosition > 200) {
            projectNumber.textContent = projectTitle.textContent;
        } else {
            projectNumber.textContent = originalProjectNumberText;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var sandboxLink = document.getElementById('nav-3');

    sandboxLink.addEventListener('click', function (event) {
        sandboxLink.textContent = (sandboxLink.textContent === "sandbox +") ? "sandbox -" : "sandbox +";
    });
});
