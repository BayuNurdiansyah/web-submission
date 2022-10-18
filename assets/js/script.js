// script loading before page
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector(
            "body").style.visibility = "hidden";
        document.querySelector(
            "#loading").style.visibility = "visible";
    } else {
        document.querySelector(
            "#loading").style.display = "none";
        document.querySelector(
            "body").style.visibility = "visible";
    }
};
// script loading before page

// script smooth scrolling
const links = document.querySelectorAll("nav ul a");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop - 100;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}
// script smooth scrolling