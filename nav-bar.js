let dropDownBtn = document.getElementById("menuContainer");
let dropDownList = document.getElementById("dropList");


dropDownBtn.addEventListener("mouseover",showMenu);
dropDownBtn.addEventListener("mouseleave", hideMenu);
/*dropDownBtn.addEventListener("click", goHome);*/
dropDownBtn.addEventListener("touchmove", showMenu);
dropDownBtn.addEventListener("touchmove", hideMenu);

/*Kanske sättta en timer på att menyn försvinner? */

function showMenu(){
  dropDownList.style.display="flex";


}
function hideMenu(){
  dropDownList.style.display="none";

}


function goHome(){

  location.href="index.html";
  
}

