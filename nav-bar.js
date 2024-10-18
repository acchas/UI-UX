let dropDownBtn = document.getElementById("menuContainer");
let dropDownList = document.getElementById("dropList");


dropDownBtn.addEventListener("mouseover",showMenu);
dropDownBtn.addEventListener("mouseleave", hideMenu);
dropDownBtn.addEventListener("click", goHome);


function showMenu(){
  dropDownList.style.display="flex";

}
function hideMenu(){
  dropDownList.style.display="none";

}
function goHome(){

  location.href="index.html";
  
}

