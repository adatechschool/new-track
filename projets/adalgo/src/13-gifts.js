/**
 * This function takes an array of gifts and returns the total price.
 *
 * @example
 *      totalPrice([{name: 'iPhone', price: 800}, {name: 'skateboard', price: 70}]); // returns 870
 *
 * @param {{name: string; price: number}[]} gifts
 * @returns {number} total price
 */
export const totalPrice = (gifts) => {};

/**
 * This function takes an array of gifts and returns the name of the most expensive one.
 *
 * @param {{name: string; price: number}[]} gifts
 * @returns {string} gift's name
 */
export const mostExpensive = (gifts) => {};

/**
 * This function takes an array of kids and returns the name of the most expensive gift
 * within all kids.
 *
 * Each kid in an objet with a name and a list of gift.
 * Each give has a name and a price.
 *
 * @example
 *     globalMostExpensive([
 *          {name: 'Issa', gifts: [{name: 'iPhone', price: 800}, {name: 'skateboard', price: 70}]},
 *          {name: 'Noor', gifts: [{name: 'apple', price: 1}]}
 *      ]); // returns 'iPhone'
 *
 * @param {{name: string; gifts: {name: string; price: number}[]}[]} kids
 * @returns {string} gift's name
 */
export const globalMostExpensive = (kids) => {};

/**
 * This function takes an array of kids and return the name of the kid that has
 * the most expensive gifts for christmas.
 *
 * Each kid in an objet with a name and a list of gift.
 * Each give has a name and a price.
 *
 * For example if a kid get an iPhone (800€) and a skateboard (70€), it would have 870€
 * of gifts. If another gets an apple (1€), the prefered kid is the first one.
 *
 * @example
 *     preferedKid([
 *          {name: 'Issa', gifts: [{name: 'iPhone', price: 800}, {name: 'skateboard', price: 70}]},
 *          {name: 'Noor', gifts: [{name: 'apple', price: 1}]}
 *      ]); // returns 'Issa'
 *
 * @param {{name: string; gifts: {name: string; price: number}[]}[]} kids
 * @returns {string} kid's name
 */
export const preferedKid = (kids) => {};

/**
 * Distributes a list of gifts among a list of kids.
 *
 * Each gift is assigned to one kid, and **all assigned gifts are removed from the
 * original `gifts` array** (the array MUST be emptied by the end of the function).
 * Kids receive gifts directly in their existing `gifts` arrays.
 *
 * The distribution rules are:
 *  1. Higher `behaviorScore` means higher priority when selecting recipients.
 *  2. **However, overall balance in total gift value takes priority over behavior.**
 *     That is, if giving a gift to a higher-score kid would create a large imbalance,
 *     the gift should go to a kid with a lower total (even with a lower behaviorScore).
 *  3. Assign more valuable gifts earlier (sort gifts by price descending).
 *  4. Mutate all input arrays in-place:
 *       - Remove gifts from `gifts`
 *       - Push them into `kids[i].gifts`
 *
 * **Notes / Edge Cases**
 *  - If two kids have the same total gift value so far, behaviorScore breaks ties.
 *  - A kid may end up with no gifts if there are fewer gifts than kids.
 *  - If `gifts` is empty, no changes occur to kids.
 *  - Behavior scores are expected in the range [0, 1], but the function does not enforce it.
 *
 * @param {{ name: string; price: number }[]} gifts
 *   Array of available gifts. Mutated by the function until it becomes empty.
 *
 * @param {{
 *   name: string;
 *   behaviorScore: number;
 *   gifts: { name: string; price: number }[];
 * }[]} kids
 *   Array of kids. Their `gifts` arrays will be mutated to include assigned items.
 *
 * @returns {{
 *   name: string;
 *   behaviorScore: number;
 *   gifts: { name: string; price: number }[];
 * }[]}
 *   The same `kids` array with updated gift assignments.
 *
 * @example
 * // Balanced distribution example
 * const gifts = [
 *   { name: "RC Car", price: 60 },
 *   { name: "Lego Set", price: 40 },
 *   { name: "Chocolate Box", price: 10 },
 *   { name: "Puzzle", price: 15 }
 * ];
 *
 * const kids = [
 *   { name: "Alice", behaviorScore: 0.95, gifts: [] },
 *   { name: "Bob", behaviorScore: 0.85, gifts: [] },
 *   { name: "Charlie", behaviorScore: 0.40, gifts: [] }
 * ];
 *
 * distributeGifts(gifts, kids);
 *
 * // Correct result respecting balance priority:
 * // Alice:   RC Car (60)
 * // Bob:     Lego Set (40)
 * // Charlie: Puzzle (15)
 * // Charlie: Chocolate Box (10)  // NOT Alice — gives better total-value balance
 *
 * // gifts is now []
 *
 * @example
 * // Example with tied scores and a limited gift pool:
 * const gifts = [
 *   { name: "Book", price: 20 },
 *   { name: "Stickers", price: 5 },
 * ];
 *
 * const kids = [
 *   { name: "Emma", behaviorScore: 0.7, gifts: [] },
 *   { name: "Liam", behaviorScore: 0.7, gifts: [] },
 *   { name: "Noah", behaviorScore: 0.3, gifts: [] }
 * ];
 *
 * distributeGifts(gifts, kids);
 *
 * // Emma: Book (20)
 * // Liam: Stickers (5)
 * // Noah: []
 *
 * // gifts is now []
 */
export const distributeGifts = (gifts, kids) => {};
