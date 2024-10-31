import React, { Dispatch, SetStateAction } from "react";

import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { ICategory } from "@/lib/types";


export 


interface PropsType {
  srNo: number;
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  setUpdateTable: Dispatch<SetStateAction<boolean>>;
  Category: ICategory;
}

const CategoryRow = ({
  srNo,
  setOpenPopup,
  setUpdateTable,
  Category,
}: PropsType) => {


  return (
    <tr>
      <td>
        <div>{srNo}</div>
      </td>
      <td>
        <div>{Category.categoryName}</div>
      </td>
      <td>{Category.description}</td>
      <td>
        <div className="text-2xl flex items-center justify-center gap-2 text-gray-600 pb-5">
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

export default CategoryRow;
