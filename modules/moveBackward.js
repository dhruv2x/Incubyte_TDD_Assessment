function moveBackward(Position, Direction) {
    let Coordinates = Position;
  
    if (Direction == "N") {
        Coordinates[1]--;
        return Coordinates;
    } else if (Direction == "S") {
        Coordinates[1]++;
        return Coordinates;
    } else if (Direction == "E") {
        Coordinates[0]--;
        return Coordinates;
    } else if (Direction == "W") {
        Coordinates[0]++;
        return Coordinates;
    } else if (Direction == "U") {
        Coordinates[2]--;
        return Coordinates;
    } else if (Direction == "D") {
        Coordinates[2]++;
        return Coordinates;
    }
  }
  
  module.exports = {
    moveBackward,
  };
  