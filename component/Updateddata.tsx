import React from "react";

const Updateddata = () => {
  return (
    <div className="flex flex-col w-full gap-4 mb-6 sm:mb-10 px-2 sm:px-4 md:px-6 lg:px-8">
      <h3 className="font-medium text-[#5c5d5e] text-sm sm:text-base mb-2 sm:mb-4">
        Report = Week 31, 2024
      </h3>
      <div className="bg-[#020405] rounded-2xl p-2 sm:p-4 md:p-6 w-full">
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm md:text-base border-collapse">
            <thead>
              <tr className="border-b border-[#24282c]">
                <th className="text-start text-[#5c5d5e] font-medium py-1 sm:py-2">
                  Product retail price
                </th>
                <th className="text-start text-[#5c5d5e] font-medium py-1 sm:py-2">
                  Current Price
                </th>
                <th className="text-start text-[#5c5d5e] font-medium py-1 sm:py-2">
                  Performance
                </th>
                <th className="text-start text-[#5c5d5e] font-medium py-1 sm:py-2">
                  7-day Chart
                </th>
                <th className="text-start text-[#5c5d5e] font-medium py-1 sm:py-2">
                  Require action
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="py-2 sm:py-4 border-b border-[#24282c]">
                <td className="text-start text-white text-xs sm:text-sm">
                  PMS{" "}
                  <span className="font-medium text-[#5c5d5e] pl-1 sm:pl-2">
                    Premium Motor Spirit
                  </span>
                </td>
                <td className="text-start text-[#5c5d5e] text-xs sm:text-sm">
                  #714.26
                </td>
                <td className="text-start text-green-700 text-xs sm:text-sm">
                  +0.37{" "}
                  <span className="text-center p-0.5 sm:p-1 text-green-500 rounded-2xl bg-green-700 text-xs sm:text-sm">
                    +0.09%
                  </span>
                </td>
                <td className="py-1 sm:py-2 text-start text-white text-xs sm:text-sm">
                  N/A
                </td>
                <td className="py-1 sm:py-2 text-start text-white text-xs sm:text-sm">
                  N/A
                </td>
              </tr>

              <tr className="py-2 sm:py-4 border-b border-[#24282c]">
                <td className="text-start text-white text-xs sm:text-sm">
                  AGO{" "}
                  <span className="font-medium text-[#5c5d5e] pl-1 sm:pl-2">
                    Automotive Gas Oil
                  </span>
                </td>
                <td className="text-start text-[#5c5d5e] text-xs sm:text-sm">
                  #1249.06
                </td>
                <td className="text-start text-orange-500 text-xs sm:text-sm">
                  -0.01{" "}
                  <span className="text-center p-0.5 sm:p-1 text-orange-500 rounded-2xl bg-orange-900 text-xs sm:text-sm">
                    -0.34%
                  </span>
                </td>
                <td className="py-1 sm:py-2 text-start text-white text-xs sm:text-sm">
                  N/A
                </td>
                <td className="py-1 sm:py-2 text-start text-white text-xs sm:text-sm">
                  N/A
                </td>
              </tr>

              <tr className="py-2 sm:py-4 border-b border-[#24282c]">
                <td className="text-start text-white text-xs sm:text-sm">
                  ICE{" "}
                  <span className="font-medium text-[#5c5d5e] pl-1 sm:pl-2">
                    ICE Breut Crude
                  </span>
                </td>
                <td className="text-start text-[#5c5d5e] text-xs sm:text-sm">
                  #0.00
                </td>
                <td className="text-start text-green-700 text-xs sm:text-sm">
                  +0.00{" "}
                  <span className="text-center p-0.5 sm:p-1 text-green-500 rounded-2xl bg-green-700 text-xs sm:text-sm">
                    +0.00%
                  </span>
                </td>
                <td className="py-1 sm:py-2 text-start text-white text-xs sm:text-sm">
                  N/A
                </td>
                <td className="py-1 sm:py-2 text-start text-white text-xs sm:text-sm">
                  N/A
                </td>
              </tr>

              <tr className="py-2 sm:py-4 border-b border-[#24282c]">
                <td className="text-start text-white text-xs sm:text-sm">
                  DPK{" "}
                  <span className="font-medium text-[#5c5d5e] pl-1 sm:pl-2">
                    Dual Purpose Kerosene
                  </span>
                </td>
                <td className="text-start text-[#5c5d5e] text-xs sm:text-sm">
                  #1088.92
                </td>
                <td className="text-start text-orange-500 text-xs sm:text-sm">
                  +50.90{" "}
                  <span className="text-center p-0.5 sm:p-1 text-orange-500 rounded-2xl bg-orange-900 text-xs sm:text-sm">
                    +0.92%
                  </span>
                </td>
                <td className="py-1 sm:py-2 text-start text-white text-xs sm:text-sm">
                  N/A
                </td>
                <td className="py-1 sm:py-2 text-start text-white text-xs sm:text-sm">
                  N/A
                </td>
              </tr>

              <tr className="py-2 sm:py-4 border-b border-[#24282c]">
                <td className="text-start text-white text-xs sm:text-sm">
                  LPQ{" "}
                  <span className="font-medium text-[#5c5d5e] pl-1 sm:pl-2">
                    Liquid Petroleum Gas
                  </span>
                </td>
                <td className="text-start text-[#5c5d5e] text-xs sm:text-sm">
                  #1087.66
                </td>
                <td className="text-start text-orange-500 text-xs sm:text-sm">
                  -36.10{" "}
                  <span className="text-center p-0.5 sm:p-1 text-orange-500 rounded-2xl bg-orange-900 text-xs sm:text-sm">
                    -0.67%
                  </span>
                </td>
                <td className="py-1 sm:py-2 text-start text-white text-xs sm:text-sm">
                  N/A
                </td>
                <td className="py-1 sm:py-2 text-start text-white text-xs sm:text-sm">
                  N/A
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Updateddata;