import axios from "axios";
import queryString from "query-string";
import CategoryMobile from "../../components/posts/CategoryMobile";
import CategoryDesktop from "../../components/posts/CategoryDesktop";
import SortDesktop from "../../components/posts/SortDesktop";
import PostList from "../../components/posts/PostList";
import Layout from "../../containers/Layout";

export default function CategorySlug({ blogs, category }) {
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
          <div className="md:col-span-9 grid grid-cols-6 gap-8 max-h-[350px] ">
            <PostList blogs={blogs.docs} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  const { data: result } = await axios.get(
    `http://localhost:5000/api/posts?${queryString.stringify(query)}`
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
