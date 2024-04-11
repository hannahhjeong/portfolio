document.addEventListener('DOMContentLoaded', function () {
    // Dropdown
    var aboutLink = document.getElementById('nav-2');
    var dropdownContent1 = document.querySelector('.dropdown-content-1');
    var dropdownContent2 = document.querySelector('.dropdown-content-2');

    aboutLink.addEventListener('click', function (event) {
        event.preventDefault();
        if (dropdownContent1.classList.contains('active') || dropdownContent2.classList.contains('active')) {
            dropdownContent1.classList.remove('active');
            dropdownContent2.classList.remove('active');
            aboutLink.innerHTML = 'Graphic designer at RISD. (more)';
        } else {
            dropdownContent1.classList.add('active');
            dropdownContent2.classList.add('active');
            aboutLink.innerHTML = '(less)';
        }
    });

    // Number title change
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

    // Changing bio text DOESN'T WORK
    const texts = [
        "Graphic designer at RISD. (more)",
        "Exploring the world of design.",
        "Passionate about visual storytelling.",
        "Creating meaningful brand experiences."
    ];
    const navLink = document.getElementById("nav-2");
    navLink.addEventListener("mouseenter", function() {
        const randomIndex = Math.floor(Math.random() * texts.length);
        navLink.textContent = texts[randomIndex];
    });
});
