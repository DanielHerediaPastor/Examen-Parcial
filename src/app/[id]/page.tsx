"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getCocktailById } from "../../lib/api/cocktail";
import type { Cocktail } from "../../types";

export default function Page() {

  const { id } = useParams();
  const router = useRouter();
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);

  useEffect(() => {
    if (id) {
      getCocktailById(id as string).then((data) => {
        setCocktail(data);
      });
    }
  }, [id]);

  if (!cocktail) return <p>Cargando...</p>;

  const ingredients = [
    cocktail.strIngredient1,
    cocktail.strIngredient2,
    cocktail.strIngredient3,
    cocktail.strIngredient4,
    cocktail.strIngredient5,
    cocktail.strIngredient6,
    cocktail.strIngredient7,
    cocktail.strIngredient8
  ].filter(Boolean);

  return (
    <div className="detail-container">

      <button onClick={() => router.back()}>
        Volviendo atras
      </button>
      <h1>{cocktail.strDrink}</h1>
      <img src={cocktail.strDrinkThumb} width={300} />
      <p>Categoría: {cocktail.strCategory}</p>
      <p>Alcohol: {cocktail.strAlcoholic}</p>
      <p>Vaso: {cocktail.strGlass}</p>
      <h3>Instrucciones</h3>
      <p>{cocktail.strInstructions}</p>
      <h3>Ingredientes</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

    </div>
  );
}