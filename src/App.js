import React, { useState } from "react";
import Preview from "./components/Preview";
import Progress from "./components/Progress";

function App() {
  const textData =
    "Nulla qui ad in nostrud proident ea. Laboris labore dolore sunt ut pariatur ex ea laborum. Laborum esse culpa ex culpa reprehenderit irure minim qui pariatur. Officia fugiat eu sint culpa. Quis ad dolore nulla eiusmod eiusmod anim consequat consectetur nisi. Eiusmod veniam ea culpa commodo laborum ut nulla consequat labore proident anim officia. Elit mollit reprehenderit laboris duis dolor pariatur laborum ad id aliqua excepteur ullamco non.";

  const [textPreview, setTextPreview] = useState(textData);
  const [textInput, setTextInput] = useState("");

  const onRepeat = () => {
    setTextInput("");
  };

  return (
    <div className="py-4 flex flex-col justify-center items-center">
      <Progress />
      <Preview textPreview={textPreview} textInput={textInput} />
      <div className="w-1/2">
        <textarea
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className="w-full border border-gray-400 rounded-lg shadow-lg text-xl my-4 p-5 focus:outline-none"
          placeholder="Start typing...."
        ></textarea>
        <div className="flex justify-between">
          <div className="">
            <button
              onClick={() => onRepeat()}
              className="focus:outline-none hover:bg-gray-400 hover:text-white font-semibold border border-gray-400 rounded-lg shadow-lg py-2 px-4 "
            >
              Restart
            </button>
          </div>
          <div className="">
            <button
              onClick={() => {}}
              className="focus:outline-none hover:bg-gray-400 hover:text-white font-semibold border border-gray-400 rounded-lg shadow-lg py-2 px-4 "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
