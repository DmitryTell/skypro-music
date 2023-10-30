const addZeroBefore = (num) => (String(num).length < 2 ? `0${num}` : num);

export const getMinutesFromSeconds = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds - min * 60;

    return `${addZeroBefore(min)}:${addZeroBefore(sec)}`;
};
export const shuffleTrackList = (list) => {
    const result = [...list];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
};
export const makeMergTracks = (allTracks, favouriteTracks) => {
    const result = [];

    favouriteTracks?.forEach((favTrack) => {
        allTracks?.forEach((track) => {
            if (favTrack.id === track.id) {
                result.push({
                    ...favTrack,
                    ...track,
                });
            }
        });
    });

    return result;
};
