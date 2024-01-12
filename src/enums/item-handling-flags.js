/**
 * @enum {number}
 * @property {0} LOCAL_ONLY Client will not receive any items, except for cheated items.
 * @property {1} REMOTE_OTHER Client will receive items from other worlds.
 * @property {2} REMOTE_SELF Client will receive items from their own world.
 * @property {4} REMOTE_STARTING_INVENTORY Client will receive their starting inventory items.
 * @property {7} REMOTE_ALL A shorthand for all remote flags.
 * @readonly
 */
export const ItemsHandling = Object.freeze({
    /** Client will not receive any items, except for cheated items. */
    LOCAL_ONLY: 0,

    /** Client will receive items from other worlds. */
    REMOTE_OTHER: 0b001,

    /** Client will receive items from their own world. Also requires `REMOTE_OTHER` set. */
    REMOTE_SELF: 0b010,

    /** Client will receive their starting inventory items. Also requires `REMOTE_OTHER` set. */
    REMOTE_STARTING_INVENTORY: 0b100,

    /** A shorthand for all remote flags. */
    REMOTE_ALL: 0b111,
});
