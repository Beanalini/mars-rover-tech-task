import { setPlateauDimensions } from "../src/plateau";

const gridSizeString = "5 5";
const expectedGridSize = setPlateauDimensions(gridSizeString);
console.log(expectedGridSize);
