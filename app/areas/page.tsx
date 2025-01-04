"use client";
import { useEffect, useState } from "react";
import {
  useQuery,
  // useMutation,
  // useQueryClient,
  // QueryClient,
  // QueryClientProvider,
} from "@tanstack/react-query";

export default function Page() {

  const { isPending, error, data: areas } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/TanStack/query').then((res) =>
        res.json(),
      ),
  })

  if (isPending) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message



  return (
    <>
      <pre>{JSON.stringify(areas, null, 2)}</pre>
    </>
  );
}
