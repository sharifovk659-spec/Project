export interface NavLink {
  label: string;
  href: string;
}

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}
