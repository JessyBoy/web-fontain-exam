import React from "react";

function Preview({ textPreview, textInput }) {
  const preview = textPreview.toString();
  const previewString = preview.split("");

  // const words = textPreview.split(" ");
  return (
    <div className="border border-gray-400 bg-gray-800 text-white rounded-lg shadow-lg h-full p-8 text-2xl">
      <h2>
        {previewString &&
          previewString.map((text, index) => {
            let color;
            if (index < textInput.length) {
              color = text === textInput[index] ? "#BBFA4D" : "#F30404";
            }
            return (
              <span key={index} style={{ color: color }}>
                {text}
              </span>
            );
          })}
      </h2>
    </div>
  );
}

export default Preview;
