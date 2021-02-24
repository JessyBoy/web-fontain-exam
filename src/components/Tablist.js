import React from "react";
import { Link } from "react-router-dom";

function Tablist() {
  return (
    <div className="flex justify-center py-4 w-full">
      <div className="w-1/2 border border-gray-400 rounded-lg mr-2">
        <Link to="/">
          <button className="w-full py-4 uppercase font-semibold text-lg focus:outline-none">
            Typing Test
          </button>
        </Link>
      </div>
      <div className="w-1/2 border border-gray-400 rounded-lg">
        <Link to="/history">
          <button className="w-full py-4 uppercase font-semibold text-lg focus:outline-none">
            Typing History
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Tablist;
