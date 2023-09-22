function updateTimer() {
    future = Date.parse("sept 30, 2023 11:30:00");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer").innerHTML =
        "<div>" +
        d +
        " :" +
        "<span>days</span>  </div>" +
        "<div>" +
        h +
        ":" +
        "<span>hours</span></div>" +
        "<div>" +
        m +
        ":" +
        "<span>minutes</span></div>" +
        "<div>" +
        s +
        "<span>seconds</span></div>";
    document.getElementById("timer2").innerHTML =
        "<div>" +
        d +
        " : " +
        "<span></span>  " +
        "" +
        h +
        " : " +
        "<span></span>" +
        "" +
        m +
        " : " +
        "<span></span>" +
        "" +
        s +
        "<span></span>";
}
setInterval("updateTimer()", 1000);

let ft = document.getElementById("floating_timer");
window.addEventListener("scroll", () => {
    if (window.scrollY < 600) {
        // Adjust the threshold as needed
        ft.classList.add("show");
    } else {
        ft.classList.remove("show");
    }
});

ft.addEventListener("click", function scrollToTop() {
    window.scrollTo({
        top: 400,
        behavior: "smooth", // Smooth scrolling animation
    });
});

stt = () => {
    window.scrollTo({
        top: 400,
        behavior: "smooth", // Smooth scrolling animation
    });
};
