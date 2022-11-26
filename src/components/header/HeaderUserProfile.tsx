import styles from "./HeaderUserProfile.module.scss";

import { useCallback } from "react";
import { useSession } from "../../session/hooks/useSession";
import { UserProfile } from "../../userProfiles/types/UserProfile";
import { useProfileImage } from "../../userProfiles/useProfileImage";

type HeaderUserProfileProps = {
  user: null | UserProfile;
};

export const HeaderUserProfile = ({ user }: HeaderUserProfileProps) => {
  const session = useSession();
  const userProfileImageUrl = useProfileImage(user);

  const handleClickOnUserProfile = useCallback(() => {
    session.invalidate();
  }, []);

  if (!user) {
    return <></>;
  }

  return (
    <div className={styles.headerProfile} onClick={handleClickOnUserProfile}>
      <span className={styles.userFullName}>
        {user.firstName} {user.lastName}
      </span>
      <div className={styles.userImageContainer}>
        <img src={userProfileImageUrl} alt={`Profile image of ${user.eMail}`} />
      </div>
    </div>
  );
};
