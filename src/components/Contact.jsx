import React, { Component } from "react";

export default class NewCard extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          <h1 className="text-[40px] font-semibold  mb-4 items-center justify-center text-center text-red-600 uppercase tracking-loose">
            Contact Us
          </h1>
        </div>
        <div className="my-10  flex grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center flex-wrap gap-10">
          <div className="p-5 text-center w-[250px] rounded-2xl  bg-gradient-to-b from-[#f600005d] to-[#ff0000]">
            <a href="https://www.linkedin.com/in/aryan-jaiswal-/">
              <div className="">
                <h3 className="text-white font-bold text-[24px]">
                  Aryan Jaiswal
                </h3>

                <p className="mt-2 text-white text-[14px]">+91 70301 62649</p>
              </div>
            </a>
          </div>

          <div className="p-5 w-[250px] text-center rounded-2xl bg-gradient-to-b from-[#f600005d] to-[#ff0000] ">
            <a href="https://www.linkedin.com/in/varad-nilawar-9630a9202">
              <div className="">
                <h3 className="text-white font-bold text-[24px]">
                  Varad Nilawar
                </h3>

                <p className="mt-2 text-white text-[14px]">+91 86684 54798</p>
              </div>
            </a>
          </div>

          <div className="p-5 w-[250px] text-center rounded-2xl  bg-gradient-to-b from-[#f600005d] to-[#ff0000] ">
            <a href="https://www.linkedin.com/in/devanshi-saroja-840712259">
              <div className="">
                <h3 className="text-white font-bold text-[24px]">
                  Devanshi Saroja
                </h3>

                <p className="mt-2 text-white text-[14px]">+91 77349 50580</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
