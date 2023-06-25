import { ChevronDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from "react";

const CategoryDesktop = ({category}) => {

    const [isOpen, setIsOpen] = useState(true);
    return ( 
        
        <div className="bg-white rounded-3xl overflow-hidden">
          {/* accordian Header */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer p-4 items-center justify-between bg-purple-300 "
          >
            <span>دسته بندی مقالات</span>
            <ChevronDownIcon
              className={`w-6 h-6 stroke-purple-700 transition-all duration-500 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          {/* accordian content */}
          <div
            className={`bg-white ${
              isOpen ? "flex" : "hidden"
            } flex-col rounded-3xl`}
          >
            <Link className="p-4 hover:bg-purple-100 cursor-pointer" href='/blogs'>
              همه مقالات
            </Link>
            {category.data.map((item) => {
              return (
                <Link
                  key={item._id}
                  href={`/blogs/${item.englishTitle}`}
                  className="p-4 hover:bg-purple-100 cursor-pointer"
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      
     );
}
 
export default CategoryDesktop;