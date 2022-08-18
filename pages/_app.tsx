import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import GlobalStyles from "src/styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <GlobalStyles />
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;
