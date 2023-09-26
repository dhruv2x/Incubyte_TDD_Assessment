const turnRight = require("../../modules/turnRight").turnRight;

test("changes direction to the right when current direction is North", () => {
  const Direction = "N";
  expect(turnRight(Direction)).toStrictEqual("E");
});

test("changes direction to the right when current direction is South", () => {
    const Direction = "S";
    expect(turnRight(Direction)).toStrictEqual("W");
  });

  test("changes direction to the right when current direction is East", () => {
    const Direction = "E";
    expect(turnRight(Direction)).toStrictEqual("S");
  });

  test("changes direction to the right when current direction is West", () => {
    const Direction = "W";
    expect(turnRight(Direction)).toStrictEqual("N");
  });

  test("changes direction to the right when current direction is Up", () => {
    const Direction = "U";
    expect(turnRight(Direction)).toStrictEqual("S");
  });

  test("changes direction to the right when current direction is Down", () => {
    const Direction = "D";
    expect(turnRight(Direction)).toStrictEqual("N");
  });

