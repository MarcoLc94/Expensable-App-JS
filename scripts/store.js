import { getCategories } from "./services/categories-service.js";

async function fetchCategories() {
  const categories = await getCategories();
  this.income = categories.filter(
    (category) => category.transaction_type === "income"
  );
  this.expense = categories.filter(
    (category) => category.transaction_type === "expense"
  );
}
const STORE = {
  user: null,
  income: [],
  expense: [],
  fetchCategories,
};

export default STORE;
