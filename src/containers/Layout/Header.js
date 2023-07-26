import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "src/redux/user/userActions";

const Header = () => {
  const { user, loading } = useSelector((state) => state.userSignin);
  const dispatch = useDispatch();

  return (
    <header className="bg-white shadow-md py-4 mb-6 sticky top-0 z-40">
      <div
        className={`container mx-auto xl:max-w-screen-xl px-4 md:px-0 transition-all ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <nav className="flex justify-between">
          <ul className="flex items-center gap-x-5">
            <li>
              <Link href="/">خانه</Link>
            </li>
            <li>
              <Link href="/blogs">بلاگ ها</Link>
            </li>
          </ul>
          <div className="flex items-center gap-x-4">
            {user ? (
              <>
                <div>{user.name}</div>
                <Link onClick={() => dispatch(signOut())} href="/signup">
                  خروج
                </Link>
              </>
            ) : (
              <>
                <Link href="/signup">ثبت نام</Link>
                <Link href="/signin">ورود</Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
