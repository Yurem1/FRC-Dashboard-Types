import { io } from 'socket.io-client';

/**
 * Represents the SmartDashboard class.
 */
export class SmartDashBoard {
  /**
   * The IP address of the smart dashboard
   */
  private dashboardIP: string;

  /**
   * The Local Websocket connection within this website. 
   */
  private localWebSocket = io('ws://localhost:8080');;

  /**
   * The WebSocket connection between the SmartDashboard Pro and the RoboRadio.
   */
  // public robotWebSocket: WebSocket;

  /**
   * Creates an instance of SmartDashboard.
   * @param {string} _dashboardIP - The IP address of the SmartDashboard.
   */
  public constructor(_dashboardIP: string) {
    this.dashboardIP = _dashboardIP;
    // this.robotWebSocket = new WebSocket('ws://' + _dashboardIP);
    this.setupWebSocketConnection();
  }

  /**
   * Setup the Websocket for this table.
   */
  private setupWebSocketConnection(): void {  
    this.localWebSocket.emit('log', 'Welcome')
  }
}