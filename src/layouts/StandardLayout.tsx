import React from "react";
import { Header } from "../components";
import { BaseLayout } from "./BaseLayout";

type StandardLayoutProps = {
  className?: string;
  children: React.ReactNode;
};

export const StandardLayout = ({
  className,
  children,
}: StandardLayoutProps) => {
  return (
    <BaseLayout layout="standard" className={className}>
      <Header />
      {children}
    </BaseLayout>
  );
};
