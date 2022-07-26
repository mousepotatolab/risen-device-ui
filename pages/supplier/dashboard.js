import React, {useState, useEffect} from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

// layout for page

import Supplier from "layouts/Supplier.js";
import { getDashboardData } from "services/SupplierService";

export default function Dashboard() {

  const [data, setData] = useState(null);

  useEffect(() => {
    getDashboardData().then(
      (result) => {
        if ("totaldevices" in result) {
          setData(result);
        }
      }
    )
  }, [])
  return (
    <>
      <div className="flex flex-wrap mt-20">            
        <div class="w-full lg:w-6/12 mt-3 px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 class="text-blueGray-400 uppercase font-bold text-xs">Total Devices</h5>
                            <span class="font-semibold text-xl text-blueGray-700">{data && data.totaldevices}</span>
                        </div>
                        <div class="relative w-auto pl-4 flex-initial">
                            <div
                                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                                <i class="fas fa-users"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-6/12 mt-3 px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 class="text-blueGray-400 uppercase font-bold text-xs">Total Connected Devices</h5><span
                                class="font-semibold text-xl text-blueGray-700">{data && data.totalconnecteddevice}</span>
                        </div>
                        <div class="relative w-auto pl-4 flex-initial">
                            <div
                                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500">
                                <i class="fas fa-users"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    </>
  );
}

Dashboard.layout = Supplier;
