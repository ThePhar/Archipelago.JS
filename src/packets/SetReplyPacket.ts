import { JSONSerializableData } from "../types/JSONSerializableData.ts";
import { BaseServerPacket } from "./BasePackets.ts";

/**
 * Sent to clients in response to a {@link SetPacket} if `want_reply` was set to true, or if the client has registered
 * to receive updates for a certain key using the {@link SetNotifyPacket}. {@link SetReplyPacket}s are sent even if a
 * {@link SetPacket} package did not alter the value for the key.
 *
 * Additional arguments added to the {@link SetPacket} that triggered this {@link SetReplyPacket} will also be passed
 * along.
 *
 * @category Server Packets
 */
export interface SetReplyPacket extends BaseServerPacket {
    readonly cmd: "SetReply";

    /** The key that was updated. */
    readonly key: string;

    /** The new value for the key. */
    readonly value: JSONSerializableData;

    /** The value the key had before it was updated. */
    readonly original_value: JSONSerializableData;
}
