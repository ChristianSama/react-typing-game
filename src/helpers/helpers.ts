export const secondsToTime = (seconds: number) => {
  const m = Math.floor(seconds % 3600 / 60).toString().padStart(2,'0'),
        s = Math.floor(seconds % 60).toString().padStart(2,'0');
  return `${m}:${s}`;
}
