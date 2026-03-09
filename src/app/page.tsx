"use client";

import { useState } from "react";
import { searchCocktailByName, getRandomCocktail } from "../lib/api/cocktail";
import type { Cocktail } from "../types";
import CocktailCard from "../components/cocktail";
import { useRouter } from "next/navigation";

const Home = () => {

  const [search, setSearch] = useState("");
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const router = useRouter();

  const handleSearch = async () => {
  if (!search) return;
  const data = await searchCocktailByName(search);
  setCocktails(data || []);
};
  const handleRandom = async () => {
    const cocktail = await getRandomCocktail();
    router.push(`/${cocktail.idDrink}`);
  };

  return (
    <div>
      <h1>Buscador de Cocktails</h1>

      <input
        type="text"
        placeholder="Buscate un cocktail"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={handleSearch}>Buscar</button>

      <button onClick={handleRandom}>
        Dime algo bonito
      </button>

      <div className="cocktail-container">
        {cocktails.map((cocktail) => (
          <CocktailCard
            key={cocktail.idDrink}
            cocktail={cocktail}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;