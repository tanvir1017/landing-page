export type T_MenuColumn = {
  title: string;
  description: string;
  icon: string;
  href: string;
};

export type T_MenuItem = {
  id: string;
  label: string;
  href?: string;
  type?: string;
  columns?: T_MenuColumn[];
};

export type T_Deal = {
  dealId: string;
  customer: string;
  email: string;
  product: string;
  dealValue: string;
  closeDate: string; // e.g. “2024‑06‑15”
  status: "Complete" | "Pending";
  avatar: string; // URL string
};

export interface Session {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  expiresAt: Date;
  token: string;
  ipAddress?: string | null;
  userAgent?: string | null;
}

export interface User {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  emailVerified: boolean;
  name: string;
  image?: string | null;
}

export interface SessionContext {
  session: Session | null;
  user: User | null;
}
