import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

export function Layout({ children }: { children: React.ReactNodeLike }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Layout;
