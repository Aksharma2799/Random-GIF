import { useState } from "react";

export default function Random() {
  const [gif, setGif] = useState("");

  function clickHandler() {}

  return (
    <div className="bg-red-400 w-96 h-96">
      <div className="flex flex-col items-center text-white">
        <h1>A Random GIF</h1>
        <img src="{gif}" alt="" width={450} />
        <button onClick={clickHandler} className="bg-gray-500 width = [100%]">
          Generate
        </button>
      </div>
    </div>
  );
}
