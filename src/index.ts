import { setPlateauDimensions } from "../src/plateau";
import { processMoveInput } from "../src/rover/rover-move";

const gridSizeString = "5 5";
const expectedGridSize = setPlateauDimensions(gridSizeString);
console.log(expectedGridSize);

const moveInput = "MLLM";
const moveInstructions = processMoveInput(moveInput);
console.log(moveInstructions);
