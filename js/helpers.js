document.addEventListener('DOMContentLoaded',function(){
  /** 
  * Function for dipslaying side-menu on mobile size screen
  * This function is used as function which is called when event 'click' is happened on 'mobileSideMenuButton'
  * @return void
  */
  function toggleSideBar(){
    this.classList.toggle("buttonBackground");
    this.closest(".grid-item-side-menu").classList.toggle("show-sidebar-on-mobile");
  }
  let mobileSideMenuButton = document.querySelector(".mobile-side-menu-button");
  mobileSideMenuButton.addEventListener("click",toggleSideBar);

  /**
  * This part of code is used to prevent scroll on main scroll on page when cusrsor is
  * over some other vertically scrollable element. If that vertically scrollable element 
  * is scrolled to the end then main scroll start to scroll to the requested direction
  */ 
  let scrollArea = document.querySelectorAll(".scroll-wheel-stop");
  scrollArea.forEach(element => {
    element.addEventListener("wheel",function(e){
      var delta = e.wheelDelta || -e.detail;
      this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
      if (this.clientHeight < (this.children)[0].clientHeight) e.preventDefault();
    });
  });
  /**
  * On page addNewProject on input[type=number] field set max atrribute to current year 
  */
  if (document.getElementById("godinaNastanka")) {
    document.getElementById("godinaNastanka").setAttribute('max',new Date().getFullYear());
  }
});

function toggleClassesForSideBar() {
  let currentViewportWidth =  window.innerWidth;
  let liElements = document.querySelectorAll("#side-menu ul li");
  liElements.forEach(liElement => {
    let iconElement = liElement.children[0];
    let textElement = liElement.children[1];
    let iconElementAnimated = false;
    let textElementAnimated = false;
    iconElement.classList.forEach( classValue => {
      classValue.includes("animation")? iconElementAnimated=true : null;
    });
    textElement.classList.forEach( classValue => {
      classValue.includes("animation")? textElementAnimated=true : null;
    });
    if (!iconElementAnimated && !textElementAnimated && currentViewportWidth<=860) {
      iconElement.classList.toggle("icon-animation");
      textElement.classList.toggle("icon-text-animation");
    }
    if (iconElementAnimated && textElementAnimated && currentViewportWidth>=860) {
      iconElement.classList.toggle("icon-animation");
      textElement.classList.toggle("icon-text-animation");
    }
  });
  
}
//window.onresize = toggleClassesForSideBar;