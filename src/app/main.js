import {Computer} from "./js/computer";
import {ComputerType} from "./js/computer-type";

/**
 * Bootstrap app
 *
 * @returns {void}
 */
(function () {
    const c64 = new Computer(ComputerType.COMMODORE64);
    document.body.innerHTML += JSON.stringify(c64, undefined, 2);
}());
