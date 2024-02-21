"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { merge } from "C:/Users/sasit/Desktop/Full Stack/merge-arrays/mergeArrays"
const mergeArrays_1 = require("./mergeArrays");
describe('merge', () => {
    it('should merge sorted collections in ascending order', () => {
        const collection_1 = [1, 3, 5];
        const collection_2 = [2, 4, 6];
        const collection_3 = [9, 7, 8];
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect((0, mergeArrays_1.default)(collection_1, collection_2, collection_3)).toEqual(expected);
    });
    // Add more test cases to cover various scenarios
});
