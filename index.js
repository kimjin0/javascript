const title = document.querySelector("#title");
const CLICKED_CLASS = "checked";

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
    // toggle는 풀어서 작성하면 아래와 같다....

    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if (!hasClass) {
    //     title.classList.add(CLICKED_CLASS);
    // } else {
    //     title.classList.remove(CLICKED_CLASS);
    // }
}

function init() {
    title.addEventListener("click", handleClick);
}

init();
