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
    switch (instruction) {
      case "L":
        rotateLeft(positionOnPlateau);
        break;
      case "R":
        rotateRight(positionOnPlateau);
        break;
      case "M":
        moveRover(positionOnPlateau, plateauSize);
        break;
      default:
        console.error("Invalid movement instruction");
    }
  }
};

const rotateLeft = (rover: RoverPosition): void => {
  const { direction } = rover;
  switch (direction) {
    case "N":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "S";
      break;
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
      if (y + 1 <= gridSize.y) {
        position.y++;
      }
      break;
    case "E":
      if (x + 1 <= gridSize.x) {
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
