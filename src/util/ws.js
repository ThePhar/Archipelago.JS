/**
 * Attempts to return a WebSocket from the browser or node. Attempts to grab browser WebSocket first.
 * @returns {Promise<typeof WebSocket>} The WebSocket class.
 * @throws {Error} If a WebSocket is not found.
 * @internal
 */
export async function fetchWebSocket() {
    /** @type {typeof WebSocket | undefined} */
    let ws = undefined;

    // Attempt to utilize the browser WebSocket first.
    if (typeof global !== "undefined") {
        ws = global.WebSocket;
    } else if (typeof window !== "undefined") {
        ws = window.WebSocket;
    } else if (typeof self !== "undefined") {
        ws = self.WebSocket;
    }

    if (ws !== undefined) {
        return ws;
    }

    // Okay, so no browser WebSocket available, let's try to load the node one instead.
    try {
        /** @type {typeof WebSocket} */
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
