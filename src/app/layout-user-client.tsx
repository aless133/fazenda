"use client";

import { AppContextProvider } from '@/context';
import { IUser } from "@/types";

export default function LayoutUserClient({
  children,
  user,
}: Readonly<{
  children: React.ReactNode;
  user:IUser,
}>) {
  return <AppContextProvider user={user}>{children}</AppContextProvider>;
}
