import React, { useState, useEffect } from "react";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    async function getData() {
      const getResponse = await fetch("http://localhost:3001/history");
      setHistory(await getResponse.json());
    }
    getData();
  }, []);

  return (
    <div className="border-2 border-gray-400 rounded-lg shadow-lg p-4">
      <div className="flex items-center text-center font-semibold text-lg">
        <div className="w-1/2">
          <h2>ID</h2>
        </div>
        <div className="w-1/2">
          <h2>Words per minute</h2>
        </div>
      </div>

      <div className="py-3">
        {history &&
          history.map((wpm, i) => (
            <div key={i}>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="py-2">{wpm.id}</div>
                <div>{Math.round(wpm.wpm)} wpm</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default History;
