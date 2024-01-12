/**
 * Adds two numbers together and returns their sum.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function add(a, b) {
    return a + b;
}

/**
 * Adds the two numbers in an {@link NumberPair} together.
 * @param {import("../struct/number-pair.js").NumberPair} obj
 * @returns {number}
 */
export function addPair(obj) {
    return obj.a + obj.b;
}
