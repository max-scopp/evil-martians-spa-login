import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import acmeLogoDark from "../../assets/logo-dark.svg";
import acmeLogo from "../../assets/logo.svg";
import { Alert, Button, Card, Input } from "../../components";
import { useTheme } from "../../hooks/useTheme";
import { MinimalWithHeader } from "../../layouts";
import { useSession } from "../../session/hooks/useSession";
import styles from "./SignIn.module.scss";

export const SignIn = () => {
  const session = useSession();
  const theme = useTheme();
  const navigate = useNavigate();

  const [error, setError] = useState<null | Error>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    try {
      setLoading(true);
      await session.authenticate(formData);
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <MinimalWithHeader className={styles.pageLayout}>
      <Card as="form" className={styles.signInForm} onSubmit={handleSubmit}>
        <img
          className={styles.formLogo}
          src={theme.mode === "dark" ? acmeLogoDark : acmeLogo}
        />
        <Alert condition={Boolean(error?.message.length)} variant="error">
          {error?.message}
        </Alert>
        <Input
          label="Username"
          type="text"
          id="username"
          name="username"
          disabled={isLoading}
          placeholder="firstname-lastname"
        />
        <Input
          label="Password"
          type="password"
          id="password"
          name="password"
          disabled={isLoading}
          placeholder="s3c9r3_#1"
        />
        <Button disabled={isLoading} className={styles.submitButton}>
          Sign In
        </Button>
      </Card>
      <Link to="/auth/forgot-password" className={styles.forgotPasswordLink}>
        Forgot password?
      </Link>
    </MinimalWithHeader>
  );
};
