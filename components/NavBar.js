import React from "react";
import Link from "next/link";
var ether = require("./ethers");

var btn_val = "Connect";

var handleClick = async () => {
  ether.connect();
};

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg backdrop-blur-lg"
        style={{ color: "#FFFFFF" }}
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link legacyBehavior href="/">
              <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                <img
                  height="50px;"
                  width="50px;"
                  alt="LOGO"
                  src="/img/logo_byf_map.png"
                />
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            style={{ fontFamily: "inter" }}
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-white px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                  href="#home"
                >
                  <i className="text-blueGray-400far text-lg leading-lg mr-2" />{" "}
                  Home
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-white px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                  href="#aboutus"
                >
                  <i className="text-blueGray-400 far text-lg leading-lg mr-2" />{" "}
                  About Us
                </a>
              </li>
              
              <li className="flex items-center">
                <a
                  className="hover:text-white px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                  href="#business"
                >
                  <i className="text-blueGray-400 far text-lg leading-lg mr-2" />{" "}
                  Business Plan
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-white px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                  href="#raffle"
                >
                  <i className="text-blueGray-400 far text-lg leading-lg mr-2" />{" "}
                  Raffle
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-white px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                  href="#roadmap"
                >
                  <i className="text-blueGray-400 far text-lg leading-lg mr-2" />{" "}
                  Roadmap
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-white px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                  href="#tokenomics"
                >
                  <i className="text-blueGray-400 far text-lg leading-lg mr-2" />{" "}
                  Tokenomics
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-white px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                  target="_blank"
                  href="/BYF_Whitepaper.docx"
                >
                  <i className="text-blueGray-400 far text-lg leading-lg mr-2" />{" "}
                  Whitepaper
                </a>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <button
                  className=" active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                  id="connetbtn"
                  onClick={() => handleClick()}
                >
                  <i className="fas fa-link"></i> {btn_val}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
