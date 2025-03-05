"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
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
      <div className="space-y-1 p-2">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex items-center gap-3 rounded-lg p-3 cursor-pointer transition-colors hover:bg-zinc-100"
          >
            <div className="relative">
              <Avatar className="h-12 w-12">
                <img src={contact.avatar} alt={contact.name} className="object-cover" />
              </Avatar>
              {contact.online && (
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
              )}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-zinc-900">{contact.name}</h3>
              <p className="text-sm text-zinc-600">{contact.status}</p>
            </div>
            <Button size="icon" variant="ghost">
              <MessageSquare className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}