import {} from "../../src/rover/rover";

const plateauSize = { x: 5, y: 5 };
describe(" moves rover around the plateau", () => {
  test("return an array of instructions if valid input  ", () => {
    //Arrange
    const moveInput = "LMLMLM";

    //Act: run movement instructions
    const moveInstructions = processMoveInput(moveInput);
    //Assert

    //returns RoverPosition need to coerce value to a truthy value
    expect(moveInput).toBe(["L", "M", "R"]);
  });
});
