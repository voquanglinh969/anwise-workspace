export interface NavItem {
  label: string;
  href: string;
}

export interface NavCategory {
  id: string;
  title: string;
  items: NavItem[];
}

export interface MainNavItem {
  label: string;
  href: string;
}

export interface CategoryWithIcon {
  id: string;
  label: string;
  iconName: string; // Used to map to Lucide icons
  href: string;
}

export interface FooterColumn {
  title: string;
  items: NavItem[];
}
