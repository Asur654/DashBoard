import * as React from "react"
import Image from "next/image"

import { SearchForm } from "@/components/search-form"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const Menu: string[] = [
    "Home",
    "Stages & Checklist",
    "Upload Docs",
    "Preferred Vendors",
    "Tech Stack",
    "Targets",
    "Zee Sales Targets",
    "MAI Settings",
    "Pending Questions",
  ]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="items-center">
        <Image src="/group.png" alt="Profile" width={100} height={100} priority className="" />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent className="flex flex-col gap-1 justify-between">
        {/* We create a SidebarGroup for each parent. */}
        <div>
        {Menu.map((item) => (
          <SidebarGroup key={item}>
            <SidebarGroupLabel className="font-bold text-gray-300 hover:bg-gray-700">{item}</SidebarGroupLabel>
          </SidebarGroup>
          
        ))}
        </div>
        <div className="text-white">Logout</div>

      </SidebarContent>
      
      <SidebarRail />
    </Sidebar>
  )
}
