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
                  LPQ <span className="font-medium text-[#5c5d5e] pl-2">Liquid Petroleum Gas</span>
                  </td>
                  <td className="text-start text-[#5c5d5e]">#714.26</td>
                  <td className="text-start text-green-700">+0.37 <span className="text-center p-1.5 text-green-500 rounded-2xl bg-green-700">+0.09%</span></td>
                  <td className="py-2 text-start text-white">N/A</td>
                  <td className="py-2 text-start text-white">N/A</td>
                </tr>

                <tr className="py-10 border-b border-[#24282c]">
                    <td className="text-start text-white">
                    LPQ <span className="font-medium text-[#5c5d5e] pl-2">Liquid Petroleum Gas</span>
                    </td>
                    <td className="text-start text-[#5c5d5e]">#714.26</td>
                    <td className="text-start text-orange-500">+0.37 <span className="text-center p-1.5 text-orange-500 rounded-2xl bg-orange-900">+0.09%</span></td>
                    <td className="py-2 text-start text-white">N/A</td>
                    <td className="py-2 text-start text-white">N/A</td>
                </tr>

                <tr className="py-10 border-b border-[#24282c]">
                    <td className="text-start text-white">
                    LPQ <span className="font-medium text-[#5c5d5e] pl-2">Liquid Petroleum Gas</span>
                    </td>
                    <td className="text-start text-[#5c5d5e]">#714.26</td>
                    <td className="text-start text-green-700">+0.37 <span className="text-center p-1.5 text-green-500 rounded-2xl bg-green-700">+0.09%</span></td>
                    <td className="py-2 text-start text-white">N/A</td>
                    <td className="py-2 text-start text-white">N/A</td>
                </tr>

                <tr className="py-10 border-b border-[#24282c]">
                    <td className="text-start text-white">
                    LPQ <span className="font-medium text-[#5c5d5e] pl-2">Liquid Petroleum Gas</span>
                    </td>
                    <td className="text-start text-[#5c5d5e]">#714.26</td>
                    <td className="text-start text-orange-500">+0.37 <span className="text-center p-1.5 text-orange-500 rounded-2xl bg-orange-900">+0.09%</span></td>
                    <td className="py-2 text-start text-white">N/A</td>
                    <td className="py-2 text-start text-white">N/A</td>
                </tr>

                <tr className="py-10 border-b border-[#24282c]">
                    <td className="text-start text-white">
                    LPQ <span className="font-medium text-[#5c5d5e] pl-2">Liquid Petroleum Gas</span>
                    </td>
                    <td className="text-start text-[#5c5d5e]">#714.26</td>
                    <td className="text-start text-orange-500">+0.37 <span className="text-center p-1.5 text-orange-500 rounded-2xl bg-orange-900">+0.09%</span></td>
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