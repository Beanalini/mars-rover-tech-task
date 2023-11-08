import { setPlateauDimensions } from "../src/plateau";
import { processMoveInput, moveInstructions } from "../src/rover/rover-move";
import { processInitialPosition } from "../src/rover/rover";
import { RoverPosition } from "../src/rover/rover.types";

const gridSizeString = "10 10";
const moveInput = "MM";
const positionInput = "3 3 N";

const gridSize = setPlateauDimensions(gridSizeString);
console.log(gridSize);

let initialPosition = processInitialPosition(positionInput, gridSize);
console.log(initialPosition);

const instructions = processMoveInput(moveInput);
console.log(instructions);

if (initialPosition !== undefined) {
  const rover: RoverPosition = initialPosition;
  moveInstructions(rover, instructions, gridSize);
  console.log(rover);
} else throw new Error("not good");
