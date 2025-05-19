import Header from "./_components/Header";
import SideNav from "./_components/SideNav";

export default function DashboardLayout({children}: {children: React.ReactNode}){
  return (
    <div>
      <div className="hidden md:block h-screen bg-white mt-[56px] fixed w-64">
        <SideNav />
      </div>
      <div>
        <Header />
        <div className="md:ml-64 p-10">
          { children }
        </div>
      </div>
    </div>
  )
}