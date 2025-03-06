import React from "react";
import { dashboard } from "../data/dashboard";

export default function DashboardComponent() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Dashboard</h2>

      {/* display summary on each card */}
      {/* <div className="flex gap-5">
        <div className="flex bg-white gap-5 py-3.5 px-4 rounded-xl w-auto">
          <div className="p-3 rounded-xl bg-custom-pink">
            <img src="/fi-sr-file.svg" alt="file icon" />
          </div>
          <div>
            <p className="text-xl font-semibold">24</p>
            <p className="text-gray-400">Total Assignments</p>
          </div>
        </div>
      </div> */}

      <div className="flex justify-between gap-10 w-full">
        {dashboard?.map((option) => (
          
          <div 
           key={option.id}  className="flex bg-white gap-5 w-1/4 py-3.5 px-4 rounded-xl ">
            <div className={`p-3 rounded-xl ${option.color}`}>
              <img src={option.icon} alt="file icon" />
            </div>
            <div>
              <p className="text-xl font-semibold">{option.totalTasks}</p>
              <p className="text-gray-400">{option.label}</p>
            </div>
          </div>

        ))}
      </div>

    </div>


  );
}
