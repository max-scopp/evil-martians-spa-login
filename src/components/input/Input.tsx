import classNames from "classnames";
import styles from "./Input.module.scss";

export type InputProps = JSX.IntrinsicElements["input"] & {
  label?: string;
};

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <>
      {!label ? (
        <></>
      ) : (
        <label htmlFor={props.id} className={styles.label}>
          {label}
        </label>
      )}
      <input {...props} className={classNames(styles.input, props.className)} />
    </>
  );
};
