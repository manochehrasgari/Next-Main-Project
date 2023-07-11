import PostList from "@/components/posts/PostList";
import CategoryDesktop from "@/components/posts/CategoryDesktop";
import CategoryMobile from "@/components/posts/CategoryMobile";
import SortDesktop from "@/components/posts/SortDesktop";
import Layout from "@/containers/Layout";
import http from "@/services/HttpService";
import queryString from "query-string";
import Pagination from "@/common/Pagination";
import Head from "next/head";

export default function BlogPage({ blogs, category }) {
  return (
    <Layout>
      <Head>
        <title>بلاگ ها</title>
      </Head>
      <div className="container mx-auto xl:max-w-screen-xl">
        <div className="p-4 grid gap-2 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)]">
          <CategoryMobile category={category} />
          <div className="hidden md:block md:col-span-3 row-span-2">
            <CategoryDesktop category={category} />
          </div>
          <SortDesktop />
          <div className="flex md:hidden"></div>
          {/* blog */}
          <div className="md:col-span-9 grid grid-cols-6 gap-8 ">
            <PostList blogs={blogs.docs} />
            <div className="col-span-6 flex justify-center">
              <Pagination blogs={blogs} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req, query }) {
  const { data: result } = await http.get(
    `/posts?${queryString.stringify(query)}&limit=6`,
    {
      withCredentials: true,
      headers: {
        Cookie: req.headers.cookie || "",
      },
    }
  );

  const { data } = result;
  const { data: category } = await http.get("/post-category");

  return {
    props: {
      blogs: data,
      category,
    },
  };
}
