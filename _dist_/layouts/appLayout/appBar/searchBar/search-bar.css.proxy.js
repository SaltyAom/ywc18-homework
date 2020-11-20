// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "#search-bar {\n  --tw-border-opacity: 1;\n  border-color: rgba(229, 231, 235, var(--tw-border-opacity));\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n  border-style: solid;\n  border-width: 1px;\n  border-left-width: 0px;\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n  width: 100%;\n  max-width: 560px;\n  height: 40px;\n}\n\n#search-bar > .input {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: 0.5rem;\n  border-width: 0px;\n  display: flex;\n  flex: 1 1 0%;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  padding-left: 1rem;\n}\n\n#search-bar > .action {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  --tw-bg-opacity: 1;\n  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n  border-width: 0px;\n  width: 60px;\n}\n\n#search-bar > .action > .icon {\n  --tw-text-opacity: 1;\n  color: rgba(55, 65, 81, var(--tw-text-opacity));\n  transform: scale(0.8);\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}