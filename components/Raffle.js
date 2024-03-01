import React from "react";
import Image from "next/image";
export default function Raffle() {
  return (
    <>
      <section
        id="raffle"
        className="relative py-20 bg-center bg-cover"
        style={{
          backgroundImage: "url(img/cool-background2.png)",
          
        }}
      >
        <div className="container mx-auto px-4 text-white">
          <h3
            className=" leading-normal  font-semibold text-center uppercase"
            style={{color: "#40E0D0 ", fontFamily: "inter", fontSize: "3rem" }}
          >
            BYFCOIN Raffle Program 
          </h3>
          
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:max-w-[calc(8/12*100%)] ml-auto mr-auto px-4">
            <p
                  className="mt-4 text-lg leading-relaxed text-white text-left"
                  style={{ fontFamily: "overpass" }}
                > On March 25, 2026, after two years BYFCOIN is put in circulation, BYFCOIN shall launch BYFCOIN Property Raffle (BPR) to give away one housing unit to one eligible BPR winner on a yearly basis. </p> <br></br>
            <h3
            className="text-4xl font-semibold text-left uppercase"
            style={{ color: "white", fontFamily: "inter", fontSize: "1rem" }}
          >
            Eligibility Criteria for BPR Participants
          </h3>
              <div className="md:pr-12">
                <p
                  className="mt-4 text-lg leading-relaxed text-white text-left"
                  style={{ fontFamily: "overpass" }}
                >
                1. Hold at least 20,000 BYFCOINS for a minimum of two consecutive calendar years.<br></br>
                2. BPR participants chances shall be doubled for each extra year of BYFCOIN holding.<br></br>
                3. BPR holders who miss the chance to win, their chances shall be doubled in future BPRs.<br></br>
                4. BYFCOIN shall diligently and attentively verify BYFCOIN wallet and holder.
                </p>
                <br></br>
                <h3
            className="text-4xl font-semibold text-left uppercase"
            style={{ color: "white", fontFamily: "inter", fontSize: "1rem" }}
          >
            BPR Property Winners and BPR Property Terms and Conditions
          </h3>
                <br></br>
                <p
                  className="mt-4 text-lg leading-relaxed text-white text-left"
                  style={{ fontFamily: "overpass" }}
                >
                
                1. The BPR winner shall choose the housing unit in his/her home country, provided that the price of which should be up to a maximum limit to be set at a later stage.<br></br>
                2. BYFCOIN shall pay the price of the house directly to the property owner (whether an individual or a company) pursuant to a legitimate transaction and genuine receipts.<br></br>
                3. Should BPR winner fail to find the house within three months after the BPR date result announced, BYFCOIN shall deem that the BPR winner has opted to receive the housing unit in the form of an upfront lump sum payment in BYFCOINS and shall transfer the maximum limit value of the housing unit as an upfront payment to BPR winner’s wallet. The BPR winner may opt to receive the housing unit maximum value as an upfront payment transferred to his wallet.<br></br>
                4. BYFCOIN shall pay all the taxes related to the handed over BPR property for the first year post the handing over of the housing unit to the BPR winner.<br></br>
                </p>
                <div className="flex w-full mb-3 mt-4"></div>
              </div>
              <div className="flex justify-center items-center w-full mx-auto px-4">
            <img
                        alt="..."
                        height="700px"
                        width="700px"
                        src="/img/2.png"
                        className="shadow-xl rounded-lg h-auto align-middle border-none "
                      />
          </div>
            </div>

          
          </div>
        </div>
      </section>
    </>
  );
}
