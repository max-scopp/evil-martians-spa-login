import { toLocalStorage } from "../localStorage/toLocalStorage";
import { Session } from "./contexts/session.context";
import { sessionStorageKey } from "./sessionStorageKey";

export function persistSession(session: null | Session) {
  return toLocalStorage(sessionStorageKey, session);
}
