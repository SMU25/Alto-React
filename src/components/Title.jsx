import React from "react";
import classNames from "classnames";

export const Title = ({ className, children }) => {
  return (
    <h2
      className={classNames(
        "text-3xl leading-9 text-center tracking-[1.5px]",
        "360:tracking-[2.5px]",
        "545:text-5xl 545:leading-[3.75rem]",
        "840:text-7xl 840:leading-[5rem]",
        className
      )}
    >
      {children}
    </h2>
  );
};
