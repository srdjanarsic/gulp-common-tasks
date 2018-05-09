import {expect} from "chai";

describe("document", function () {
    it("document.body contains COMMODORE64 content", function () {
        expect(document.body.innerHTML).to.contain("COMMODORE64");
    });
});
