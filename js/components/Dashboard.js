import ParrentViewClass from "./ParrentViewClass.js";
import UsefulDataDashboard from "./usefulDataDashboard.js";
import ActiveProjectsComponent from "./activeProjectsComponent.js";

export default class extends ParrentViewClass{
  components = [UsefulDataDashboard,ActiveProjectsComponent];
  constructor(){
    super();
    this.setTitle("Dashboard");
    this.pageHtml = ``;
  }

  async getView(){
    await Promise.all(this.components.map(async (component) => {
        let componentView = await new component().getView();
        this.pageHtml = this.pageHtml+componentView;
      }
    ));
    return this.pageHtml;
  }
}