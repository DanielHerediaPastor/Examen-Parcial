"use client";

import { useRouter } from "next/navigation";
import type { Cocktail } from "../types";

export default function CocktailCard({ cocktail }: { cocktail: Cocktail }) {

  const router = useRouter();

  return (
    <div
      className="cocktail-card"
      onClick={() => router.push(`/${cocktail.idDrink}`)}
    >
      <img src={cocktail.strDrinkThumb} width={200} />
      <h3>{cocktail.strDrink}</h3>
    </div>
  );
}