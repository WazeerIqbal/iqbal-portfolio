"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var computer_svg_1 = __importDefault(require("../images/computer.svg"));
var react_router_dom_1 = require("react-router-dom");
var Footer = function (_a) {
    var scrollToSection = _a.scrollToSection;
    return (<div>
            <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
                <div className="mx-auto max-w-screen-xl">
                    <div className="sm:flex sm:items-center sm:justify-between">


                        <a href="https://github.com/WazeerIqbal" className="flex items-center">
                            <img src={computer_svg_1.default} className="mr-3 h-8" alt="FlowBite Logo"/>
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Iqbal DK</span>
                        </a>




                        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                            <a href="https://www.linkedin.com/in/iqbal-rasool-a60425212/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">

                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_14_180)">
                                        <path d="M15.0001 0.600098C7.0471 0.600098 0.600098 7.0471 0.600098 15.0001C0.600098 22.9531 7.0471 29.4001 15.0001 29.4001C22.9531 29.4001 29.4001 22.9531 29.4001 15.0001C29.4001 7.0471 22.9531 0.600098 15.0001 0.600098ZM11.4751 20.9686H8.5591V11.5846H11.4751V20.9686ZM9.9991 10.4326C9.0781 10.4326 8.4826 9.7801 8.4826 8.9731C8.4826 8.1496 9.0961 7.5166 10.0366 7.5166C10.9771 7.5166 11.5531 8.1496 11.5711 8.9731C11.5711 9.7801 10.9771 10.4326 9.9991 10.4326ZM22.1251 20.9686H19.2091V15.7681C19.2091 14.5576 18.7861 13.7356 17.7316 13.7356C16.9261 13.7356 16.4476 14.2921 16.2361 14.8276C16.1581 15.0181 16.1386 15.2881 16.1386 15.5566V20.9671H13.2211V14.5771C13.2211 13.4056 13.1836 12.4261 13.1446 11.5831H15.6781L15.8116 12.8866H15.8701C16.2541 12.2746 17.1946 11.3716 18.7681 11.3716C20.6866 11.3716 22.1251 12.6571 22.1251 15.4201V20.9686Z" fill="#A7A7A7"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_14_180">
                                            <rect width="30" height="30" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>


                            </a>

                            <a href="" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.875 1.875C8.59152 1.875 1.875 8.59152 1.875 16.875C1.875 25.1585 8.59152 31.875 16.875 31.875C25.1585 31.875 31.875 25.1585 31.875 16.875C31.875 8.59152 25.1585 1.875 16.875 1.875ZM24.0837 13.1819C24.0937 13.3393 24.0937 13.5033 24.0937 13.6641C24.0937 18.5792 20.3504 24.2411 13.51 24.2411C11.4007 24.2411 9.44531 23.6283 7.79799 22.5737C8.09933 22.6071 8.38728 22.6205 8.69531 22.6205C10.4364 22.6205 12.0368 22.0312 13.3125 21.0335C11.6786 21 10.3058 19.9286 9.83705 18.4554C10.4096 18.5391 10.9252 18.5391 11.5145 18.3884C10.6732 18.2175 9.91699 17.7605 9.37438 17.0953C8.83178 16.43 8.53623 15.5973 8.53795 14.7388V14.692C9.03013 14.9699 9.60938 15.1406 10.2154 15.1641C9.70595 14.8245 9.28814 14.3645 8.99903 13.8249C8.70993 13.2852 8.55845 12.6825 8.55804 12.0703C8.55804 11.3772 8.73884 10.7444 9.06362 10.1953C9.99744 11.3449 11.1627 12.2851 12.4837 12.9548C13.8047 13.6245 15.2518 14.0088 16.731 14.0826C16.2054 11.5547 18.0938 9.50893 20.3638 9.50893C21.4353 9.50893 22.3996 9.95759 23.0792 10.6808C23.9196 10.5234 24.7232 10.2087 25.4397 9.78683C25.1618 10.6473 24.5792 11.3739 23.8058 11.8326C24.5558 11.7522 25.279 11.5446 25.9487 11.2533C25.4431 11.9967 24.8103 12.6562 24.0837 13.1819Z" fill="#A7A7A7"/>
                                </svg>

                            </a>
                            <a href="https://github.com/WazeerIqbal" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z" fill="#A7A7A7"/>
                                </svg>

                            </a>

                        </div>
                    </div>




                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>

                    <div className="md:flex md:justify-between">
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-6">
                            <div>

                                <a href="#" className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                            </div>
                            <div>
                                <react_router_dom_1.Link to="/about" className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">About</react_router_dom_1.Link>

                            </div>
                            <div>
                                <a href="#software-tech" className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page" onClick={function () {
            scrollToSection('software-tech');
        }}>Software Tech</a>

                            </div>

                            <div>
                                <a href="#projects" className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page" onClick={function () {
            scrollToSection('software-tech');
        }}>Projects</a>

                            </div>
                            <div>
                                <react_router_dom_1.Link to="/contact" className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Contact</react_router_dom_1.Link>

                            </div>

                        </div>



                        <div className="mb-6 md:mb-0">


                            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">IQBAL</a>. Designed and built by IQBAL DK.
                            </span>
                        </div>




                    </div>

                </div>
            </footer>
        </div>);
};
exports.default = Footer;
//# sourceMappingURL=Footer.jsx.map