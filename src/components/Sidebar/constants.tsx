import {MenuStructure} from "@/components/Sidebar/types";
import {Import, LayoutDashboard, Package, PackagePlus, PackageSearch, ReceiptText, ScrollText,} from "lucide-react";

export const MOCK_MENU: Array<MenuStructure> = [
  {
    groupName: "DASHBOARD",
    icon: <LayoutDashboard/>,
    children: [
      {
        id: "dashboard",
        title: "Summary",
        icon: <LayoutDashboard/>,
        link: "/#",
      },
    ],
  },
  {
    groupName: "PRODUCT",
    icon: <Package/>,
    children: [
      {
        id: "list-product",
        title: "List products",
        link: "/#",
        icon: <PackageSearch/>,
      },
      {
        id: "import-product",
        title: "Import product",
        link: "/#",
        icon: <Import/>,
      },
    ],
  },
  {
    groupName: "ORDER",
    icon: <ScrollText/>,
    children: [
      {
        id: "order-list",
        title: "List order",
        link: "/#",
        icon: <ReceiptText/>,
      },
      {
        id: "new-order",
        title: "Create order",
        link: "/#",
        icon: <PackagePlus/>,
      },
    ],
  },
];
