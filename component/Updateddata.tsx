import React from 'react'

const Updateddata = () => {
  return (
    <div className="flex flex-col w-full md:gap-4 mb-10">
      <h3 className="font-medium text-[#5c5d5e] mb-2">Report = Week 31, 2024</h3>
    <div className="bg-[#020405] rounded-2xl p-6 w-full md:w-full">
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
            <thead>
                <tr className="border-b border-[#24282c]">
                    <th className="text-start text-[#5c5d5e] font-medium py-2">Product retail price</th>
                    <th className="text-start text-[#5c5d5e] font-medium py-2">Current Price</th>
                    <th className="text-start text-[#5c5d5e] font-medium py-2">Performance</th>
                    <th className="text-start text-[#5c5d5e] font-medium py-2">7-day Chart</th>
                    <th className="text-start text-[#5c5d5e] font-medium py-2">Require action</th>
                </tr>
            </thead>

            <tbody>
                <tr className="py-10 border-b border-[#24282c]">
                  <td className="text-start text-white">
                  PMS <span className="font-medium text-[#5c5d5e] pl-2">Premium Motor Spirit</span>
                  </td>
                  <td className="text-start text-[#5c5d5e]">#714.26</td>
                  <td className="text-start text-green-700">+0.37 <span className="text-center p-1.5 text-green-500 rounded-2xl bg-green-700">+0.09%</span></td>
                  <td className="py-2 text-start text-white">N/A</td>
                  <td className="py-2 text-start text-white">N/A</td>
                </tr>

                <tr className="py-10 border-b border-[#24282c]">
                    <td className="text-start text-white">
                    AGO <span className="font-medium text-[#5c5d5e] pl-2">Automotive Gas Oil</span>
                    </td>
                    <td className="text-start text-[#5c5d5e]">#1249.06</td>
                    <td className="text-start text-orange-500">-0.01 <span className="text-center p-1.5 text-orange-500 rounded-2xl bg-orange-900">-0.34%</span></td>
                    <td className="py-2 text-start text-white">N/A</td>
                    <td className="py-2 text-start text-white">N/A</td>
                </tr>

                <tr className="py-10 border-b border-[#24282c]">
                    <td className="text-start text-white">
                    ICE <span className="font-medium text-[#5c5d5e] pl-2">ICE Breut Crude</span>
                    </td>
                    <td className="text-start text-[#5c5d5e]">#0.00</td>
                    <td className="text-start text-green-700">+0.00 <span className="text-center p-1.5 text-green-500 rounded-2xl bg-green-700">+0.00%</span></td>
                    <td className="py-2 text-start text-white">N/A</td>
                    <td className="py-2 text-start text-white">N/A</td>
                </tr>

                <tr className="py-10 border-b border-[#24282c]">
                    <td className="text-start text-white">
                    DPK <span className="font-medium text-[#5c5d5e] pl-2">Dual Purpose Kerosene</span>
                    </td>
                    <td className="text-start text-[#5c5d5e]">#1088.92</td>
                    <td className="text-start text-orange-500">+50.90 <span className="text-center p-1.5 text-orange-500 rounded-2xl bg-orange-900">+0.92%</span></td>
                    <td className="py-2 text-start text-white">N/A</td>
                    <td className="py-2 text-start text-white">N/A</td>
                </tr>

                <tr className="py-10 border-b border-[#24282c]">
                    <td className="text-start text-white">
                    LPQ <span className="font-medium text-[#5c5d5e] pl-2">Liquid Petroleum Gas</span>
                    </td>
                    <td className="text-start text-[#5c5d5e]">#1087.66</td>
                    <td className="text-start text-orange-500">-36.10 <span className="text-center p-1.5 text-orange-500 rounded-2xl bg-orange-900">-0.67%</span></td>
                    <td className="py-2 text-start text-white">N/A</td>
                    <td className="py-2 text-start text-white">N/A</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default Updateddata



{/* Modal for PMS Summary */}
// {isModalOpen && (
//   <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-50">
//     <div className="bg-[#020405] rounded-2xl p-6 w-full max-w-md">
//       <h3 className="text-lg font-semibold text-white mb-4">Daily Summary</h3>
//       <button
//         className="text-white absolute top-4 right-4"
//         onClick={() => setIsModalOpen(false)}
//       >
//         ✕
//       </button>
//       <h2 className="text-[#5c5d5e]">Heres a quick summary of the PMS(Premium Motor Spirit) - Petrol Market in Nigeria breaking down demand. Supply, and regional trends</h2>

//       <div className="space-y-4">
//           <div className="flex justify-between text-white">
//               <h4 className="text-md font-medium">Petrochem daily wire</h4>
//               <h4 className="text-md font-medium">August 9, 2024</h4>
//           </div>
//         <p className="text-[#5c5d5e]">Nigeria consumes approximately 40-50 million liters of PMS per day. Demand is driven by: Transportation (70-80%): cars, buses, trucks, motorcycles.</p>
//       </div>

//       <div className="space-y-4">
//           <div className="flex justify-between text-white">
//               <h4 className="text-md font-medium">Petrochem daily wire</h4>
//               <h4 className="text-md font-medium">August 9, 2024</h4>
//           </div>
//         <p className="text-[#5c5d5e]">Nigeria consumes approximately 40-50 million liters of PMS per day. Demand is driven by: Transportation (70-80%): cars, buses, trucks, motorcycles.</p>
//       </div>

//       <div className="space-y-4">
//           <div className="flex justify-between text-white">
//               <h4 className="text-md font-medium">Petrochem daily wire</h4>
//               <h4 className="text-md font-medium">August 9, 2024</h4>
//           </div>
//         <p className="text-[#5c5d5e]">Nigeria consumes approximately 40-50 million liters of PMS per day. Demand is driven by: Transportation (70-80%): cars, buses, trucks, motorcycles.</p>
//       </div>

//     </div>
//   </div>
// )}