import { Instruction, RoverPosition } from "./rover.types";
import { Plateau } from "../plateau";

export const processMoveInput = (moveInput: string): Instruction[] => {
  const validDirections: string[] = ["L", "R", "M"];

  if (moveInput.split("").every((char) => validDirections.includes(char))) {
    return moveInput.split("") as Instruction[];
  } else {
    throw new Error("Invalid instruction");
  }
};

export const moveInstructions = (
  positionOnPlateau: RoverPosition,
  instructions: Instruction[],
  plateauSize: Plateau
): void => {
  for (const instruction of instructions) {
    // Process each instruction here
    console.log(instruction);
    switch (instruction) {
      case "L":
        rotateRight(positionOnPlateau);
        break;
      case "R":
        rotateRight(positionOnPlateau);
        break;
      case "M":
        moveRover(positionOnPlateau, plateauSize);
        console.log("moving rover");
        break;
      default:
        throw new Error("Invalid instruction");
    }
  }
};

const rotateRight = (rover: RoverPosition): void => {
  const { direction } = rover;
  switch (direction) {
    case "N":
      rover.direction = "E";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
};

const moveRover = (position: RoverPosition, gridSize: Plateau): void => {
  const { x, y } = position;

  switch (position.direction) {
    case "N":
      if (y + 1 < gridSize.y) {
        position.y++;
      }
      break;
    case "E":
      if (x + 1 < gridSize.x) {
        position.x++;
      }
      break;
    case "S":
      if (y - 1 >= 0) {
        position.y--;
      }
      break;
    case "W":
      if (x - 1 >= 0) {
        position.x--;
      }
      break;
  }
};
