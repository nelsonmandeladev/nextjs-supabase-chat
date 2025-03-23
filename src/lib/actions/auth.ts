'use server';

import { serverClient } from '@/lib'
import { EmailOtpType, SignInWithPasswordCredentials, SignUpWithPasswordCredentials } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function login(data: SignInWithPasswordCredentials) {
  const supabase = await serverClient()

return await supabase.auth.signInWithPassword(data);

}

export async function signup(data: SignUpWithPasswordCredentials) {
  const supabase = await serverClient()
  return await supabase.auth.signUp(data);
}

export async function verifyOtp({ token_hash, type, next = '/' }: { token_hash: string; type: EmailOtpType; next?: string }) {
  const supabase = await serverClient()
  
  const { error } = await supabase.auth.verifyOtp({
    type,
    token_hash,
  })

  if (!error) {
    redirect(next)
  }

  redirect('/confirm-error')
}

export async function singUut() {
  const supabase = await serverClient();
  const response = await supabase.auth.signOut();

  if (!response.error) {
    revalidatePath("/")
  }
  return response;
}