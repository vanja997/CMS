import AddNewProject from "./components/AddNewProject.js";
import Dashboard from "./components/Dashboard.js";
import ShowProject from "./components/ShowProjectComponent.js";

const changeHistory = (link) => {
  window.history.pushState(null,null,link);
  routerP();
}

const regexPath = parh => new RegExp("^" + parh.replace(/\//g,"\\/").replace(/:\w+/g,"(.+)")+"$");
const parameters = currentRoute => {

  const values = currentRoute.isMatch.slice(1);
  const keys =Array.from(currentRoute.route.path.matchAll(/:(\w+)/g)).map(elements => elements[1]);
  const keyValueArray = [];
  keys.map((key, index) => {
    keyValueArray.push([key,values[index]]);
  });
  return Object.fromEntries(keyValueArray);
}


const routerP = async () =>{
  const views = [
    {path:"/CMS/",view: Dashboard},
    {path:"/CMS/addProject",view: AddNewProject},
    {path:"/CMS/project/:id",view: ShowProject},
    //{path:"/CMS/search",view: () => console.log("Ovo je Search stranica")}
  ];
  //oznci koje rute odgovaraju url-u
  const checkCurrentRoute = views.map(view => {
    return {
      route: view,
      isMatch: location.pathname.match(regexPath(view.path))
    }
  });
  //pronadji prvu rutu koja ima parametar isMatch = true
  let currentRoute = checkCurrentRoute.find(route => route.isMatch !== null);
  //prikazi pocetnu stranu ako uneta rute ne postoji, umesto 404 stranice
  if(!currentRoute){
    currentRoute = {
      route: views[0],
      isMatch: true
    }
  }
  const htmlContent = new currentRoute.route.view(parameters(currentRoute));
  document.querySelector("#main-content").innerHTML = await htmlContent.getView();
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
  //routerP();
});