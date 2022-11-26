export function fromLocalStorage<R = any>(storageKey: string): R | null {
  const storedValue = localStorage.getItem(storageKey);

  if (storedValue !== null) {
    return JSON.parse(storedValue) as R;
  }

  return null;
}
