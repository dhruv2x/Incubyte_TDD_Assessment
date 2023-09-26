const turnDown = require("../../modules/turnDown").turnDown;

test("changes direction to the Down when current direction is North/South/East/West/Up", () => {
    expect(turnDown("N")).toStrictEqual("D");
    expect(turnDown("S")).toStrictEqual("D");
    expect(turnDown("E")).toStrictEqual("D");
    expect(turnDown("W")).toStrictEqual("D");
    expect(turnDown("U")).toStrictEqual("D");
});




