function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const merged: number[] = [];
    let i = 0, j = 0, k = collection_3.length - 1;

    while (i < collection_1.length && j < collection_2.length && k >= 0) {
        if (collection_1[i] <= collection_2[j] && collection_1[i] <= collection_3[k]) {
            merged.push(collection_1[i++]);
        } else if (collection_2[j] <= collection_1[i] && collection_2[j] <= collection_3[k]) {
            merged.push(collection_2[j++]);
        } else {
            merged.push(collection_3[k--]);
        }
    }
    return merged.concat(collection_1.slice(i)).concat(collection_2.slice(j)).concat(collection_3.slice(k + 1));
}

export default merge;
