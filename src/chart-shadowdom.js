export function createShadowDom(context, chartData) {
  let content = `
  <style>
    body { /* for fallback iframe */
      margin: 0;
    }
    p { 
      border: 1px solid #ccc;
      padding: 1rem;
      color: red;
      font-family: sans-serif;
    }
  </style>

  <p>Element with Shadow DOM</p>
`;
  let element = context.nativeElement;
  let shadow = element.attachShadow({
    mode: 'open'
  });

  shadow.innerHTML = content;
}
