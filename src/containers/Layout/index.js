import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
       <div className="min-h-screen">
        {children}
       </div>
      <Footer />
    </div>
  );
};

export default Layout;
