import { CreateAsHintMode } from "../consts/CreateAsHintMode";
import { BaseClientPacket } from "./BasePackets";

/**
 * Sent by the client to inform the server of locations the client has seen, but not checked. Useful in cases in which
 * the item may appear in the game world, such as 'ledge items' in `A Link to the Past`. The server will always respond
 * with a {@link LocationInfoPacket} with the items located in the scouted location.
 *
 * @category Client Packets
 */
export interface LocationScoutsPacket extends BaseClientPacket {
    cmd: "LocationScouts";

    /**
     * The ids of the locations seen by the client. May contain any number of locations, even ones sent before;
     * duplicates do not cause issues with the Archipelago server.
     */
    locations: number[];

    /**
     * If non-zero, the scouted locations get created and broadcast as a player-visible hint. If `HINT_ONLY_NEW`, only
     * new hints are broadcast, however this does not remove them from the LocationInfo reply.
     */
    create_as_hint: CreateAsHintMode;
}
