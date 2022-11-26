import { useProfiles } from "../../userProfiles/useProfiles";
import styles from "./Header.module.scss";
import { HeaderNavigationItem } from "./HeaderNavigationItem";
import { HeaderUserProfile } from "./HeaderUserProfile";

export const Header = () => {
  const profiles = useProfiles();

  const currentUser = profiles.getCurrentUser();

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <HeaderNavigationItem to="/">Dashboard</HeaderNavigationItem>
          {/* <HeaderNavigationItem to="/about">About</HeaderNavigationItem>
          <HeaderNavigationItem to="/services">Services</HeaderNavigationItem> */}
          {currentUser ? null : (
            <HeaderNavigationItem to="/auth/sign-in">
              Sign in
            </HeaderNavigationItem>
          )}
        </ul>
      </nav>
      <HeaderUserProfile user={currentUser} />
    </header>
  );
};
