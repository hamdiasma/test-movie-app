import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="grid-layout">
      <Header />
      <main className="flex justify-center  px-8 pb-10">
        <div className="container ">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
