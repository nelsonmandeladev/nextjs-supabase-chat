"use client";

import { Avatar, AvatarFallback, AvatarImage, Button } from "@/components";
import { User } from "@supabase/auth-helpers-nextjs";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
interface HeaderProps {
  user?: User;
}

export function Header({ user }: HeaderProps) {
  const router = useRouter();
  const supabase = createClientComponentClient();

  return (
    <div className="flex items-center justify-between px-4 py-2 border-b mb-4 bg-white rounded-lg shadow shadow-zinc-200">
      <div className=""></div>
      <div className="flex items-center gap-2">
        <Avatar className="size-10">
          <AvatarImage src={user?.user_metadata?.avatar_url} />
          <AvatarFallback> {user?.user_metadata?.full_name?.charAt(0).toUpperCase()}{user?.user_metadata?.full_name?.charAt(1).toUpperCase()} </AvatarFallback>
        </Avatar>
        <Button 
            variant="outline"
          size="icon"
          onClick={() => {
            supabase.auth.signOut();
            router.push("/login");
          }}
        >
          <LogOut className="w-4 h-4" />
        </Button>
      </div>

    </div>
  );
}

