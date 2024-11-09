"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            gcTime: 60 * 60 * 1000,
            retry: 1,
            refetchOnWindowFocus: false,
          },
          mutations: {
            retry: 1,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      {process.env.NODE_ENV === "development" && (
        <div>
          <ReactQueryDevtools />
        </div>
      )}
    </QueryClientProvider>
  );
}

const ReactQueryDevtools = async () => {
  if (process.env.NODE_ENV === "development") {
    const { ReactQueryDevtools } = await import("@tanstack/react-query-devtools");
    return <ReactQueryDevtools initialIsOpen={false} />;
  }
  return null;
};
