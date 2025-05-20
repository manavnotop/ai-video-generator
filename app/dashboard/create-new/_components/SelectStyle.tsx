"use client"

import { useState } from "react"

type OnUserSelect = (key: string, value: string) => void;

export default function SelectStyle({onUserSelect}: {onUserSelect: OnUserSelect}){
  const styleOptions = [
    {
      name: 'Realistic',
    },
    {
      name: 'Cartoon',
    },
    {
      name: 'Comic',
    },
    {
      name: 'Water Color',
    },
    {
      name: 'GTA',
    }
  ]
  const [selectedOptions, setSelectedOptions] = useState("");

  return(
    <div className="mt-7">
      <h2 className="font-bold text-2xl text-primary">Style</h2>
      <p className="text-gray-500">Select the style of your video</p>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-3">
        {styleOptions.map((item, index) => (
          <div className={`h-20 rounded-lg w-full shadow-md flex items-center justify-center text-lg hover:scale-105 transition-all cursor-pointer 
            ${selectedOptions == item.name && 'border-3 border-primary scale-105'}`
          } onClick={() => {
              setSelectedOptions(item.name)
              onUserSelect('imageStyle', item.name)
            }} key={index}> 
            {item.name}
          </div>
        ))}
      </div>
    </div>
  )
}