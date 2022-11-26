import classNames from "classnames";
import React from "react";

import styles from "./Alert.module.scss";

type AlertVariants = "error" | "warning" | "info";

type MessageProps = {
  condition?: boolean;
  variant?: AlertVariants;
  children: React.ReactNode;
};

export const Alert = ({
  condition,
  variant = "error",
  children,
}: MessageProps) => {
  if (typeof condition === "undefined" || Boolean(condition)) {
    return (
      <div
        role="alert"
        className={classNames(styles.alert, styles[`alertVariant_${variant}`])}
      >
        {children}
      </div>
    );
  }

  return <></>;
};
