export class Product {
  private _p_id : Number = 0;
  private _p_name : String = "";
  private _p_description : String = "";
  private _p_image : String = "";
  private _p_instock : Boolean = false;


  get p_id(): Number {
    return this._p_id;
  }

  set p_id(value: Number) {
    this._p_id = value;
  }

  get p_name(): String {
    return this._p_name;
  }

  set p_name(value: String) {
    this._p_name = value;
  }

  get p_description(): String {
    return this._p_description;
  }

  set p_description(value: String) {
    this._p_description = value;
  }

  get p_image(): String {
    return this._p_image;
  }

  set p_image(value: String) {
    this._p_image = value;
  }

  get p_instock(): Boolean {
    return this._p_instock;
  }

  set p_instock(value: Boolean) {
    this._p_instock = value;
  }
}
