import { serverClient } from "@/lib";
import ChatDetail from "./components/chat-detail";

export default async function ChatDetailPage() {

  const supabase = await serverClient();
  const user = await supabase.auth.getUser();

  return (
    <ChatDetail me={user} />
  );
}