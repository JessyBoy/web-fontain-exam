import React from "react";
import { Progress } from "@chakra-ui/react";

function ProgressBar({ textPreview, textInput }) {
  const textPrev = textPreview.toString();
  return (
    <div className=" w-full py-4">
      <h1 className="text-lg">Progress Area</h1>
      <div className="flex items-center">
        <div className="flex-1">
          <Progress
            hasStripe
            value={(textInput.length / textPrev.length) * 100}
          />
        </div>
        <div className="pl-4 text-xl font-semibold">
          {Math.round((textInput.length / textPrev.length) * 100)}%
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
