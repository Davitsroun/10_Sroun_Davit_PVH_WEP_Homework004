import { CloudCog, Sidebar } from "lucide-react";
import "./App.css";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import DashboardComponent from "./components/DashboardComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import CardComponent from "./components/CardComponent";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import FilterComponent from "./components/FilterComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";
import { useState } from "react";


function App() {

  const [serch,setSerch]= useState("");
  const [inputValue , setInputValue] = useState([]);
  const getValue = (e) => {

      setInputValue([...inputValue, e]);
      
  }
  const getSerch = (e) => {

    setSerch(e);
    
}
// console.log(serch)

  // console.log(inputValue);
  return (
    <div className="w-full h-screen grid grid-cols-5  grid-flow-col  pt-5  bg-gray-100 ">
      <div className="col-span-1">
        <SidebarComponent />
      </div>
      <div className="col-span-5 px-10">
        <TopNavbarComponent getSerch={getSerch} />
        <div className="w-full h-screen grid grid-cols-4 grid-flow-col pt-10 gap-10 ">
          <div className="col-span-3">
            <DashboardComponent  />
            <div className="w-full h-screen ">
              <div className="w-full h-15 flex justify-between py-10 ">
                <AssignmentsComponent />
                <AddNewProjectComponent getValue={getValue} />
              </div>
              <div className="w-full h-[63vh] overflow-auto">
                <CardComponent inputValue={inputValue}  serch={serch} />
                
              </div>

            </div>

          </div>
          <div className="col-span-1">
            <LearningMaterialsComponent />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
