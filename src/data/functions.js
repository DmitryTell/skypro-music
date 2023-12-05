const addZeroBefore = (num) => (String(num).length < 2 ? `0${num}` : num);

export const getMinutesFromSeconds = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds - min * 60;

    return `${addZeroBefore(min)}:${addZeroBefore(sec)}`;
};
