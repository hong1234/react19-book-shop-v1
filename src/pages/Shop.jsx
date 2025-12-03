import {
  // useState,
  useContext,
} from "react";
import { Outlet, Link } from "react-router-dom";

import { AppContext } from "../AppContext";
import ProductList from "./ProductList";
import CartSummary from "./CartSummary";

import {
  useQuery,
  // useMutation,
  // useQueryClient
} from "@tanstack/react-query";
import { getBooks } from "../api/getBooks";

function Shop() {
  const {
    state,
    // dispatch
  } = useContext(AppContext);

  const { isLoading, data: books } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  });

  if (isLoading || books === undefined) {
    // console.log("The data is not yet available locally. Loading ...");
    return <div className="w-96 mx-auto mt-6">Loading ...</div>;
  }

  // console.log("shop rendering ..");
  return (
    <div>
      <h4 className="bg-primary text-white text-center p-2">Shop</h4>
      <CartSummary state={state} />

      <div className="row">
        <div className="col-12 col-sm-12 col-md-6">
          <ProductList books={books} />
        </div>
        <div className="col-12 col-sm-12 col-md-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Shop;
