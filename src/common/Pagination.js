import { routerPush } from "@/utils/routerPush";
import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/router";

const PaginationComponents = ({ blogs }) => {
  const router = useRouter();

  const pageHandler = (e, page) => {
    router.query.page = page;
    routerPush(router);
  };
  return (
    <>
      {blogs.totalPages > 1 && (
        <Pagination
          count={blogs.totalPages}
          onChange={pageHandler}
          color="primary"
          className="col-span-6 flex justify-center"
          dir="ltr"
        />
      )}
    </>
  );
};

export default PaginationComponents;
