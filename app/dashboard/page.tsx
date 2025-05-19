"use client"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import EmptyState from "./_components/EmptyState";
import Link from "next/link";

export default function Dashboard(){
  const [videoList, setVideList] = useState([]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-primary text-2xl">Dashboard</h2>
        <Link href={'/dashboard/create-new'}>
          <Button>+ Create New</Button>
        </Link>
      </div>
      {videoList.length == 0 && <div>
        <EmptyState />
      </div>
      }
    </div>
  )
}