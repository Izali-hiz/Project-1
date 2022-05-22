const toTop = document.querySelector(".up_btn");

window.addEventListener("scroll", ()=>{
    if (window.pageYOffset >100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})