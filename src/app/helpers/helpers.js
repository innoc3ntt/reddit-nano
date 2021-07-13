export const kformatter = (number) => {
  function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }
  return number > 1000 ? round(number / 1000, 1) + "K" : number;
};

export const utcTimeConverter = (postTime) => {
  //Date.now gives ms, postTime is in s so divide by 1000

  const elapsed = Date.now() / 1000 - postTime;
  const secondsInHour = 60 * 60;
  const secondsInDay = secondsInHour * 24;
  const secondsInMonth = secondsInDay * 30;
  const secondsInYear = secondsInMonth * 12;

  return elapsed < 60
    ? `Posted ${elapsed} seconds ago`
    : elapsed < secondsInHour
    ? `Posted ${Math.floor(elapsed / 60)} minutes ago`
    : elapsed < secondsInDay
    ? `Posted ${Math.floor(elapsed / secondsInHour)} hours ago`
    : elapsed < secondsInMonth
    ? `Posted ${Math.floor(elapsed / secondsInDay)} days ago`
    : elapsed < secondsInYear
    ? `Posted ${Math.floor(elapsed / secondsInMonth)}`
    : `Posted ${Math.floor(elapsed / secondsInYear)} years ago`;
};
