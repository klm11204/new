import React from "react";

export default function Roadmap() {
  return (
    <>
      <section
        id="roadmap"
        className="relative block bg-center bg-cover"
        style={{
          backgroundImage: "url(img/cool-background2.png)",
        }}
      >
        <div className=" backdrop-blur-sm">
          <div className="container mx-auto px-4 lg:pt-24 lg:pb-28">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2
                  className="text-4xl font-semibold text-center uppercase"
                  style={{ color: "#2344FF ", fontFamily: "inter" }}
                >
                  Roadmap
                </h2>
                <h2
                  className="text-lg font-semibold text-center uppercase"
                  style={{ fontFamily: "overpass", color: "white" }}
                >
                  How it works
                </h2>
              </div>
            </div>

            {/* <!-- web component --> */}
            <div
              className="container mx-auto w-full h-full mt-6 hidden lg:block"
              style={{ fontFamily: "inter" }}
            >
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="border-2-2 absolute border-opacity-20 border-blue-700 h-full border"
                  style={{ left: "50%" }}
                ></div>

                {/* <!-- right timeline --> */}
                <div className="mb-2 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12">
                    <div className="relative invisible lg:visible">
                      <img
                        alt="..."
                        src="/img/logo_byf_map.png"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-3 lg:ml-80 max-w-150-px"
                      />
                    </div>
                  </div>
                  {/* <div
                  className="z-20 flex items-center order-1 shadow-xl w-12 h-12 rounded-full"
                  style={{ backgroundColor: "#334fbe" }}
                >
                  <h1 className="mx-auto font-semibold text-md text-white text-center">
                    Q4 2021
                  </h1>
                </div> */}
                  <div className="lg:mt-16 order-1 rounded-lg w-5/12 px-6 py-4 bg-white bg-opacity-25">
                    <div className="relative invisible lg:visible">
                      <img
                        alt="..."
                        src="/img/logo_byf_map.png"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-28 lg:ml-72 max-w-150-px"
                      />
                    </div>
                    <h2
                      className="text-sm font-semibold uppercase"
                      style={{ fontFamily: "", color: "white" }}
                    >
                      BYFCOIN Liquidity Pool Launch
                    </h2>
                    <h2
                      className="text-lg font-semibold uppercase"
                      style={{ fontFamily: "", color: "#2344FF " }}
                    >
                      20th Apr 2024
                    </h2>
                  </div>
                </div>

                {/* <!-- left timeline --> */}
                <div className="mb-2 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12">
                    <div className="relative invisible lg:visible">
                      <img
                        alt="..."
                        src="/img/logo_byf_map.png"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-11 lg:ml-80 max-w-150-px"
                      />
                    </div>
                  </div>
                  {/* <div
                  className="z-20 flex items-center order-1 shadow-xl w-12 h-12 rounded-full"
                  style={{ backgroundColor: "#6f247d" }}
                >
                  <h1 className="mx-auto text-white font-semibold text-md text-center">
                    Q1 2022
                  </h1>
                </div> */}
                  <div className="order-1 rounded-lg w-5/12 px-6 py-4 bg-white bg-opacity-25">
                    <h2
                      className="text-sm font-semibold uppercase"
                      style={{ fontFamily: "", color: "white" }}
                    >
                      BYFCOIN Raffle Program
                    </h2>
                    <h2
                      className="text-lg font-semibold uppercase"
                      style={{ fontFamily: "", color: "#2344FF " }}
                    >
                      12th Mar 2026
                    </h2>
                  </div>
                </div>

                {/* <!-- right timeline --> */}
                <div className="mb-2 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12">
                    <div className="relative invisible lg:visible">
                      <img
                        alt="..."
                        src="/img/logo_byf_map.png"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-11 lg:ml-80 max-w-150-px"
                      />
                    </div>
                  </div>
                  {/* <div
                  className="z-20 flex items-center order-1 shadow-xl w-12 h-12 rounded-full"
                  style={{ backgroundColor: "#334fbe" }}
                >
                  <h1 className="mx-auto font-semibold text-md text-white text-center">
                    Q2 2022
                  </h1>
                </div> */}
                  <div className="order-1 rounded-lg w-5/12 px-6 py-4 bg-white bg-opacity-25">
                    <h2
                      className="text-sm font-semibold uppercase"
                      style={{ fontFamily: "", color: "white" }}
                    >
                      3 Phase Plan
                    </h2>
                    <h2
                      className="text-lg font-semibold uppercase"
                      style={{ fontFamily: "", color: "#2344FF " }}
                    >
                      12th Mar 2026
                    </h2>
                  </div>
                </div>

                {/* <!-- left timeline --> */}
                <div className="mb-2 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12">
                    <div className="relative invisible lg:visible">
                      <img
                        alt="..."
                        src="/img/logo_byf_map.png"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-11 lg:ml-80 max-w-150-px"
                      />
                    </div>
                  </div>
                  {/* <div
                  className="z-20 flex items-center order-1 shadow-xl w-12 h-12 rounded-full"
                  style={{ backgroundColor: "#6f247d" }}
                >
                  <h1 className="mx-auto text-white font-semibold text-md text-center">
                    Q3 2022
                  </h1>
                </div> */}
                  <div className="order-1 rounded-lg w-5/12 px-6 py-4 bg-white bg-opacity-25">
                    <h2
                      className="text-sm font-semibold uppercase"
                      style={{ fontFamily: "", color: "white" }}
                    >
                      Construction Start
                    </h2>
                    <h2
                      className="text-lg font-semibold uppercase"
                      style={{ fontFamily: "", color: "#2344FF " }}
                    >
                      Mar 2026
                    </h2>
                    
                  </div>
                </div>

                {/* <!-- right timeline --> */}
                <div className="mb-2 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12">
                    <div className="relative invisible lg:visible"></div>
                  </div>

                  <div className="order-1 rounded-lg w-5/12 px-6 py-4 bg-white bg-opacity-25">
                    <h2
                      className="text-sm font-semibold uppercase"
                      style={{ fontFamily: "", color: "white" }}
                    >
                      Long Term Plan
                    </h2>
                    <h2
                      className="text-lg font-semibold uppercase"
                      style={{ fontFamily: "", color: "#2344FF " }}
                    >
                      2029 - onward
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- mobile component --> */}

          <div className="flex flex-wrap items-center mt-16 lg:hidden">
            <div className="w-full lg:max-w-[calc(4/12*100%)] px-4 py-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words w-full lg:mb-6 mb-16 shadow-2xl rounded-lg border-0 bg-white bg-opacity-25">
                <div className="relative">
                  <img
                    alt="..."
                    src="/img/logo_byf_map.png"
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-20 ml-48 lg:-m-20 lg:ml-56 max-w-150-px"
                  />
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-xl card py-2">
                  <div className="px-6 py-8">
                    <h2
                      className="text-sm font-semibold uppercase"
                      style={{ fontFamily: "", color: "white" }}
                    >
                      BYFCOIN Liquidity Pool Launch
                    </h2>
                    <h2
                      className="text-lg font-semibold uppercase"
                      style={{ fontFamily: "", color: "#2344FF " }}
                    >
                      20th Apr 2024
                    </h2>
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:max-w-[calc(4/12*100%)] px-4 py-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words w-full lg:mb-6 mb-16 shadow-2xl rounded-lg border-0 bg-white bg-opacity-25">
                <div className="relative">
                  <img
                    alt="..."
                    src="/img/logo_byf_map.png"
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-20 ml-48 lg:-m-20 lg:ml-56 max-w-150-px"
                  />
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-xl card py-2">
                  <div className="px-6 py-8">
                    <h2
                      className="text-sm font-semibold uppercase"
                      style={{ fontFamily: "", color: "white" }}
                    >
                      BYFCOIN Raffle Program
                    </h2>
                    <h2
                      className="text-lg font-semibold uppercase"
                      style={{ fontFamily: "", color: "#2344FF " }}
                    >
                      12th Mar 2026
                    </h2>
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:max-w-[calc(4/12*100%)] px-4 py-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-16 shadow-2xl rounded-lg border-0 bg-white bg-opacity-25">
                <div className="relative">
                  <img
                    alt="..."
                    src="/img/logo_byf_map.png"
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-20 ml-48 lg:-m-20 lg:ml-56 max-w-150-px"
                  />
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-xl card py-2">
                  <div className="px-6 py-8">
                    <h2
                      className="text-sm font-semibold uppercase"
                      style={{ fontFamily: "", color: "white" }}
                    >
                      3 Phase Plan
                    </h2>
                    <h2
                      className="text-lg font-semibold uppercase"
                      style={{ fontFamily: "", color: "#2344FF " }}
                    >
                      12th Mar 2026
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:max-w-[calc(4/12*100%)] px-4 py-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-16 shadow-2xl rounded-lg border-0 bg-white bg-opacity-25">
                <div className="relative">
                  <img
                    alt="..."
                    src="/img/logo_byf_map.png"
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-20 ml-48 lg:-m-20 lg:ml-56 max-w-150-px"
                  />
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-xl card py-2">
                  <div className="px-6 py-8">
                    <h2
                      className="text-sm font-semibold uppercase"
                      style={{ fontFamily: "", color: "white" }}
                    >
                      Construction Start
                    </h2>
                    <h2
                      className="text-lg font-semibold uppercase"
                      style={{ fontFamily: "", color: "#2344FF " }}
                    >
                      Mar 2026
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:max-w-[calc(4/12*100%)] px-4 py-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-2xl rounded-lg border-0 bg-white bg-opacity-25">
                <div className="relative">
                  <img
                    alt="..."
                    src="/img/logo_byf_map.png"
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-20 ml-48 lg:-m-20 lg:ml-56 max-w-150-px"
                  />
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-xl card py-2">
                  <div className="px-6 py-8">
                    <h2
                      className="text-sm font-semibold uppercase"
                      style={{ fontFamily: "", color: "white" }}
                    >
                      Long Term Plan 
                    </h2>
                    <h2
                      className="text-lg font-semibold uppercase"
                      style={{ fontFamily: "", color: "#2344FF " }}
                    >
                      2029 - onward
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
