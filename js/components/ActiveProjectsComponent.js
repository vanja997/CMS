
// async function createComponent(parentComp) {
//   const data = await getData();
//   let activeProjectsComponent = document.createElement("div");
//   activeProjectsComponent.classList.add("active-projects-container");
//   let elementLoader = document.createElement("div");
//   elementLoader.classList.add("loading");
//   activeProjectsComponent.appendChild(elementLoader);
//   //parentComp.innerHTML="";
//   parentComp.appendChild(activeProjectsComponent);

//   let activeProjects = document.querySelector(".active-projects-container");
//   activeProjects.innerHTML ="";
//   data["activeProjects"].forEach(element => {
//     let projectBoxTemplate = `
//     <div class="project-box">
//       <div class="project-image-container">
//         <img src="${element["mainImage"]}">
//       </div>
//       <div class="image-hidden-text">
//         <div class="author-of-image">
//           <a href="#" class="project-link">${element["imageAuthor"]}</a>
//         </div>
//         <div class="image-name">
//           <a href="#" class="project-link">${element["imageName"]}</a>
//         </div>
//       </div>
//       <div class="blackBackground"></div>
//     </div>`;
//     activeProjects.appendChild(tempConverter(projectBoxTemplate));
//   });
// }

import ParrentViewClass from "./ParrentViewClass.js";

export default class extends ParrentViewClass{
  constructor(){
    super();
    this.dataObj = {
      url : "http://localhost/PMS/js/components/active-projects.json",
      responseObjectName : "activeProjects",
    }
    this.data = null;
  }

  async getData(){
    this.data = (await this.getDataFromUrl(this.dataObj.url))[this.dataObj.responseObjectName];
  }

  async getView(){
    await this.getData();
    if(this.data instanceof Error){
      return `<div class="active-projects-container">Dogodila se greška!</div>`;
    }
    let returnTemplate = `<div class="active-projects-container">`;
    this.data.forEach(element => {
      returnTemplate += `
      <div class="project-box">
        <div class="project-image-container">
          <img src="${element["mainImage"]}">
        </div>
        <div class="image-hidden-text">
          <div class="author-of-image">
            <a href="#" class="project-link">${element["imageAuthor"]}</a>
          </div>
          <div class="image-name">
            <a href="#" class="project-link">${element["imageName"]}</a>
          </div>
        </div>
        <div class="blackBackground"></div>
      </div>`;
    });
    returnTemplate +=`</div>`;
    return returnTemplate;
  }

}