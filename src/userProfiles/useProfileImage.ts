import md5 from "md5";
import { useEffect, useState } from "react";
import { UserProfile } from "./types/UserProfile";

const fallbackImage =
  "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp";

export const useProfileImage = (user: null | UserProfile) => {
  const [imageUrl, setImageUrl] = useState<null | string>(null);

  useEffect(() => {
    if (!user?.eMail) {
      return;
    }

    const imageUrl = new URL("https://www.gravatar.com/avatar/");
    imageUrl.pathname += md5(user.eMail);
    imageUrl.searchParams.set("d", "retro");

    setImageUrl(imageUrl.toString());
  }, [user]);

  return imageUrl || fallbackImage;
};
