import { ReactElement, useContext, useState } from "react";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

type Props = {
  children: ReactElement;
};

const QueryInit = ({ children }: Props) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 20000,
            retry: 2,
          },
        },
        queryCache: new QueryCache({
          onError: (error) => console.log(error),
        }),
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryInit;
