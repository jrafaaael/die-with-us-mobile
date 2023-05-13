export function setIntervalAsap(cb: () => void, time: number) {
  cb();
  return setInterval(cb, time);
}
