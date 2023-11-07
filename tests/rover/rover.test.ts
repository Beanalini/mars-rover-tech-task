import { processInitialPosition } from "../../src/rover/rover";

const plateauSize = { x: 5, y: 5 };
describe("rover position and movement ", () => {
  test("rover has been placed inside the plateau boundary", () => {
    //Arrange
    const positionInput = "3 3 N";
    //Act
    const onPlateau = processInitialPosition(positionInput, plateauSize);
    //Assert
    //returns RoverPosition need to coerce value to a truthy value
    expect(!!onPlateau).toBe(true);
  });
});
