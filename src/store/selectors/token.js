const tokenSelector = (store) => store.token;

export const tokenAccessSelector = (store) =>
    tokenSelector(store)?.access || null;
export const tokenRefreshSelector = (store) =>
    tokenSelector(store)?.refresh || null;
export const selectToken = (store) => store.token.access;
