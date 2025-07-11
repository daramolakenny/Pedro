import React from 'react'

const RetailCard = () => {
  return (
    <div className="flex flex-row w-full md:gap-4 mb-10 justify-between">
        <div className="bg-[#020405] rounded-2xl p-6 w-full md:w-[40%]">
        <h3 className="text-lg font-semibold text-white mb-4">Current product retail prices</h3>
        <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
            <tbody>
                <tr className="py-10 border-b border-[#5c5d5e] hover:bg-[#0a0b0c] transition-colors duration-200">
                    <td className="text-start text-white">
                        PMS <span className="font-medium text-[#5c5d5e] pl-2">Premium Motor Spirit</span>
                    </td>
                    <td className="text-start text-white">#714.26</td>
                    <td className="text-start text-green-700">+0.37</td>
                    <td className="text-center p-1.5 text-green-500 rounded-2xl bg-green-700">+0.09%</td>
                </tr>

                <tr className="border-b border-[#5c5d5e] hover:bg-[#0a0b0c] transition-colors duration-200">
                    <td className="text-neutral-300 hover:text-green-100">
                        AGO <span className="font-medium text-[#5c5d5e] pl-2">Automotive Gas Oil</span>
                    </td>
                    <td className="text-start text-white">#714.26</td>
                    <td className="text-start text-orange-500">+0.37</td>
                    <td className="text-center p-1.5 text-orange-500 rounded-2xl bg-orange-900">+0.09%</td>
                </tr>

                <tr className="border-b border-[#5c5d5e] hover:bg-[#0a0b0c] transition-colors duration-200">
                    <td className="text-neutral-300 hover:text-green-100">
                        ICE <span className="font-medium text-[#5c5d5e] pl-2">ICE Brent Crude</span>
                    </td>
                    <td className="text-start text-white">#714.26</td>
                    <td className="text-start text-green-700">+0.37</td>
                    <td className="text-center p-1.5 text-green-500 rounded-2xl bg-green-700">+0.09%</td>
                </tr>

                <tr className="border-b border-[#5c5d5e] hover:bg-[#0a0b0c] transition-colors duration-200">
                    <td className="text-neutral-300 hover:text-green-100">
                    DPK <span className="font-medium text-[#5c5d5e] pl-2">Dual Purpose Kerosene</span>
                    </td>
                    <td className="text-start text-white">#714.26</td>
                    <td className="text-start text-orange-500">+0.37</td>
                    <td className="text-center p-1.5 text-orange-500 rounded-2xl bg-orange-900">+0.09%</td>
                </tr>

                <tr className="hover:bg-[#0a0b0c] transition-colors duration-200 ">
                    <td className="text-neutral-300 hover:text-green-100">
                    LPQ <span className="font-medium text-[#5c5d5e] pl-2">Liquid Petroleum Gas</span>
                    </td>
                    <td className="text-start text-white">#714.26</td>
                    <td className="text-start text-orange-500">+0.37</td>
                    <td className="text-center p-1.5 text-orange-500 rounded-2xl bg-orange-900">+0.09%</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>

        <div className="bg-[#020405] rounded-2xl p-6 w-full md:w-[60%]">
        <h3 className="text-lg font-semibold text-white mb-4">Retail prices analysis (NGN)</h3>
        
        </div>
  </div>
  )
}

export default RetailCard