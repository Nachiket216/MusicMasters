import { useContext } from "react";
import { ProductCategoryContext } from "../../contexts/ProductCategoryContext";

export const Home = () => {
  const { category } = useContext(ProductCategoryContext);
  return (
    <>
      <h1>This is home</h1>
      <p>Category</p>
      {category.map(({ categoryName, description, id }) => (
        <div key={id}>
          <p>
            {categoryName} : {description}
          </p>
        </div>
      ))}
    </>
  );
};
