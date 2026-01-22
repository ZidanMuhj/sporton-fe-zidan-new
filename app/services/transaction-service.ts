import { fetchAPI } from "../lib/api";
import { Transaction } from "../types";

export const transactionCheckout = async (
  form: FormData,
): 

Promise<Transaction> => {
  return await fetchAPI<Transaction>("/transactions/checkout", {
    method: "POST",
    body: form,
  });
};

export const getTransactionById = async (id: string): Promise<Transaction> => {
  return await fetchAPI<Transaction>(`/transactions/${id}`);
};
