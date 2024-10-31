import React, { Dispatch, SetStateAction } from "react";

import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IBrands } from "@/lib/types";
import { redirect } from "next/navigation";

interface PropsType {
  srNo: number;
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  setUpdateTable: Dispatch<SetStateAction<boolean>>;
  brands: IBrands;
}

const BrandsRow = ({
  srNo,
  setOpenPopup,
  setUpdateTable,
  brands,
}: PropsType) => {

  return (
    <tr>
      <td>
        <div>{srNo}</div>
      </td>
      <td className="py-2 flex items-center justify-center">
        <Image
          src={brands.imgSrc}
          width={60}
          height={60}
          alt="Product_image"
        />
      </td>
      <td>
        <div>{brands.BrandName}</div>
      </td>
      <td>{brands.description}</td>
      <td>{brands.RegisterDate}</td>
      <td>
        <div className="text-2xl flex items-center justify-center gap-2 text-gray-600">
          <CiEdit
            className="cursor-pointer hover:text-black"
            onClick={() => {}}
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

export default BrandsRow;
