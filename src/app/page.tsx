"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [name, setName] = useState("appvgeuoxapogEv1a");
  const [table, setTable] = useState("test2");
  const [status, setStatus] = useState("Submit");
  const [fetchedData, setFetchedData] = useState([]);
  const [aiRes, setAiRes] = useState("No Data analysed by AI");
  const [aiStatus, setAiStatus] = useState("Analyze Data");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Fetching data");

    try {
      const res = await axios.post(
        `/api/v1/airtable?name=${name}&table=${table}`,
      );
      setFetchedData(res.data.data);
      setStatus("Fetched");
    } catch (error) {
      console.error("Error fetching data:", error);
      setStatus("Error");
    }
  };

  // Analyze data
  const analyzeData = async () => {
    try {
      setAiStatus("Analyzing");
      const res = await axios.post(`/api/ai/openai`, { data: fetchedData });
      console.log(res.data);
      setAiRes(res.data.message);
      setAiStatus("Analyzed");
    } catch (err) {
      console.error("Error fetching data:", err);
      setStatus("Error");
    }
  };

  const resetForm = () => {
    setName("");
    setTable("");

    setStatus("Submit");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="font-bold text-4xl">Debbi</div>
      <div>
        <form
          className="flex flex-col space-y-4 border border-black p-4 bg-background2"
          onSubmit={handleSubmit}
        >
          <div className="flex space-x-4">
            <label htmlFor="name" className="text-sm font-medium">
              App Name:
            </label>
            <input
              type="text"
              id="name"
              className="rounded-md border border-gray-300 p-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex space-x-4">
            <label htmlFor="numSons" className="text-sm font-medium">
              Table Name:
            </label>
            <input
              type="text"
              id="table"
              className="rounded-md border border-gray-300 p-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={table}
              onChange={(e) => setTable(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {status}
          </button>
          <button
            onClick={resetForm}
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Reset
          </button>
        </form>
      </div>
      <div className="bg-gray-50">
        {fetchedData.length > 0 && (
          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full border-collapse block md:table">
              <thead className="block md:table-header-group">
                <button
                  className="bg-orange-500 text-white text-sm p-2 rounded-md"
                  onClick={analyzeData}
                >
                  {aiStatus}
                </button>
                <br />
                <pre>{aiRes}</pre>
                <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
                  <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                    Gender
                  </th>
                  <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                    Ranking
                  </th>
                  <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                    Ordinary Pay
                  </th>
                  <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                    Weekly Working Hours
                  </th>
                  <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                    Hourly Pay
                  </th>
                  <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                    Bonus Pay
                  </th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group">
                {fetchedData.map((record: any, index: number) => (
                  <tr
                    key={index}
                    className="bg-gray-300 border border-grey-500 md:border-none block md:table-row"
                  >
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      {record.records.gender}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      {record.records.ranking}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      {record.records.ordinary_pay}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      {record.records.weekly_working_hours}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      {record.records.hourly_pay}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      {record.records.bonus_pay}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
