import { fetchAPI } from "../lib/api";
import { Category } from "../types";

export const getAllcategories = async (): Promise<Category[]> => {
 return await fetchAPI<Category[]>("/categories");
};
