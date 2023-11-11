import { useLoaderData } from "react-router-dom";
import NoDataFoundPage from "../../Components/NoDataFoundPage/NoDataFoundPage";
import SingleCart from "../../Components/SingleCart.jsx/SingleCart";
import { useState } from "react";

const MyCart = () => {
  const cartData = useLoaderData();
  const [carts, setCarts] = useState(cartData);
  const handleCart = (filterCarts) => {
    setCarts(filterCarts);
  };

  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
      {carts.length > 0 ? (
        carts.map((cart) => (
          <SingleCart
            carts={carts}
            handleCart={handleCart}
            cartData={cartData}
            key={cart._id}
            cart={cart}
          ></SingleCart>
        ))
      ) : (
        <NoDataFoundPage></NoDataFoundPage>
      )}
    </div>
  );
};

export default MyCart;
