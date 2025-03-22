"use client";

import { ScrollArea, Avatar, Button, AvatarImage, AvatarFallback } from "@/components";
import { MessageSquare } from "lucide-react";

const contacts = [
  {
    id: 1,
    name: "Alex Thompson",
    status: "Product Designer",
    online: true,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=faces",
  },
  {
    id: 2,
    name: "Emma Wilson",
    status: "Software Engineer",
    online: false,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop&crop=faces",
  },
  // Add more contacts as needed
];

export default function ContactList() {
  return (
    <ScrollArea className="flex-1">
      <div className="space-y-4">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex items-center gap-3 rounded-lg cursor-pointer transition-colors group"
          >
            <div className="relative">
              <Avatar className="h-12 w-12">
                <AvatarImage src={contact.avatar} />
                <AvatarFallback>SW</AvatarFallback>
              </Avatar>
              {contact.online && (
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
              )}
            </div>
            <div className="flex-1">
              <h2 className="font-medium text-slate-600 text-sm group-hover:text-blue-600 transition-colors duration-300">{contact.name}</h2>
              <p className="text-xs text-slate-400">{contact.status}</p>
            </div>
            <Button size="icon" variant="ghost">
              <MessageSquare className="size-6 stroke-[1px]" />
            </Button>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}