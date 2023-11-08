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
    switch (instruction) {
      case "M":
        moveRover(positionOnPlateau, plateauSize);
        console.log(positionOnPlateau);
        break;
      default:
        throw new Error("Invalid instruction");
    }
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
