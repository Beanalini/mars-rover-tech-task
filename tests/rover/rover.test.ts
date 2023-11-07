import { processInitialPosition } from "../../src/rover/rover";

const plateauSize = { x: 5, y: 5 };
describe("rover position and movement ", () => {
  test("rover has been placed inside the plateau boundary", () => {
    //Arrange
    const initialPosition = "3 3 N";
    //Act
    const onPlateau = processInitialPosition(initialPosition, plateauSize);
    //Assert
    expect(onPlateau).toBe(true);
  });
});
