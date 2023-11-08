//rover functionality
import { Plateau } from "../plateau";
import { RoverPosition, Direction } from "./rover.types";

export const processInitialPosition = (
  positionInput: string,
  plateauSize: Plateau
): RoverPosition | undefined => {
  const [x, y, direction] = positionInput.split(" ");

  const rovX = parseInt(x);
  const rovY = parseInt(y);

  if (!isNaN(rovX) && !isNaN(rovY) && direction) {
    // Check if the initial position is inside the grid
    if (
      rovX >= 0 &&
      rovX < plateauSize.x &&
      rovY >= 0 &&
      rovY < plateauSize.y
    ) {
      return {
        x: rovX,
        y: rovY,
        direction: direction as Direction,
      };
    }
  } else {
    throw new Error(`Invalid initial position format: ${positionInput}`);
  }
  return undefined;
};
