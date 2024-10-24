import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import SubmitOrder from "./SubmitOrder";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const [isSubmitOrderAvailable, setIsSubmitOrderAvailable] = useState(false);
  const [isDataSubmitting, setIsDataSubmitting] = useState(false);
  const [wasDataSendingSuccessful, setWasDataSendingSuccessful] =
    useState(false);

  const hasItems = cartContext.items && cartContext.items.length > 0;
  const totalAmount = `$${Math.abs(cartContext.totalAmount || 0).toFixed(2)}`;

  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsSubmitOrderAvailable(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsDataSubmitting(true);

    await fetch(
      "https://react-http-d6e41-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedMeals: cartContext.items,
        }),
      }
    );

    setIsDataSubmitting(false);
    setWasDataSendingSuccessful(true);
    cartContext.clearCart();
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items && cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div className={styles.total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      {isSubmitOrderAvailable && (
        <SubmitOrder
          onSubmit={submitOrderHandler}
          onCancel={props.onHideCart}
        />
      )}

      {!isSubmitOrderAvailable && (
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={props.onHideCart}>
            Закрыть
          </button>
          {hasItems && (
            <button className={styles.button} onClick={orderHandler}>
              Заказать
            </button>
          )}
        </div>
      )}
    </>
  );

  const dataSubmittingModalCartContent = <p>Отправка данных заказа...</p>;

  const dataWasSubmittedCartModalContent = (
    <>
      <p>Ваш заказ успешно отправлен!</p>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Закрыть
        </button>
      </div>
    </>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {!isDataSubmitting && !wasDataSendingSuccessful && cartModalContent}
      {isDataSubmitting && dataSubmittingModalCartContent}
      {wasDataSendingSuccessful && dataWasSubmittedCartModalContent}
    </Modal>
  );
};

export default Cart;
