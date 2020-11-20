// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".choice {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: transparent;\n  border-width: 0px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  width: 100%;\n}\n\n.choice.-active > .radio {\n  border-color: var(--link);\n}\n\n.choice.-active > .radio > .activation {\n  opacity: 1;\n}\n\n.choice > .radio {\n  --tw-border-opacity: 1;\n  border-color: rgba(209, 213, 219, var(--tw-border-opacity));\n  border-style: solid;\n  border-width: 1px;\n  margin-right: 0.5rem;\n  width: 1.25em;\n  height: 1.25em;\n  padding: 3px;\n  border-radius: 0.75em;\n}\n\n.choice > .radio > .activation {\n  border-radius: 9999px;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  background-color: var(--link);\n}\n\n.choice > .value {\n  margin: 0px;\n  --tw-text-opacity: 1;\n  color: rgba(55, 65, 81, var(--tw-text-opacity));\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}