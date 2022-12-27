import Layout from "../Components/Layout/Layout";
import AuthProvider from "../context/Authprovider";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </AuthProvider>
    </>
  );
}
