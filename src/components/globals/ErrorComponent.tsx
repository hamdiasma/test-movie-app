import React, { FC } from "react";

interface IProps {
  msg: string;
}
const ErrorComponent: FC<IProps> = ({ msg }) => {
  return (
    <p className="flex justify-center size-20 my-10 text-red w-full font-extrabold">
      {msg}
    </p>
  );
};

export default ErrorComponent;
