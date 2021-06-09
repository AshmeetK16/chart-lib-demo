export default class Cat {
  constructor(context) {
    this._name = 'Cat';
    this._context = context
  }
  get name() {
    console.log("getname");
    return {
      name: this._name,
      context: this._context
    }
  }
}
