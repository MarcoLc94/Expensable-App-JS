const DOMHandler = (function (parentSelector) {
  const parent = document.querySelector(parentSelector);

  if (!parent) throw new Error("Parent not found");

  return {
    module: null,
    load(module) {
      this.module = module;
      parent.innerHTML = module;
      module.addListeners();
    },
    reload() {
      this.load(this.module);
    },
  };
})("#root");

export default DOMHandler;
// Template Module
/* const Module = {
    toString(){
      return `<h1>Hello World!</h1>`
    },
    addListeners() {},
  }
  export default Module;
  */
