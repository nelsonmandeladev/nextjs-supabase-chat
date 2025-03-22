import ChatDetail from "./components/chat-detail";
import { ChatSidebar } from "./components";

export default function Home() {

  return (
    <div className="flex gap-5 h-full">
      <div className="hidden h-full md:block md:w-[35%] xl:w-[30%]">
        <ChatSidebar />
      </div>
      <ChatDetail />
    </div>
  );
}