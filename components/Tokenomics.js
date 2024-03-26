import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <>
      <section id="tokenomics" className="relative py-20 bg-black" style={{backgroundImage: "url(img/blur-bg.png)", backgroundPosition: "cover"}}>
        <div className="container mx-auto px-4 text-white">
        
          <h3
                  className="text-4xl font-semibold text-center uppercase"
                  style={{ fontFamily: "inter", color:"#40E0D0" }}
                >
                  Tokenomics
                </h3>
                <h3
                  className="text-4xl font-semibold text-center uppercase"
                  style={{ color: "#E0F300", fontFamily: "inter" }}
                >
                  &nbsp;
                </h3>
          <div className="items-center flex flex-wrap">
         
            <div className="w-full lg:max-w-[calc(2/12*100%)] ml-auto mr-auto px-4">
              
            </div>
            <div className="w-full lg:max-w-[calc(6/12*100%)] ml-auto mr-auto px-4">
              <div className="md:pr-12">
                
                <p
                  className="mt-4 text-lg leading-relaxed text-white text-center"
                  style={{ fontFamily: "overpass" }}
                >
                </p>

                <div className="flex w-full mb-3 mt-4">
                      
                    </div>

              </div>
            </div>

            <div className="w-full lg:max-w-[calc(2/12*100%)] ml-auto mr-auto px-4">
              
            </div>

          </div>

          <div className="w-full lg:max-w-[calc(6/12*100%)] ml-auto mr-auto px-4">
              <h4
                  className="text-1xl text-gray-300 font-semibold text-center uppercase"
                  style={{ fontFamily: "inter" }}
                >
                  Contract : 
                  <br/>
                  <span className="text-xs" style={{ fontFamily: "montserrat" }}>0xbB6f6F1A22b3A5E93EbdF2Ad001ED740B12695bC</span>
                  <br/>
                  <br/>
                  Initial Sale : <span style={{ fontFamily: "overpass" }}>100,000,000</span>&nbsp;<span style={{ color: "#32c1d1" }}>BYFs</span>
                  <br/>
                  BYFCOIN Housing Project : <span style={{ fontFamily: "overpass" }}>350,000,000</span>&nbsp;<span style={{ color: "#32c1d1" }}>BYFs</span>
                  <br/>
                  BYFCOIN Reserve : <span style={{ fontFamily: "overpass" }}>350,000,000</span>&nbsp;<span style={{ color: "#32c1d1" }}>BYFs</span>
                  <br/>
                  Founding Team Share : <span style={{ fontFamily: "overpass" }}>200,000,000</span>&nbsp;<span style={{ color: "#32c1d1" }}>BYFs</span>
                  <br/>
                  <br/>
                  <br/>
                  <span style={{color: "white", fontFamily: "overpass" }}>Terms and Conditions Governing BYFCOIN Ownership, Holding and Circulation</span>
                  <br/>
                  <br/>
                  <p className="text-xs text-left" style={{ fontFamily: "overpass" }}>
                  1. A total of 100,000,000 BYFCOINs shall be reserved for the initial sale, ensuring their circulation.<br/><br/>
                  2. 50% of the founders’ share shall be subject to a vesting period of two years, during which the founders cannot sell, send, swap or in any way dispose of that 50% before the elapse of two years post BYFCOIN creation.<br/><br/>
                  3. Except for the founding wallet, no individual wallet shall be allowed to obtain and hold more than 20,000 BYFCOIN, while any number of tokens added therein via send (transfer) transaction exceeding the max limit shall be locked up for two years. <br/><br/>
                  4. Each transaction shall entail a tax of 3% to be used in marketing and other various operational expenses.<br/><br/>
                  5. BYFCOIN shall prudently and rigorously ensure and supervise strict application of relevant rules and regulations to prevent any kind of monetary manipulations or frauds.<br/><br/>
                  6. BYFCOIN shall maintain a market balancing policy to mitigate market fluctuations and anomalies, when needed.</p>

                </h4>
                <h3
                  className="text-4xl font-semibold text-center uppercase"
                  style={{ color: "#E0F300", fontFamily: "overpass" }}
                >
                  &nbsp;
                </h3>
            </div>
        </div>
      </section>
    </>
  );
}
