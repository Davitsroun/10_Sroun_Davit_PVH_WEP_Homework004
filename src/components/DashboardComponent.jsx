import React from "react";
import { dashboard } from "../data/dashboard";

export default function DashboardComponent() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Dashboard</h2>

     

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
