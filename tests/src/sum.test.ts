
import sum from "./sum.ts";

describe("sum", () => {
  
  beforeAll(() => {
    console.log("função antes dos testes")
  })

  it("sum", () => {
    const result = sum(3,7);

    expect(result).toBe(10)
  });

  test("sum of 2+2 must be 4", () => {
    const result = sum(2,2);

    expect(result).toBe(4)
  })

  afterAll(() => {
    console.log("função depois dos testes")
  })
})

