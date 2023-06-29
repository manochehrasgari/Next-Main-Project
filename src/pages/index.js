import Layout from "@/containers/Layout";
import { useAuth } from "@/context/AuthContext";

const HomePage = () => {
    const {user} = useAuth()
    return ( 
        <Layout>
        <div className="container mx-auto lg:max-w-screen-xl min-h-screen">
           سلام {user&& user.name} به Next-App خوش آمدی
        </div>
        </Layout>
     );
}
 
export default HomePage;