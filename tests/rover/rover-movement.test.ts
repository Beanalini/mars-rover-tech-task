import { processMoveInput } from "../../src/rover/rover-move";

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
});
