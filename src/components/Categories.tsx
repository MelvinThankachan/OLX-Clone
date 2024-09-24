import { useEffect, useState } from "react";
import DownArrow from "../assets/icons/DownArrow";

const Categories = () => {
  const [Categories, setCategories] = useState<string[]>([]);
  const getCategories = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const categories = await response.json();
    setCategories(categories);
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="flex pb-2 shadow-xl">
      <div className="w-4/6 mx-auto flex gap-10">
        <div className="flex gap-3 items-center">
          <span className="font-bold text-sm">ALL CATEGORIES</span>
          <DownArrow className="w-6" />
        </div>
        <div className="flex gap-4 items-center">
          {Categories.map((category) => (
            <span
              key={category}
              className="cursor-pointer hover:text-[#00a49f]"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
