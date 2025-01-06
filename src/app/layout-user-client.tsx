"use client";

import { ErrorInfo } from "@/components/error-info";
import { AppContextProvider } from "@/context";
import { IUser } from "@/types";
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

export default function LayoutUserClient({
  children,
  user,
}: Readonly<{
  children: React.ReactNode;
  user: IUser;
}>) {
  return (
    <AppContextProvider user={user}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ error, resetErrorBoundary }) => (
              <ErrorInfo error={error} resetErrorBoundary={resetErrorBoundary} />
            )}
          >
            {/* <Suspense fallback={<div>Loading...</div>}> */}
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            {/* </Suspense> */}
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </AppContextProvider>
  );
}
