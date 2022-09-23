import ParrentViewClass from "./ParrentViewClass.js";

export default class extends ParrentViewClass{
  constructor(params){
    super(params);
    this.params = params;
    this.dataObj = {
      url : "http://localhost/CMS/js/components/project-details.json",
      responseObjectName : "activeProjects",
    }
    this.setTitle("Project");
    this.data = null;
  }

  async getData(){
    this.data = (await this.getDataFromUrl(this.dataObj.url));
  }
  
  async getView(){
    await this.getData();




    
    return `<pre>${JSON.stringify(this.data)}</pre>`;
  }

}