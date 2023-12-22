import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["dragon ball"]);

  const onAddCategory = (newCat) => {
    //validacion
    if (categories.includes(newCat)) return;
    setCategories([newCat, ...categories]);
  };

  return (
    <>
      <h1>GifExpert</h1>

      <AddCategory
        setCategories={setCategories}
        categories={categories}
        onAddCategory={onAddCategory}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
