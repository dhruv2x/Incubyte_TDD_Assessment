const turnLeft = require("../../modules/turnLeft").turnLeft;

test("changes direction to the left when current direction is North", () => {
  const Direction = "N";
  expect(turnLeft(Direction)).toStrictEqual("W");
});

test("changes direction to the left when current direction is South", () => {
    const Direction = "S";
    expect(turnLeft(Direction)).toStrictEqual("E");
  });

  test("changes direction to the left when current direction is East", () => {
    const Direction = "E";
    expect(turnLeft(Direction)).toStrictEqual("N");
  });

  test("changes direction to the left when current direction is West", () => {
    const Direction = "W";
    expect(turnLeft(Direction)).toStrictEqual("S");
  });

  test("changes direction to the left when current direction is Up", () => {
    const Direction = "U";
    expect(turnLeft(Direction)).toStrictEqual("N");
  });

  test("changes direction to the left when current direction is Down", () => {
    const Direction = "D";
    expect(turnLeft(Direction)).toStrictEqual("S");
  });

