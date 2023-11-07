import { setPlateauDimensions } from "../src/plateau";

describe("setPlateauDimensions", () => {
  test("returns the size of the plateau", () => {
    //Arrange
    const plateauSizeInput = "5 5";
    const expectedPlateauSize = { x: 5, y: 5 };
    //Act
    const plateauSize = setPlateauDimensions(plateauSizeInput);
    //Assert
    expect(plateauSize).toBe(expectedPlateauSize);
  });
});
