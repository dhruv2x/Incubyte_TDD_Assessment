const moveForward = require("./moveForward").moveForward;
const moveBackward = require("./moveBackward").moveBackward;
const turnLeft = require("./turnLeft").turnLeft;
const turnRight = require("./turnRight").turnRight;
const turnUp = require("./turnUp").turnUp;
const turnDown = require("./turnDown").turnDown;

function spacecraftController(commands, start) {
  let direction = start.direction;
  let coordinates = start.coordinates;

  for (let i = 0; i < commands.length; i++) {
    let c = commands[i];
    if (c === "f") {
      coordinates = moveForward(coordinates, direction);
      console.log(coordinates, direction);
    } else if (c === "b") {
      coordinates = moveBackward(coordinates, direction);
      console.log(coordinates, direction);
    } else if (c === "l") {
      direction = turnLeft(direction);
      console.log(coordinates, direction);
    } else if (c === "r") {
      direction = turnRight(direction);
      console.log(coordinates, direction);
    } else if (c === "u") {
      direction = turnUp(direction);
      console.log(coordinates, direction);
    } else if (c === "d") {
      direction = turnDown(direction);
      console.log(coordinates, direction);
    } 
    else {
        console.log("Please enter valid command");
      }
  }
  console.log("The Final Position of Lunar Craft is" + coordinates, direction);
  return { coordinates, direction };
}

module.exports = {
    spacecraftController,
};