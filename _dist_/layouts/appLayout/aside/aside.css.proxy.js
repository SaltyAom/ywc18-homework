// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "#aside {\n  --tw-border-opacity: 1;\n  border-color: rgba(229, 231, 235, var(--tw-border-opacity));\n  border-radius: 0.25rem;\n  border-style: solid;\n  border-width: 1px;\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  width: 100%;\n  max-width: 340px;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}