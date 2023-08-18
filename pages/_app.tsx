import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import ScollTop from "@/components/layouts/scrollTop";
import AuthorProvider from "@/context/authorContext";
import WalletProvider from "@/context/walletContext";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthorProvider>
      <WalletProvider>
        <div style={{ position: 'relative' }}>
          <Header />
          <Component {...pageProps} />
          <Footer />
          {/* <ScollTop /> */}
        </div>
      </WalletProvider>
    </AuthorProvider>
  );
}
