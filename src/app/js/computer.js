/**
 * Computer class - for test purpose
 * Note: type is set during initialization time and cannot be changed
 * because you cannot cast PC to MAC and vice-versa
 *
 * @class Computer
 */
export class Computer {

    constructor (type) {
        this.type = type;
    }

    /**
     * Returns type of computer enumerated by ComputerType
     *
     * @returns ComputerType
     * @memberof Computer
     */

    getType () {
        return this.type;
    }

}
