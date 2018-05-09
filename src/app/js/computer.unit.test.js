import {Computer} from "./computer";
import {expect} from "chai";

describe("Computer Class", function () {
    it("Class should exist", function () {
        expect(new Computer()).to.be.an.instanceof(Computer);
    });

    it("Sets type trough constructor and gets it with getType()", () => {
        const mac = new Computer("MAC");
        expect(mac.getType()).to.equal("MAC");
    });

    it("Sets type trough constructor and gets it with getType()", () => {
        const mac = new Computer("MAC");
        expect(mac.getType()).to.not.equal("PC");
    });
});
