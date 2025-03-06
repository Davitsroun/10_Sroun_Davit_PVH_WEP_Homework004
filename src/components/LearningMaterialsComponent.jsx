import React, { useEffect, useState } from "react";
import { CloudCog, Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import { learningMaterials } from "../data/learningMaterials";

export default function LearningMaterialsComponent() {

    const [learning, setLearning]= useState(learningMaterials);
    const [valueSelectd, SetValueSelectd]= useState(" ");

    function handleChangeFavorite(id){
          setLearning((data)=>{

            return data.map((item)=>
              item.id === id ? {...item, isFavorite : !item.isFavorite}:  item
            )
          })
        
    }
    function sortedValue(e){
      SetValueSelectd(e);
      
    }

    useEffect(()=>{
        if(valueSelectd == "A-Z"){
          const sorted= [...learningMaterials].sort((a,b)=> a.title.localeCompare(b.title));
          setLearning(sorted);
        }
        if(valueSelectd == "Z-A"){
          const sorted= [...learningMaterials].sort((a,b)=> b.title.localeCompare(a.title));
          setLearning(sorted);
        }
    }, [valueSelectd]);




  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh]">
      {/* calling filter component */}
      <FilterComponent sortedValue={sortedValue} />
    
      {/* title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* materials list */}
      <div className="space-y-3">
        {learning?.map((option)=>(
               <div key={option.id} className="bg-light-gray px-4 py-2 flex gap-5 items-center">
               <img
                 src={option.image}
                 alt="HTML5"
                 width={50}
                 height={50}
                 className="rounded-xl"
               />
               <div className="w-full">
                 <div className="flex justify-between">
                   <p className="text-base font-medium">{option.title}</p>
                   <Star color={option.isFavorite ? "#FAA300":" black"} fill={option.isFavorite ? "#FAA300":" white"}  onClick={()=>handleChangeFavorite(option.id)}   size={20}/>
                 </div>
                 <p className="text-gray-400 text-sm">{option.postedAt}</p>
               </div>
             </div>

        ))}
        

   
      </div>
    </div>
  );
}
