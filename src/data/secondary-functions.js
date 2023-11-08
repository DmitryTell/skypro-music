const addZeroBefore = (num) => (String(num).length < 2 ? `0${num}` : num);
const filterByAuthorsInJson = (tracks, authors) => {
    const result = [];

    if (!authors?.length) {
        return null;
    }

    tracks.forEach((track) => {
        if (authors.includes(track.author)) {
            result.push(track);
        }
    });

    return [...result.map((track) => JSON.stringify(track))];
};
const filterByGenresInJson = (tracks, genres) => {
    const result = [];

    if (!genres?.length) {
        return null;
    }

    tracks.forEach((track) => {
        if (genres.includes(track.genre)) {
            result.push(track);
        }
    });

    return [...result.map((track) => JSON.stringify(track))];
};
const sortTracks = (tracks, year) => {
    const result = [...tracks];

    if (year === "Сначала новые") {
        result.sort((a, b) => {
            const firstDate = a.release_date
                ? a.release_date.split("-")[0]
                : "1900";
            const secondDate = b.release_date
                ? b.release_date.split("-")[0]
                : "1900";

            return secondDate - firstDate;
        });
    }

    if (year === "Сначала старые") {
        result.sort((a, b) => {
            const firstDate = a.release_date
                ? a.release_date.split("-")[0]
                : "1900";
            const secondDate = b.release_date
                ? b.release_date.split("-")[0]
                : "1900";

            return firstDate - secondDate;
        });
    }

    return result;
};
const filterBySearchText = (tracks, searchText) => {
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

    return result;
};

export const getMinutesFromSeconds = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds - min * 60;

    return `${addZeroBefore(min)}:${addZeroBefore(sec)}`;
};
export const filterTracks = (tracks, authors, genres, year, searchText) => {
    const filteredByAuthorsJson = filterByAuthorsInJson(tracks, authors);
    const filteredByGenresJson = filterByGenresInJson(tracks, genres);
    const result = [];

    if (filteredByAuthorsJson && filteredByGenresJson) {
        const filteredTracksJson = [
            ...new Set([...filteredByAuthorsJson, ...filteredByGenresJson]),
        ];

        filteredTracksJson.forEach((json) => {
            const track = JSON.parse(json);

            result.push(track);
        });
    } else if (filteredByAuthorsJson) {
        filteredByAuthorsJson.forEach((json) => {
            const track = JSON.parse(json);

            result.push(track);
        });
    } else if (filteredByGenresJson) {
        filteredByGenresJson.forEach((json) => {
            const track = JSON.parse(json);

            result.push(track);
        });
    } else {
        tracks.forEach((track) => {
            result.push(track);
        });
    }

    const sortedTracks = sortTracks(result, year);

    return filterBySearchText(sortedTracks, searchText);
};
