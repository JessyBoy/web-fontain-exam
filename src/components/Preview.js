import React from "react";

function Preview({ textPreview, textInput }) {
  const preview = textPreview.split("");
  return (
    <div className="border border-gray-400 bg-gray-800 text-white rounded-lg shadow-lg w-1/2 h-full p-8 text-2xl">
      <h2>
        {preview.map((prev, index) => {
          console.log(index);
          console.log(prev);
          let color;
          if (index < textInput.length) {
            color = prev === textInput[index] ? "#BBFA4D" : "#F30404";
          }
          return (
            <span key={index} style={{ color: color }}>
              {prev}
            </span>
          );
        })}
      </h2>
    </div>
  );
}

export default Preview;
