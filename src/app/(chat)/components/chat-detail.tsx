"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ScrollArea, Avatar, AvatarImage, AvatarFallback, Button, Input, ScrollBar } from "@/components";
import { cn } from "@/lib/utils";
import { Smile, PaperclipIcon, Send } from "lucide-react";
import { ChatSidebarMobile } from "./chat-sidebar-mobile";
import { UserResponse } from "@supabase/supabase-js";

const messagesBase = [
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
  {
    id: 4,
    content: "Sure! Give me a moment to set it up.",
    sender: "me",
    time: "10:25 AM",
  },
  {
    id: 5,
    content: "I particularly focused on making the navigation more intuitive and improving the overall user flow.",
    sender: "me",
    time: "10:25 AM",
  },
  {
    id: 6,
    content: "The colors look amazing! 😍 Really loving the new palette you chose.",
    sender: "them",
    time: "10:26 AM",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces",
  },
  {
    id: 7,
    content: "Thanks! I wanted to make sure it's both aesthetically pleasing and accessible.",
    sender: "me",
    time: "10:27 AM",
  },
  {
    id: 8,
    content: "Have you considered adding some micro-interactions to enhance the user experience?",
    sender: "them",
    time: "10:28 AM",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces",
  },
  {
    id: 9,
    content: "Yes! I've already implemented some subtle animations for the hover states and transitions.",
    sender: "me",
    time: "10:29 AM",
  },
  {
    id: 10,
    content: "Perfect! When do you think you'll have the final version ready?",
    sender: "them",
    time: "10:30 AM",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces",
  },
  {
    id: 11,
    content: "I should have everything wrapped up by tomorrow afternoon. I'll send you the complete design files then.",
    sender: "me",
    time: "10:31 AM",
  },
  {
    id: 12,
    content: "Sounds great! Looking forward to seeing the final result. 🚀",
    sender: "them",
    time: "10:32 AM",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces",
  }
];

type Message = typeof messagesBase[0];

function groupMessagesBySender(messages: Message[]): Message[][] {
  return messages.reduce((groups: Message[][], message) => {
    const prevMessage = groups.length > 0 ? groups[groups.length - 1][0] : null;
    if (!prevMessage || prevMessage.sender !== message.sender) {
      groups.push([message]);
    } else {
      groups[groups.length - 1].push(message);
    }
    return groups;
  }, []);
}


interface ChatDetailProps {
  me: UserResponse;
}

export default function ChatDetail(props: ChatDetailProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>("");
  const { me } = props;

  // Load initial messages on mount
  useEffect(() => {
    setMessages(messagesBase);
  }, []);

  // Scroll to bottom when messages change
  useLayoutEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!message) return;
    setMessages((prevMessages) => [...prevMessages, {
      id: prevMessages.length + 1,
      content: message,
      sender: "me",
      time: "10:33 AM"
    }]);
    setMessage("");
  };


  return (
    <div className="flex-1 flex flex-col bg-white rounded-lg">
      {/* Chat Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces" />
              <AvatarFallback>SW</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold text-sm text-slate-600">Sarah Wilson</h2>
              <p className="text-xs text-slate-400">Online • Typing...</p>
            </div>
          </div>
          <ChatSidebarMobile user={me} />
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4 pt-0 max-h-[calc(100dvh-12rem)]">
        <div className="space-y-4 mt-2.5">
          {groupMessagesBySender(messages).map((group) => (
            <div key={group[0].id} className="space-y-1">
              {group.map((message, messageIndex) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex items-end gap-2",
                    message.sender === "me" && "flex-row-reverse"
                  )}
                >
                  {message.sender === "them" && messageIndex === group.length - 1 && (
                    <Avatar className="size-6 ">
                      <AvatarImage src={message.avatar} />
                      <AvatarFallback className="text-[9px] font-semibold">SW</AvatarFallback>
                    </Avatar>
                  )}
                  {message.sender === "them" && messageIndex !== group.length - 1 && (
                    <div className="w-8" />
                  )}
                  <div
                    className={cn(
                      "px-4 py-2 max-w-[50%] rounded-2xl",
                      message.sender === "me"
                        ? "bg-blue-600 text-white"
                        : "bg-zinc-100 text-zinc-900",
                      messageIndex !== 0 && "mt-1",
                      message.sender === "me" && messageIndex === group.length - 1 && "rounded-2xl rounded-br-none",
                      message.sender === "them" && messageIndex === group.length - 1 && "rounded-2xl rounded-bl-none",
                      messageIndex === group.length - 1 && group.length > 1 && message.sender === "me" && "rounded-2xl rounded-br-none",
                      messageIndex === group.length - 1 && group.length > 1 && message.sender === "them" && "rounded-2xl rounded-bl-none"
                    )}
                  >
                    <p className="text-xs xl:text-sm">{message.content}</p>
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
          ))}
          <div ref={scrollRef} />
        </div>
        <ScrollBar orientation="vertical" className="w-1" />
      </ScrollArea>

      {/* Input Area */}
      <div className="px-4 py-2.5 bg-white">
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost">
            <PaperclipIcon className="h-5 w-5" />
          </Button>
          <Input
            placeholder="Type a message..."
            className="flex-1 rounded-lg border-zinc-200 py-4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
          />
          <Button size="icon" variant="ghost">
            <Smile className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            onClick={handleSendMessage}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}