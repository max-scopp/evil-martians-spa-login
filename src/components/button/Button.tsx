import classNames from "classnames";
import styles from "./Button.module.scss";

export const Button = (props: JSX.IntrinsicElements["button"]) => {
  return (
    <button {...props} className={classNames(styles.button, props.className)} />
  );
};
