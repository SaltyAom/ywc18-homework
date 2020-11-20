// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "#layout {\n  display: flex;\n  flex-direction: row;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}