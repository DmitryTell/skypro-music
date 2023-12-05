const commonSelector = (store) => store.common;

export const commonAccessSelector = (store) =>
    commonSelector(store)?.access || null;
export const commonRefreshSelector = (store) =>
    commonSelector(store)?.refresh || null;
export const selectToken = (store) => store.common.access;
export const commonNewErrorSelector = (store) =>
    commonSelector(store)?.newError || null;
export const commonIsMenuSelector = (store) => commonSelector(store).isMenu;
export const commonSelectionListSelector = (store) =>
    commonSelector(store)?.selectionList || [];
export const commonCategoryTitleSelector = (store) =>
    commonSelector(store)?.categoryTitle || "";
