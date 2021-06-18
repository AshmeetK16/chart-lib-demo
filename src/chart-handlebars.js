import * as Handlebars from '../node_modules/handlebars';

let chartTypes = ['horizontal-bar'];

export function createHandlebars(context, chartData) {

  let validChartType = chartTypes.indexOf(chartData.type) > -1;

  chartData.validChartType = validChartType;

  let chartHTML = `
  {{#if validChartType}}
    <div class="chart-container mt-4 position-relative" 
      style="max-width: 600px;
      margin: auto;
      margin-bottom: 70px;">
      <div class="chart-area">
        <div class="grid-lines d-flex justify-content-end position-absolute w-100" 
          style="height: 100%;
          color: #323232;">
          <div class="inner-divs position-absolute h-100" style="width: calc(100% - 150px);">
            {{#each xaxis}}
              <div class="grid-line position-absolute h-100" 
                style="width:{{value}}%; border-right: 2px dashed #B4B4B4;"></div>
            {{/each}}
          </div>
        </div>
        <div class="chart-data d-flex flex-column w-100" style="background-color: #FFFFFF;">
          {{#each yaxis}}
            <div class="bar-container d-flex align-items-center my-3 w-100" style="background-color: transparent;
              z-index: 1;">
              <div class="d-flex flex-md-column flex-row">
                <div class="skill-name d-flex align-items-center justify-content-end pr-2 pr-md-3" 
                  style="font-weight: 600;
                  font-size: 14px;
                  height: 16px;
                  min-width: 150px;
                  color: #323232;">{{label}}
                {{#if showStatus}}
                  <i class="fa fa-exclamation-circle ml-1 d-inline-block d-md-none" aria-hidden="true"
                  data-toggle="tooltip" data-placement="right" data-offset="0,0" title={{tooltip}}></i>
                  {{/if}}
                </div>
                {{#if showStatus}}
                  <div class="status align-self-end pr-2 pr-md-3 mt-1 d-md-inline-block d-none" 
                    style="font-size: 12px;
                    font-weight: 700;">
                    <span>{{subLabel}}</span>
                    <i class="fa fa-question-circle ml-1" aria-hidden="true" data-toggle="tooltip" 
                    data-placement="right" data-offset="0,0" title={{tooltip}}></i>
                  </div>
                {{/if}}
              </div>
              {{#unless showStatus}}
                <div class="bar d-flex align-items-center" style="flex-grow: 1;">
                  <div class="percentage" style="width:{{value}}%; text-transform: uppercase;
                    height: 16px;
                    background-color: #8723ff;
                    cursor: pointer;"></div>
                  <div class="bar-icon d-flex align-items-center justify-content-center" 
                    style="background-color: #8723ff;
                    border-radius: 50%;
                    height: 34px;
                    width: 34px;
                    border: 3px solid #FFFFFF;
                    margin-left: -31px;">
                    {{#isIcon ../dataSet @index}}
                      <i class="{{#with (lookup ../dataSet @index)}}{{icon}}{{/with}}" aria-hidden="true" 
                        style="color: #FFFFFF;"></i>
                    {{/isIcon}}
                    {{#isImg ../dataSet @index}}
                      <img class="svg-icon" src="{{#with (lookup ../dataSet @index)}}{{img}}{{/with}}" 
                        alt="" style="height: 15px; width: 15px;">
                    {{/isImg}}
                  </div>
                </div>
              {{/unless}}
            </div>
          {{/each}}
          <div class="bottom-container d-md-flex d-none" style="height: 2px;
            border: 1px solid #B4B4B4;
            margin-left: 150px;"></div>
        </div>
      </div>
      <div class="chart-labels d-md-flex d-none position-absolute" style="margin-left: 150px;
        margin-top: 12px;">
        {{#each xaxis}}
          <p class="label position-absolute text-center" style="
            font-size: 12px;
            font-weight: 600;
            color: #323232;
            width: 86px">{{label}}</p>
        {{/each}}
      </div>
    </div>
  {{/if}}
  `;

  // helper for checking icon
  Handlebars.registerHelper('isIcon', function (data, index, options) {
    var fnTrue = options.fn,
      fnFalse = options.inverse;

    return data[index].icon ? fnTrue(this) : fnFalse(this);
  });

  // helper for checking img
  Handlebars.registerHelper('isImg', function (data, index, options) {
    var fnTrue = options.fn,
      fnFalse = options.inverse;

    return data[index].img ? fnTrue(this) : fnFalse(this);
  });

  // Compile the template data into a function
  let templateScript = Handlebars.compile(chartHTML);

  let html = templateScript(chartData);

  context.nativeElement.innerHTML = validChartType ? html : '<p>Chart type is not supported</p>';

  setTimeout(function () {
    document.querySelectorAll('.grid-line').forEach((gridLine, index) => {
      const offsetWidth = gridLine['offsetWidth'];

      const label = document.getElementsByClassName('label')[index];

      label.style.left = `${offsetWidth - 43}px`;
    });
  }, 0);
}
