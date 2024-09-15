import Layout from "../../layout/Layout";
import React from "react";
import Anchor from "../atoms/Anchor";

function NotFound() {
  return (
    <Layout title="404" description="page not found">
      <div className="flex flex-col h-full items-center justify-center gap-8">
        <strong className="text-light text-[30px]">404</strong>
        <p className="text-light text-[30px]">Page Not Found!</p>
        <Anchor
          to="/"
          className="bg-primary px-10 py-3 rounded-lg  text-light  w-[150px] flex justify-center"
        >
          go home
        </Anchor>
      </div>
    </Layout>
  );
}

export default NotFound;
