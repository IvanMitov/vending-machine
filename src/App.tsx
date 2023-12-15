import { useState, useCallback, useEffect } from "react";
import { useGetData } from "./hooks/useGetData";
import Header from "./components/header/Header";
import Loader from "./components/loader/Loader";
import Product, { IProduct } from "./components/product/Product";
import Denomination from "./components/denomination/Denomination";
import QuantityCounter from "./components/quantity_counter/QuantityCounter";
import CodeSelector from "./components/code_selector/CodeSelector";
import Output from "./components/output/Output";
import Footer from "./components/footer/Footer";
import SectionWrapper from "./components/section_wrapper/SectionWrapper";
import BalanceStats from "./components/balance_stats/BalanceStats";
import "./App.css";

function App() {
  const [localProducts, setLocalProducts] = useState<IProduct[] | undefined>();
  const [orderedProduct, setOrderedProduct] = useState<IProduct | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [money, setMoney] = useState<number>(0);
  const [warning, setWarning] = useState<string | null>();
  const [change, setChange] = useState<number>(0);

  const { products,
    denominations,
    loadingDenominations,
    loadingProducts,
  } = useGetData();

  useEffect(() => {
    setLocalProducts(products);
  }, [products]);


  const handleCoinClick = useCallback((coins: number) => setMoney(money + coins), [money]);

  const handleCountActionClick = useCallback((increment: boolean) => {
    if (quantity <= 1 && !increment) return;
    setQuantity(quantity => increment ? ++quantity : --quantity);
  }, [quantity]);

  const handleCodeClick = useCallback((product: IProduct) => {
    const changeValue = Math.round((money - product.price * quantity) * 100) / 100;
    if (orderedProduct) {
      setWarning(`Collect your ${orderedProduct.name} first and then make new purchase.`);
    } else if (changeValue < 0) {
      setChange(0);
      setWarning(`Not enough money. Need more ${Math.abs(changeValue).toFixed(2)}`);
    } else if (product.available < quantity) {
      setWarning(`Not enough quantity of ${product.name} ( ${product.available} left )`);
    } else {
      setOrderedProduct(product);
      setLocalProducts(products => products?.map(p =>
        p.id === product.id ? { ...p, available: p.available - quantity } : p)
      );
      resetMachine(changeValue);
    }
  }, [money, quantity, orderedProduct]);

  const handlePickClick = useCallback(() => {
    setOrderedProduct(undefined);
    setChange(0);
    setWarning("");
  }, []);

  const resetMachine = useCallback((changeValue: number) => {
    setMoney(0);
    setQuantity(1);
    setChange(changeValue);
    setWarning("");
  }, []);

  return (
    <div className="app">
      <div className='wrapper'>
        <Header title="Vending Machine" />
        <main className='mainContent'>
          <div>
            <div className='products'>
              {loadingProducts && <Loader />}
              {localProducts?.map((product, index) =>
                <Product key={product.id} product={product} productCode={index + 1}/>)
              }
            </div>
          </div>
          <aside className='sidebar'>
            {loadingDenominations && <Loader />}
            <SectionWrapper title="Coins ( Lv ):" appendDivider>
              <Denomination denominations={denominations} onCoinClick={handleCoinClick} />
              <BalanceStats credits={money} onResetClick={() => resetMachine(change)} />
              {warning && <p className='error m0'>{warning}</p>}
              <QuantityCounter
                quantity={quantity}
                onCountActionClick={handleCountActionClick}
              />
            </SectionWrapper>
            {localProducts && (
              <SectionWrapper title="Select product`s code" appendDivider>
                <CodeSelector
                  products={localProducts}
                  onCodeClick={handleCodeClick}
                />
              </SectionWrapper>
            )}
            <SectionWrapper title="Change:">
              <Output
                change={change}
                orderedProduct={orderedProduct}
                onPickClick={handlePickClick}
              />
            </SectionWrapper>
          </aside>
        </main>
      </div>
      <Footer copyText={`Copyright \u00A9 ${new Date().getFullYear()} Vending Machine`} author="Ivan Mitov" />
    </div>
  );
}

export default App;
