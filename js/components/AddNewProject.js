import ParrentViewClass from "./ParrentViewClass.js";

export default class extends ParrentViewClass{
  constructor(){
    super();
    this.setTitle("Add new Project");
  }

  

  async getView(){




    return `<div>Ovo je forma za dodavanje novog projekta!</div>`;
  }

}