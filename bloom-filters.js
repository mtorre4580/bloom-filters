const { v2, v3 } = require("murmurhash");

class BloomFilters {
  constructor(size) {
    this.set = new Array(size).fill(0);
  }

  /**
   * Add the string in the set and hash the value with two hash functions
   * @param {string} value
   */
  add(value) {
    const { first, second } = this.getHash(value);
    this.set[first] = 1;
    this.set[second] = 1;
  }

  /**
   * Check if the string probabilistic exists in the set
   * @param {string} value
   * @returns boolean
   */
  check(value) {
    const { first, second } = this.getHash(value);
    return this.set[first] === 1 && this.set[second] === 1;
  }

  /**
   * Create the two hashes using the MurmurHash algorithms
   * @param {string} value
   * @returns object
   */
  getHash(value) {
    const first = v2(value);
    const second = v3(value);
    return { first, second };
  }
}

module.exports = BloomFilters;
