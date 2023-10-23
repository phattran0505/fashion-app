import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  useEffect(() => {
    const newTotal = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    },0);
    setTotal(newTotal)  
  }, [cart]);
  // add
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItems = cart.find((cartItem) => {
      return cartItem.id === id;
    });
    if (cartItems) {
      const newCarts = [...cart].map((newCart) => {
        if (newCart.id === id) {
          return { ...newCart, amount: cartItems.amount + 1 };
        } else {
          return newCart;
        }
      });
      setCart(newCarts);
    } else {
      setCart([...cart, newItem]);
    }
  };
  // remove
  const removeProducts = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };
  // clear
  const clearProducts = () => {
    setCart([]);
  };
  // increase
  const increaseProduct = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };
  // decrease
  const decreaseProduct = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (cartItem.amount < 2) {
      removeProducts(id);
    }
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        itemAmount,
        total,
        addToCart,
        removeProducts,
        clearProducts,
        increaseProduct,
        decreaseProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
