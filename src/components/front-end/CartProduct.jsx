import { RxCross1 } from "react-icons/rx";

const CartProduct = ({ id, img, title, price, quantity }) => {

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img className="h-[80px]" src={img} alt={title} />
        <div className="space-y-2">
          <h3 className="font-medium">{title}</h3>
          <p className="text-gray-600 text-[14px]">
            {quantity} x ${price}.00
          </p>
        </div>
      </div>

      <RxCross1
        className="cursor-pointer"
        onClick={() => {}}
      />
    </div>
  );
};

export default CartProduct;
