interface MenuItemsProps {
  id: number;
  novidade?: any;
  label: string;
  icon?: string;
  link?: string;
  badge?: string;
  badgecolor?: string;
  subItems?: any;
  isHeader?: boolean;
}

const menuItems: Array<MenuItemsProps> = [
  // {
  //     id: 1,
  //     label: "Dashboards",
  //     isHeader : true
  // },
  // {
  //     id: 2,
  //     label: "Sales",
  //     icon: "monitor",
  //     link: "/sales",
  //     badge:"5+",
  //     badgecolor:"badge rounded-pill badge-secondary-subtle"
  // },
  // {
  //     id: 139,
  //     label: "Analytics",
  //     icon: "pie-chart",
  //     link: "/dashboards-analytics"
  // },
  {
    id: 3,
    label: "Applications",
    isHeader: true,
  },
  {
    id: 4,
    label: "Subjects",
    icon: "book",
    link: "/subject",
  },
  {
    id: 5,
    label: "Schedule",
    icon: "calendar",
    link: "/calendar",
  },
  {
    id: 6,
    label: "Library",
    icon: "book-open",
    link: "/library",
  },
  //   {
  //     id: 21,
  //     label: "Pages",
  //     isHeader: true,
  //   },
];

export { menuItems };
