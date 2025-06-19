import React from "react";
import Design from "./Design";

import p1 from "../../../assets/screw1.jpeg";
import p2 from "../../../assets/screw2.jpeg";
import p3 from "../../../assets/screw3.jpeg";
import p4 from "../../../assets/screw4.jpeg";
import p5 from "../../../assets/screw5.jpeg";
import p6 from "../../../assets/screw6.jpeg";

export default function index({Heading,link}) {
  return (
    <div className=" text-black px-6 lg:p-20 m-auto bg-white">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 text-center">
        {Heading}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center ">
        <Design img={p1} link={link} />
        <Design img={p2} link={link} />
        <Design img={p3} link={link} />
        <Design img={p4} link={link} />
        <Design img={p5} link={link} />
        <Design img={p6} link={link} />
      </div>
    </div>
  );
}
