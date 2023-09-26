function turnRight(Direction) {
    if (Direction === "N") {
      return "E";
    }
    if (Direction === "S") {
      return "W";
    }
    if (Direction === "E") {
      return "S";
    }
    if (Direction === "W") {
      return "N";
    }
    if (Direction === "U") {
      return "S";
    }
    if (Direction === "D") {
      return "N";
    }  
    
  }
  
  module.exports = {
    turnRight,
  };