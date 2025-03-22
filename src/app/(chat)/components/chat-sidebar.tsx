"use client";

import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage, Button, Input, UserMenu, ScrollArea } from "@/components";
import { MessageSquare, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import ChatList from "./chat-list";
import ContactList from "./contact-list";

export function ChatSidebar() {
  const [view, setView] = useState<"chats" | "contacts">("chats");
  return (
    <div className="w-full h-full flex flex-col bg-white rounded-lg p-0 md:p-4 gap-5">
      <div className="flex items-center justify-between gap-3 p-4 md:p-0">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces" />
            <AvatarFallback>SW</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold text-sm text-slate-600">Sarah Wilson</h2>
            <p className="text-xs text-slate-400">The best way to reach me</p>
          </div>
        </div>
        <UserMenu />
      </div>
      <div className="space-y-4 md:space-y-6 md:mt-4 border-b border-slate-200 px-4 md:p-0 !pb-5">
        <Input
          placeholder="Search"
          className="border-none bg-slate-50 !py-2.5 rounded-lg"
        />
        <div className="flex gap-5">
          <Button
            variant={"ghost"}
            className={cn(
              "flex flex-col !p-0 items-center justify-center gap-1 text-xs transition-colors duration-300 hover:bg-transparent hover:text-blue-600",
              view === "chats" && "text-blue-600"
            )}
            onClick={() => setView("chats")}

          >
            <MessageSquare className="size-6 stroke-[1px]" />
            Chats
          </Button>
          <Button
            variant={"ghost"}
            className={cn(
              "flex flex-col !p-0 items-center justify-center gap-1 text-xs transition-colors duration-300 hover:bg-transparent hover:text-blue-600",
              view === "contacts" && "text-blue-600"
            )}
            onClick={() => setView("contacts")}
          >
            <Users className="size-6 stroke-[1px]" />
            Contacts
          </Button>
        </div>
      </div>
      <ScrollArea className="flex-1 h-full overflow-y-auto max-h-[calc(100dvh-22rem)] px-4 md:px-0">
        {view === "chats" ? <ChatList /> : <ContactList />}
      </ScrollArea>
    </div>
  )
}
