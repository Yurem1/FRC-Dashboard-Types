import { io } from 'socket.io-client';
/**
 * Represents the SmartDashboard class.
 */
export class SmartDashBoard {
    /**
     * The IP address of the smart dashboard
     */
    dashboardIP;
    /**
     * The Local Websocket connection within this website.
     */
    localWebSocket = io('ws://localhost:8080');
    ;
    /**
     * The WebSocket connection between the SmartDashboard Pro and the RoboRadio.
     */
    // public robotWebSocket: WebSocket;
    /**
     * Creates an instance of SmartDashboard.
     * @param {string} _dashboardIP - The IP address of the SmartDashboard.
     */
    constructor(_dashboardIP) {
        this.dashboardIP = _dashboardIP;
        // this.robotWebSocket = new WebSocket('ws://' + _dashboardIP);
        this.setupWebSocketConnection();
    }
    /**
     * Setup the Websocket for this table.
     */
    setupWebSocketConnection() {
        this.localWebSocket.emit('log', 'Welcome');
    }
}
