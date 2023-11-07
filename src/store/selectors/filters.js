const filtersSelector = (store) => store.filters;

export const filtersSearchTextSelector = (store) =>
    filtersSelector(store)?.searchText || null;
