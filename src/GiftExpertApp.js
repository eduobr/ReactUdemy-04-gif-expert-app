import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

const GiftExpertApp = () => {
  //const categories = ["One punch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState(["One punch"]);

  //const handleAdd = () => {
  //  setCategories(categories => [...categories, "Hunter X Hunter"]);
  //};

  return (
    <>
      <h2>GiftExpertApp</h2>

      <AddCategory setCategories={setCategories} />

      <hr />

      {/*<button onClick={handleAdd}>Agregar</button>*/}
      <ol>
        {/*
        no podemos colocar un ciclo for ya que este
        es una estructura ciclica y no devuelve nada por lo que
        debemos usar la función map
        */
        /*
          categories.map((category) => (
            <li key={category}> {category} </li>
          ))
        */
            categories.map(category =>(
              <GiftGrid
                key={category} 
                category={category} />
            ))
        }
      </ol>
    </>
  );
};

export default GiftExpertApp;
