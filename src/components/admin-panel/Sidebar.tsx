"use client";

import { MdDashboard, MdManageAccounts } from "react-icons/md";
import { IoAnalytics, IoSettings } from "react-icons/io5";
import { RiShoppingCartLine, RiAlignJustify, RiCalendarCheckFill, RiDonutChartFill, RiUserFollowLine     } from "react-icons/ri";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  {
    title: "Dashboard",
    icon: <MdDashboard />,
    href: "/admin/dashboard",
  },
  {
    title: "Categories",
    icon: <RiAlignJustify />,
    href: "/admin/dashboard/categories",
  },
  {
    title: "Brands",
    icon: <RiCalendarCheckFill />,
    href: "/admin/dashboard/brands",
  },
  {
    title: "Products",
    icon: <RiShoppingCartLine />,
    href: "/admin/dashboard/products",
  },
  {
    title: "Reports",
    icon: <IoAnalytics />,
    href: "/admin/dashboard/reports",
  },
  {
    title: "Inquiries",
    icon: <RiDonutChartFill />,
    href: "/admin/dashboard/inquiries",
  },
  {
    title: "Admins",
    icon: <MdManageAccounts />,
    href: "/admin/dashboard/admins",
  },
  {
    title: "Customers",
    icon: <RiUserFollowLine />,
    href: "/admin/dashboard/customers",
  },
  {
    title: "Settings",
    icon: <IoSettings />,
    href: "/admin/dashboard/settings",
  },
];

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className="bg-white w-[220px] min-h-screen p-4 shrink-0 flex flex-col">
      <div className="flex items-center gap-4 justify-center">
        <img className="rounded-lg w-32" src="/logo.png" alt="logo" />
      </div>

      <ul className="space-y-4 mt-6">
        {menus.map((menu) => (
          <Link
            key={menu.title}
            href={menu.href}
            className={`flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:bg-[#ffb929] hover:text-white ${
              pathName === menu.href ? "bg-[#ffb929] text-white" : "bg-gray-200"
            }`}
          >
            <div className="text-[20px]">{menu.icon}</div>
            <p>{menu.title}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
