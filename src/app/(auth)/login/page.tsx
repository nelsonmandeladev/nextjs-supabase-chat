"use client"

import { Button, Input, Label } from "@/components";
import { login } from "@/lib";
import { MessageSquare } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner"


export default function LoginPage() {

  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }

    startTransition(async () => {
      const response = await login(data);

      if (response.data.session) {
        toast.success("Logged in successfully");
        router.push("/");
      } else {
        toast.error(response.error?.message || "An error occurred", { position: "top-right" });
      }
    });
  }

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white px-8 py-12 rounded-xl">
          <div className="flex flex-col items-center mb-8">
            <div className="h-12 w-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-semibold text-zinc-900">Welcome back</h1>
            <p className="text-zinc-600 mt-2">Sign in to continue to Chat</p>
          </div>

          <form
            className="space-y-6"
            onSubmit={handleLogin}
          >
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="h-12"
                name="email"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="h-12"
                name="password"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-base"
              disabled={isPending}
            >
              Sign in
            </Button>

          </form>

          <p className="text-center text-zinc-600 text-sm mt-8">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}