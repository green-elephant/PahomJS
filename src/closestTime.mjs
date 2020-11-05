
export const closestTime = () => {
  const d = (v = Date.now()) => new Date(v);
  const day = 24 * 60 * 60 * 1000;
  const am7today = d(d(d(d().setHours(7)).setMinutes(7)).setSeconds(7));
  const pm7today = d(d(d(d().setHours(19)).setMinutes(7)).setSeconds(7));
  const am7tomorrow = d(d(d(d(Date.now() + day).setHours(7)).setMinutes(7)).setSeconds(7));
  const timeout = Math.min(
    ...[am7today, pm7today, am7tomorrow]
      .map((date) => date.getTime())
      .map((ts) => ts - Date.now())
      .filter((ts) => ts > 0)
  );
  return timeout;
};

export default closestTime;
