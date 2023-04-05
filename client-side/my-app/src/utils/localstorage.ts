export const getLocalstorage = (key: string) => {
  return localStorage.getItem(key);
};

export const setLocalstorage = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};
