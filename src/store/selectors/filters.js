const filtersSelector = (store) => store.filters;

export const filtersSearchingTextSelector = (store) =>
    filtersSelector(store)?.searchingText || null;
export const filterAuthorsSelector = (store) =>
    filtersSelector(store)?.authors || [];
export const filterGenresSelector = (store) =>
    filtersSelector(store)?.genres || [];
export const filterYearSelector = (store) =>
    filtersSelector(store)?.year || "По умолчанию";
export const filterFilteredTracksSelector = (store) =>
    filtersSelector(store)?.filteredTracks || null;
