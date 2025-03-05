"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const chats = [
  {
    id: 1,
    name: "Design Team",
    lastMessage: "Great work everyone! 🎨",
    time: "2m ago",
    unread: 3,
    isGroup: true,
    online: true,
    avatar: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=64&h=64&fit=crop&crop=faces",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    lastMessage: "Can you review the latest designs?",
    time: "1h ago",
    unread: 0,
    isGroup: false,
    online: true,
    typing: true,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces",
  },
  // Add more chat items as needed
];

export default function ChatList() {
  return (
    <ScrollArea className="flex-1">
      <div className="space-y-1 p-2">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={cn(
              "flex items-center gap-3 rounded-lg p-3 cursor-pointer transition-colors",
              "hover:bg-zinc-100"
            )}
          >
            <div className="relative">
              <Avatar className="h-12 w-12">
                <img src={chat.avatar} alt={chat.name} className="object-cover" />
              </Avatar>
              {chat.online && (
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
              )}
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-zinc-900">{chat.name}</h3>
                <span className="text-xs text-zinc-500">{chat.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <p className="truncate text-sm text-zinc-600">
                  {chat.typing ? (
                    <span className="text-blue-600">typing...</span>
                  ) : (
                    chat.lastMessage
                  )}
                </p>
                {chat.unread > 0 && (
                  <Badge variant="default" className="h-5 w-5 rounded-full p-0 flex items-center justify-center">
                    {chat.unread}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}