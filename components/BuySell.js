import { React, useEffect, useState } from "react";
var ether = require("./ethers");
import { notification } from "antd";

export default function BuySell() {
  const openNotificationWithIcon = (type, message, desc) => {
    notification[type]({
        message: message,
        description: desc,
    });
};
  const [openTab, setOpenTab] = useState(1);
  const [rate, setRate] = useState();
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
        openNotificationWithIcon(
          "error",
          "Error",
          "Web3 wallet not detected. Install Metamask or TrustWallet to use this website."
        );
      } else {
        var rate_ = await ether.statsGlobal();
        setRate(rate_.rRate.toString());
      }
    })();
  }, []);

  return (
    <>
      <section
        id="buy/sell"
        className="relative py-20 bg-center bg-cover"
        style={{
          backgroundImage: "url(img/cool-background2.png)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap"></div>
          <h3
            className=" leading-normal  font-semibold text-center uppercase"
            style={{ color: "#40E0D0 ", fontFamily: "inter", fontSize: "3rem" }}
          >
            Buy/Sell BYFCOIN
          </h3>
          <div className="flex flex-wrap items-center mt-8">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
              <div
                className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-2xl rounded-lg border-0"
                style={{ backgroundColor: "#2a2c2b" }}
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
                            id="mint"
                            style={{ color: "#40E0D0 ", fontFamily: "inter" }}
                            onClick={sell}
                          >
                            Sell
                          </button>
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
      </section>
    </>
  );
}
