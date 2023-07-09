import { GamePackage } from "./GamePackage";

/**
 * A {@link DataPackage} is an object which contains arbitrary metadata about each game to enable a client to interact
 * with the Archipelago server easily.
 *
 * Note:
 * - Any `name` is unique to its type across its own Game only: Single Arrow can exist in two games.
 * - The `id`s from the game `Archipelago` may be used in any other game. Especially Location ID `-1`: `Cheat Console`
 * and `-2`: `Server` (typically Remote Start Inventory).
 */
export type DataPackage = {
    /** Mapping of all Games and their respective data. See {@link GamePackage} for additional info. */
    games: { [game: string]: GamePackage };
};
