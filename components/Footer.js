import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-black pt-8 pb-6 text-white" >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <Link legacyBehavior href="/">
              <a
                className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              >
                <img
                      alt="LOGO"
                      src="/img/logo_byf_main.png"
                      className="w-20"
                />
              </a>
            </Link>
             
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  
                </div>
                
                <div className="w-full lg:w-4/12 px-4">
                  <a href="https://x.com/byfhouse" target="_blank" rel="noreferrer">  
                    <button
                      className="shadow-xl font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      type="button"
                      style={{color:"white"}}
                    >
                      <i className="text-bluegrey-400 fab fa-twitter fa-2x"></i>
                    </button>
                  </a>
                  <a href="https://t.me/+AVJWXq65sbgyNGE0" target="_blank" rel="noreferrer">  
                    <button
                      className="shadow-xl font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      type="button"
                      style={{color:"white"}}
                    >
                  <i className="text-bluegrey-400 fab fa-telegram fa-2x"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-whitefont-semibold py-1">
                Copyright © {new Date().getFullYear()} Byfcoin Project{" "}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
