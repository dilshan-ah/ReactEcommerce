import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const DataContext = createContext();

const Context = ({children}) => {

  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalCost,setTotalCost] = useState(0);

  const [userState, setUserState] = useState(null);


  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setLoading(false);
      });
  }, []);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserState(user);
    });
    return () => unsubscribe();
  }, []);

  const handleAddToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      const modifiedData = {
        ...exist,
        quantity: exist.quantity + 1,
        totalPrice: exist.totalPrice + product.price,
      };
      const othersProduct = cart.filter((item) => item.id !== product.id);
      setCart([...othersProduct, modifiedData]);
    } else {
      const modifiedProduct = {
        ...product,
        quantity: 1,
        totalPrice: product.price,
      };
      setCart([...cart, modifiedProduct]);
    }
    
  };

  useEffect (() => {
    if (cart.length > 0) {
   const total = cart.reduce((acc, item) => {
     return acc + item.totalPrice;
   },0);
   
   setTotalCost(total);
   }
 },[ cart]);
 console.log("totalCost", totalCost);


  const info = {
    allProducts,
    setAllProducts,
    loading,
    setLoading,
    userState,
    cart,
    setCart,
    setUserState,
    handleAddToCart,
    totalCost,
    setTotalCost
  }

  return <DataContext.Provider value={info}>{children}</DataContext.Provider>
}

export default Context