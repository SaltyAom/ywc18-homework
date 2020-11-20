// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".main-title {\n  font-weight: 600;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  margin-left: 1rem;\n  margin-right: 1rem;\n  --tw-text-opacity: 1;\n  color: rgba(55, 65, 81, var(--tw-text-opacity));\n}\n\n.sub-title {\n  font-weight: 600;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  --tw-text-opacity: 1;\n  color: rgba(75, 85, 99, var(--tw-text-opacity));\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}