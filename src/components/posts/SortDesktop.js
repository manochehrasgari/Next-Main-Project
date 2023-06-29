import { routerPush } from "@/utils/routerPush";
import { AdjustmentsIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useState } from "react";

const SortDesktop = () => {
  const router = useRouter();
  const [sort, setSort] = useState(router.query.sort || "newest");

  const sortOptions = [
    { label: "پربازدید ترین", id: "most" },
    { label: "محبوب ترین", id: "popular" },
    { label: "جدید ترین", id: "newest" },
  ];

  const sortHandler = (id) => {
    setSort(id);
    router.query.sort = id;
    routerPush(router);
  };

  return (
    <div className="hidden md:block md:col-span-9">
      <div className="bg-white rounded-3xl px-4 flex items-center">
        <div className="flex items-center">
          <AdjustmentsIcon className="w-6 h-6 ml-2" />
          <span className="ml-8">مرتب سازی :</span>
        </div>
        <ul className="flex gap-x-4">
          {sortOptions.map((item) => {
            return (
             
              <li
                onClick={() => sortHandler(item.id)}
                key={item.id}
                className={`py-4 cursor-pointer relative text-gray-700 ${item.id === sort ? 'text-purple-700 font-bold' : ''}`}
              >
                {item.label}
              </li>
             
             
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SortDesktop;
