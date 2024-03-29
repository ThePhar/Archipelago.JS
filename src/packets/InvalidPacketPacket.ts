import { PacketProblemType } from "../consts/PacketProblemType";
import { BaseServerPacket } from "./BasePackets";

/**
 * Sent to clients if the server caught a problem with a packet. This only occurs for errors that are explicitly checked
 * for.
 *
 * @category Server Packets
 */
export interface InvalidPacketPacket extends BaseServerPacket {
    cmd: "InvalidPacket";

    /** The {@link PacketProblemType} that was detected in the packet. */
    type: PacketProblemType;

    /** The `cmd` argument of the faulty packet, will be `undefined` if the `cmd` failed to be parsed. */
    original_cmd?: string;

    /** A descriptive message of the problem at hand. */
    text: string;
}
