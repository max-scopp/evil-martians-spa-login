import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderNavigationItem.module.scss";

export const HeaderNavigationItem = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link className={styles.navigationItem} to={to}>
      {children}
    </Link>
  </li>
);
