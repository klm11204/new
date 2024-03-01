import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <>
      <section
        id="aboutus"
        className="relative py-20 bg-black"
        style={{
          backgroundImage: "url(img/blur-bg.png)",
          backgroundPosition: "cover",
        }}
      >
        <div className="container mx-auto px-4 text-white">
          <h3
            className=" leading-normal  font-semibold text-center uppercase"
            style={{color: "#40E0D0 ", fontFamily: "inter", fontSize: "3rem" }}
          >
            What is BYFCOIN?
          </h3>
          <h3
            className="text-4xl font-semibold text-center uppercase"
            style={{ color: "#E0F300", fontFamily: "inter" }}
          >
            &nbsp;
          </h3>
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:max-w-[calc(8/12*100%)] ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <p
                  className="mt-4 text-lg leading-relaxed text-white text-center"
                  style={{ fontFamily: "overpass" }}
                >
                   BYFCOIN token bearing the ticker “BYF” is created on Ethereum Blockchain . The total supply of BYFCOINS is 1,000,000,000 BYFCOINS. The initial goal of BYFCOIN is to reach and maintain a predicted price of BYFCOIN at $0.05 during the first six months to one-year BYF is put in circulation, somewhere between September 12, 2024, and March 25, 2025. Prospectively and with hardworking, BYFCOIN shall fight using efficient and prudent apparatuses and policies to get to its sought-after price of $0.50 by the end of March 2027. Each BYFCOIN enthusiastic holder will have the opportunity to see the BYFCOIN dream come true with steady belief and priceless support of BYFCOIN project. 
                </p>

                <div className="flex w-full mb-3 mt-4"></div>
              </div>
            </div>
          </div>
          <h4
            className=" leading-normal  font-semibold text-center uppercase"
            style={{color: "white", fontFamily: "inter", fontSize: "2rem" }}
          >
            An Overview
          </h4>
          <h3
            className="text-4xl font-semibold text-center uppercase"
            style={{ color: "#E0F300", fontFamily: "inter" }}
          >
           
          </h3>
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:max-w-[calc(8/12*100%)] ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <p
                  className="mt-4 text-lg leading-relaxed text-white text-center"
                  style={{ fontFamily: "overpass" }}
                >
                    BYFCOIN believes in providing decent and affordable housing for everyone. As we relax in our homes, it’s crucial to reflect on those lacking secure housing. BYFCOIN aims to address industry challenges through low-profit margins, innovative financing, and blockchain transparency. BYFCOIN seeks to eliminate exacting and unfair mortgage requirements and to ease restrictions to reach to a broader segment of the community in countries where BYFCOIN has operations and properties. 
                </p>

                <div className="flex w-full mb-3 mt-4"></div>
              </div>
            </div>
          </div>

          <div className="w-full mx-auto px-4">
          
<spline-viewer url="https://prod.spline.design/tqwI3Rq3XtxLtvTG/scene.splinecode"></spline-viewer>
          </div>
        </div>
      </section>
    </>
  );
}
