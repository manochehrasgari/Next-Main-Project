import Link from "next/link";
import { useRouter } from "next/router";

const CategoryMobile = ({ category }) => {
  const { query } = useRouter();
  return (
    <div className="flex overflow-auto md:hidden ">
      <div className="flex gap-x-4">
        <Link
          className={`px-4 py-2 hover:bg-purple-100 whitespace-nowrap text-center cursor-pointer bg-white rounded-2xl ${
            !query.categorySlug
              ? "bg-purple-200 text-purple-700 hover:bg-purple-500 hover:text-white"
              : ""
          }`}
          href="/blogs"
        >
          همه مقالات
        </Link>
        {category.data.map((item) => {
          return (
            <Link
              key={item._id}
              href={`/blogs/${item.englishTitle}`}
              className={`px-4 py-2 hover:bg-purple-100 whitespace-nowrap text-center cursor-pointer bg-white rounded-2xl ${
                query.categorySlug === item.englishTitle
                  ? "bg-purple-200 text-purple-700 hover:bg-purple-500 hover:text-white"
                  : ""
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMobile;
