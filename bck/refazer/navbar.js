document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".links-container a");
    const sidebarToggle = document.querySelector("#sidebar-active");

    function toggleMenu() {
        if (sidebarToggle.checked) {
            links.forEach((link, index) => {
                link.style.transitionDelay = `${index * 0.2}s`;
                link.style.opacity = "1";
                link.style.transform = "translateX(0)";
            });
        } else {
            links.forEach(link => {
                link.style.transitionDelay = "0s";
                link.style.opacity = "0";
                link.style.transform = "translateX(50px)";
            });
        }
    }

    sidebarToggle.addEventListener("change", toggleMenu);

    window.addEventListener("resize", () => {
        if (window.innerWidth > 860) {
            links.forEach(link => {
                link.style.opacity = "1";
                link.style.transform = "translateX(0)";
                link.style.transitionDelay = "0s";
            });
        } else if (!sidebarToggle.checked) {
            links.forEach(link => {
                link.style.opacity = "0";
                link.style.transform = "translateX(50px)";
            });
        }
    });
});