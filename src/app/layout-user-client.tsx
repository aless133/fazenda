"use client";

import { AppContextProvider } from "@/context";
import { IUser } from "@/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function LayoutUserClient({
  children,
  user,
}: Readonly<{
  children: React.ReactNode;
  user: IUser;
}>) {
  return (
    <AppContextProvider user={user}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AppContextProvider>
  );
}
