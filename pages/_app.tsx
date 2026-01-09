import QueryInit from "@/components/QueryInit";
import ToastProvider from "@/context/ToastContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <QueryInit>
        <Component {...pageProps} />
      </QueryInit>
    </ToastProvider>
  );
}
