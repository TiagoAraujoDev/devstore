import { ReactNode } from "react";

import { Header } from "~/components/header";

export default function StoreLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
