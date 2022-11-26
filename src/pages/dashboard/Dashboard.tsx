import { Card } from "../../components";
import { StandardLayout } from "../../layouts";
import styles from "./Dashboard.module.scss";

export const Dashboard = () => {
  return (
    <StandardLayout>
      <Card as="nav" className={styles.sidebar}></Card>
      <Card as="main" className={styles.mainContent}>
        <h1>Dashboard</h1>
        <h2 className="sub">You have {4} tasks at hand today.</h2>
      </Card>
    </StandardLayout>
  );
};
