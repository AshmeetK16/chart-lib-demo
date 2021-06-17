import * as Handlebars from '../node_modules/handlebars';

let chartTypes = ['horizontal-bar'];

export function createHandlebars(context, chartData) {

  let validChartType = chartTypes.indexOf(chartData.type) > -1;

  chartData.validChartType = validChartType;

  let chartHTML = `
  {{#if validChartType}}
    <div class="chart-container mt-4 position-relative">
      <div class="chart-area">
        <div class="grid-lines d-flex justify-content-end position-absolute w-100">
          <div class="inner-divs position-absolute h-100">
            {{#each xaxis}}
              <div class="grid-line position-absolute h-100 statements-{{value}}" style="width:{{value}}%"></div>
            {{/each}}
          </div>
        </div>
        <div class="chart-data d-flex flex-column w-100">
          {{#each yaxis}}
            <div class="bar-container d-flex align-items-center my-3 w-100">
              <div class="d-flex flex-md-column flex-row">
                <div class="skill-name d-flex align-items-center justify-content-end pr-2 pr-md-3">{{label}}
                {{#if showStatus}}
                  <i class="fa fa-exclamation-circle ml-1 d-inline-block d-md-none" aria-hidden="true"
                  data-toggle="tooltip" data-placement="right" data-offset="0,0" title={{tooltip}}></i>
                  {{/if}}
                </div>
                {{#if showStatus}}
                  <div class="status align-self-end pr-2 pr-md-3 mt-1 d-md-inline-block d-none">
                    <span>{{subLabel}}</span>
                    <i class="fa fa-question-circle ml-1" aria-hidden="true" data-toggle="tooltip" 
                    data-placement="right" data-offset="0,0" title={{tooltip}}></i>
                  </div>
                {{/if}}
              </div>

              <div class="bar d-flex align-items-center">
                <div class="percentage percentage-{{value}}" style="width:{{value}}%"></div>
                <div class="bar-icon d-flex align-items-center justify-content-center">
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          {{/each}}
          <div class="bottom-container d-md-flex d-none w-100"></div>
        </div>
      </div>
      <div class="chart-labels d-md-flex d-none position-absolute">
        {{#each xaxis}}
          <p class="label position-absolute text-center statements-{{value}}">{{label}}</p>
        {{/each}}
      </div>
    </div>
  {{/if}}
  <script type='text/javascript' src="http://code.jquery.com/jquery-latest.min.js"></script>
  `;

  // Compile the template data into a function
  let templateScript = Handlebars.compile(chartHTML);

  let html = templateScript(chartData);

  // context.nativeElement.innerHTML = html;

  let content = `
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" 
  integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
  <script type='text/javascript' src="http://code.jquery.com/jquery-latest.min.js"></script>
  <style>
    .chart-container {
      max-width: 600px;
      margin: auto;
      margin-bottom: 70px;
    }
    .chart-container .chart-area .grid-lines {
      height: 100%;
      color: #323232;
    }
    .chart-container .chart-area .grid-lines .inner-divs {
      width: calc(100% - 150px);
    }
    .chart-container .chart-area .grid-lines .inner-divs .grid-line {
      border-right: 2px dashed #B4B4B4;
    }
    .chart-container .chart-area .chart-data {
      background-color: #FFFFFF;
    }
    .chart-container .chart-area .chart-data .bar-container {
      background-color: transparent;
      z-index: 1;
    }
    .chart-container .chart-area .chart-data .bar-container .skill-name {
      font-weight: 600;
      font-size: 14px;
      height: 16px;
      min-width: 150px;
      color: #323232;
    }
    .chart-container .chart-area .chart-data .bar-container .status {
      font-size: 12px;
      font-weight: 700;
    }
    .chart-container .chart-area .chart-data .bar-container .bar {
      flex-grow: 1;
    }
    .chart-container .chart-area .chart-data .bar-container .bar .percentage {
      text-transform: uppercase;
      height: 16px;
      background-color: #8723ff;
      cursor: pointer;
    }
    .chart-container .chart-area .chart-data .bar-container .bar .percentage:before {
      box-shadow: 0 0 0 0 rgba(153, 85, 170, 0.75);
    }
    .chart-container .chart-area .chart-data .bar-container .bar .bar-icon {
      background-color: #8723ff;
      border-radius: 50%;
      height: 34px;
      width: 34px;
      border: 3px solid #FFFFFF;
      margin-left: -31px;
    }
    .chart-container .chart-area .chart-data .bar-container .bar .bar-icon img {
      height: 15px;
      width: 15px;
    }
    .chart-container .chart-area .chart-data .bar-container .bar .bar-icon i {
      color: #FFFFFF;
    }
    .chart-container .chart-area .chart-data .bar-container .bar .hidden-circle {
      height: 40px;
      width: 40px;
      margin: -31px;
      background-color: #FFFFFF;
    }
    .chart-container .chart-area .chart-data .bottom-container {
      height: 2px;
      border: 1px solid #B4B4B4;
      margin-left: 150px;
    }
    .chart-container .chart-labels {
      margin-left: 150px;
      margin-top: 12px;
    }
    .chart-container .chart-labels .label {
      width: 86px;
      left: calc(20% - 86px/2);
      font-size: 12px;
      font-weight: 600;
      color: #323232;
    }
  </style>

  ${html}
`;

  // Creating shadow and attaching shadow dom with original DOM element.
  let element = context.nativeElement;
  let shadow = element.attachShadow({
    mode: 'open'
  });

  shadow.innerHTML = validChartType ? content : '<p>Chart type is not supported</p>';

  let event = new CustomEvent('cat', {
    detail: {
      hazcheeseburger: true
    }
  });

  element.dispatchEvent(event);
}
