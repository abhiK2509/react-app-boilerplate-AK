import { sum } from "../sum"

test("Function should return the sum", () => {
    const result = sum(4, 5);

    // Assertion
    expect(result).toBe(9);
})