import { Header, Toaster } from "@/components";
import { supabaseServerClient } from "@/lib";
import { redirect } from "next/navigation";

export default async function ChatLayout({ children }: { children: React.ReactNode }) {
  // const { data: { session } } = await supabaseServerClient.auth.getSession()
  // const user = session?.user
  // if (!user) {
  //   redirect("/login");
  // }
  return (
    <div className="h-screen flex flex-col bg-zinc-50">
      <div className="max-w-7xl mx-auto w-full h-full">
      {/* <Header user={user} /> */}
        {children}
      </div>
      <Toaster />
    </div>
  );
}
