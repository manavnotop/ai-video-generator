import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Header(){
  return (
    <div className="p-3 px-5 flex items-center justify-between relative shadow-md">
      <div className="flex items-center gap-3">
        <h2 className="font-bold text-xl"> AI Short Vid </h2>
      </div>
      <div className="flex items-center gap-3">
        <Button>Dashboard</Button>
        <UserButton />
      </div>
    </div>
  )
}