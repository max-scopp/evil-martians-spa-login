export function toLocalStorage<T>(storageKey: string, data: T) {
  return localStorage.setItem(storageKey, JSON.stringify(data));
}
