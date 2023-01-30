import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './store/ui-slice';

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart =   useSelector(state => state.cart);

  useEffect(() => {
    const sendCartData = () => {
      dispatch(uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data"
      }));
      const response = fetch("https://hook-http-f2866-default-rtdb.firebaseio.com/cart.json",{
        method: "PUT",
        body: JSON.stringify(cart)
      });
      if (!response.ok) {
        dispatch(uiActions.showNotification({
          status: "error",
          title: "Error!!",
          message: "Sent Cart Data Encountered Error"
        }));
      }
      dispatch(uiActions.showNotification({
        status: "success",
        title: "Success!!",
        message: "Sent Cart Data Successfully"
      }));
    }
  }, [cart])
  
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
