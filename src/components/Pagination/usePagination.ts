import React from "react";
import { useState } from "react";
import Product from "../../models/Product";

const usePagination = (products: Product[]) => {
  const [paginatedProducts, setPaginatedProducts] = useState<Product[]>([]);
  const [productsPerPage] = useState(8);
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  React.useEffect(() => {
    setPaginatedProducts(products.slice(offset, offset + productsPerPage));
    setPageCount(Math.ceil(products.length / productsPerPage));
    setCurrentPage(offset / productsPerPage);
  }, [products, offset, productsPerPage]);

  const setNextPage = () => {
    setOffset(offset + productsPerPage);
  };

  const setPrevPage = () => {
    setOffset(offset - productsPerPage);
  };

  const filterValues = (value: string) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase()),
    );

    setOffset(0);
    setPaginatedProducts(filtered.slice(offset, offset + productsPerPage));
    setPageCount(Math.ceil(filtered.length / productsPerPage));
    setCurrentPage(offset / productsPerPage);
  };

  return {
    paginatedProducts,
    pageCount,
    currentPage,
    setPaginatedProducts,
    setNextPage,
    setPrevPage,
    filterValues,
  };
};

export default usePagination;
