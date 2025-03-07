import { CloudCog, Frown, Info, Plus } from "lucide-react";
import React, { useState } from "react";

export default function AddNewProjectComponent({ getValue }) {
  const [infor, setinfor] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [nameErrore, setNameErrore] = useState('');
  const [selected, setSelected] = useState('');
  const [errors, setErrors] = useState({
    projectName: "",
    dueDate: "",
    progress: "",
  })

  const newproject = (e) => {
    const { name, value } = e.target;
    setinfor((copyArray) => ({
      ...copyArray,
      [name]: value,
    }));


  };
  console.log(infor)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let err ={};
    const currentDate = new Date();
    const selectedDate = new Date(infor.dueDate);

    if(!infor.projectName) {
      err.projectName = "ProjectName is required"
    }


    if(!infor.dueDate) {
      err.dueDate = "DueDate is required"
    }
    if(infor.progress == "" ){
      err.progress= "pogress cannot null"
    }
    
    if (selectedDate < currentDate) {
      setErrorMessage('Due date cannot be in the past.');
      return;
    } 


    if (selectedDate < currentDate) {
      err.dueDate="Due date cannot be in the past.";
    } 
   

    if (Object.keys(err).length <= 0) {
      setErrorMessage('');
      setErrors({})
      getValue(infor);
      e.target.reset()
    
    } else {
      setErrors({...err})
    }

    // if (selectedDate < currentDate) {
    //   setErrorMessage('Due date cannot be in the past.');
    //   return;
    // } 
    // if (infor.Select == null) {
    //   setSelected('Select cannot null.');
    //   return;
    // } 
    // if (infor.projectName == null) {
    //   setNameErrore('Name cannot null')
    //   return;   
    // } else{
      

      // setErrorMessage('');
      // getValue(infor);
      // e.target.reset();
    // }
     

  };
console.log(nameErrore)
  return (
    <div>
      <button
        data-modal-target="crud-modal"
        data-modal-toggle="crud-modal"
        className="text-white bg-custom-sky-blue hover:bg-custom-sky-blue-500 focus:ring-3 focus:outline-none focus:ring-custom-sky-blue-500 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-custom-sky-blue-500 dark:hover:bg-custom-sky-blue-500 dark:focus:ring-custom-sky-blue-500 flex items-center gap-2"
        type="button"
      >
        <Plus size={22} /> <span className="text-base">New Project</span>
      </button>

      <div
        id="crud-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-2xl shadow-sm dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create New Project
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form className="p-4 md:p-5" onSubmit={handleSubmit}>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="projectName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Project Name
                  </label>
                  <input

                    onChange={newproject}
                    type="text"
                    name="projectName"
                    id="projectName"
                    className={`bg-gray-50 border ${errors.projectName  ? `border-red-400` : `border-gray-300`} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                    placeholder="Type Project Name"
                    
                  />

                  {errors.projectName && (
                    <div className="text-red-600 text-sm mb-4">{errors.projectName}</div>
                  )}

                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="dueDate"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Due Date
                  </label>
                  <input
                    onChange={newproject}
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    className={`"bg-gray-50 border ${errors.dueDate  ? `border-red-400` : `border-gray-300`} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                    
                  />
                  
              {errors.dueDate  && (
                <div className="text-red-600 text-sm mb-4">{errors.dueDate}</div>
              )}
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="progress"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Progress
                  </label>
                  <select
                    onChange={newproject}
                    name="Select"
                    id="progress"
                    className={`bg-gray-50 border ${errors.progress  ? `border-red-400` : `border-gray-300`} text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                    
                  >
                    <option value="">Select Progress</option>
                    <option value="100">100</option>
                    <option value="75">75</option>
                    <option value="50">50</option>
                    <option value="25">25</option>
                  </select>
                  {errors.progress && (
                    <div className="text-red-600 text-sm mb-4">{errors.progress}</div>
                  )}

                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Project Description
                  </label>
                  <textarea
                    onChange={newproject}
                    name="text"
                    id="description"  
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write product description here"
                  ></textarea>
                </div>
              </div>


              <div className="text-right">
                <button

                  type="submit"
                  className="text-white inline-flex items-center bg-custom-sky-blue hover:bg-custom-sky-blue-500 focus:ring-4 focus:outline-none focus:ring-custom-sky-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-custom-sky-blue-500 dark:hover:bg-custom-sky-blue-500 dark:focus:ring-custom-sky-blue-500"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
