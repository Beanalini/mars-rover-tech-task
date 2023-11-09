# Mars Rover Project👽

- [Description](#description)
- [Functional Requirements](#functional-requirements)
- [Approach](#approach)
- [Next Steps](#next-steps)
- [Tests](#tests)
- [Installation](#install)
- [Usage](#usage)
- [How to Contribute](#constribute)

## Description

This project creates a Typescript program that moves rovers around the surface of Mars. The surface is represented by a Plateau which is a square/rectangular grid. Rovers move around the Plateau taking pictures and collecting rock samples.

## Functional Requirements

The MVP for this project is to set the size of the Plateau and control the movement of a Rover ensuring it remains within the boundaries of the Plateau.

### Position on the plateau

The Plateau is divided into a grid, a Rover's position is represented by (x,y) coordinates and the letters N, S, E and West represent North, South, East and West respectively.

### Moving Around the Plateau

Movement instructions consist of a string of letters which are sent to the Rover. The allowed letter and resultant action are listed in the table below.

| Letter | Action                                                                              |
| ------ | ----------------------------------------------------------------------------------- |
| L      | Spins the Rover 90 degrees _Left_ without moving from the current coordinate point  |
| R      | Spins the Rover 90 degrees _Right_ without moving from the current coordinate point |
| M      | Spins the Rover 90 degrees Right without moving from the current coordinate point   |

### Program Inputs

The inputs to the Rover program are in the form of line inputs. The first line inputted into the program provides the upper-right coordinates, which defines the size of the grid since the lower left-side is assumed to be (0,0). The subsequent lines of code control the Rover's position, each Rover receives 2 lines of code. The first line of input to the Rover are (x, y) coordinates and the cardinal compass point the Rover is facing when it is place on the Plateau. The second line of code is a string of letters that provide movement instructions. Input format and order in shown below:

Plateau Size: 5 5
Rover initial position: 2 3 E
Movement instruction string: MLMRM

### Program Outputs

The output represents a Rover's final position and the direction it is facing. e.g 3 4 E

## Approach

The program was developed using a test first approach using Jest to implement the testing. The sequence of development steps are listed below:

| Test | code |
|-----|-------|
| Plateau | SetPlateauDimensions function: checks input and creates object of type Plateau to store the grid size                                                                                                                                                                                     |
| Rover initial position on the Plateau | ProcessInitialPosition function checks validity of the data, creates an object of type RoverPosition that stores the position and direction of the Rover. The direction is stored as a variable of type Direction. |
| Rover move one grid position          | ProcessMoveInput function takes string input and creates an array of type Instruction. moveInstructions function iterates over the array and calls moveRover function if the input string is 'M'. MoveRover function updates the rover position object if is within the Plateau boundary. |
| Rover rotate right                    | Add rotateRight function call to moveInstructions function. RotateRight function translates the current direction and updates the rover position object. Rover rotate right                                                                                                               | add rotateLeft function call to moveInstructions function. RotateLeft function translates the current direction and updates the rover position object. |
| Instruction controls sequences        | Uses all functionality to complete input movement instructions                                                                                                                                                                                                                            |

## Current functionality

- A plateau is created
- A rover is created
- A Rover can only be placed inside the boundary of the Plateau
- A rover moves forward and rotates left and right
- If a Rover's instruction set take it beyond the Plateau boundary it will remain stationary until the next instruction rotates it and moves it away from the boundary.

## Limitations

- only one rover is currently placed on the Plateau
- A rover does not check for obstacles/another rover before moving into a grid position
- Input to the program is via testing or setting input variables in the index.ts file.
- Currently no UI

## Next Steps

- Add functionality to check for obstacles prior to moving
- Allow additional rovers
- create a UI

## Usage

Program interaction is either via running unit tests or via running the application from the index entry point file and viewing output to the console.

The run jest tests, at the command prompt enter:

            npm test

To run the application, at the prompt enter:

            npm test

## Installation

After forking the repo, follow the instructions below to install the application:

Install dependencies:

           npm i

To run application tests:

            npm test

To run the application

            npm start

## How to Contribute

If you would like to contribute to this project you can contact me by email at dat826@gmail.com or through my GitHub account @[Beanalini](https://github.com/Beanalini).
