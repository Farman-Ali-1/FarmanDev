"use client";
import React, { useState } from "react";

function Dashboard() {
  const [tab, setTab] = useState("project");

  const handleTabs = (val:string) => {
    setTab(val);
  };

  return (
    <div className="h-screen w-full bg-zinc-100 flex flex-col items-center justify-start">
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => handleTabs("project")}
          className={`px-6 py-2 text-sm font-semibold text-gray-700 rounded-md transition-all ${
            tab === "project"
              ? "bg-orange-300 border-b-2 border-orange-400"
              : "bg-zinc-200 border-b-2 border-transparent hover:bg-zinc-300 hover:border-orange-300"
          }`}
        >
          Add Project
        </button>
        <button
          onClick={() => handleTabs("blog")}
          className={`px-6 py-2 text-sm font-semibold text-gray-700 rounded-md transition-all ${
            tab === "blog"
              ? "bg-orange-300 border-b-2 border-orange-400"
              : "bg-zinc-200 border-b-2 border-transparent hover:bg-zinc-300 hover:border-orange-300"
          }`}
        >
          Add Blog
        </button>
      </div>

      {tab === "project" ? (
        <div className="flex flex-wrap w-3/4 justify-center p-4 gap-1">
          <div className=" bg-zinc-50 p-2 w-full md:w-1/2  border rounded-md">
            <input
              type="text"
              placeholder="Project Category"
              className="h-4 outline-none w-full"
            />
          </div>
          <div className=" bg-zinc-50 p-2 w-full md:w-1/2  border rounded-md">
            <input
              type="text"
              placeholder="Project Name"
              className="h-4 outline-none w-full"
            />
          </div>
          <textarea
            placeholder="Project Description"
            cols={30}
            rows={5}
            className="bg-zinc-50 p-4 w-full border rounded-md outline-none"
          />
        </div>
      ) : (
        <div className="flex flex-wrap w-3/4 justify-center p-4 gap-4">
          <input
            type="text"
            placeholder="Blog Title"
            className="h-10 bg-zinc-50 p-4 w-full md:w-1/2 border rounded-md outline-none"
          />
          <textarea
            placeholder="Blog Content"
            cols={30}
            rows={5}
            className="bg-zinc-50 p-4 w-full border rounded-md outline-none"
          />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
