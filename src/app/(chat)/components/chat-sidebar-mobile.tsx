import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components"
import { MessageCircleMore } from "lucide-react";
import { ChatSidebar } from "./chat-sidebar";
import { UserResponse } from "@supabase/supabase-js";

interface ChatSidebarMobileProps {
  user: UserResponse;
}
export function ChatSidebarMobile(props: ChatSidebarMobileProps) {
  const { user } = props;
  return (
    <Drawer>
      <DrawerTrigger
        className="md:hidden bg-slate-100 rounded-full p-2"
      >
        <MessageCircleMore className="size-6 stroke-[1px]" />
      </DrawerTrigger>
      <DrawerContent
        className="w-full min-h-[calc(100dvh-5rem)]  max-h-[calc(100dvh-5rem)]"
      >
        <DrawerHeader hidden>
          <DrawerTitle></DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <ChatSidebar user={user} />
      </DrawerContent>
    </Drawer>
  )
}
