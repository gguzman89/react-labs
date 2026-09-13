import { describe, expect, test } from "vitest";
import { add, mult, subtract } from "./math.helper";




describe('add', () => {

    test('should add two positives numbers', () => {

        // ! 1 Arrange
        const a = 1;
        const b = 2;

        // ! 2 Act
        const result = add(a, b);

        // ! 3 Assert
        expect(result).toBe(a + b);
    });
    test('should add two negatives numbers', () => {

        // ! 1 Arrange
        const a = -1;
        const b = -2;

        // ! 2 Act
        const result = add(a, b);

        // ! 3 Assert
        expect(result).toBe(a + b);
    });
});

describe('subtract', () => {

    test('should subs two positives numbers', () => {

        // ! 1 Arrange
        const a = 1;
        const b = 2;

        // ! 2 Act
        const result = subtract(a, b);

        // ! 3 Assert
        expect(result).toBe(a - b);
    });
    test('should subs two negatives numbers', () => {

        const a = -1;
        const b = -2;

        const result = subtract(a, b);

        expect(result).toBe(a - b);
    });
})

describe('mult', () => {

    test('should multiply two positives numbers', () => {

        const a = 1;
        const b = 2;

        const result = mult(a, b);

        expect(result).toBe(a * b);
    })
    test('should multiply by 0', () => {

        const a = 7;
        const b = 0;

        const result = mult(a, b);

        expect(result).toBe(a * b);
    })
})
