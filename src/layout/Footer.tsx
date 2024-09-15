import Anchor from "../components/atoms/Anchor";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Search",
      to: "/search",
    },
  ];
  return (
    <footer className="w-full bg-primary px-10">
      <div className="container flex items-center ">
        {links.map((link) => (
          <Anchor
            to={link.to}
            className="text-light p-2"
            key={link.name}
            name={link.name}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
