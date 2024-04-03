/**
 * Represents a Path Planner.
 */
export interface PathPlanner {
    /**
     * The active path of the autonomous.
     */
    activePath: number[];
    /**
     * The current pose of the autonomous.
     */
    currentPose: number[];
    /**
     * The inaccuracy of the autonomous.
     */
    inaccuracy: number;
    /**
     * The target pose of the autonomous.
     */
    targetPose: number[];
    /**
     * The velocity of the autonomous.
     */
    vel: number[];
}
