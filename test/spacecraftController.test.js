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