const addZeroBefore = (num: number) => (String(num).length < 2 ? `0${num}` : `${num}`);

export const transofrmDuration = (seconds: number) => {
  const min = Math.floor(seconds / 60);
  const sec = seconds - min * 60;

  return `${min}:${addZeroBefore(sec)}`;
};
