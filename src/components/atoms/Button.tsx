import React, { FC } from "react";

interface IProps {
  value: string;
  loading: boolean;
  [key: string]: any;
}
const Button: FC<IProps> = ({ value, loading, ...props }) => {
  return (
    <button {...props} disabled={loading}>
      {loading ? "Loading..." : value}
    </button>
  );
};

export default Button;
