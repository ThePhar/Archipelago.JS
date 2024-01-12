import { fetchWebSocket } from "../../src/util/ws.js";

test("do not throw an error if global WebSocket is defined.", async () => {
    /** @type {WebSocket} Stub */
    // @ts-ignore
    global.WebSocket = {};

    expect(fetchWebSocket).not.toThrowError();
});
