const addZeroBefore = (num) => (String(num).length < 2 ? `0${num}` : num);

export const getMinutesFromSeconds = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds - min * 60;

    return `${addZeroBefore(min)}:${addZeroBefore(sec)}`;
};
export const filterBySearchText = (tracks, searchText) => {
    const result = [];

    if (!searchText) {
        return tracks;
    }

    const searchTextReg = new RegExp(`${searchText}`, "gi");

    tracks.forEach((track) => {
        if (searchTextReg.test(track.name)) {
            result.push(track);
        }
    });

    return result?.length ? result : [];
};
