import { useContext } from "react";
import { AcmeSessionContext } from "../session/contexts/session.context";
import { UserProfile } from "./types/UserProfile";

export const useProfiles = () => {
  const session = useContext(AcmeSessionContext);

  return {
    getUser(username: string): UserProfile {
      const [firstName, lastName = ""] = username.split("-");

      return {
        username,
        firstName,
        lastName,
        eMail: `${username}@acme.org`,
      };
    },
    getCurrentUser(): UserProfile | null {
      if (!session?.username) {
        return null;
      }

      return this.getUser(session.username);
    },
  };
};
