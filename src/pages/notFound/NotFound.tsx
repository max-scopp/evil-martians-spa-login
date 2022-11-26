import { Link } from "react-router-dom";
import { Button } from "../../components";
import { BareLayout } from "../../layouts";
import styles from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <BareLayout className={styles.notFoundContainer}>
      <main>
        <h1>Oh no!</h1>
        <h2 className="sub">The requested page does not exist.</h2>

        <Link to="/">
          <Button>Go home</Button>
        </Link>
      </main>
    </BareLayout>
  );
};
