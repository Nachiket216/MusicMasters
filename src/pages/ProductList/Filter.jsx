import React from "react";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductListingContext";

export const Filter = () => {
  const { dispatch } = useContext(ProductContext);
  let search;

  const onSearchChange = (e) => {
    search = e.target.value;
  };

  const searchClick = () => {
    dispatch({ type: "SEARCH", search: search });
  };

  return (
    <>
      <label htmlFor="">
        Search:
        <input type="text" onChange={onSearchChange} />
        <button onClick={searchClick}>Search Data</button>
      </label>

      <fieldset>
        <legend>Sort By:</legend>
        <label htmlFor="">
          <input
            type="radio"
            name="priceFilter"
            onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
          />
          Price - High to Low
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="priceFilter"
            onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
          />
          Price - Low to High
        </label>
      </fieldset>

      <fieldset>
        <legend>Filters:</legend>
        <label htmlFor="">
          <input
            type="checkbox"
            onChange={() => dispatch({ type: "OUT_OF_BOX_FILTER" })}
          />
          Include Out of Stock
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            onChange={() => dispatch({ type: "FAST_DELIVERT" })}
          />
          Fast Delivery Only
        </label>
      </fieldset>
    </>
  );
};
