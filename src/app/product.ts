export class Product {
  p_id : Number;
  p_name : String;
  p_description : String;
  p_image : String;
  p_instock : Boolean;


  constructor(p_id: Number, p_name: String, p_description: String, p_image: String, p_instock: Boolean) {
    this.p_id = p_id;
    this.p_name = p_name;
    this.p_description = p_description;
    this.p_image = p_image;
    this.p_instock = p_instock;  }

}
