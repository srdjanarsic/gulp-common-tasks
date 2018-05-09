import {ComputerType} from "./computer-type";
import {expect} from "chai";

describe("ComputerType Class", function () {
    it("MAC s MAC", function () {
        expect(ComputerType.MAC).to.equal("MAC");
    });

    it("PC is PC", function () {
        expect(ComputerType.PC).to.equal("PC");
    });

    it("COMMODORE64 is COMMODORE64", function () {
        expect(ComputerType.COMMODORE64).to.equal("COMMODORE64");
    });

    it("MAC is not equal to PC", function () {
        expect(ComputerType.PC).to.not.equal(ComputerType.MAC);
    });
});
