import { Cocktail } from "../../types";
import { api } from "./axios";

export const searchCocktailByName = async (name: string) => {
  const response = await api.get(`/search.php?s=${name}`);
  return response.data.drinks;
};

export const getCocktailById = async (id: string) => {
  const response = await api.get(`/lookup.php?i=${id}`);
  return response.data.drinks[0];
};

export const getRandomCocktail = async () => {
  const response = await api.get(`/random.php`);
  return response.data.drinks[0];
};