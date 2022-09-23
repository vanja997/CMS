import ParrentViewClass from "./ParrentViewClass.js";

export default class extends ParrentViewClass{
  constructor(params){
    super(params);
    this.dataObj = {
      url : "http://localhost/CMS/js/components/usefulData.json",
      responseObjectName : "usefulData",
    }
    this.data = null;
  }

  async getData(){
    this.data = (await this.getDataFromUrl(this.dataObj.url))[this.dataObj.responseObjectName];
  }

  async getView(){
    await this.getData();
    if(this.data instanceof Error){
      return `<div class="useful-info-data">Dogodila se greška!</div>`;
    }
    let returnTemplate = `<div class="useful-info-data">`;
    this.data.forEach(element => {
      let titleWords = element["title"].split(" ");
      for (let index = 0; index < titleWords.length; index++) {
        titleWords[index] = titleWords[index].charAt(0).toUpperCase()+titleWords[index].slice(1).toLowerCase();
      }
      let title = titleWords.join(" ");
      returnTemplate += `
      <div class="info-cont" style="background:${element["color"]};color:${element["color"]}">
        <div class="info-icon"><img src="${element["icon"]}" alt="Palet icon" height="48px" width="48px"></div>
        <div class="info-data">
          <div class="info-title">${title}</div>
          <div class="info-value">${element["value"]}</div>
        </div>
      </div>
      `;
    });
    returnTemplate +=`</div>`;
    return returnTemplate;
  }

}