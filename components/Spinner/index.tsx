"use client";

import { BallTriangle } from "react-loader-spinner";

type Props = {
  fullHeight?: boolean;
};

export const Spinner = ({ fullHeight }: Props) => {
  return (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#29cbe7"
      ariaLabel="ball-triangle-loading"
      wrapperStyle={{
        display: "flex",
        height: fullHeight ? "unset" : "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
      wrapperClass=""
    />
  );
};
