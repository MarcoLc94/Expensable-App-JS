import STORE from "../store.js";

function render() {
  console.log(STORE);
  return `<main class="section">
  <section class="container">
   <h1 class="heading heading--lg text-center mb-2">
   Expensable</h1>
   <div class="flex justify-between mb-8 js-navigation">
   <a href="#" class="button button--subtle">Expense</a>
   <a href="#" class="button button--subtle">Income</a>
   <a href="#" class="button button--subtle">Profile</a>
   </div>
  </section>
  </main>`;
}

const HomePage = {
  toString() {
    return render();
  },
  addListeners() {},
};
export default HomePage;
