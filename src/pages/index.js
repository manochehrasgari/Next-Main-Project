import Layout from "@/containers/Layout";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

const HomePage = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <div className="container mx-auto lg:max-w-screen-xl min-h-screen">
        <div className="flex justify-center text-2xl mt-10">
          سلام {user ? user.name : "کاربر گرامی"} به Next-App خوش آمدی
        </div>
        <div className="mt-10 text-3xl font-bold flex justify-center">
         <Link href="/blogs">
         رفتن به صفحه بلاگ ها
         </Link>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
