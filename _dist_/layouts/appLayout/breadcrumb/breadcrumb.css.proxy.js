// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "#breadcrumb {\n  display: flex;\n  flex-direction: row;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n  width: 100%;\n  background-color: var(--primary);\n}\n\n#breadcrumb > .path {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  margin-right: 0.25rem;\n}\n\n#breadcrumb > .path.-link {\n  text-decoration: underline;\n}\n\n#breadcrumb > .path.-current {\n  font-weight: 600;\n}\n\n#breadcrumb > .seperator {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}