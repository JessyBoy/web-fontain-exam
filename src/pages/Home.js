import React, { useState, useEffect } from "react";
import Preview from "../components/Preview";
import ProgressBar from "../components/ProgressBar";
import axios from "axios";
import Tablist from "../components/Tablist";

function Home() {
  const textData =
    "Nulla qui ad in nostrud proident ea. Laboris labore dolore sunt ut pariatur ex ea laborum. Laborum esse culpa ex culpa reprehenderit irure minim qui pariatur. Officia fugiat eu sint culpa. Quis ad dolore nulla eiusmod eiusmod anim consequat consectetur nisi. Eiusmod veniam ea culpa commodo laborum ut nulla consequat labore proident anim officia. Elit mollit reprehenderit laboris duis dolor pariatur laborum ad id aliqua excepteur ullamco non.";

  const [textPreview, setTextPreview] = useState([]);
  const [textInput, setTextInput] = useState("");

  useEffect(async () => {
    const result = await axios(
      "https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1"
    );
    setTextPreview(result.data);
  }, []);

  let interval;
  let time = 120;

  useEffect(() => {
    interval = setInterval(() => {
      if (time === 0) {
        clearInterval(interval);
      }
      time = time - 1;
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const wpm = () => {
    return textInput.split(" ").length / (time / 60);
  };
  const onRepeat = () => {
    setTextInput("");
  };
  return (
    <div>
      <div className="py-4 flex flex-col justify-center items-center max-w-5xl mx-auto">
        <Tablist />
        <Preview textPreview={textPreview} textInput={textInput} />
        <ProgressBar textPreview={textPreview} textInput={textInput} />
        <div className="w-full flex justify-between">
          <div className="font-semibold text-xl">
            Words per minute: {wpm() < 1 ? 0 : Math.round(wpm())}
          </div>
          <div className="font-semibold text-xl">Remaining time: {}</div>
        </div>
        <div className="w-full">
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
                Clear
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
    </div>
  );
}

export default Home;
