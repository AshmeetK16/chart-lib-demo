export default class Cat {
  constructor(context, options) {
    this._name = 'Cat';
    this._context = context;
    this.chartData = options;

    const contextElement = this._context.nativeElement;

    let dummyDiv = document.createElement('div');

    dummyDiv.innerHTML = "<div class='test-class'>This is class app</div>";
    contextElement.appendChild(dummyDiv);
  }

  get name() {
    console.log('getname');

    return {
      name: this._name,
      context: this._context
    };
  }

  createElement() {
    const contextElement = this._context.nativeElement;

    let dummyDiv = document.createElement('div');

    let chartHTML = `<div class='chart-container mt-4 position-relative'>
  <div class='chart-area'>
    <div class='grid-lines d-flex justify-content-end position-absolute w-100'>
      <div class='inner-divs position-absolute h-100'>`;

    for (let statements of this.chartData.xaxis) {
      chartHTML += `<div class='grid-line position-absolute h-100 statements-${statements.value}'></div>`;
    }

    chartHTML += "<div class='chart-data d-flex flex-column w-100'>";

    for (let [i, bar] of this.chartData.yaxis.entries()) {
      chartHTML += `<div class='grid-line position-absolute h-100 statements-${bar.value}'>
      <div class='bar-container d-flex align-items-center my-3 w-100'>
              <div class='d-flex flex-md-column flex-row'>
                <div class='skill-name d-flex align-items-center justify-content-end pr-2 pr-md-3'>${bar.label}
                  <i class='fa fa-exclamation-circle ml-1 d-inline-block d-md-none' aria-hidden='true'></i>
                </div>
                <div class='status align-self-end pr-2 pr-md-3 mt-1 d-md-inline-block d-none'>
                  
                  <i class='fa fa-question-circle ml-1' aria-hidden='true'></i>
                </div>
              </div>
    
              <div class='bar d-flex align-items-center'>
                <div class='percentage percentage-${this.chartData['dataSet'][i].value}'></div>
                <div class='bar-icon d-flex align-items-center justify-content-center'>
                  <i class='${this.chartData['dataSet'][i].icon}' 
                   aria-hidden='true'></i>
                  <img class='svg-icon'  
                  src='${this.chartData['dataSet'][i].img}' alt=''>
                </div>
              </div>
            </div>`;
    }

    chartHTML += `<div class='bottom-container d-md-flex d-none w-100'></div></div>
    <div class='chart-labels d-md-flex d-none position-absolute'>`;

    for (let statements of this.chartData.xaxis) {
      chartHTML += `<p class='label position-absolute text-center statements-${statements.value}'>
      ${statements.label}</p>`;
    }

    chartHTML += '</div></div>';

    dummyDiv.innerHTML = chartHTML;
    contextElement.appendChild(dummyDiv);
  }
}
