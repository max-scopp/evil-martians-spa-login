import { fromLocalStorage } from "../localStorage/fromLocalStorage";
import { Session } from "./contexts/session.context";
import { sessionStorageKey } from "./sessionStorageKey";

export function getSession() {
  return fromLocalStorage<Session>(sessionStorageKey);
}
