import { Instruction } from "./rover.types";

export const processMoveInput = (
  moveInput: string
): Instruction[] | boolean => {
  //const movementArray = moveInput.split(' ')
  const validDirections: string[] = ["L", "R", "M"];

  if (Array.from(moveInput).every((char) => validDirections.includes(char))) {
    return Array.from(moveInput) as Instruction[];
  } else {
    return false;
  }
};
