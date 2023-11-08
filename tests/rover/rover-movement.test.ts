import { processMoveInput } from "../../src/rover/rover-move";
import { processInitialPosition } from "../../src/rover/rover";

const plateauSize = { x: 5, y: 5 };
describe(" moves rover around the plateau", () => {
  test("return an array of instructions if valid input  ", () => {
    //Arrange
    const moveInput = "LMLMLM";

    //Act: run movement instructions
    const moveInstructions = processMoveInput(moveInput);
    //Assert
    //returns moveInstructions need to coerce value to a truthy value
    expect(!!moveInstructions).toBe(true);
  });
  test("return false if input instructions are invalid  ", () => {
    //Arrange
    const moveInput = "LMSLMLMP/ ";

    //Act: run movement instructions
    const moveInstructions = processMoveInput(moveInput);
    //Assert
    //returns moveInstructions need to coerce value to a truthy value
    expect(moveInstructions).toBe(false);
  });
  test("rover moves forward 1 grid space from inital placement position ", () => {
    //Arrange
    const positionInput = "3 3 N";
    const positionOnPlateau = processInitialPosition(
      positionInput,
      plateauSize
    );

    const moveInput = "M";
    const moveInstructions = processMoveInput(moveInput);
    //run movement instruction
    moveRover(positionOnPlateau, moveInstructions, plateauSize);
    //Assert
    //returns RoverPosition need to coerce value to a truthy value
    expect(positionOnPlateau).toBe({ x: 1, y: 3, direction: "N" });
  });
});
