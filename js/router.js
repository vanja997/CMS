import AddNewProject from "./components/AddNewProject.js";
import Dashboard from "./components/Dashboard.js";

const routerP = async () =>{
  const views = [
    {path:"/CMS/",view: Dashboard},
    {path:"/CMS/addProject",view: AddNewProject},
    //{path:"/CMS/search",view: () => console.log("Ovo je Search stranica")}
  ];
  //oznci koje rute odgovaraju url-u
  const checkCurrentRoute = views.map(view => {
    return {
      route: view,
      isMatch: view.path === location.pathname
    }
  });
  //pronadji prvu rutu koja ima parametar isMatch = true
  let currentRoute = checkCurrentRoute.find(route => route.isMatch);
  //prikazi pocetnu stranu ako uneta rute ne postoji, umesto 404 stranice
  if(!currentRoute){
    currentRoute = {
      route: views[0],
      isMatch: true
    }
  }

  const htmlContent = new currentRoute.route.view();
  document.querySelector("#main-content").innerHTML = await htmlContent.getView();
}

const changeHistory = (link) => {
  window.history.pushState(null,null,link);
  routerP();
}
//koristi se kada se koristi browser navigacija
window.addEventListener("popstate",routerP);

document.addEventListener('DOMContentLoaded',()=>{
  document.addEventListener("click",(e)=>{
    if (e.target.matches('[data-location]')) {
      e.preventDefault();
      changeHistory(e.target.getAttribute("data-location"));
    }
  });
  routerP();
});