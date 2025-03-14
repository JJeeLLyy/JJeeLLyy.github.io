document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".e_pf_plus");
    const toggleText = document.querySelector(".arrow_txt");
    const list = document.querySelector(".list");
    const currentPage = window.location.pathname.split("/").pop();

    const hiddenPages = ["index.html", "about.html", "settings.html"];
    if (!hiddenPages.includes(currentPage)) {
        list.classList.add("active");
    }

    function toggleMenu() {
        list.classList.toggle("active");
        toggleButton.classList.toggle("active");
    }

    toggleButton.addEventListener("click", toggleMenu);
    toggleText.addEventListener("click", toggleMenu);

    const textElement = document.querySelector(".m_h_txt h1");

if (textElement) {
    const text = "HELLO, JELLY WORLD";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            textElement.innerHTML = text.slice(0, index + 1) + '<span class="cursor">|</span>';
            index++;
            setTimeout(typeWriter, 100);
        } else {
            document.querySelector(".cursor").style.display = "none";
            textElement.innerHTML += '<span class="blink"> !</span>';
        }
    }

    textElement.innerHTML = "";
    typeWriter();
}
});
