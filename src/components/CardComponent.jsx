import { EllipsisVertical } from "lucide-react";
import React, { useState } from "react";
import AddNewProjectComponent from "./AddNewProjectComponent";

export default function CardComponent({ inputValue }) {
  console.log(inputValue);

  return (

    <div className=" grid grid-cols-3 gap-10 pt-5">

      {inputValue?.map((option) => (



        <div className="max-w-sm p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between mb-5">
            {/* date */}
            <p className={`text-custom-sky-blue font-medium`}>{option.dueDate}</p>
            <EllipsisVertical size={20} color="#374957" />
          </div>

          <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {option.projectName}
          </h5>
          <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
            {option.text}
          </p>

          {/* progress bar */}
          <div className="w-full flex justify-between font-medium mb-1">
            <p>Progress</p>
            <p>{option.Select}%</p>
          </div>

          <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="h-2.5 rounded-full transition-all duration-300"
              style={{
                width: `${option.Select}%`, 
                backgroundColor:
                  option.Select >= 75
                    ? "#F7931E" 
                    : option.Select >= 50
                      ? "#FFD700" 
                      : option.Select >= 25
                        ? "#FF69B4" 
                        : "#00AEEF",
              }}
            ></div>

            <div
              className={`border-l-4 h-5 absolute -top-1 left-1/4 rounded-full transition-all duration-300 ${option.Select >= 25 ? "border-l-custom-pink" : "border-gray-400"
                }`}
              title="25%"
            ></div>
            <div
              className={`border-l-4 h-5 absolute -top-1 left-2/4 rounded-full transition-all duration-300 ${option.Select >= 50 ? "border-l-custom-yellow-500" : "border-gray-400"
                }`}
              title="50%"
            ></div>
            <div
              className={`border-l-4 h-5 absolute -top-1 left-3/4 rounded-full transition-all duration-300 ${option.Select >= 75 ? "border-l-custom-carrot" : "border-gray-400"
                }`}
              title="75%"
            ></div>
          </div>

          {/* deadline */}
          <div className="flex justify-end">
            <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-28 text-center">
            
            </p>
          </div>
        </div>

      ))}






    </div>
  );
}
