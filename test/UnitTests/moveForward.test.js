const moveForward = require("../../modules/moveForward").moveForward;

test("moves forward if direction is North", () => {
  let Direction = "N";
  let position = [0, 0, 0];
  Position = moveForward(position, Direction);
  expect(Position).toStrictEqual([0, 1, 0]);
});

test("moves forward if direction is South", () => {
  let Direction = "S";
  let position = [0, 0, 0];
  Position = moveForward(position, Direction);
  expect(Position).toStrictEqual([0, -1, 0]);
});

test("moves forward if direction is East", () => {
  let Direction = "E";
  let position = [0, 0, 0];
  Position = moveForward(position, Direction);
  expect(Position).toStrictEqual([1, 0, 0]);
});

test("moves forward if direction is West", () => {
  let Direction = "W";
  let position = [0, 0, 0];
  Position = moveForward(position, Direction);
  expect(Position).toStrictEqual([-1, 0, 0]);
});

test("moves forward if direction is Up", () => {
  let Direction = "U";
  let position = [0, 0, 0];
  Position = moveForward(position, Direction);
  expect(Position).toStrictEqual([0, 0, 1]);
});

test("moves forward if direction is Down", () => {
  let Direction = "D";
  let position = [0, 0, 0];
  Position = moveForward(position, Direction);
  expect(Position).toStrictEqual([0, 0, -1]);
});