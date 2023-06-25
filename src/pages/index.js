import Link from "next/link";
import Layout from "../containers/Layout";

const HomePage = () => {
    return ( 
        <Layout>
        <div className="container mx-auto lg:max-w-screen-xl min-h-screen">
            This is Home page
            <Link href='/blogs'>
                Go to Blog page
            </Link>
        </div>
        </Layout>
     );
}
 
export default HomePage;