import React, { Dispatch, SetStateAction } from "react";

import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IProduct } from "@/lib/types";



interface PropsType {
  srNo: number;
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  setUpdateTable: Dispatch<SetStateAction<boolean>>;
  product: IProduct;
}

const ProductRow = ({
  srNo,
  setOpenPopup,
  setUpdateTable,
  product,
}: PropsType) => {


  return (
    <tr>
      <td>
        <div>{srNo}</div>
      </td>
      <td className="py-2 flex items-center justify-center">
        <Image
          src={product.imgSrc}
          width={40}
          height={40}
          alt="Product_image"
        />
      </td>
      <td>
        <div>{product.name}</div>
      </td>
      <td>{product.price}</td>
      <td>{product.brand}</td>
      <td>{product.category}</td>
      <td>{product.description}</td>
      <td>{product.stock}</td>
      <td>
        <div className="text-2xl flex items-center justify-center gap-2 text-gray-600">
          <CiEdit
            className="cursor-pointer hover:text-black"
            onClick={() => {
              setOpenPopup(true);
              setUpdateTable(true);
            }}
          />
          <RiDeleteBin5Line
            className="text-[20px] cursor-pointer hover:text-red-600"
            onClick={() => {}}
          />
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
