import { trapRainWater } from './index.js'

describe('trapRainWater', () => {

    test('with any 2 element elevation map should return 0', () => {
        expect(trapRainWater([0, 0])).toBe(0)
        expect(trapRainWater([0, 1])).toBe(0)
        expect(trapRainWater([1, 0])).toBe(0)
        expect(trapRainWater([1, 1])).toBe(0)
    });

    test('with increasing [1, 0, 2] should return 1', () => {
         expect(trapRainWater([1, 0, 2])).toBe(1)
    });

    test('with decreasing [2, 0, 1] should return 1', () => {
         expect(trapRainWater([2, 0, 1])).toBe(1)
    });

    test('with increasing [1, 0, 2, 0, 4] should return 3', () => {
         expect(trapRainWater([1, 0, 2, 0, 4])).toBe(3)
    });

    test('with increasing [1, 0, 2, 0, 1] should return 3', () => {
         expect(trapRainWater([1, 0, 2, 0, 4])).toBe(3)
    });

    test('with increasing  and decreasing [1, 0, 2, 0, 4] should return 3', () => {
         expect(trapRainWater([1, 0, 2, 0, 4, 0, 2, 0, 3])).toBe(10)
    });

});