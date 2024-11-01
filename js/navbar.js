document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".links-container a");
    const sidebarToggle = document.querySelector("#sidebar-active");
    function toggleMenu() {
        const cvDownloadButton = document.getElementById("cv-download");

        if (sidebarToggle.checked) {
            links.forEach((link, index) => {
                link.style.transitionDelay = `${index * 0.2}s`;
                link.style.opacity = "1";
                link.style.transform = "translateX(0)";
            });
            cvDownloadButton.style.transitionDelay = `${links.length * 0.2}s`;
            cvDownloadButton.style.opacity = "1";
            cvDownloadButton.style.transform = "translateX(0)";

            setTimeout(() => {
                links.forEach(link => {
                    link.style.transitionDelay = "0s";
                });
                cvDownloadButton.style.transitionDelay = "0s";
            }, (links.length * 0.2 + 0.2) * 1000);
        } else {
            links.forEach(link => {
                link.style.transitionDelay = "0s";
                link.style.opacity = "0";
                link.style.transform = "translateX(50px)";
            });
            cvDownloadButton.style.transitionDelay = "0s";
            cvDownloadButton.style.opacity = "0";
            cvDownloadButton.style.transform = "translateX(50px)";
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