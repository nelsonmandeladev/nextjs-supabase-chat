"use client";

import { useEffect, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Smile, PaperclipIcon, Send } from "lucide-react";

const messages = [
  {
    id: 1,
    content: "Hey! How's the new design coming along? 🎨",
    sender: "them",
    time: "10:23 AM",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces",
  },
  {
    id: 2,
    content: "It's going great! I've just finished the main dashboard layout. Would you like to take a look?",
    sender: "me",
    time: "10:24 AM",
  },
  {
    id: 3,
    content: "That would be awesome! Can you share your screen?",
    sender: "them",
    time: "10:24 AM",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces",
  },
  // Add more messages as needed
];

export default function ChatDetail() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex-1 flex flex-col">
      {/* Chat Header */}
      <div className="p-4 border-b">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces"
              alt="Sarah Wilson"
              className="object-cover"
            />
          </Avatar>
          <div>
            <h2 className="font-semibold">Sarah Wilson</h2>
            <p className="text-sm text-zinc-600">Online • Typing...</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea ref={scrollRef} className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn("flex items-end gap-2", message.sender === "me" && "flex-row-reverse")}
            >
              {message.sender === "them" && (
                <Avatar className="h-8 w-8">
                  <img src={message.avatar} alt="" className="object-cover" />
                </Avatar>
              )}
              <div
                className={cn(
                  "rounded-2xl px-4 py-2 max-w-[70%]",
                  message.sender === "me"
                    ? "bg-blue-600 text-white"
                    : "bg-zinc-100 text-zinc-900"
                )}
              >
                <p>{message.content}</p>
                <span
                  className={cn(
                    "text-xs mt-1 block",
                    message.sender === "me" ? "text-blue-100" : "text-zinc-500"
                  )}
                >
                  {message.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="p-4 border-t bg-white">
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost">
            <PaperclipIcon className="h-5 w-5" />
          </Button>
          <Input
            placeholder="Type a message..."
            className="flex-1 rounded-full border-zinc-200"
          />
          <Button size="icon" variant="ghost">
            <Smile className="h-5 w-5" />
          </Button>
          <Button size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}