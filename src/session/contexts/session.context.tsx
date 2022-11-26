import React, { createContext, useState } from "react";
import { noop } from "../../util/noop";
import { getSession } from "../getSession";
import { toLocalStorage } from "../../localStorage/toLocalStorage";
import { persistSession } from "../persistSession";

export type Session = {
  username: string;
  token: string;
  validUntil: string;
};

export type AcmeSessionContextValue = Partial<Session> & {
  update: (newSession: Session | null) => void;
};

export const AcmeSessionContext = createContext<AcmeSessionContextValue>({
  update: noop,
});

export const AcmeSessionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [session, setSession] = useState<null | Session>(getSession());

  const updateSession = (newSession: null | Session) => {
    setSession(newSession);
    persistSession(newSession);
  };

  return (
    <AcmeSessionContext.Provider value={{ ...session, update: updateSession }}>
      {children}
    </AcmeSessionContext.Provider>
  );
};
