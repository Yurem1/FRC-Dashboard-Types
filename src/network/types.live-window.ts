/**
 * The LW status interface.
 */
export interface Status {
  /**
   * Boolean that shows whether LW is enabled or not.
   */
  ['LW Enabled']: boolean;
}

/**
 * Live window interface.
 */
export interface LiveWindow {
  /**
   * The status of this LiveWindow.
   */
  ['.status']: Status;
}