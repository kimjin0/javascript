const title = document.querySelector("#title");
const CHECKED_CLASS = "checked";
title.innerHTML = "Hello~~~";

function handleClick() {
    title.style.color = "red";
}
function init() {
    title.addEventListener("click", handleClick);
}
init();
