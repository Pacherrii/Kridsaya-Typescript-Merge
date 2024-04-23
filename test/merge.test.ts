import { merge } from "../src/merge";
import { expect } from "chai";
// import { describe, it } from "mocha";

describe("Merge Function", () => {
    it("merge three collection arrays", () => {
        const collection1 = [1, 2, 3];
        const collection2 = [6, 5, 4];
        const collection3 = [7, 8, 9];
        const expected = [1, 2, 3, 6, 5, 4, 7, 8, 9];
        expect(merge(collection1, collection2, collection3)).to.deep.equal(expected);
    });
});

