import { JSONSerializableData } from "./JSONSerializableData.ts";

/**
 * A stand in for unknown slot data.
 */
export type UnknownSlotData = {
    [arg: string]: JSONSerializableData;
};