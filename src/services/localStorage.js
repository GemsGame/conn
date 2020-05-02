export const localStorageSet = (key, state) => {
  const jSONstate = JSON.stringify(state);
  localStorage.setItem(key, jSONstate);
};

export const localStorageDel = (key) => {
  localStorage.removeItem(key);
};

export const localStorageGet = (key) => JSON.parse(localStorage.getItem(key));
