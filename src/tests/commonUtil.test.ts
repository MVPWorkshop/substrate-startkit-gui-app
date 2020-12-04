import * as CommonUtil from '../shared/utils/common.util';

describe("For given string array, stringArrayToMap returns a map", () => {
  const stringArray = [
    'first',
    'second',
    'third'
  ];

  const result = CommonUtil.stringArrayToMap(stringArray);

  test("Function return type should be of Map", () => {
    expect(result instanceof Map).toBeTruthy();
  })

  test("All array elements should be present in the map", () => {
    expect(
      result.get("first") &&
      result.get("second") &&
      result.get("third")
    ).toBeTruthy();
  })

  test("\"fourth\" shouldn't be present in the map", () => {
    expect(result.get("fourth")).toBeFalsy();
  })
})

describe("Remove duplicates in array works correctly", () => {
  const firstArray = ["1", "2", "3"];
  const secondArray = ["1"];

  const newArray = CommonUtil.removeDuplicates(firstArray, secondArray);

  it("should be of length 2", () => {
    expect(newArray.length === 2).toBeTruthy()
  });

  it("shouldn't contain 1 in the new array", () => {
    expect(newArray.includes("1")).toBeFalsy();
  });

  it("should contain 2 and 3", () => {
    expect(
      newArray.includes("2") &&
      newArray.includes("3")
    ).toBeTruthy()
  })
})

describe("Keep only duplicates in array works correctly", () => {
  const firstArray = ["1", "2", "3"];
  const secondArray = ["1"];

  const newArray = CommonUtil.keepDuplicates(firstArray, secondArray);

  it("should be of length 1", () => {
    expect(newArray.length === 1).toBeTruthy()
  });

  it("should contain 1 in the new array", () => {
    expect(newArray.includes("1")).toBeTruthy();
  });

  it("shouldn't contain 2 or 3", () => {
    expect(
      newArray.includes("2") ||
      newArray.includes("3")
    ).toBeFalsy()
  })
})

describe("Array merge without duplicates works correctly", () => {
  const firstArray = ["1", "2", "3"];
  const secondArray = ["1", "2", "4"];

  const result = CommonUtil.mergeArraysWithNoDuplicates(firstArray, secondArray);

  test("Result should contain only one '1' and one '2'", () => {
    let counterMap = new Map<string, number>();

    for (let i = 0; i < result.length; i++) {
      const prevCounter: number = counterMap.get(result[i]) || 0;

      counterMap.set(result[i], prevCounter + 1);
    }

    const containsOneOnce = counterMap.get("1") === 1;
    const containsTwoOnce = counterMap.get("2") === 1;

    expect(containsOneOnce && containsTwoOnce).toBeTruthy();
  })

  test("Result should now contain number 4", () => {
    expect(result.includes("4")).toBeTruthy();
  })

  test("Length of resulting array is 4", () => {
    expect(result.length === 4).toBeTruthy();
  })
})
