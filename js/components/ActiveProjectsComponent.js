import ParrentViewClass from "./ParrentViewClass.js";

export default class extends ParrentViewClass{
  constructor(params){
    super(params);
    this.dataObj = {
      url : "http://localhost/CMS/js/components/active-projects.json",
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
    returnTemplate += `
      <div class="table-container">
        <div class="table-header">
          <div class="header-cell"></div>
          <div class="header-cell">Naziv dela</div>
          <div class="header-cell">Autor</div>
          <div class="header-cell">Aktivan</div>
          <div class="header-cell">Datum</div>
        </div>
    `;
    this.data.forEach(element => {
      let {mainImage,projectId,imageAuthor,imageName,activeFor,activeSince} = element;
      returnTemplate += `
              <div class="table-row">
                <div class="row-image cell">
                  <img src="${mainImage}" alt="slika">
                </div>
                <div class="paint-name cell" data-location="/CMS/project/${projectId}">${imageName}</div>
                <div class="author-name cell">${imageAuthor}</div>
                <div class="active-for cell">${activeFor}</div>
                <div class="active-since cell">${activeSince}</div>
              </div>
      `;
      // returnTemplate += `
      // <div class="project-box">
      //   <div class="project-image-container">
      //     <img src="${element["mainImage"]}">
      //   </div>
      //   <div class="image-hidden-text">
      //     <div class="author-of-image">
      //       <a href="#" class="project-link">${element["imageAuthor"]}</a>
      //     </div>
      //     <div class="image-name">
      //       <a href="#" class="project-link">${element["imageName"]}</a>
      //     </div>
      //   </div>
      //   <div class="blackBackground"></div>
      // </div>`;
    });
    returnTemplate +=`</div></div>`;
    return returnTemplate;
  }

}