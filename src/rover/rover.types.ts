export interface RoverPosition {
  x: number;
  y: number;
  direction: Direction;
}

export type Direction = "N" | "S" | "E" | "W";

export type Instruction = "L" | "R" | "M";
