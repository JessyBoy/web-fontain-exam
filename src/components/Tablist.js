import React from "react";

function Tablist() {
  return (
    <div className="flex justify-center py-4 w-full">
      <div className="w-1/2 border border-gray-400 rounded-lg mr-2">
        <button className="w-full py-4 uppercase font-semibold text-lg focus:outline-none">
          Typing Test
        </button>
      </div>
      <div className="w-1/2 border border-gray-400 rounded-lg">
        <button className="w-full py-4 uppercase font-semibold text-lg focus:outline-none">
          Typing History
        </button>
      </div>
    </div>
  );
}

export default Tablist;
