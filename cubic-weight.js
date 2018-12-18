const Decimal = require('decimal.js');

const conversionFactor = 250;
const cmToM = (length) => new Decimal(length).div(100);
const getVolume = ({ width, length, height }) => cmToM(width)
  .mul(cmToM(length))
  .mul(cmToM(height));
const getCubicWeight = (item) => getVolume(item.size).mul(conversionFactor);
const getTotalCubicWeight = items => items.reduce((total, item) => (
  total.add(getCubicWeight(item))
), new Decimal(0));
const getAverageCubicWeight = (items) => getTotalCubicWeight(items)
  .div(items.length)
  .toNumber();

module.exports = getAverageCubicWeight;
