import classNames from "classnames";
import React from "react";
import styles from "./Card.module.scss";

type CardProps<
  Tag extends keyof JSX.IntrinsicElements = keyof JSX.IntrinsicElements
> = {
  [propertyName in keyof JSX.IntrinsicElements[Tag]]: JSX.IntrinsicElements[Tag][propertyName];
} & {
  className?: string;
  children?: React.ReactNode;
  as?: Tag;
};

export const Card = ({
  children,
  className,
  as = "div",
  ...additionalProps
}: CardProps) => {
  return React.createElement(as, {
    ...additionalProps,
    className: classNames(styles.card, className),
    children,
  });
};
