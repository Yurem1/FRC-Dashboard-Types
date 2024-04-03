/**
 * Represents the SmartDashboard class.
 */
export declare class SmartDashBoard {
    /**
     * The IP address of the smart dashboard
     */
    private dashboardIP;
    /**
     * The Local Websocket connection within this website.
     */
    private localWebSocket;
    /**
     * The WebSocket connection between the SmartDashboard Pro and the RoboRadio.
     */
    /**
     * Creates an instance of SmartDashboard.
     * @param {string} _dashboardIP - The IP address of the SmartDashboard.
     */
    constructor(_dashboardIP: string);
    /**
     * Setup the Websocket for this table.
     */
    private setupWebSocketConnection;
}
