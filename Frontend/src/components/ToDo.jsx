import React from "react";

function ToDo({ title, description }) {
  return (
    <div className="flex justify-between bg-[#92C7CF] px-8 py-4 rounded-xl my-4">
      <div className="">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>
        <button className="px-4 py-1 bg-slate-200 rounded-xl hover:bg-slate-500 hover:text-white">
          Mark As Done
        </button>
      </div>
    </div>
  );
}

export default ToDo;
