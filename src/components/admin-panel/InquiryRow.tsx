import React, { Dispatch, SetStateAction } from "react";

import Image from "next/image";
import { BsReply } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Inquiry } from "@/lib/types";



interface PropsType {
  srNo: number;
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  setUpdateTable: Dispatch<SetStateAction<boolean>>;
  inquiry: Inquiry;
}

const InquiryRow = ({
  srNo,
  setOpenPopup,
  setUpdateTable,
  inquiry,
}: PropsType) => {


  return (
    <tr>
      <td>
        <div>{srNo}</div>
      </td>
      <td>
        <div>{inquiry.name}</div>
      </td>
      <td>{inquiry.email}</td>
      <td>{inquiry.phone}</td>
      <td>{inquiry.message}</td>
      <td>{inquiry.date}</td>
      <td>
        <div className="text-2xl flex items-center justify-center gap-2 py-2 text-gray-600">
          <BsReply
            className="cursor-pointer hover:text-black"
            onClick={() => {
                setOpenPopup(true);
                setUpdateTable(true);
            }}
          />
          |
          <RiDeleteBin5Line
            className="text-[20px] cursor-pointer hover:text-red-600"
            onClick={() => {}}
          />
        </div>
      </td>
    </tr>
  );
};

export default InquiryRow;
