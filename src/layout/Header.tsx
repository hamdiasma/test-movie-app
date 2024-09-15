import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import Anchor from "../components/atoms/Anchor";

const Header = () => {
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
    <header className="fixed z-100 flex items-center justify-center p-5  w-full bg-primary h-[64px]">
      <div className="container flex items-center ">
        <Anchor to={"/"} className="p-2">
          <img src={Logo} width={145} height={20} alt="logo" />
        </Anchor>
        {links.map((link) => (
          <Anchor
            to={link.to}
            className="text-light p-2"
            key={link.name}
            name={link.name}
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
