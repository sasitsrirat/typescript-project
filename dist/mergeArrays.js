"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function merge(collection_1, collection_2, collection_3) {
    const merged = [];
    let i = 0, j = 0, k = collection_3.length - 1;
    while (i < collection_1.length && j < collection_2.length && k >= 0) {
        if (collection_1[i] <= collection_2[j] && collection_1[i] <= collection_3[k]) {
            merged.push(collection_1[i++]);
        }
        else if (collection_2[j] <= collection_1[i] && collection_2[j] <= collection_3[k]) {
            merged.push(collection_2[j++]);
        }
        else {
            merged.push(collection_3[k--]);
        }
    }
    // Append remaining elements from any unfinished collections
    return merged.concat(collection_1.slice(i)).concat(collection_2.slice(j)).concat(collection_3.slice(k + 1));
}
exports.default = merge;
