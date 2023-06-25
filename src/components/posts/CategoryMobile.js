import Link from "next/link";

const CategoryMobile = ({ category }) => {
  return (
    <div className="flex overflow-auto md:hidden ">
      <div className="flex gap-x-4">
        <Link
          className="px-4 py-2 hover:bg-purple-100 whitespace-nowrap text-center cursor-pointer bg-white rounded-2xl"
          href="/blogs"
        >
          همه مقالات
        </Link>
        {category.data.map((item) => {
          return (
            <Link
              key={item._id}
              href={`/blogs/${item.englishTitle}`}
              className="px-4 py-2 hover:bg-purple-100 whitespace-nowrap text-center cursor-pointer bg-white rounded-2xl"
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
