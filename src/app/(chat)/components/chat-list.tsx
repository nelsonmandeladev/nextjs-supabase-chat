"use client";

import { Avatar, AvatarImage, AvatarFallback, ScrollArea, Badge } from "@/components";
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
  {
    id: 3,
    name: "John Doe",
    lastMessage: "Hello, how are you?",
    time: "10m ago",
    unread: 0,
    isGroup: false,
    online: false,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces",
  },
  {
    id: 4,
    name: "Jane Smith",
    lastMessage: "Hey, what's up?",
    time: "20m ago",
    unread: 1,
    isGroup: false,
    online: false,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces",
  },
  {
    id: 5,
    name: "Alice Johnson",
    lastMessage: "Just finished the project. Check it out!",
    time: "30m ago",
    unread: 0,
    isGroup: false,
    online: false,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces",
  },
  {
    id: 6,
    name: "Bob Brown",
    lastMessage: "I'm running late. Will be there soon!",
    time: "45m ago",
    unread: 0,
    isGroup: false,
    online: false,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces",
  },
  {
    id: 7,
    name: "Charlie Davis",
    lastMessage: "I'm running late. Will be there soon!",
    time: "45m ago",
    unread: 0,
    isGroup: false,
    online: false,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces",
  },
  {
    id: 8,
    name: "David Lee",
    lastMessage: "I'm running late. Will be there soon!",
    time: "45m ago",
    unread: 0,
    isGroup: false,
    online: false,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces",
  },
  {
    id: 9,
    name: "Eve White",
    lastMessage: "I'm running late. Will be there soon!",
    time: "45m ago",
    unread: 0,
    isGroup: false,
    online: false,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces",
  },
  {
    id: 10,
    name: "Frank Green",
    lastMessage: "I'm running late. Will be there soon!",
    time: "45m ago",
    unread: 0,
    isGroup: false,
    online: false,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces",
  },
];

export default function ChatList() {
  return (
    <ScrollArea className="flex-1">
      <div className="space-y-4">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={cn(
              "flex items-center gap-3 rounded-lg cursor-pointer transition-colors group")}
          >
            <div className="relative">
              <Avatar className="h-12 w-12">
                <AvatarImage src={chat.avatar} />
                <AvatarFallback>SW</AvatarFallback>
              </Avatar>
              {chat.online && (
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
              )}
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="flex items-center justify-between">
                <h2 className="font-medium text-slate-600 text-sm group-hover:text-blue-600 transition-colors duration-300">{chat.name}</h2>
                <span className="text-xs text-slate-300">{chat.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <p className="truncate text-xs text-slate-400">
                  {chat.typing ? (
                    <span className="text-green-600">typing...</span>
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