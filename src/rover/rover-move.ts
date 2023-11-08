import { Instruction } from "./rover.types";

export const processMoveInput = (
  moveInput: string
): Instruction[] | boolean => {
  const validDirections: string[] = ["L", "R", "M"];

  if (moveInput.split("").every((char) => validDirections.includes(char))) {
    return moveInput.split("") as Instruction[];
  } else {
    return false;
  }
};
