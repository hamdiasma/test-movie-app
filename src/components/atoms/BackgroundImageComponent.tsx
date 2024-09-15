import React, { FC } from "react";

interface IProps {
  children?: React.ReactNode;
  src: string;
  height?: number;
}

const BackgroundImageComponent: FC<IProps> = ({
  children,
  src,
  height = 400,
}) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${src})`,
          height: `${height}px`,
          backgroundPosition: "center",
        }}
      >
        <div className="absolute h-full w-full bg-black opacity-50"></div>
        {children}
      </div>
    </>
  );
};

export default BackgroundImageComponent;
