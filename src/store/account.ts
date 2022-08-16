import { writable } from "svelte/store";

export type Account = {
  uid: string;
  email: string | null;
  name: string | null;
};

const isBrowser = typeof window !== "undefined";

export const accountStore = (localStorage?: Storage) => {
  let initialState: Account | null = null;

  if (localStorage) {
    try {
      initialState =
        JSON.parse(localStorage.getItem("tmbts:account") || "") || null;
    } catch {
      initialState = null;
    }
  }

  const account = writable(initialState);

  if (localStorage) {
    account.subscribe(userInfo => {
      localStorage.setItem("tmbts:account", JSON.stringify(userInfo));
    });
  }

  return {
    subscribe: account.subscribe,
    set: (newAccount: Account | null) => {
      account.set(newAccount);
    },
  };
};

export const account = accountStore(isBrowser ? localStorage : undefined);
