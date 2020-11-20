// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ":root {\n  --primary: #283b7c;\n  --secondary: #21c300;\n  --link: #008aff;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  --tw-text-opacity: 1;\n  color: rgba(220, 38, 38, var(--tw-text-opacity));\n  margin: 0;\n  font-family: 'Prompt', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}