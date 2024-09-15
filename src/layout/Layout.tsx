import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
interface IProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const Layout: React.FC<IProps> = ({ children, title, description }) => {
  return (
    <div className="grid-layout">
      <Header />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <main className="flex justify-center  px-8 pb-10">
        <div className="container ">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
