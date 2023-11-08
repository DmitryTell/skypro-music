const filtersSelector = (store) => store.filters;

export const filtersSearchTextSelector = (store) =>
    filtersSelector(store)?.searchText || null;
export const filterAuthorsSelector = (store) =>
    filtersSelector(store)?.authorFilters || [];
export const filterGenresSelector = (store) =>
    filtersSelector(store)?.genreFilters || [];
export const filterYearSelector = (store) =>
    filtersSelector(store)?.yearFilter || "По умолчанию";
