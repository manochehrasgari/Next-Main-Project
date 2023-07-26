import { Toaster } from "react-hot-toast";
import "../../styles/globals.css";
import Head from "next/head";
import { wrapper } from "src/redux/store";
import { useStore } from "react-redux";
import { useEffect } from "react";
import { userLoad } from "src/redux/user/userActions";

function MyApp({ Component, pageProps }) {
  const store = useStore();
  useEffect(() => {
    userLoad(store);
  }, []);
  return (
    <>
      <Head>
        <title>بلاگ</title>
      </Head>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}

export default wrapper.withRedux(MyApp);
