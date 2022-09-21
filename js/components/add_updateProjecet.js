import tempConverter from "http://localhost/CMS/js/helpers/convertTempStrToDOM.js"


async function getData(){
  try{
    const response = await fetch("http://localhost/CMS/active-projects.json");
    if(response.ok){
      return await response.json();
    }
  }catch(error){
    console.error(error);
  }
}

async function createComponent(parentComp) {
  const data = await getData();
  let activeProjectsComponent = document.createElement("div");
  activeProjectsComponent.classList.add("active-projects-container");
  let elementLoader = document.createElement("div");
  elementLoader.classList.add("loading");
  activeProjectsComponent.appendChild(elementLoader);
  //parentComp.innerHTML="";
  parentComp.appendChild(activeProjectsComponent);

  let activeProjects = document.querySelector(".active-projects-container");
  activeProjects.innerHTML ="";
  let projectBoxTemplate = `<div>Hello world!`;
  //activeProjects.appendChild(tempConverter(projectBoxTemplate));
}


function add_updateProject(parentComponent) {
  createComponent(parentComponent);
}

export {add_updateProject};