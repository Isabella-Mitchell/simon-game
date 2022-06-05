/**
 * @jest-environment jsdom
 */

const { expect } = require("@jest/globals");
const { game } = require("../game");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains corrent keys", () => {
    test("score key exsists", () => {
        expect ("score" in game).toBe(true);
    });
    test("currentGame key exsists", () => {
        expect ("currentGame" in game).toBe(true);
    });
    test("playMoves key exsists", () => {
        expect ("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    })
});