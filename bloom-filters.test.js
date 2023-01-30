const BloomFilters = require("./bloom-filters");

describe("BloomFilters", () => {
  const bloomFilters = new BloomFilters(50);

  beforeAll(() => {
    const values = ["Argentina", "Brazil", "Germany", "Poland", "Spain"];
    values.forEach((value) => {
      bloomFilters.add(value);
    });
  });

  test('should return true for "Argentina" the element exists', () => {
    expect(bloomFilters.check("Argentina")).toBeTruthy();
  });

  test('should return false for "France" the element not', () => {
    expect(bloomFilters.check("France")).toBeFalsy();
  });
});
