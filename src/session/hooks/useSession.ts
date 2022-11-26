import { useContext } from "react";
import * as uuid from "uuid";
import { AcmeSessionContext } from "../contexts/session.context";
import { wait } from "../../util/wait";
import { useNavigate } from "react-router-dom";

export const useSession = () => {
  const session = useContext(AcmeSessionContext);
  const navigate = useNavigate();

  return {
    async authenticate(formData: FormData) {
      const username = formData.get("username")?.toString();
      const password = formData.get("password")?.toString();

      await wait(800);

      if (!password) {
        throw new Error("Invalid password");
      }

      if (!username) {
        throw new Error("Invalid username");
      }

      const today = new Date();
      const eightHours = 8 * 60 * 60 * 1000;

      session.update({
        username,
        token: uuid.v4(),
        validUntil: new Date(today.getTime() + eightHours).toISOString(),
      });
    },
    async invalidate() {
      session.update(null);
      navigate("/");
    },
  };
};
