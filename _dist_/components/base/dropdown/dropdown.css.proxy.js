if("undefined"!=typeof document){const n=".dropdown {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: transparent;\n  --tw-border-opacity: 1;\n  border-color: rgba(229, 231, 235, var(--tw-border-opacity));\n  border-radius: 0.5rem;\n  border-style: solid;\n  border-width: 1px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.75rem;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  position: relative;\n  --tw-text-opacity: 1;\n  color: rgba(75, 85, 99, var(--tw-text-opacity));\n  width: 100%;\n  height: 42px;\n}\n\n.dropdown > .title {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  margin: 0px;\n}\n\n.dropdown > .title > .icon {\n  margin-right: 0.25rem;\n}\n\n.dropdown > .select {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n  --tw-border-opacity: 1;\n  border-color: rgba(229, 231, 235, var(--tw-border-opacity));\n  border-radius: 0.5rem;\n  border-style: solid;\n  border-width: 1px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  position: absolute;\n  left: 0px;\n  width: 100%;\n  top: 48px;\n  z-index: -1;\n  max-height: 420px;\n  opacity: 0;\n  transform: translateY(-8px);\n  transition: transform 0.1s ease-out, opacity 0.1s ease-out, z-index 0.2s ease-out;\n}\n\n.dropdown > .select.-open {\n  z-index: 100;\n  opacity: 1;\n  transform: translateY(0);\n}\n\n.dropdown > .select > .option {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n  border-width: 0px;\n  cursor: pointer;\n  font-weight: 600;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  text-align: left;\n  --tw-text-opacity: 1;\n  color: rgba(75, 85, 99, var(--tw-text-opacity));\n  width: 100%;\n  transition: background-color 0.1s ease-out;\n}\n\n.dropdown > .select > .option:hover, .dropdown > .select > .option:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n\n#dropdown-overlay {\n  background-color: transparent;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  z-index: 90;\n  height: 100vh;\n}",t=document.createElement("style"),o=document.createTextNode(n);t.type="text/css",t.appendChild(o),document.head.appendChild(t)}