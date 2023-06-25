import { AdjustmentsIcon } from "@heroicons/react/outline";

const SortDesktop = () => {
    return ( 
        <div className="hidden md:block md:col-span-9">
        <div className="bg-white rounded-3xl px-4 flex items-center">
          <div className="flex items-center">
            <AdjustmentsIcon className="w-6 h-6 ml-2" />
            <span className="ml-8">مرتب سازی :</span>
          </div>
          <ul className="flex gap-x-4">
            <li className="py-4 cursor-pointer text-gray-700">
              پربازدید ترین
            </li>
            <li className="py-4 cursor-pointer text-gray-700">محبوب ترین</li>
            <li className="py-4 cursor-pointer text-gray-700">جدید ترین</li>
          </ul>
        </div>
      </div>
     );
}
 
export default SortDesktop;