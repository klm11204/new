// index.js

import Head from "next/head";
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
import { notification } from "antd";
import ether from "../components/ethers";

export default function Home() {
  const openNotificationWithIcon = (type, message, desc) => {
    notification[type]({
      message: message,
      description: desc,
    });
  };
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
  // Mobile redirection logic
  useEffect(() => {
    if (isMobileDevice()) {
      // Redirect to the help page for mobile devices
      window.location.href = 'help.html'; // Change to 'help.html' or the actual path of your help HTML file
    }
    else{
      const [openTab, setOpenTab] = useState(1);
  const [rate, setRate] = useState();
  const [rate2, setRate2] = useState();
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const buy = async (event) => { 
    await ether.buyBYF(input1);
  };

  const sell = async (event) => { 
    await ether.sellBYF(input1);
  };
   useEffect(() => {
    (async () => {
      if (typeof window.ethereum === "undefined") {
        window.alert('It seems you are accessing the site without a web3 Wallet application. Please Install a Web3 wallet in order to Buy and Sell BYFcoin on this website.')
      } else {
        var rate_ = await ether.statsGlobal();
        console.log(parseInt(rate_.rRate.toString()));
        setRate(rate_.rRate.toString());
        var rate2_ = parseFloat(1/parseInt(rate_.rRate.toString()));
        setRate2(rate2_.toString().slice(0,18));
      }
    })();
  }, []);
  return (
    <>
      <div>
      
      </div>
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
                    <Link legacyBehavior href="https://t.me/+AVJWXq65sbgyNGE0">
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
                style={{ backgroundColor: "#2a2c2b", opacity:"0.7" }}
              >
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    
                  </div>
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
{/*<button
                            className="rounded-lg font-bold uppercase px-3 py-3 shadow-lg hover:shadow-xl outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                            type="button"
                            id="mint"
                            style={{ color: "#40E0D0 ", fontFamily: "inter" }}
                            onClick={sell}
                          >
                            Sell
                          </button>*/}
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                {/* <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-blueGray-400 text-center mb-3 font-bold"></div>
                  <form>
                    <div className="relative w-full mb-2">
                      <label
                        className="block uppercase text-black text-xs font-bold mb-2"
                        style={{ color: "#40E0D0 ", fontFamily: "inter" }}
                      >
                        Label
                      </label>
                      <input
                        type="text"
                        className="border-0 h-14 w-full pl-5 pr-10 rounded-lg z-0 focus:shadow focus:outline-none"
                        placeholder="input"
                        onChange={(e) => {
                          setInput1(e.target.value);
                        }}
                        id="input1"
                      />
                    </div>

                    <div className="relative w-full mb-2">
                      <label
                        className="block uppercase text-black text-xs font-bold mb-2"
                        style={{ color: "#40E0D0 ", fontFamily: "inter" }}
                      >
                        Label
                      </label>
                      <input
                        type="text"
                        className="border-0 h-14 w-full pl-5 pr-10 rounded-lg z-0 focus:shadow focus:outline-none"
                        placeholder="input"
                        onChange={(e) => {
                          setInput2(e.target.value);
                        }}
                        id="input2"
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="rounded-lg font-bold uppercase px-6 py-3 shadow-lg hover:shadow-xl outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="button"
                        id="mint"
                        style={{ color: "#40E0D0 ", fontFamily: "inter" }}
                        // onClick={() => minthandler()}
                      >
                        Mint
                      </button>
                    </div>
                  </form>
                </div> */}
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
      <Footer />
    </>
  );
}

    }
  }, []);

  
