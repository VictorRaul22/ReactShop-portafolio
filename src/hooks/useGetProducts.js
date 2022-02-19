import React from 'react'
import { useEffect, useState } from "react";

function useGetProducts(API) {
  const [products, setProducts] = useState([])
  useEffect(async () => {
    const response = await fetch(API)
    const data = await response.json();
    setProducts(data);

  }, [])
  return products;
}

export default useGetProducts