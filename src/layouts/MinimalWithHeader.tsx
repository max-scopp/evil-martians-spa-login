import React from "react";
import { Header } from "../components";
import { BaseLayout } from "./BaseLayout";

type WithHeaderProps = {
  className?: string;
  children: React.ReactNode;
};

export const MinimalWithHeader = ({ className, children }: WithHeaderProps) => {
  return (
    <BaseLayout layout="minimal" className={className}>
      <Header />
      <main>{children}</main>
    </BaseLayout>
  );
};
