import { ChatSidebar } from "./components";
import { serverClient } from "@/lib";

export default async function ChatLayout({ children }: { children: React.ReactNode }) {
  const supabase = await serverClient();
  const user = await supabase.auth.getUser();

  return (
    <div className="h-screen flex flex-col bg-slate-100 overflow-hidden xl:p-5">
      <div className="max-w-6xl mx-auto w-full h-full">
        <div className="flex gap-5 h-full">
          <div className="hidden h-full md:block md:w-[35%] xl:w-[30%]">
            <ChatSidebar user={user} />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
