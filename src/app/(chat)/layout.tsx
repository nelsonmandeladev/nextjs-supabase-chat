import {Toaster } from "@/components";

export default async function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col bg-slate-100 overflow-hidden xl:p-5">
      <div className="max-w-6xl mx-auto w-full h-full">
        {children}
      </div>
      <Toaster />
    </div>
  );
}
