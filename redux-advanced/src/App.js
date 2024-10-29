import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import StatusBarMessage from "./components/UI/StatusBarMessage";
import { getCartData, sendCartData } from "./store/cart-slice";

let isInitialRunning = true;

function App() {
  const isCartVisible = useSelector((state) => state.main.isCartVisible);
  const cart = useSelector((state) => state.cart);
  const statusMessage = useSelector((state) => state.main.statusMessage);

  const dispatchAction = useDispatch();

  useEffect(() => {
    dispatchAction(getCartData());
  }, []);

  useEffect(() => {
    if (isInitialRunning) {
      isInitialRunning = false;
      return;
    }

    if (cart.isCartContentChanged) {
      dispatchAction(sendCartData(cart));
    }
  }, [cart]);

  return (
    <>
      {statusMessage && (
        <StatusBarMessage
          status={statusMessage.status}
          title={statusMessage.title}
          message={statusMessage.message}
        />
      )}
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
