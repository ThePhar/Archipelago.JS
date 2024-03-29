import { ItemFlags } from "../consts/ItemFlags";

/**
 * An object representing a hint information for a particular item and location that contains it.
 */
export type Hint = {
    /** The id of the player who owns this item. */
    receiving_player: number;

    /** The id of the player who has this item in their world. */
    finding_player: number;

    /** The id of the location for this item. */
    location: number;

    /** The id of this item. */
    item: number;

    /** Whether this item has already been found. */
    found: boolean;

    /** The name of the entrance to the location where this item is located. */
    entrance: string;

    /** The {@link ItemFlags} for this item. */
    item_flags: number | ItemFlags;
};
