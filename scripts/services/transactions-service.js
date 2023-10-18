import apiFetch from "./api-fetch";

export function getTransactions(idCategory) {
  return apiFetch(`/categories/${idCategory}/transactions`);
}
export function createTransaction(
  idCategory,
  newTransaction = {
    amount,
    notes,
    date,
  }
) {
  return apiFetch(`/categories/${idCategory}/transactions`, {
    body: newTransaction,
  });
}
export function updateTransaction(
  idCategory,
  idTransaction,
  data = {
    amount,
    notes,
    date,
  }
) {
  return apiFetch(`/categories/${idCategory}/transactions/${idTransaction}`, {
    body: data,
    method: "PATCH",
  });
}
export function deleteTransaction(idCategory, idTransaction) {
  return apiFetch(`/categories/${idCategory}/transactions/${idTransaction}`, {
    method: "DELETE",
  });
}
