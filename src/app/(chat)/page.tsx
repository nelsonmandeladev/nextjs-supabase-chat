import ChatDetail from "./components/chat-detail";
import { ChatSidebar } from "./components";
import { serverClient } from "@/lib";

export default async function Home() {
  const supabase = await serverClient();

  const user = await supabase.auth.getUser();

  return (
    <div className="flex gap-5 h-full">
      <div className="hidden h-full md:block md:w-[35%] xl:w-[30%]">
        <ChatSidebar user={user} />
      </div>
      <ChatDetail />
    </div>
  );
}