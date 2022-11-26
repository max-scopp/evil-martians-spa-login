import React from "react";
import { BaseLayout } from "./BaseLayout";

type BareLayoutProps = {
  className?: string;
  children: React.ReactNode;
};

export const BareLayout = ({ className, children }: BareLayoutProps) => {
  return (
    <BaseLayout layout="bare" className={className}>
      {children}
    </BaseLayout>
  );
};
