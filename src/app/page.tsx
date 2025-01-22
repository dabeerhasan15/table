"use client"
import { useEffect, useState } from "react";

// Define the interface for the data structure
interface TokenData {
  id: string;
  name: string;
  symbol: string;
  price: number;
  buyCount: number;
  sellCount: number;
  marketCap: number;
  totalHolders: number;
  creatorEquity: number;
  audit: string;
}

export default function Home() {
  // Define jsonData state with the TokenData type
  const [jsonData, setJsonData] = useState<TokenData[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setJsonData(data))
      .catch((error) => console.error("Error loading JSON data:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Token Data Table</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Symbol</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Buy</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Sell</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Market Cap</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Holders</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Owner Equity</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Audit</th>
            </tr>
          </thead>
          <tbody>
            {jsonData.map((item) => (
              <tr key={item.id} className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                <td className="border border-gray-300 px-4 py-2">{item.symbol}</td>
                <td className="border border-gray-300 px-4 py-2">{item.price}</td>
                <td className="border border-gray-300 px-4 py-2">{item.buyCount}</td>
                <td className="border border-gray-300 px-4 py-2">{item.sellCount}</td>
                <td className="border border-gray-300 px-4 py-2">{item.marketCap}</td>
                <td className="border border-gray-300 px-4 py-2">{item.totalHolders}</td>
                <td className="border border-gray-300 px-4 py-2">{item.creatorEquity}</td>
                <td className="border border-gray-300 px-4 py-2">{item.audit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
