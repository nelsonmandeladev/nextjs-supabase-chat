"use client";

import { useState } from "react";
import { cn } from "@/lib";
import { Button } from "@/components";
import { MessageSquare, Users } from "lucide-react";
import ChatList from "./components/chat-list";
import ChatDetail from "./components/chat-detail";
import ContactList from "./components/contact-list";

export default function Home() {
  const [view, setView] = useState<"chats" | "contacts">("chats");
  
  return (
    <div className="flex h-full bg-white rounded-xl">
      {/* Sidebar */}
      <div className="w-80 border-r flex flex-col">
        <div className="p-4">
          <div className="flex gap-2">
            <Button
              variant={view === "chats" ? "default" : "ghost"}
              className="flex-1"
              onClick={() => setView("chats")}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Chats
            </Button>
            <Button
              variant={view === "contacts" ? "default" : "ghost"}
              className="flex-1"
              onClick={() => setView("contacts")}
            >
              <Users className="w-4 h-4 mr-2" />
              Contacts
            </Button>
          </div>
        </div>
        {view === "chats" ? <ChatList /> : <ContactList />}
      </div>

      {/* Main Chat Area */}
      <ChatDetail />
    </div>
  );
}