/**
 * Attempts to return a WebSocket from the browser or node. Attempts to grab browser WebSocket first.
 * @returns {Promise<WebSocket>} The WebSocket class.
 * @throws {Error} If a WebSocket is not found.
 * @internal
 */
export async function fetchWebSocket() {
    /** @type {WebSocket | undefined} */
    let ws = undefined;

    // Attempt to utilize the browser WebSocket first.
    if (typeof global !== "undefined") {
        // @ts-expect-error Possible error for websocket not being defined.
        ws = global.WebSocket;
    } else if (typeof window !== "undefined") {
        // @ts-expect-error Possible error for websocket not being defined.
        ws = window.WebSocket;
    } else if (typeof self !== "undefined") {
        // @ts-expect-error Possible error for websocket not being defined.
        ws = self.WebSocket;
    }

    if (ws !== undefined) {
        return ws;
    }

    // Okay, so no browser WebSocket available, let's try to load the node one instead.
    try {
        /** @type {WebSocket} */
        // @ts-expect-error This will throw an exception if the `ws` module is not installed. Not needed if running in
        // the browser.
        return await import("ws");
    } catch {
        throw new Error(
            "WebSockets are not available to this project. If you are running in `node`, you will need to " +
            "install the `ws` package from npm.",
        );
    }
}
