import React from "react";
import img from "../../../assets/screw1.jpeg";


export default function ProductPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <div className="flex flex-col lg:flex-row gap-8 ">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 mt-10">
          <div className="bg-[#F5F5F5] rounded-md overflow-hidden">
            <img
              src={img}
              alt="product image"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Side - Details */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:mt-10">
          <div>
            <h1 className="text-2xl lg:text-3xl font-semibold">
              Suitable for
            </h1>
            <p className="mt-3 text-gray-700">
              Steel 30-55 HRC <br />
              P20 <br />
              Hot Die Steel (H13, H11,H21) <br />
              D2 <br />
              Aluminium <br /><br />

            </p>
            <h1 className="text-2xl lg:text-3xl font-semibold">5D Drill</h1>
          </div>

          <div className="flex flex-col gap-4">
            {/* <div className="flex items-center gap-2">
              <span className="font-semibold">SKU:</span>
              <span className="text-gray-800">test</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold">Share:</span>
              <div className="flex gap-3">
                Social Icons if any
              </div>
            </div> */}



            <div class="relative overflow-x-auto">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Dia (D)
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Flute Length (l)
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Total Length (L)
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Shank Dia (d)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      1.5
                    </th>
                    <td class="px-6 py-4">
                      13
                    </td>
                    <td class="px-6 py-4">
                      50
                    </td>
                    <td class="px-6 py-4">
                      3
                    </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      1.6 ~ 2.0
                    </th>
                    <td class="px-6 py-4">
                      20
                    </td>
                    <td class="px-6 py-4">
                      50
                    </td>
                    <td class="px-6 py-4">
                      3
                    </td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      2.1 ~ 2.5
                    </th>
                    <td class="px-6 py-4">
                      22
                    </td>
                    <td class="px-6 py-4">
                      75
                    </td>
                    <td class="px-6 py-4">
                      3
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
