import { Button, Input, Label } from "@/components";
import { signup } from "@/lib";
import { MessageSquare } from "lucide-react";
import Link from "next/link";
export default function RegisterPage() {

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white px-8 py-12 rounded-xl">
          <div className="flex flex-col items-center mb-8">
            <div className="h-12 w-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-semibold text-zinc-900">Create account</h1>
            <p className="text-zinc-600 mt-2">Get started with Chat</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                name="email"
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                name="password"
                className="h-12"
              />
              <p className="text-xs text-zinc-500">
                Must be at least 8 characters long
              </p>
            </div>

            <Button formAction={signup} type="submit" className="w-full h-12 text-base">
              Create account
            </Button>
          </form>

          <p className="text-center text-zinc-600 text-sm mt-8">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}