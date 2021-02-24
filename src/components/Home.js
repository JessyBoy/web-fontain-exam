import React, { useState, useEffect } from "react";
import Preview from "../components/Preview";
import ProgressBar from "../components/ProgressBar";
import axios from "axios";

let interval = undefined;
function Home() {
  const [textPreview, setTextPreview] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [timeState, setTimeState] = useState(0);
  //   const [wpm, setWord]

  useEffect(() => {
    async function fetchText() {
      const result = await axios(
        "https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1"
      );
      setTextPreview(result.data);
    }
    fetchText();
  }, []);

  let isStart = false;
  let time = 120;

  useEffect(() => {
    return () => clearInterval(interval);
  }, []);

  const onSubmit = async () => {
    const response = await fetch("http://localhost:3001/history", {
      method: "POST",
      body: JSON.stringify({
        wpm: wpm(),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log(await response.json());
    setTextInput("");
    window.location.reload();
  };

  const onChangeText = (e) => {
    setTextInput(e.target.value);
    if (!interval) {
      isStart = true;
      setTimeout(
        (interval = setInterval(() => {
          //   console.log(time);
          if (time === 0) {
            clearInterval(interval);
          }
          setTimeState(Math.abs(time - 120));
          time = time - 1;
        }, 1000)),
        3000
      );
    }
  };

  const onPress = () => {};

  const wpm = () => {
    console.log(timeState);
    console.log(textInput.split(" ").length);
    return timeState === 0 ? 0 : textInput.split(" ").length / (timeState / 60);
  };
  const onRepeat = () => {
    setTextInput("");
    time = 120;
    setTimeState(0);
    clearInterval(interval);
  };
  return (
    <div>
      <div className="py-4 flex flex-col justify-center items-center">
        <Preview textPreview={textPreview} textInput={textInput} />
        <ProgressBar
          textPreview={textPreview}
          textInput={textInput}
          time={time}
        />
        <div className="w-full flex justify-between">
          <div className="font-semibold text-xl">
            Words per minute: {Math.round(wpm())}
          </div>
          <div className="font-semibold text-xl">
            Remaining time: {120 - timeState}
          </div>
        </div>
        <div className="w-full">
          <textarea
            value={textInput}
            onKeyPress={() => onPress()}
            onChange={(e) => onChangeText(e)}
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
                onClick={() => onSubmit()}
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
