let dropDownBtn = document.getElementById("menuContainer");
let dropDownList = document.getElementById("dropList");
let menuTitle = document.getElementById("menuTitle");
let menuLogo=document.getElementById("menuLogo");


dropDownBtn.addEventListener("mouseenter", showMenu);
dropDownBtn.addEventListener("mouseleave", hideMenu);

/*
dropDownBtn.addEventListener("touchstart", showMenu);
dropDownBtn.addEventListener("touchstart", showMenu);*/


function showMenu() {

    dropDownList.style.display = "flex";

    menuTitle.style.display = "none";

}
function hideMenu() {
    dropDownList.style.display = "none";
    menuTitle.style.display = "flex";
}
function goHome() {

    location.href = "index.html";

}

