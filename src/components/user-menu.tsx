
"use client";
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Button

} from "@/components";
import { Ellipsis, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export function UserMenu() {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="text-slate-600 bg-slate-50 rounded-full"
        >
          <Ellipsis className="size-6 stroke-[1px]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        side="bottom"
        className='shadow-2xl shadow-slate-200 border-[0.5px] border-slate-200/40'
      >
        <DropdownMenuLabel className="text-slate-500 font-medium text-sm">My account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            router.push("/login");
          }}
        >
          Logout
          <LogOut className="size-4 ml-2" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  )
}
