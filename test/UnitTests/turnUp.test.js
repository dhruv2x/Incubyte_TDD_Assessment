const turnUp = require("../../modules/turnUp").turnUp;

test("changes direction to the Up when current direction is North/South/East/West/Down", () => {
    expect(turnUp("N")).toStrictEqual("U");
    expect(turnUp("S")).toStrictEqual("U");
    expect(turnUp("E")).toStrictEqual("U");
    expect(turnUp("W")).toStrictEqual("U");
    expect(turnUp("D")).toStrictEqual("U");
});


