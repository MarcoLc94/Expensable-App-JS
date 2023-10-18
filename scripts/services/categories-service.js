import apiFetch from "./api-fetch";

export function getCategories() {
  return apiFetch("/categories");
}
export function createCategory(
  newCategory = {
    name,
    transaction_type,
    color,
    icon,
  }
) {
  return apiFetch("/category", { body: newCategory });
}
export function deleteCategory(id) {
  return apiFetch(`/categories/${id}`, { method: "DELETE" });
}
