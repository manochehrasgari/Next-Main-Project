import { ClockIcon } from "@heroicons/react/outline";
import Link from "next/link";
import PostInteraction from "./PostInteraction";

const PostList = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog, index) => {
        return (
          <div
            key={index}
            className="bg-white col-span-6 md:col-span-3 lg:col-span-2 p-2 rounded-3xl flex flex-col"
          >
            {/* image blog */}
            <div className="aspect-w-16 aspect-h-9 ">
              <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="rounded-2xl w-full h-full object-center object-cover"
                />
              </Link>
            </div>
            {/* content */}

            <div className="bg-gray-50  p-2 rounded-2xl flex flex-col w-full justify-between flex-1">
              <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
                <h2 className="mb-4 font-bold">{blog.title}</h2>
              </Link>
              {/* blog data */}
              <div>
                {/* blog author-category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img
                      src="/images/saheb.jpg"
                      alt=""
                      className="w-6 h-6 rounded-full ring-2 ring-white ml-2"
                    />
                    <span className="text-sm font-bold text-gray-500">
                      {blog.author.name}
                    </span>
                  </div>
                  <Link href={`/blogs/${blog.category.englishTitle}`}>
                    <span
                      className="text-xs px-2 py-1 rounded-xl bg-blue-100 text-blue-600
                        hover:text-white hover:bg-blue-600 transition-all duration-300 cursor-pointer"
                    >
                      {blog.category.englishTitle}
                    </span>
                  </Link>
                </div>
                {/* blog interaction */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {/* <BookmarkIcon className="w-4 h-4 cursor-pointer stroke-gray-400 ml-1" />
                    <HeartIcon className="w-4 h-4 cursor-pointer stroke-gray-400 ml-1" />
                    <AnnotationIcon className="w-4 h-4 cursor-pointer stroke-gray-400 ml-1" /> */}
                    <PostInteraction post={blog} isSmall/>
                  </div>
                  <div className="flex items-center text-[10px] text-gray-400 font-bold">
                    <ClockIcon className="w-4 h-4 stroke-gray-400 ml-1" />
                    <span className="ml-1">زمان مطالعه:</span>
                    <span className="ml-1 leading-3">شش</span>
                    <span>دقیقه</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PostList;
