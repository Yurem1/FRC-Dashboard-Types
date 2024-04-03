/**
 * Interface reprensenting the Autonomous options.
 */
export interface AutonomousOptions {
    /**
     * Boolean that checks whether autonomous is controllable or not.
     */
    ['.controllable']: boolean;
    /**
     * Instance number.
     */
    ['.instance']: number;
    /**
     * Name of this autonomous option.
     */
    ['.name']: string;
    /**
     * The type of the autonomous option chooser
     */
    ['.type']: string;
    /**
     * Current active autonomous command.
     */
    active: string;
    /**
     * Default autonomous command.
     */
    default: string;
    /**
     * Options for the autonomous command
     */
    options: string[];
}
/**
 * The encoders for this robot.
 */
export interface Encoders {
    /**
     * Boolean that checks whether the encoders are controllable or not.
     */
    ['.controllable']: boolean;
    /**
     * Name of the encoders.
     */
    ['.name']: string;
    /**
     * Encoder type.
     */
    ['.type']: string;
    /**
     * Encoder errors.
     */
    errors: string[];
    /**
     * Encoder information.
     */
    infos: string[];
    /**
     * Encoder warnings.
     */
    warnings: string[];
}
/**
 * Represents a field in the SmartDashboard.
 */
export interface Field {
    /**
     * Indicates whether the field is controllable.
     */
    ['.controllable']: boolean;
    /**
     * The name of the field.
     */
    ['.name']: string;
    /**
     * The type of the field.
     */
    ['.type']: string;
    /**
     * The robot associated with the field.
     */
    Robot: number[];
    /**
     * The XModules associated with the field.
     */
    XModules: number[];
}
/**
 * Represents an IMU (Inertial Measurement Unit).
 */
export interface IMU {
    /**
     * Indicates whether the IMU is controllable.
     */
    ['.controllable']: boolean;
    /**
     * The name of the IMU.
     */
    ['.name']: string;
    /**
     * The type of the IMU.
     */
    ['.type']: string;
    /**
     * An array of error messages related to the IMU.
     */
    errors: string[];
    /**
     * An array of informational messages related to the IMU.
     */
    infos: string[];
    /**
     * An array of warning messages related to the IMU.
     */
    warnings: string[];
}
/**
 * Represents a JSON object with Smart Dashboard properties.
 */
export interface JSON {
    /**
     * Indicates if the object is controllable.
     */
    ['.controllable']: boolean;
    /**
     * The name of the object.
     */
    ['.name']: string;
    /**
     * The type of the object.
     */
    ['.type']: string;
    /**
     * An array of error messages.
     */
    errors: string[];
    /**
     * An array of information messages.
     */
    infos: string[];
    /**
     * An array of warning messages.
     */
    warnings: string[];
}
/**
 * Represents a collection of motors.
 */
export interface Motors {
    /**
     * Indicates whether the motor is controllable.
     */
    ['.controllable']: boolean;
    /**
     * The name of the motor.
     */
    ['.name']: string;
    /**
     * The type of the motor.
     */
    ['.type']: string;
    /**
     * An array of error messages related to the motor.
     */
    errors: string[];
    /**
     * An array of informational messages related to the motor.
     */
    infos: string[];
    /**
     * An array of warning messages related to the motor.
     */
    warnings: string[];
}
/**
 * Represents the Pigeon2 interface.
 */
export interface Pigeon2 {
    /**
     * Indicates if the Pigeon2 is controllable.
     */
    ['.controllable']: boolean;
    /**
     * The name of the Pigeon2.
     */
    ['.name']: string;
    /**
     * The type of the Pigeon2.
     */
    ['.type']: string;
    /**
     * The value of the Pigeon2.
     */
    Value: number;
}
/**
 * Represents a Swerve Drive.
 */
export interface SwerveDrive {
    /**
     * Indicates if the Swerve Drive is controllable.
     */
    ['.controllable']: boolean;
    /**
     * The name of the Swerve Drive.
     */
    ['.name']: string;
    /**
     * The type of the Swerve Drive.
     */
    ['.type']: string;
    /**
     * An array of error messages.
     */
    errors: string[];
    /**
     * An array of information messages.
     */
    infos: string[];
    /**
     * An array of warning messages.
     */
    warnings: string[];
}
/**
 * Represents the interface for a swerve module.
 */
export interface Swerve {
    /**
     * The desired chassis speeds for each module.
     */
    desiredChassisSpeeds: number[];
    /**
     * The desired states for each module.
     */
    desiredStates: number[];
    /**
     * The forward direction of the swerve module.
     */
    forwardDirection: string;
    /**
     * The maximum angular velocity of the swerve module.
     */
    maxAngularVelocity: number;
    /**
     * The maximum speed for each module.
     */
    maxSpeed: number[];
    /**
     * The measured chassis speeds for each module.
     */
    measuredChassisSpeeds: number[];
    /**
     * The number of modules in the swerve system.
     */
    moduleCount: number;
    /**
     * The rotation of the robot.
     */
    robotRotation: number;
    /**
     * The unit of rotation.
     */
    rotationUnit: string;
    /**
     * The size of the swerve module in the front-back direction.
     */
    sizeFrontBack: number;
    /**
     * The size of the swerve module in the left-right direction.
     */
    sizeLeftRight: number;
    /**
     * The locations of the wheels in the swerve module.
     */
    wheelLocations: number[];
}
/**
 * Represents the Smart Dashboard interface.
 */
export interface SmartDashboard {
    /**
     * The autonomous options for this robot.
     */
    ['Autonomous Options']: AutonomousOptions;
    /**
     * Encoders information for this robot.
     */
    Encoders: Encoders;
    /**
     * Field information for this robot.
     */
    Field: Field;
    /**
     * IMU (Inertial Measurement Unit) information for this robot.
     */
    IMU: IMU;
    /**
     * JSON (JavaScript Object Notation) information for this robot.
     */
    JSON: JSON;
    /**
     * Motors information for this robot.
     */
    Motors: Motors;
    /**
     * Pigeon 2 (v6) information for this robot.
     */
    ['Pigeon 2 (v6) [9]']: Pigeon2;
    /**
     * Swerve Drive information for this robot.
     */
    ['Swerve Drive']: SwerveDrive;
    /**
     * Swerve information for this robot.
     */
    swerve: Swerve;
}
