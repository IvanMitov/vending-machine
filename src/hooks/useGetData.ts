
import { useEffect, useState } from "react";
import { IProduct } from "../components/product/Product";
import { IDenomination } from "../components/denomination/Denomination";

export const useGetData = () => {
  const [loadingProducts, setLoadingProducts] = useState<boolean>(false);
  const [loadingDenominations, setLoadingDenominations] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[] | undefined>();
  const [denominations, setDenominations] = useState<IDenomination[] | undefined>();

  const fetchData = async (url: string) => {
    const responce = fetch(url).then(res => res.json()).catch(err => {
      setError(true);
    });
    const data = await responce;
    setError(false);
    return data;
  };

  const getProducts = async () => {
    setLoadingProducts(true);
    const data: IProduct[] = await fetchData("./data/products.json");
    setLoadingProducts(false);
    if (!data) return;
    setProducts(data);
  };

  const getDenominations = async () => {
    setLoadingDenominations(true);
    const data: IDenomination[] = await fetchData("./data/denominations.json");
    setLoadingDenominations(false);
    if (!data) return;
    setDenominations(data);
  };

  useEffect(() => {
    getProducts();
    getDenominations();
  }, []);

  return {
    products,
    denominations,
    loadingDenominations,
    loadingProducts,
    error
  };
};
