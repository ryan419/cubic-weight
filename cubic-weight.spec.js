const assert = require('assert');
const getAverageCubicWeight = require('./cubic-weight');

const testItems = [{
  category: 'Air Conditioners',
  title: 'Window Seal for Portable Air Conditioner Outlets',
  weight: 235,
  size: {
    width: 100,
    length: 100,
    height: 100
  }
}, {
  category: 'Air Conditioners',
  title: 'Kogan 10,000 BTU Portable Air Conditioner (2.9KW)',
  weight: 26200,
  size: {
    width: 100,
    length: 100,
    height: 100
  }
}];

const testItems2 = [{
  category: 'Air Conditioners',
  title: 'Window Seal for Portable Air Conditioner Outlets',
  weight: 235,
  size: {
    width: 30,
    length: 40,
    height: 20
  }
}];

describe('Avarage cubic weight', () => {
  describe('Calc avarage cubic weight', () => {
    it('average cubic weight should be 250 kg when length, height, width are 1 meter', () => {
      assert.equal(getAverageCubicWeight(testItems), 250);
    });
    it('average cubic weight should be 6 kg when long (0.4m) x 20cm high (0.2m) x 30cm wide (0.3m)', () => {
      assert.equal(getAverageCubicWeight(testItems2), 6);
    });
  });
});
