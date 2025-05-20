"use client"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

type OnUserSelect = (key: string, value: string) => void;

export default function SelectTopic({onUserSelect}: {onUserSelect: OnUserSelect}){
  const options = ['Custom Prompt', 'Random AI Story', 'Scary Story', 'Historical Facts', 'Bed Time Story', 'Motivational', 'Fun Facts'];
  const [selectedOptions, setSelectedOptions] = useState("");

  return(
    <div>
      <h2 className="font-bold text-2xl text-primary">Content</h2>
      <p className="text-gray-500">What is the topic of you video</p>
      <Select onValueChange={(value) => {
          setSelectedOptions(value)
          value != 'Custom Prompt' && onUserSelect('topic', value)
        }}>
        <SelectTrigger className="w-full mt-2 p-6 text-lg">
          <SelectValue placeholder="Content Type" />
        </SelectTrigger>
        <SelectContent>
          {options.map((item, index) =>(
            <SelectItem key={index} value={item}>{item}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedOptions == 'Custom Prompt' && 
        <Textarea className="mt-3" onChange={(e) => onUserSelect('topic', e.target.value)} placeholder="Write your prompt to generate you video" />
      }
    </div>
  )
}