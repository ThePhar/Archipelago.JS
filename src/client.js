import { fetchWebSocket } from "./util/ws.js";

/**
 * An object that holds credential information for authenticating to the Archipelago MultiServer.
 * @typedef {object} ConnectionArgs
 * @property {string} name The slot name that is attempting authentication.
 * @property {string?} game The game associated with this slot. If `game` is omitted, this slot will connect in
 * text-only mode and cannot check locations.
 * @property {string?} password The room password, if the server requires one to join.
 * @property {boolean?} requestSlotData Whether to request the server to include slot data on connection. Defaults to
 * `true`.
 * @property {import("./enums/item-handling-flags.js").ItemsHandling} items Determines what kind of received
 * item events should be broadcast from the server to this client.
 */

/** A client that can connect to an Archipelago MultiServer and facilitate communication via the network protocol. */
export class Client {
    /** @type {WebSocket | undefined} */
    #socket = undefined;

    /**
     *
     * @param {string} uri A connection URI to the Archipelago MultiServer (e.g., `wss://archipelago.gg:38281`).
     *
     * - If the port is omitted, will attempt to connect on `38281`.
     * - If the protocol is omitted, will attempt to connect with `wss` first, then fallback to `ws`.
     * @param {ConnectionArgs} connectionArgs Connection arguments to connect to the Archipelago MultiServer.
     * @returns {Promise<void>} A promise once authenticated to the server.
     */
    async connect(uri, connectionArgs) {
        // TODO: Remove this
        console.log(connectionArgs);

        // Attempt to parse uri into usable sections.
        const results = /((wss?):\/\/)?([\w.]+)(:([0-9]+))?/.exec(uri);
        if (!results) {
            throw URIError("Provided URI is not valid.");
        }

        console.log(results);

        const protocol = results[2];
        const hostname = results[3];
        const port = results[5] ? parseInt(results[5]) : 38281;

        // Validate port is within acceptable range.
        if (port < 1 || port > 65535) {
            throw URIError("Provided port is not within accepted range [1-65535].");
        }

        const attemptFallback = protocol === undefined;
        let conn = `${attemptFallback ? "wss" : protocol}://${hostname}:${port}`;
        try {
            await this.#establishSocketConnection(conn);
        } catch {
            if (attemptFallback) {
                conn = `ws://${hostname}:${port}`;
                await this.#establishSocketConnection(conn);
            }
        }
    }

    /**
     * @param {string} uri
     * @returns {Promise<void>}
     */
    async #establishSocketConnection(uri) {
        // Attempt to get WebSocket class.
        const WebSocket = await fetchWebSocket();

        return new Promise((resolve, reject) => {
            this.#socket = new WebSocket(uri);

            // On a successful connection.
            this.#socket.onopen = () => {
                console.log("Connection established!");
                resolve();
            };

            // On a failed connection.
            this.#socket.onerror = (event) => {
                console.error("Failed to connect!");
                reject(event);
            };
        });
    }
}
