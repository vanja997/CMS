
export default class{

  constructor(){}

  setTitle(title){
    document.title=title;
  }

  async getDataFromUrl(url){
    try{
      const resp = await fetch(url);
      if (resp.ok) {
        return await resp.json();
      }
      throw new Error("Greska");
    }catch(err){
      return err;
    }
  }
  async getView(){
    return ``;
  }
}