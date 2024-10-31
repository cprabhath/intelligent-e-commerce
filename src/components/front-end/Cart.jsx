import { RxCross1 } from "react-icons/rx";
import CartProduct from "./CartProduct";
import { useState } from "react";

const Cart = ({ setShowCart }) => {


  const [isOpen, setIsOpen] = useState(true)

  const products = [
    {
      id: 1,
      img: "/images/product-1.jpg",
      title: "Product 1",
      price: 100,
      quantity: 1,
    },
    {
      id: 2,
      img: "/images/product-2.jpg",
      title: "Product 2",
      price: 200,
      quantity: 1,
    },
    {
      id: 3,
      img: "/images/product-3.jpg",
      title: "Product 3",
      price: 300,
      quantity: 1,
    },
  ];

  const getTotal = () => {
    let total = 0;
    products.forEach((item) => (total = total + item.price * item.quantity));
    return total;
  };

  return (
    <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-scroll">
      <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6 animate-slideIn">
        <RxCross1
          className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
          onClick={() => setShowCart(false)}
        />
        <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">
          Your Cart
        </h3>

        <div className="mt-6 space-y-2">
          {products?.map((item) => (
            <CartProduct
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>

        <div className="flex justify-between items-center font-medium text-xl py-4">
          <p>Total:</p>
          <p>${getTotal()}.00</p>
        </div>

        <button className="bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-gray-900 mb-4 mt-4">
          View Cart
        </button>
        <button className="bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-gray-900">
          CheckOut
        </button>
      </div>
    </div>
  );
};

export default Cart;
