import React, { FC } from "react";
import { Link } from "react-router-dom";

interface IProps {
  name?: string;
  to: string;
  children?: React.ReactNode;
  className?: string;
}
const Anchor: FC<IProps> = ({ name, to, children, className }) => {
  return (
    <Link to={to} className={className}>
      {name ?? children}
    </Link>
  );
};

export default Anchor;
