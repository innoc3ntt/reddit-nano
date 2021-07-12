export const kformatter = (number) => {
  function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }
  return number > 1000 ? round(number / 1000, 1) + "K" : number;
};
