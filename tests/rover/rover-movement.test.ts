import { processMoveInput } from "../../src/rover/rover-move";
import { processInitialPosition } from "../../src/rover/rover";
import { moveInstructions } from "../../src/rover/rover-move";

import { RoverPosition } from "../../src/rover/rover.types";

const plateauSize = { x: 5, y: 5 };
describe(" evaluates rover movement instructions on the plateau", () => {
  test("return an array of instructions if valid input  ", () => {
    //Arrange
    const moveInput = "LMLMLM";

    //Act: run movement instructions
    const moveInstructions = processMoveInput(moveInput);
    //Assert
    //returns moveInstructions need to coerce value to a truthy value
    expect(moveInstructions).toEqual(["L", "M", "L", "M", "L", "M"]);
  });

  test("rover moves forward 1 grid space from initial placement position", () => {
    // Arrange
    const positionInput = "3 3 N";
    let positionOnPlateau = processInitialPosition(positionInput, plateauSize);

    if (positionOnPlateau !== undefined) {
      const moveInput = "M";
      const instructions = processMoveInput(moveInput);

      // Act: Run movement instruction
      moveInstructions(positionOnPlateau, instructions, plateauSize);
      console.log(positionOnPlateau);
      // Assert: Use the toEqual matcher to check if the properties of objects are equal
      expect(positionOnPlateau).toEqual({ x: 3, y: 4, direction: "N" });
    } else {
      fail("Invalid initial position");
    }
  });

  test("rover can't move beyond the plateau boundary", () => {
    // Arrange
    const positionInput = "3 3 E";
    let positionOnPlateau = processInitialPosition(positionInput, plateauSize);

    if (positionOnPlateau !== undefined) {
      const moveInput = "MMM";
      const instructions = processMoveInput(moveInput);

      // Act: Run movement instruction
      moveInstructions(positionOnPlateau, instructions, plateauSize);
      console.log(positionOnPlateau);
      // Assert: Use the toEqual matcher to check if the properties of objects are equal
      expect(positionOnPlateau).toEqual({ x: 5, y: 3, direction: "E" });
    } else {
      fail("Invalid initial position");
    }
  });

  test("rover remains stationary at the boundary until the next rotation and movement instruction take it away from the boundary.", () => {
    // Arrange
    const positionInput = "3 3 E";
    let positionOnPlateau = processInitialPosition(positionInput, plateauSize);

    if (positionOnPlateau !== undefined) {
      const moveInput = "MMMLMMLM";
      const instructions = processMoveInput(moveInput);

      // Act: Run movement instruction
      moveInstructions(positionOnPlateau, instructions, plateauSize);
      // Assert: Use the toEqual matcher to check if the properties of objects are equal
      expect(positionOnPlateau).toEqual({ x: 4, y: 5, direction: "W" });
    } else {
      fail("Invalid initial position");
    }
  });
  test("rover moves forward and rotates right by 90 degrees", () => {
    // Arrange
    const positionInput = "1 2 N";
    let positionOnPlateau = processInitialPosition(positionInput, plateauSize);

    if (positionOnPlateau !== undefined) {
      const moveInput = "MRM";
      const instructions = processMoveInput(moveInput);

      // Act: Run movement instruction
      moveInstructions(positionOnPlateau, instructions, plateauSize);
      // Assert: Use the toEqual matcher to check if the properties of objects are equal
      expect(positionOnPlateau).toEqual({ x: 2, y: 3, direction: "E" });
    } else {
      fail("Invalid initial position");
    }
  });
  test("rover rotates Left by 90 degrees", () => {
    // Arrange
    const positionInput = "3 2 N";
    let positionOnPlateau = processInitialPosition(positionInput, plateauSize);

    if (positionOnPlateau !== undefined) {
      const moveInput = "MLM";
      const instructions = processMoveInput(moveInput);

      // Act: Run movement instruction
      moveInstructions(positionOnPlateau, instructions, plateauSize);
      // Assert: Use the toEqual matcher to check if the properties of objects are equal
      expect(positionOnPlateau).toEqual({ x: 2, y: 3, direction: "W" });
    } else {
      fail("Invalid initial position");
    }
  });
  test("longer input string- moving forward and rotating Left", () => {
    // Arrange
    const positionInput = "1 2 N";
    let positionOnPlateau = processInitialPosition(positionInput, plateauSize);

    if (positionOnPlateau !== undefined) {
      const moveInput = "LMLMLMLMM";
      const instructions = processMoveInput(moveInput);

      // Act: Run movement instruction
      moveInstructions(positionOnPlateau, instructions, plateauSize);

      expect(positionOnPlateau).toEqual({ x: 1, y: 3, direction: "N" });
    } else {
      fail("Invalid initial position");
    }
  });
  test("longer input string- moving forward and rotating right", () => {
    // Arrange
    const positionInput = "3 3 E";
    let positionOnPlateau = processInitialPosition(positionInput, plateauSize);

    if (positionOnPlateau !== undefined) {
      const moveInput = "MMRMMRMRRM";
      const instructions = processMoveInput(moveInput);
      // Act: Run movement instruction
      moveInstructions(positionOnPlateau, instructions, plateauSize);
      // Assert: Use the toEqual matcher to check if the properties of objects are equal
      expect(positionOnPlateau).toEqual({ x: 5, y: 1, direction: "E" });
    } else {
      fail("Invalid initial position");
    }
  });
});
