//Plateau functionality

interface Plateau {
  x: number;
  y: number;
}

export const setPlateauDimensions = (plateauSizeInput: string): Plateau => {
  const [x, y] = plateauSizeInput.split(" "); //destructure
  console.log(x, y);
  if (x && y) {
    return {
      x: parseInt(x),
      y: parseInt(y),
    };
  } else {
    throw new Error(`Invalid grid size format: ${plateauSizeInput}`);
  }
};
