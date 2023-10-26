const addZeroBefore = (num) => (String(num).length < 2 ? `0${num}` : num);

export const getMinutesFromSeconds = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds - min * 60;

    return `${addZeroBefore(min)}:${addZeroBefore(sec)}`;
};
export const shuffleTrackList = (list) => {
    for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [list[i], list[j]] = [list[j], list[i]];
    }

    return list;
};
