import axios from "axios";
import PostList from "../../components/posts/PostList";
import CategoryDesktop from "../../components/posts/CategoryDesktop";
import CategoryMobile from "../../components/posts/CategoryMobile";
import SortDesktop from "../../components/posts/SortDesktop";
import Layout from "../../containers/Layout";

export default function BlogPage({ blogs, category }) {
  return (
    <Layout>
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
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const { data: result } = await axios.get(
    "http://localhost:5000/api/posts?limit=6&page=1"
  );

  const { data } = result;
  const { data: category } = await axios.get(
    "http://localhost:5000/api/post-category"
  );

  return {
    props: {
      blogs: data,
      category,
    },
  };
}
