export default class Cat {
  constructor(context) {
    this._name = 'Cat';
    this._context = context;
  }
  get name() {
    console.log('getname');

    let contextElement = this._context.nativeElement;

    let dummyDiv = contextElement.createElement('div');

    dummyDiv.innerHTML = 'This is class page';
    contextElement.appendChild(dummyDiv);

    return {
      name: this._name,
      context: this._context
    };
  }
}
