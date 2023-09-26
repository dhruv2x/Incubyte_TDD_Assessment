function turnLeft(Direction) {
    if (Direction === "N") {
      return "W";
    }
    if (Direction === "S") {
      return "E";
    }
    if (Direction === "E") {
      return "N";
    }
    if (Direction === "W") {
      return "S";
    }
    if (Direction === "U") {
      return "N";
    }
    if (Direction === "D") {
      return "S";
    }   
  }
  
  module.exports = {
    turnLeft,
  };
  