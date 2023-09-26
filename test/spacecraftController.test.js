const spacecraftController = require("../modules/spacecraftController").spacecraftController;
test("If only one command", () => {
    const commands = ["b"];
  
    const start = {
      coordinates: [0, 0, 0],
      direction: "N",
    };
  
    const expected = {
      coordinates: [0, -1, 0],
      direction: "N",
    };
  
    const output = mainCommand(commands, start);
    expect(output).toStrictEqual(expected);
  });

  test("Complex Movement", () => {
    const commands = ["f", "r", "u", "b", "l"];
  
    const start = {
      coordinates: [0, 0, 0],
      direction: "N",
    };
    const expected = {
      coordinates: [0, 1, -1],
      direction: "N",
    };
  
    const output = mainCommand(commands, start);
    expect(output).toStrictEqual(expected);
  });

  test("for same repeateted command", () => {
    const commands = ["f", "f", "f", "f", "f"];
  
    const start = {
      coordinates: [0, 0, 0],
      direction: "U",
    };
    const expected = {
      coordinates: [0, 0, 5],
      direction: "U",
    };
  
    const output = mainCommand(commands, start);
    expect(output).toStrictEqual(expected);
  });

  test("Complex Movement", () => {
    const commands = ["f", "f", "u", "l", "l"];
  
    const start = {
      coordinates: [0, 0, 0],
      direction: "W",
    };
    const expected = {
      coordinates: [-2, 0, 0],
      direction: "W",
    };
  
    const output = mainCommand(commands, start);
    expect(output).toStrictEqual(expected);
  });
  
  test("Complex Movement", () => {
    const commands = ["f", "r", "u", "b", "r"];
  
    const start = {
      coordinates: [0, 0, 0],
      direction: "U",
    };
    const expected = {
      coordinates: [0, 0, 0],
      direction: "S",
    };
  
    const output = mainCommand(commands, start);
    expect(output).toStrictEqual(expected);
  });
  
  test("Complex Movement", () => {
    const commands = ["f", "r", "b", "b", "l"];
  
    const start = {
      coordinates: [0, 0, 0],
      direction: "N",
    };
    const expected = {
      coordinates: [-2, 1, 0],
      direction: "N",
    };
  
    const output = mainCommand(commands, start);
    expect(output).toStrictEqual(expected);
  });
  
  test("Complex Movement", () => {
    const commands = ["f", "r", "d"];
  
    const start = {
      coordinates: [0, 0, 0],
      direction: "N",
    };
    const expected = {
      coordinates: [0, 1, 0],
      direction: "D",
    };
  
    const output = mainCommand(commands, start);
    expect(output).toStrictEqual(expected);
  });