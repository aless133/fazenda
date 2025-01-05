"use client";

import { Button } from "@/components/ui/button";
import { AppContextProvider } from "@/context";
import { IUser } from "@/types";
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

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
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ error, resetErrorBoundary }) => {
              return (
                <div className="text-center my-40">
                  <div className="my-4">Упс. Произошла ошибка!</div>
                  <div className="my-4 text-destructive">{error.message}</div>
                  <div className="my-4">
                    <Button onClick={() => resetErrorBoundary()}>Попробовать еще раз</Button>
                  </div>
                </div>
              );
            }}
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
