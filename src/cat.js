export default class Cat {
  constructor(context) {
    this._name = 'Cat';
    this._context = context;

    console.log('getname');

    let contextElement = this._context.nativeElement;

    let dummyDiv = document.createElement('div');

    dummyDiv.innerHTML = 'This is class page';
    contextElement.appendChild(dummyDiv);
  }
  get name() {
    console.log('getname');

    let contextElement = this._context.nativeElement;

    let dummyDiv = document.createElement('div');

    dummyDiv.innerHTML = 'This is class page';
    contextElement.appendChild(dummyDiv);

    // contextElement.innerHTML = dummyDiv;

    return {
      name: this._name,
      context: this._context,
      element: dummyDiv
    };
  }
}
