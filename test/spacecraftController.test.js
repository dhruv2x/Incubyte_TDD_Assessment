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