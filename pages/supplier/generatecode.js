import React, {useEffect, useState} from "react";

// components

// layout for page

import Supplier from "layouts/Supplier";

import { loadAllQrBatch, generateNewQRBatch, downloadZip } from "../../services/SupplierService";
import { baseapiurl } from "services/config";
export default function Generatecode({color}) {
  const [qrbatch, setQrBatch] = useState([])
  const [generating, setGenerating] = useState(false)
  const [inputValue, setInputValue] = useState({
    batch_name: "",
    number_of_records: "10"
  })

  const loadData = async () => {
    const result = await loadAllQrBatch();
    if ("data" in result) {
      setQrBatch(result.data);
    }
  }

  useEffect(() => {
    loadData();
  }, []);  

  const handleInput = (key) => (e) => {
    setInputValue({ ...inputValue, [key]: e.target.value });
  }

  const onSubmit = async () => {
    console.log(inputValue)
    if (!(inputValue.batch_name && inputValue.number_of_records)) {
      return false;
    }
    if (generating) {
      return false;
    }
    setGenerating(true);
    const data = await generateNewQRBatch(inputValue)
    if (data.id) {
      loadData();
      setInputValue({
        batch_name: "",
        number_of_records: "10"
      })
      setTimeout(() => {
        downloadZipFile({id: data.id})
      }, 5000)
    }
    setGenerating(false);
    console.log(data);
  };

  const downloadZipFile = (p) => {
    downloadZip(p.id).then(
      (result) => {
        if (result["url"]) {
          window.open(result["url"], "_blank")
        }
      }
    )
  }
  return (
    <>
     <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Generate QR Code
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Enter Batch Name
                  </label>
                  <input 
                  onChange={handleInput("batch_name")}
                  value={inputValue.batch_name}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Batch Name" />
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Enter Number of Record <small>(Min: 10 - Max: 100)</small>
                  </label>
                  <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      onChange={handleInput("number_of_records")}
                      value={inputValue.number_of_records}
                    >
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                  </select>       
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                <button onClick={onSubmit} 
                disabled={generating ? true : false}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-6" style={{fontSize: '18px'}}>
                  { generating ? "Processing..." : "Generate"}
                </button>
                </th>
              </tr>
            </thead>
            <thead>
                  <tr>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    >
                      Date
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    >
                      Batch Name
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    >
                      Number of Records
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    >
                       Action
                      
                    </th>
                  </tr>
            </thead>
            <tbody>
              {qrbatch && qrbatch.length > 0 && qrbatch.map(p => (<tr>
              <td
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    >
                      {p.dateCreated}
                    </td>
                    <td
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    >
                      {p.batchName}
                    </td>
                    <td
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    >
                      {p.numberOfRecords}
                    </td>
                    <td
                      onClick={() => downloadZipFile(p)}
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    >
                       <a style={{background: 'green'}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        Download
                      </a>
                    </td>
              </tr>))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

Generatecode.layout = Supplier;
