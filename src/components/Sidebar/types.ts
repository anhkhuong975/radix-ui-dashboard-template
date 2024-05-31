import {ReactNode} from "react";

export interface SidebarProps {
  username?: string;
  description?: string;
  setExpand?: (val: boolean) => void;
}

export interface MenuStructure {
  groupName?: ReactNode;
  icon?: ReactNode; // https://lucide.dev/icons/
  children?: Array<{
    id: string;
    title: ReactNode;
    icon: ReactNode; // https://lucide.dev/icons/
    link?: string;
  }>;
}
