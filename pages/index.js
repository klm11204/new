import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import About from "../components/About";
import Business from "../components/Businessplan";
import Raffle from "../components/Raffle";
import Roadmap from "../components/Roadmap";
import Tokenomics from "../components/Tokenomics";
import BuySell from "../components/BuySell";
import { React, useEffect, useState } from "react";
import { notification, Modal, Button } from "antd";

var ether = require("../components/ethers");

export default function Home() {
  const openNotificationWithIcon = (type, message, desc) => {
    notification[type]({
      message: message,
      description: desc,
    });
  };
  const [openTab, setOpenTab] = useState(1);
  const [rate, setRate] = useState();
  const [rate2, setRate2] = useState();
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [showHelp, setShowHelp] = useState(false);

  const buy = async (event) => {
    await ether.buyBYF(input1);
  };

  const sell = async (event) => {
    await ether.sellBYF(input1);
  };

  useEffect(() => {
    (async () => {
      if (typeof window.ethereum === "undefined") {
        window.alert(
          "It seems you are accessing the site without a web3 Wallet application. Please Install a Web3 wallet in order to Buy and Sell BYFcoin on this website."
        );
      } else {
        var rate_ = await ether.statsGlobal();
        console.log(parseInt(rate_.rRate.toString()));
        setRate(rate_.rRate.toString());
        var rate2_ = parseFloat(1 / parseInt(rate_.rRate.toString()));
        setRate2(rate2_.toString().slice(0, 18));
      }
    })();
  }, []);

  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  return (
    <>
      <div></div>
      <Head>
        <title>BYFCOIN | Next Generation of Web3 Real Estate</title>
        <meta name="PopCoin" content="Next Generation Rewards Token" />
      </Head>
      <Navbar />
      <main>
        <div
          id="home"
          className="relative pt-16 pb-32 flex content-center items-center justify-center "
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('img/cool-background2.png')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute backdrop-blur-sm"
            >
              <Script
                type="module"
                src="https://unpkg.com/@splinetool/viewer@1.0.55/build/spline-viewer.js"
              ></Script>
              <spline-viewer url="https://prod.spline.design/z9yEfc8Ox8Ab4sP9/scene.splinecode"></spline-viewer>
            </span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full px-6 flex-1 ml-auto mr-auto">
                <div className="pr-12">
                  <h4
                    className="leading-normal mt-10 mb-2 uppercase text-white"
                    style={{ fontFamily: "inter", fontSize: "1.8rem" }}
                  >
                    Revolutionizing Real Estate with Affordable{" "}
                    <span style={{ color: "#40E0D0" }}>Housing</span>
                  </h4>
                  <p className="leading-normal mt-4 font-montserrat text-md text-blueGray-200">
                    WHERE CRYPTO AND REAL ESTATE MEET!
                  </p>
                  <div
                    className="justify-center mt-4"
                    style={{ fontFamily: "inter" }}
                  >
                    <Link
                      legacyBehavior
                      href="https://t.me/+AVJWXq65sbgyNGE0"
                    >
                      <a>
                        <button
                          className=" active:bg-blueGray-600 text-white text-sm font-bold uppercase px-4 py-2 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                          style={{ backgroundColor: "#2a2c2b" }}
                          type="button"
                        >
                          <i className="fab fa-telegram"></i> Join Telegram
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 flex-1 ml-auto mr-auto">
                <div className="flex flex-wrap items-center mt-8">
                  <div className="w-full mt-20 md:w-8/12 px-4 mr-auto ml-auto">
                    <div
                      className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-2xl rounded-lg border-0"
                      style={{ backgroundColor: "#2a2c2b", opacity: "0.7" }}
                    >
                      <div className="rounded-t mb-0 px-6 py-6">
                        <div className="text-center mb-3"></div>
                        <div className="flex w-full mb-3 mt-2 text-center">
                          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                            <h6
                              className="text-black text-xs"
                              id="total"
                              style={{ color: "#40E0D0 ", fontFamily: "inter" }}
                            >
                              Current Rate
                            </h6>
                          </div>
                          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                            <h6
                              className="text-black text-xs"
                              style={{ color: "#40E0D0 ", fontFamily: "inter" }}
                            >
                              1 ETH = {rate}&nbsp;BYFCOIN
                            </h6>
                            <br></br>
                            <h6
                              className="text-black text-xs"
                              style={{ color: "#40E0D0 ", fontFamily: "inter" }}
                            >
                              1 BYF = {rate2}&nbsp;ETH
                            </h6>
                          </div>
                        </div>
                        <hr className="mt-6 border-b-1 border-blueGray-300" />
                      </div>
                      <div className="relative flex flex-col w-full mb-6 rounded">
                        <div className="px-2 py-2 flex-auto">
                          <div className="tab-content tab-space px-2">
                            <div
                              className={openTab === 1 ? "block" : "hidden"}
                              id="link1"
                            >
                              <label
                                className="block uppercase text-black text-xs font-bold mb-2"
                                style={{ color: "#40E0D0 ", fontFamily: "inter" }}
                              >
                                Amount BYFCOIN
                              </label>
                              <input
                                type="text"
                                className="border-0 h-14 w-full pl-5 pr-10 rounded-lg z-0 focus:shadow focus:outline-none"
                                placeholder="token amount....."
                                onChange={(e) => {
                                  setInput1(e.target.value);
                                }}
                                id="input1"
                              />
                              <div className="text-center mt-6">
                                <button
                                  className="rounded-lg font-bold uppercase px-3 py-3 shadow-lg hover:shadow-xl outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                  type="button"
                                  id="mint"
                                  style={{ color: "#40E0D0 ", fontFamily: "inter" }}
                                  onClick={buy}
                                >
                                  Buy
                                </button>
                                <button
                                  className="rounded-lg font-bold uppercase px-3 py-3 shadow-lg hover:shadow-xl outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                  type="button"
                                  id="help"
                                  style={{ color: "#40E0D0 ", fontFamily: "inter" }}
                                  onClick={() => setShowHelp(true)}
                                >
                                  Help
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <About />
        <Business />
        <Raffle />
        <Roadmap />
        <Tokenomics />
      </main>
      {showHelp && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center"
          onClick={() => setShowHelp(false)}
        >
   <div className="bg-black p-6 rounded-lg" style={{ backgroundColor: "#2a2c2b" }}>
  <div id="description" className="text-white">
    <p>
      To buy BYF coin 🪙, follow these steps:
    </p>
    <ol>
      <li>Go to your MetaMask Wallet.</li>
      <li>
        Enter <a href="https://byfcoin.net" target="_blank">byfcoin.net</a> in the MetaMask browser.
      </li>
      <li>
        Connect your wallet by clicking on the connect button.
      </li>
      <li>Enter the quantity of coins.</li>
      <li>Click on the buy button.</li>
    </ol>
    <p>
      Note: You must have some Ethereum to buy 🪙.
      If you are using a mobile browser, please open this page in the MetaMask browser.
    </p>
  </div>
</div>

        </div>
      )}
      <Footer/>
    </>
  );
}
