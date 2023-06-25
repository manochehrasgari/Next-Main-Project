import Link from "next/link";


const Header = () => {


  return (
    <header className={`bg-white shadow-md py-4 mb-6 sticky top-0 z-40`}>
      <div className='container mx-auto xl:max-w-screen-xl px-4 md:px-0 transition-all'>
        <nav className="flex justify-between">
          <ul className="flex items-center gap-x-5">
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blogs">
               Blogs
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-x-4">
            {/* {user ? (
              <> */}
                {/* <button
                  className="bg-red-600 px-2 py-1 rounded text-red-100"
                  onClick={() => dispatch(signout())}
                >
                  خروج
                </button> */}
                <Link href="/profile">
                  
                    Profile - <span className="text-sm">منوچهر</span>
                  
                </Link>
              {/* </>
            ) : (
              <> */}
                <Link href="/signup">
                  ثبت نام
                </Link>
                <Link href="/signin">
                ورود
                </Link>
              {/* </>
            )} */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
