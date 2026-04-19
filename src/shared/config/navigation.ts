export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export const navigationItems: NavItem[] = [
  { label: "Home", href: "/", icon: "House" },
  { label: "About", href: "/about", icon: "User" },
  { label: "Portfolio", href: "/portfolio", icon: "Briefcase" },
  { label: "Contact", href: "/contact", icon: "Mail" },
];
