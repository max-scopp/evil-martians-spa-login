import classNames from "classnames";
import React from "react";
import styles from "./layouts.module.scss";

type LayoutKinds = "bare" | "minimal" | "standard";

type BaseLayoutProps = {
  className?: string;
  children?: React.ReactNode;
  layout: LayoutKinds;
};

export const BaseLayout = ({
  children,
  layout,
  className,
}: BaseLayoutProps) => {
  return (
    <div className={classNames(styles[layout], className)}>{children}</div>
  );
};
