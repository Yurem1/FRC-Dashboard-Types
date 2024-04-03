/**
 * Field Managment System
 */
export interface FMSInfo {
  /**
   * The type of this server.
   */
  ['.type']: string;

  /**
   * The name of this event.
   */
  EventName: string;

  /**
   * The data control for the FMS.
   */
  FMSControlData: number;

  /**
   * The specific message of this event.
   */
  GameSpecificMessage: string;

  /**
   * Boolean that checks if robot is in red alliance or not.
   */
  IsRedAlliance: boolean;

  /**
   * The qualification match number.
   */
  MatchNumber: number;

  /**
   * The match type number.
   */
  MatchType: number;

  /**
   * The replay number.
   */
  ReplayNumber: number;

  /**
   * The station number.
   */
  StationNumber: number;
}