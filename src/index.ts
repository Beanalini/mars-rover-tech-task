import { setPlateauDimensions } from "../src/plateau";
import { processMoveInput, moveInstructions } from "../src/rover/rover-move";
import { processInitialPosition } from "../src/rover/rover";
import { RoverPosition } from "../src/rover/rover.types";

/********Inputs*******************************/
const gridSizeString = "5 5"; //plateau size
const positionInput = "3 3 E"; // rover:initial position
const moveInput = "MMRMMRMRRM"; //movement instructions
/*******************************************/

const gridSize = setPlateauDimensions(gridSizeString);
console.log(`plateau size: ${gridSize.x} ${gridSize.y}`);

let initialPosition = processInitialPosition(positionInput, gridSize);

console.log("Rover starting position:" + initialPosition);

const instructions = processMoveInput(moveInput);
console.log(...instructions);

if (initialPosition !== undefined) {
  const rover: RoverPosition = initialPosition;
  moveInstructions(rover, instructions, gridSize);
  /******output:rover final position******* */
  console.log(`Rover end position: ${rover.x} ${rover.y} ${rover.direction}`);
  /******************************************/
} else console.error("invalid coordinates entered");
