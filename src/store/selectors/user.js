const userSelector = (store) => store.user;

export const userAccessSelector = (store) =>
    userSelector(store)?.access || null;
export const userRefreshSelector = (store) =>
    userSelector(store)?.refresh || null;
export const selectToken = (store) => store.user.access;
export const userNewErrorSelector = (store) =>
    userSelector(store)?.newError || null;
export const userIsMenuSelector = (store) => userSelector(store).isMenu;
export const userSelectionListSelector = (store) =>
    userSelector(store)?.selectionList || [];
export const userCategoryTitleSelector = (store) =>
    userSelector(store)?.categoryTitle || "";
